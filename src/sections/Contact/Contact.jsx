import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Send,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Me contacter"
          subtitle="Disponible pour des opportunités en développement Full Stack, des collaborations ou des projets innovants."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* ======================= */}
          {/* Carte d'informations */}
          {/* ======================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              p-8
              shadow-2xl
              backdrop-blur
            "
          >

            <span
              className="
                rounded-full
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-300
              "
            >
              Disponible
            </span>

            <h3 className="mt-6 text-4xl font-bold text-white">
              Eric Adia Kore
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Développeur Full Stack spécialisé en React, Django,
              PostgreSQL et Python.
              Je conçois des applications web modernes,
              performantes et évolutives.
            </p>

            <div className="mt-10 space-y-6">

              <a
                href="mailto:adia.kore@uvci.edu.ci"
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"
              >
                <Mail className="text-blue-400" />
                adia.kore@uvci.edu.ci
              </a>

              <a
                href="tel:+2250749004853"
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"
              >
                <Phone className="text-blue-400" />
                +225 07 49 00 48 53
              </a>

              <a
                href="tel:+2250172602559"
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-400"
              >
                <Phone className="text-blue-400" />
                +225 01 72 60 25 59
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <MapPin className="text-blue-400" />
                Abidjan, Côte d'Ivoire
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://github.com/Pantcho225"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-3
                  transition
                  hover:bg-white/10
                "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="/cv-eric-adia-kore.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                <FileText size={18} />
                Télécharger mon CV
              </a>

            </div>

          </motion.div>

          {/* ======================= */}
          {/* Formulaire */}
          {/* ======================= */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              p-8
              shadow-2xl
              backdrop-blur
              space-y-6
            "
          >

            <input
              type="text"
              placeholder="Votre nom"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "
            />

            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "
            />

            <textarea
              rows={7}
              placeholder="Décrivez votre projet..."
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <Send size={18} />
              Envoyer le message
            </button>

          </motion.form>

        </div>

      </Container>
    </section>
  );
};

export default Contact;