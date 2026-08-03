import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const screenshots = [

  {
    id: 1,
    title: "Tableau de bord",
    description:
      "Vue d'ensemble des indicateurs de la copropriété, situation financière et accès rapide aux modules.",
    image: "/images/projects/dashboard-copropriete.webp",
    width: 1200,
    height: 630,
    alt: "Tableau de bord SaaS de gestion de copropriété",
  },


  {
    id: 2,
    title: "Registre des lots",
    description:
      "Gestion des lots, propriétaires, surfaces, tantièmes et statuts d'occupation.",
    image: "/images/projects/lots.png",
    width: 1200,
    height: 630,
    alt: "Interface de gestion des lots de copropriété",
  },


  {
    id: 3,
    title: "Assemblées générales",
    description:
      "Préparation des AG, résolutions, présences, votes et génération des procès-verbaux.",
    image: "/images/projects/assemblees-generales.webp",
    width: 1200,
    height: 630,
    alt: "Interface de gestion des assemblées générales",
  },


  {
    id: 4,
    title: "Comptabilité",
    description:
      "Historique des imports bancaires, rapprochements comptables et contrôle des opérations.",
    image: "/images/projects/comptabilite.webp",
    width: 1200,
    height: 630,
    alt: "Interface comptable du SaaS de copropriété",
  },

];



const CaseStudyGallery = () => {


  const [current, setCurrent] = useState(0);


  const currentScreen = screenshots[current];


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

            key={currentScreen.image}

            src={currentScreen.image}

            alt={currentScreen.alt}

            width={currentScreen.width}

            height={currentScreen.height}

            loading="lazy"

            decoding="async"

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

          {currentScreen.title}

        </h3>



        <p className="mx-auto mt-4 max-w-3xl text-slate-400">

          {currentScreen.description}

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