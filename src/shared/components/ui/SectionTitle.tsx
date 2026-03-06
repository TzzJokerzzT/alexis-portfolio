import { motion } from "motion/react";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {label && <p className="text-text-light text-sm tracking-[0.3em] uppercase mb-2">{label}</p>}
      <h2 className="text-[34px] font-bold text-text-primary leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-text-subtle text-base md:text-lg font-light mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
