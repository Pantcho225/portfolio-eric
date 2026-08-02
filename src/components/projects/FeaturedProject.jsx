import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaLayerGroup,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

import ProjectBadges from "./ProjectBadges";
import ProjectActions from "./ProjectActions";

const FeaturedProject = ({ project }) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/70
        shadow-2xl
        backdrop-blur
      "
    >
      <div className="grid lg:grid-cols-2">

        {/* IMAGE */}

        <div className="relative overflow-hidden bg-slate-950">

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "/images/project-placeholder.png";
            }}
            className="
              h-full
              min-h-[420px]
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          <div
            className="
              absolute
              left-6
              top-6
              flex
              items-center
              gap-2
              rounded-full
              bg-yellow-400
              px-5
              py-2
              font-semibold
              text-slate-900
              shadow-xl
            "
          >
            <FaStar />
            Projet vedette
          </div>

        </div>

        {/* CONTENU */}

        <div className="flex flex-col justify-center p-8 lg:p-10">

          <ProjectBadges project={project} />

          <h2 className="mt-3 text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-2 text-blue-400 font-semibold">
            Application SaaS Full Stack
          </p>

          <p className="mt-6 leading-8 text-slate-300">
            {project.description}
          </p>

          {/* Statistiques */}

          {project.stats && (

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-slate-800/60 p-5 text-center">

                <FaLayerGroup className="mx-auto mb-3 text-2xl text-blue-400" />

                <p className="text-3xl font-bold text-white">
                  {project.stats.modules}
                </p>

                <p className="text-sm text-slate-400">
                  Modules
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800/60 p-5 text-center">

                <FaLaptopCode className="mx-auto mb-3 text-2xl text-blue-400" />

                <p className="text-3xl font-bold text-white">
                  {project.stats.screens}
                </p>

                <p className="text-sm text-slate-400">
                  Écrans
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800/60 p-5 text-center">

                <FaMobileAlt className="mx-auto mb-3 text-2xl text-blue-400" />

                <p className="text-3xl font-bold text-white">
                  {project.stats.responsive}
                </p>

                <p className="text-sm text-slate-400">
                  Responsive
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800/60 p-5 text-center">

                <FaServer className="mx-auto mb-3 text-2xl text-blue-400" />

                <p className="text-3xl font-bold text-white">
                  {project.stats.api}
                </p>

                <p className="text-sm text-slate-400">
                  API
                </p>

              </div>

            </div>

          )}

          {/* Fonctionnalités */}

          {project.highlights?.length > 0 && (

            <>
              <h3 className="mt-10 text-2xl font-bold text-white">
                Fonctionnalités clés
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                {project.highlights.slice(0, 8).map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-slate-800/60
                      p-4
                    "
                  >
                    <FaCheckCircle className="text-green-400" />

                    <span className="text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </>

          )}

          {/* Technologies */}

          <div className="mt-10">

            <h3 className="mb-5 text-2xl font-bold text-white">
              Technologies utilisées
            </h3>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          <ProjectActions project={project} />

        </div>

      </div>

    </motion.article>
  );
};

export default FeaturedProject;