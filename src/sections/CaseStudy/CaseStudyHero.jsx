import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
  },
];

const points = [
  "Architecture React + Django REST",
  "Authentification JWT",
  "8+ modules métier",
  "Interface Premium Responsive",
];

const CaseStudyHero = () => {
  return (
    <section
      className="
        grid
        items-center
        gap-16
        lg:grid-cols-2
      "
    >
      {/* Partie gauche */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-blue-300
          "
        >
          Étude de cas
        </span>

        <h2
          className="
            mt-6
            max-w-2xl
            text-4xl
            font-black
            leading-tight
            text-white
            lg:text-6xl
          "
        >
          SaaS de gestion
          <br />
          de copropriété
        </h2>

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
          "
        >
          Une plateforme professionnelle développée pour digitaliser la
          gestion des copropriétés. L'application centralise les
          copropriétaires, les appels de fonds, les paiements, les
          assemblées générales, la comptabilité et les documents
          administratifs au sein d'une interface moderne pensée pour les
          syndics et les copropriétaires.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <span
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-slate-800
                  px-4
                  py-2
                  text-white
                "
              >
                <Icon className={tech.color} />
                {tech.name}
              </span>
            );
          })}
        </div>

        <div className="mt-10 space-y-4">
          {points.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-400" />

              <span className="text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Partie droite */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div
          className="
            w-full
            max-w-4xl
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-slate-900
            shadow-2xl
            shadow-blue-500/10
          "
        >
          <img
            src="/images/projects/dashboard-copropriete.png"
            alt="Dashboard SaaS Copropriété"
            className="
              w-full
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudyHero;