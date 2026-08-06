import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  trackContactAttempt,
  trackContactConfirmationError,
  trackContactError,
  trackContactSuccess,
  trackCVDownload,
  trackEmailClick,
  trackGithubClick,
  trackPhoneClick,
} from "../../utils/analytics";
import { AlertCircle, CheckCircle, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const EMPTY_FORM = { name: "", email: "", message: "", website: "" };
const MIN_FILL_TIME_MS = 2500;
const SUBMIT_COOLDOWN_MS = 10000;

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });
  const openedAt = useRef(0);
  const lastSubmitAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const setError = (message, reason) => {
    trackContactError(reason);
    setStatus({ loading: false, success: "", error: message });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.website) return;

    const now = Date.now();
    if (now - openedAt.current < MIN_FILL_TIME_MS) {
      setError("Veuillez patienter un instant avant d’envoyer votre message.", "form_too_fast");
      return;
    }
    if (now - lastSubmitAt.current < SUBMIT_COOLDOWN_MS) {
      setError("Veuillez patienter quelques secondes avant de réessayer.", "rate_limited");
      return;
    }
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Veuillez remplir tous les champs.", "validation_error");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const confirmTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !confirmTemplateId || !publicKey) {
      setError("Le formulaire est temporairement indisponible. Réessayez plus tard.", "configuration_error");
      return;
    }

    lastSubmitAt.current = now;
    trackContactAttempt();
    setStatus({ loading: true, success: "", error: "" });

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      trackContactSuccess();
      setStatus({
        loading: false,
        success: "Votre message a bien été envoyé. Merci pour votre contact.",
        error: "",
      });
      setFormData(EMPTY_FORM);

      try {
        await emailjs.send(serviceId, confirmTemplateId, templateParams, publicKey);
      } catch {
        trackContactConfirmationError();
      }
    } catch {
      setError("Une erreur est survenue lors de l’envoi. Veuillez réessayer.", "send_error");
    }
  };

  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionTitle
          title="Me contacter"
          subtitle="Disponible pour des opportunités en développement Full Stack, des collaborations ou des projets innovants."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur"
          >
            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">Disponible</span>
            <h3 className="mt-6 text-4xl font-bold text-white">Eric Adia Kore</h3>
            <p className="mt-5 leading-8 text-slate-300">Développeur Full Stack spécialisé en React, Django, PostgreSQL et Python. Je conçois des applications web modernes, performantes et évolutives.</p>
            <div className="mt-10 space-y-6">
              <a href="mailto:adia.kore@uvci.edu.ci" onClick={trackEmailClick} className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"><Mail className="text-blue-400" />adia.kore@uvci.edu.ci</a>
              <a href="tel:+2250749004853" onClick={trackPhoneClick} className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"><Phone className="text-blue-400" />+225 07 49 00 48 53</a>
              <a href="tel:+2250172602559" onClick={trackPhoneClick} className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"><Phone className="text-blue-400" />+225 01 72 60 25 59</a>
              <div className="flex items-center gap-4 text-slate-300"><MapPin className="text-blue-400" />Abidjan, Côte d'Ivoire</div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://github.com/Pantcho225" onClick={trackGithubClick} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:bg-white/10"><FaGithub />GitHub</a>
              <a href="/cv-eric-adia-kore.pdf" onClick={trackCVDownload} download className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"><FileText size={18} />Télécharger mon CV</a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur"
          >
            <label className="sr-only" htmlFor="contact-name">Votre nom</label>
            <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" autoComplete="name" required className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500" />
            <label className="sr-only" htmlFor="contact-email">Votre adresse e-mail</label>
            <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre adresse e-mail" autoComplete="email" required className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500" />
            <label className="sr-only" htmlFor="contact-message">Décrivez votre projet</label>
            <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={7} placeholder="Décrivez votre projet..." required className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500" />
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="contact-website">Site web</label>
              <input id="contact-website" type="text" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
            </div>
            {status.success && <div className="flex items-center gap-3 rounded-xl bg-green-500/10 p-4 text-green-400" role="status"><CheckCircle size={20} />{status.success}</div>}
            {status.error && <div className="flex items-center gap-3 rounded-xl bg-red-500/10 p-4 text-red-400" role="alert"><AlertCircle size={20} />{status.error}</div>}
            <button type="submit" disabled={status.loading} className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"><Send size={18} />{status.loading ? "Envoi en cours..." : "Envoyer le message"}</button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
