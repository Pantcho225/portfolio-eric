import { useState } from "react";
import { motion } from "framer-motion";

import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ImageOff,
} from "lucide-react";

import Badge from "../common/Badge";

const ProjectCard = ({ project }) => {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = project.image && !hasImageError;

  return (
    <motion.article
      whileHover={{

        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur
        shadow-xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setHasImageError(true)}
            className="
              h-72
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />
        ) : (
          <div className="flex h-72 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-8 text-center">
            <div>
              <ImageOff className="mx-auto text-blue-400" size={40} aria-hidden="true" />
              <p className="mt-4 font-semibold text-white">
                Aperçu bientôt disponible
              </p>
            </div>
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-transparent
          "
        />

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          {project.category}
        </span>
      </div>

      {/* Contenu */}

      <div className="p-8">
        {/* Titre */}

        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>

        {/* Informations */}

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {project.year}
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={16}
              className="text-green-400"
            />
            {project.status}
          </div>
        </div>

        {/* Description */}

        <p className="mt-6 leading-8 text-slate-300">
          {project.description}
        </p>

        {/* Fonctionnalités */}

        {project.highlights && (
          <div className="mt-8">

           <h4 className="mb-4 font-semibold text-white">

  {project.development
    ? "Fonctionnalités prévues"
    : "Fonctionnalités principales"}
</h4>

{project.development && (

  <div
    className="
      mb-6
      rounded-2xl
      border
      border-amber-500/30
      bg-amber-500/10
      p-5
    "
  >

    <p className="leading-7 text-amber-200">

      🚧 Ce projet est actuellement en phase d'analyse et de conception.
      Les éléments présentés ci-dessous correspondent à la feuille de route
      fonctionnelle prévue avant le développement.

    </p>

  </div>

)}

            <ul className="space-y-3">
              
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-500"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Boutons */}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.caseStudy !== "#" && (
            <a
              href={project.caseStudy}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Étude de cas

              <ArrowRight size={18} />
            </a>
          )}

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                text-white
                transition
                hover:bg-white/10
              "
            >
              <span>🐙</span>

              GitHub
            </a>
          )}

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                text-white
                transition
                hover:bg-white/10
              "
            >
              <ExternalLink size={18} />

              Démo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;