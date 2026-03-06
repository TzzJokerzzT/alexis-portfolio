import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/shared/components/ui";
import { skills } from "@/features/home/utils/constants/Skills";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Skill = (typeof skills)[number];

const AUTO_PLAY_INTERVAL = 5000;

function groupSkillsByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );
}

export function TestimonialsSection() {
  const skillsByCategory = useMemo(() => groupSkillsByCategory(skills), []);
  const categories = useMemo(() => Object.keys(skillsByCategory), [skillsByCategory]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentCategory = categories[currentIndex];
  const currentSkills = skillsByCategory[currentCategory];

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  }, [categories.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  }, [categories.length]);

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
      id="skills"
      className="py-20 bg-cover bg-center bg-fixed relative text-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/banner-images/banner-image-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <section
        className="relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Skills carousel"
      >
        <Container>
          {/* Section Heading */}
          <motion.div
            className="section-heading mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white/70 text-sm tracking-[0.3em] uppercase mb-2">EXPERTISE</h3>
            <h2 className="text-[34px] font-bold text-white leading-tight">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous category"
              type="button"
            >
              <ChevronLeft size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.h3
                key={currentCategory}
                className="text-xl font-semibold text-primary min-w-[200px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {currentCategory}
              </motion.h3>
            </AnimatePresence>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next category"
              type="button"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Category Dots */}
          <div className="flex justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6" : "bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to ${category}`}
                type="button"
              />
            ))}
          </div>
        </Container>

        {/* Skills Carousel - Full width */}
        <div className="min-h-[200px] max-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              className="w-full flex flex-wrap justify-center gap-4 px-4 sm:px-8 md:px-12 lg:px-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors w-[120px] sm:w-[140px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
}
