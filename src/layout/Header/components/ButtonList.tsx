import { Link } from "react-router-dom";
import type { ButtonListProps } from "./types";

export const ButtonList = ({
  navItems,
  handleNavClick,
  isScrolled,
  activeSection,
}: ButtonListProps) => {
  return (
    <nav id="nav-main" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.isSection ? (
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.isSection);
                }}
                className={`text-sm font-normal transition-all duration-300 hover:text-primary pb-1 border-b-2 ${
                  activeSection === item.href
                    ? "border-primary text-primary"
                    : "border-transparent"
                } ${isScrolled ? "text-text-secondary" : "text-text-primary"}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className={`text-sm font-normal transition-all duration-300 hover:text-primary pb-1 border-b-2 border-transparent ${
                  isScrolled ? "text-text-secondary" : "text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
