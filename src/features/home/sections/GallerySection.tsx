import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Container } from "@/shared/components/ui";
import { basics } from "@/shared/data/data.json";

const AUTO_PLAY_INTERVAL = 6000;
const PROJECTS = basics.projects as Project[];
const PROJECTS_LENGTH = PROJECTS.length;

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

function ProjectCard({
  project,
  isActive,
}: {
  project: Project;
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
        src={project.image}
        alt={project.name}
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
          <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 ? (
              <span className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm">
                +{project.technologies.length - 5}
              </span>
            ) : null}
          </div>

          {/* Link */}
          <a
            href={project.url}
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

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_LENGTH - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === PROJECTS_LENGTH - 1 ? 0 : prev + 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(goToNext, AUTO_PLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, goToNext]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section
      id="gallery"
      className="py-20 bg-cover bg-center bg-fixed relative text-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/banner-images/banner-image-1.jpg')",
      }}
      aria-label="Projects gallery"
    >
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">
            PORTFOLIO
          </h3>
          <h2 className="text-[34px] font-bold text-text-primary leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-dark text-base font-light leading-relaxed max-w-2xl mx-auto">
            A selection of personal and professional projects showcasing my
            skills in frontend development.
          </p>
        </motion.div>

        {/* Carousel */}
        <section
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Project carousel"
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous project"
            type="button"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Next project"
            type="button"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Carousel View */}
          <div className="overflow-hidden mx-8 lg:mx-16">
            <AnimatePresence mode="wait">
              <ProjectCard
                key={PROJECTS[currentIndex].name}
                project={PROJECTS[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {PROJECTS.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-10 rounded overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-50 hover:opacity-100"
                }`}
                aria-label={`Go to ${project.name}`}
                type="button"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-text-muted text-sm">
            {currentIndex + 1} / {PROJECTS_LENGTH}
          </div>
        </section>
      </Container>
    </section>
  );
}
