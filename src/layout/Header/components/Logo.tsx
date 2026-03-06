import { motion } from "motion/react";

export const Logo = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <motion.img
      src={logoUrl}
      alt="Logo"
      className="h-8 md:h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};
