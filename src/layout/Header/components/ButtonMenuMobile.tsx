import { X, Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export interface ButtonMenuMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
  mobileMenuId?: string;
}

/**
 * Mobile Menu Toggle Button with Accessibility
 *
 * Implements:
 * - WCAG 4.1.2: Name, Role, Value
 * - aria-expanded to indicate menu state
 * - aria-controls to associate with menu
 * - Visible focus indicators (WCAG 2.4.7)
 * - Minimum touch target size 44x44px (WCAG 2.5.5)
 */
export const ButtonMenuMobile = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled,
  mobileMenuId,
}: ButtonMenuMobileProps) => {
  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <button
      id="nav-trigger"
      type="button"
      onClick={handleToggleMenu}
      className={`lg:hidden relative z-50 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        isMobileMenuOpen || isScrolled
          ? "text-text-primary"
          : "text-text-primary"
      }`}
      aria-label={
        isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
      }
      aria-expanded={isMobileMenuOpen}
      aria-controls={mobileMenuId}
      aria-haspopup="true"
    >
      {isMobileMenuOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  );
};
