import { ChevronUp, Heart, Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { resetAnalyticsConsent, trackGithubClick, trackEmailClick } from "../../utils/analytics";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14">

        {/* Partie principale */}

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Présentation */}

          <div>

            <h3 className="text-2xl font-bold text-white">
              Eric Adia Kore
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Développeur Full Stack spécialisé en React,
              Django, PostgreSQL et Python.
              Je conçois des applications web modernes,
              performantes et évolutives.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3">

              <a href="#accueil" className="text-slate-400 transition hover:text-blue-400">
                Accueil
              </a>

              <a href="#apropos" className="text-slate-400 transition hover:text-blue-400">
                À propos
              </a>

              <a href="#competences" className="text-slate-400 transition hover:text-blue-400">
                Compétences
              </a>

              <a href="#projets" className="text-slate-400 transition hover:text-blue-400">
                Projets
              </a>

              <a href="#parcours" className="text-slate-400 transition hover:text-blue-400">
                Parcours
              </a>

              <a href="#contact" className="text-slate-400 transition hover:text-blue-400">
                Contact
              </a>

            </div>

          </div>

          {/* Coordonnées */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Restons en contact
            </h4>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:adia.kore@uvci.edu.ci"
                onClick={trackEmailClick}
                className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <Mail size={18} />
                adia.kore@uvci.edu.ci
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                Abidjan, Côte d'Ivoire
              </div>

              <a
                href="https://github.com/Pantcho225"
                onClick={trackGithubClick}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <FaGithub />
                github.com/Pantcho225
              </a>

            </div>

          </div>

        </div>

        {/* Ligne */}

        <div className="h-px bg-white/10" />

        {/* Bas du footer */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="flex items-center gap-2 text-center text-slate-500">

            © {new Date().getFullYear()} Eric Adia Kore

            <Heart
              size={16}
              className="text-red-500"
            />

            Tous droits réservés.

          </p>

          <a
            href="/politique-de-confidentialite.html"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Politique de confidentialité
          </a>

          <button
            type="button"
            onClick={() => {
              resetAnalyticsConsent();
              window.location.reload();
            }}
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Gérer les cookies
          </button>

          <a
            href="#accueil"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-5
              py-3
              transition
              hover:bg-blue-600
            "
          >

            <ChevronUp size={18} />

            Retour en haut

          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
