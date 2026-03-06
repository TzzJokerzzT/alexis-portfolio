import { motion } from "motion/react";
import type { ReactNode } from "react";

export const NavMobileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      id="nav-mobile"
      className="fixed inset-0 bg-white z-40 lg:hidden"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
