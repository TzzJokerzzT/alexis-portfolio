import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { ButtonListMobileProps } from "./types";

export const ButtonListMobile = ({
  navItems,
  handleNavClick,
  activeSection,
  setIsMobileMenuOpen,
}: ButtonListMobileProps) => {
  return (
    <>
      {navItems.map((item, index) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item.isSection ? (
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.isSection);
              }}
              className={`text-xl transition-colors ${
                activeSection === item.href
                  ? "text-primary"
                  : "text-text-primary hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-text-primary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </motion.li>
      ))}
    </>
  );
};
