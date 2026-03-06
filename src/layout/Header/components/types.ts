import type { NavItem } from "../types";

export interface ButtonListProps {
  navItems: NavItem[];
  handleNavClick: (href: string, isSection?: boolean) => void;
  isScrolled: boolean;
  activeSection: string;
}

export interface ButtonListMobileProps {
  navItems: NavItem[];
  handleNavClick: (href: string, isSection?: boolean) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
}
