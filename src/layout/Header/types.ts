export interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

export interface ButtonListProps {
  navItems: NavItem[];
  handleNavClick: (href: string, isSection?: boolean) => void;
  isScrolled: boolean;
}
