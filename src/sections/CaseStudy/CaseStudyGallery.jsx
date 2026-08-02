import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  {
    id: 1,
    title: "Tableau de bord",
    description:
      "Vue d'ensemble des indicateurs de la copropriété, situation financière et accès rapide aux modules.",
    image: "/images/projects/dashboard-copropriete.png",
  },

  {
    id: 2,
    title: "Registre des lots",
    description:
      "Gestion des lots, propriétaires, surfaces, tantièmes et statuts d'occupation.",
    image: "/images/projects/lots.png",
  },

  {
    id: 3,
    title: "Assemblées générales",
    description:
      "Préparation des AG, résolutions, présences, votes et génération des procès-verbaux.",
    image: "/images/projects/assemblees-generales.png",
  },

  {
    id: 4,
    title: "Comptabilité",
    description:
      "Historique des imports bancaires, rapprochements comptables et contrôle des opérations.",
    image: "/images/projects/comptabilite.png",
  },
];

const CaseStudyGallery = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="mt-32">

      <div className="text-center">

        <h2 className="text-4xl font-black text-white">
          Galerie du projet
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Découvrez les principales interfaces du SaaS de gestion de copropriété
          développé avec React, Django REST Framework et PostgreSQL.
        </p>

      </div>

      <div
        className="
          mt-14
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-900
          shadow-2xl
        "
      >

        <AnimatePresence mode="wait">

          <motion.img
            key={screenshots[current].image}
            src={screenshots[current].image}
            alt={screenshots[current].title}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="w-full"
          />

        </AnimatePresence>

      </div>

      <div className="mt-8 text-center">

        <h3 className="text-2xl font-bold text-white">
          {screenshots[current].title}
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-slate-400">
          {screenshots[current].description}
        </p>

      </div>

      <div
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >

        {screenshots.map((screen, index) => (

          <button
            key={screen.id}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full
              px-6
              py-3
              transition
              duration-300
              ${
                current === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }
            `}
          >
            {screen.title}
          </button>

        ))}

      </div>

    </section>
  );
};

export default CaseStudyGallery;