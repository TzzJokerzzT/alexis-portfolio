import { motion } from "motion/react";

export function PageBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      <motion.div
        className="absolute top-0 left-0 right-0 h-3 bg-border"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-3 bg-border"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-3 bg-border"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-3 bg-border"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
    </div>
  );
}
