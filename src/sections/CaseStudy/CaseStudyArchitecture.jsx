import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    icon: FaReact,
    color: "text-cyan-400",
    tech: "React + Vite",
    description:
      "Interface moderne, responsive et performante.",
  },
  {
    title: "Backend",
    icon: SiDjango,
    color: "text-green-500",
    tech: "Django REST Framework",
    description:
      "API REST sécurisée avec logique métier centralisée.",
  },
  {
    title: "Base de données",
    icon: SiPostgresql,
    color: "text-blue-400",
    tech: "PostgreSQL",
    description:
      "Persistance des données, relations complexes et performances.",
  },
  {
    title: "Langage",
    icon: FaPython,
    color: "text-yellow-400",
    tech: "Python 3",
    description:
      "Développement backend, automatisation et traitement métier.",
  },
];

const CaseStudyArchitecture = () => {
  return (
    <section className="mt-32">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <h2
          className="
            text-center
            text-4xl
            font-black
            text-white
          "
        >
          Architecture technique
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-400
          "
        >
          Une architecture moderne pensée pour la
          maintenabilité, la sécurité et les performances.
        </p>

      </motion.div>

      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {stack.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={item.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/60
                p-8
                backdrop-blur
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "

            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-800
                "
              >

                <Icon
                  size={34}
                  className={item.color}
                />

              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  font-semibold
                  text-blue-400
                "
              >
                {item.tech}
              </p>

              <p
                className="
                  mt-4
                  leading-7
                  text-slate-400
                "
              >
                {item.description}
              </p>

            </motion.div>

          );

        })}

      </div>

      <motion.div

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
          mt-20
          overflow-hidden
          rounded-3xl
          border
          border-blue-500/20
          bg-gradient-to-r
          from-slate-900
          via-slate-800
          to-slate-900
          p-10
        "

      >

        <h3
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Flux de l'application
        </h3>

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-6
            text-center
            lg:flex-row
          "
        >

          <div className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white">
            Utilisateur
          </div>

          <div className="text-3xl text-blue-500">
            →
          </div>

          <div className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white">
            React + Vite
          </div>

          <div className="text-3xl text-blue-500">
            →
          </div>

          <div className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white">
            Django REST API
          </div>

          <div className="text-3xl text-blue-500">
            →
          </div>

          <div className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white">
            PostgreSQL
          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default CaseStudyArchitecture;