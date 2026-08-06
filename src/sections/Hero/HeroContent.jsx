import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { trackCVDownload, trackProjectsView } from "../../utils/analytics";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-medium tracking-widest uppercase text-blue-400">
        {profile.name} · Développeur Full Stack
      </p>

      <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.08] text-white lg:text-6xl">
        Je conçois des applications web modernes, fiables et évolutives.
      </h1>

      <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-blue-300 lg:text-2xl">
        {profile.title}
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Je développe des interfaces modernes, des API robustes et des applications performantes, en mettant l'accent sur la qualité du code, la sécurité et l'expérience utilisateur.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          onClick={trackProjectsView}
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
          onClick={trackCVDownload}
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

      <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300">
        {profile.availability}
      </p>

      <div className="mt-8 flex flex-wrap gap-3" aria-label="Technologies principales">
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
