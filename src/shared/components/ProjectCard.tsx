import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { ProjectListResponse } from "../api/types";

function ProjectCard({
  project,
  isActive,
}: {
  project: ProjectListResponse;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl ${
        isActive ? "ring-2 ring-primary" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 0.9 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Project Image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isHovered ? "scale-110 blur-sm" : "scale-100"
        }`}
        loading="lazy"
      />

      {/* Overlay with Project Info */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.techStack?.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project?.techStack?.length > 5 ? (
              <span className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm">
                +{project?.techStack?.length - 5}
              </span>
            ) : null}
          </div>

          {/* Link */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
