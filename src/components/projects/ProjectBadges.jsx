import {
  FaCalendarAlt,
  FaFolderOpen,
  FaCircle,
} from "react-icons/fa";

import Badge from "../common/Badge";

const statusColors = {
  Terminé: "text-green-400",
  "En développement": "text-yellow-400",
  Production: "text-blue-400",
};

const ProjectBadges = ({ project }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-3">

      {project.category && (
        <Badge>
          <span className="flex items-center gap-2">
            <FaFolderOpen />
            {project.category}
          </span>
        </Badge>
      )}

      {project.year && (
        <Badge>
          <span className="flex items-center gap-2">
            <FaCalendarAlt />
            {project.year}
          </span>
        </Badge>
      )}

      {project.status && (
        <Badge>
          <span className="flex items-center gap-2">
            <FaCircle
              className={
                statusColors[project.status] || "text-slate-400"
              }
            />
            {project.status}
          </span>
        </Badge>
      )}

    </div>
  );
};

export default ProjectBadges;