import { X, Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export interface ButtonMenuMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
}

export const ButtonMenuMobile = ({ isMobileMenuOpen, setIsMobileMenuOpen, isScrolled }: ButtonMenuMobileProps) => {
  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <button
      id="nav-trigger"
      onClick={handleToggleMenu}
      className={`lg:hidden relative z-50 p-2 ${isMobileMenuOpen || isScrolled ? "text-text-primary" : "text-text-primary"
        }`}
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

  )
}
