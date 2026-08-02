import { motion } from "framer-motion";
import HeroStats from "../../components/hero/HeroStats";
import { profile } from "../../data/profile";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-medium tracking-widest uppercase text-blue-400">
        {profile.greeting}
      </p>

      <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
        {profile.name}
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-300 lg:text-3xl">
        Développeur Full Stack
        <span className="text-blue-500">
          {" "}React • Django • PostgreSQL
        </span>
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Je conçois des plateformes SaaS modernes permettant
        d'automatiser des processus métier complexes.
        Mon objectif est de développer des applications
        performantes, sécurisées et évolutives offrant une
        excellente expérience utilisateur.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="
            rounded-xl
            bg-blue-600
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            hover:-translate-y-1
            hover:bg-blue-700
          "
        >
          Voir mes projets
        </a>

        <a
          href={profile.cv}
          className="
            rounded-xl
            border
            border-white/20
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            hover:bg-white/10
          "
        >
          Télécharger mon CV
        </a>
      </div>

      <HeroStats />

      <div className="mt-12 flex flex-wrap gap-3">
        {profile.stack.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-slate-300
              backdrop-blur
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;