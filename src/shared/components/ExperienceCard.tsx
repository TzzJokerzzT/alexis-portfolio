import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import type { ExperienceListResponse } from "@/shared/api/types";

export function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceListResponse;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center gap-8 mb-12 last:mb-0"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10" />

      {/* Card */}
      <div
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
      >
        <motion.div
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {experience.title}
              </h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
            <div className="shrink-0 p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.startDate} - {experience.endDate ?? "Present"}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {experience.description.map((item) => (
              <li
                key={item}
                className="text-sm text-text-subtle flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-secondary text-text-muted rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
