import {
  FaArrowRight,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const ProjectActions = ({ project }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {project.caseStudy && (
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
            duration-300
            hover:-translate-y-1
            hover:bg-blue-700
            hover:shadow-lg
            hover:shadow-blue-500/30
          "
        >
          <FaArrowRight />
          Voir l'étude de cas
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-slate-800
            px-6
            py-3
            font-semibold
            text-white
            transition
            duration-300
            hover:-translate-y-1
            hover:border-white/30
            hover:bg-slate-700
          "
        >
          <FaGithub />
          GitHub
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-6
            py-3
            font-semibold
            text-emerald-300
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-500/20
            hover:shadow-lg
            hover:shadow-emerald-500/20
          "
        >
          <FaGlobe />
          Démo
        </a>
      )}

    </div>
  );
};

export default ProjectActions;