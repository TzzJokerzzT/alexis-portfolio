import { Link } from "react-router-dom";
import type { ButtonListProps } from "./types";

/**
 * Desktop Navigation Button List with Accessibility
 *
 * Implements:
 * - WCAG 2.4.4: Link Purpose - clear link text
 * - WCAG 4.1.2: Name, Role, Value - aria-current for active state
 * - Visible focus indicators (WCAG 2.4.7)
 * - Proper nav landmark with aria-label
 */
export const ButtonList = ({
  navItems,
  handleNavClick,
  isScrolled,
  activeSection,
}: ButtonListProps) => {
  return (
    <nav id="nav-main" className="hidden lg:block" aria-label="Main navigation">
      <ul className="flex items-center gap-8" role="list">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <li key={item.label}>
              {item.isSection ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.isSection);
                  }}
                  className={`text-sm font-normal transition-all duration-300 hover:text-primary pb-1 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent"
                  } ${isScrolled ? "text-text-secondary" : "text-text-primary"}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-normal transition-all duration-300 hover:text-primary pb-1 border-b-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
                    isScrolled ? "text-text-secondary" : "text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
