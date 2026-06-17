import { useExperience } from "@/shared/api/hooks/useExperience";
import { ExperienceCard } from "@/shared/components/ExperienceCard";
import { Container } from "@/shared/components/ui";
import { motion } from "motion/react";

export function ExperienceSection() {
  const { data } = useExperience();
  return (
    <section id="work-experience" className="py-20 bg-secondary">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">
            CAREER
          </h3>
          <h2 className="text-[34px] font-bold text-text-primary leading-tight mb-4">
            Work Experience
          </h2>
          <p className="text-text-subtle text-base font-light leading-relaxed max-w-2xl mx-auto">
            Over 6 years of experience building web and mobile applications for
            companies across different industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Experience cards */}
          {data?.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
