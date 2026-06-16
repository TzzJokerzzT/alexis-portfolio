import { useProject } from "@/shared/api/hooks/useProject";
import ProjectCard from "@/shared/components/ProjectCard";
import { Container } from "@/shared/components/ui";
import { getImageUrl } from "@/shared/utils/imageUrl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_PLAY_INTERVAL = 6000;

export function GallerySection() {
  const { data, isLoading } = useProject();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const PROJECTS = data ? data : [];
  const PROJECTS_LENGTH = PROJECTS.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_LENGTH - 1 : prev - 1));
  }, [PROJECTS_LENGTH]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === PROJECTS_LENGTH - 1 ? 0 : prev + 1));
  }, [PROJECTS_LENGTH]);

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

  if (isLoading || PROJECTS_LENGTH === 0) {
    return null;
  }

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
                key={PROJECTS[currentIndex]._id}
                project={PROJECTS[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {PROJECTS.map((project, index) => (
              <button
                key={project._id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-10 rounded overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-50 hover:opacity-100"
                }`}
                aria-label={`Go to ${project?.title}`}
                type="button"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
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
