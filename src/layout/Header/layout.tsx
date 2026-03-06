import { motion } from "motion/react";

interface HeaderLayoutProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

/**
 * Header Layout with Accessibility
 *
 * Implements:
 * - Semantic <header> element as banner landmark
 * - role="banner" for explicit landmark identification
 * - Proper structure for assistive technology navigation
 */
export const HeaderLayout = ({ children, isScrolled }: HeaderLayoutProps) => {
  return (
    <motion.header
      id="header"
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {children}
    </motion.header>
  );
};
