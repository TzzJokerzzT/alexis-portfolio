import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { ButtonListMobileProps } from "./types";

/**
 * Mobile Navigation Button List with Accessibility
 *
 * Implements:
 * - WCAG 2.4.4: Link Purpose - clear link text
 * - WCAG 4.1.2: Name, Role, Value - aria-current for active state
 * - Visible focus indicators (WCAG 2.4.7)
 * - Minimum touch target size 44x44px (WCAG 2.5.5)
 */
export const ButtonListMobile = ({
  navItems,
  handleNavClick,
  activeSection,
  setIsMobileMenuOpen,
}: ButtonListMobileProps) => {
  return (
    <>
      {navItems.map((item, index) => {
        const isActive = activeSection === item.href;

        return (
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
                className={`text-xl transition-colors min-h-[44px] inline-flex items-center px-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "text-primary"
                    : "text-text-primary hover:text-primary"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-text-primary hover:text-primary transition-colors min-h-[44px] inline-flex items-center px-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            )}
          </motion.li>
        );
      })}
    </>
  );
};
