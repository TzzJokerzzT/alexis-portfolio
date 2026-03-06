import { Container } from "@/shared/components/ui";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ButtonList,
  ButtonListMobile,
  ButtonMenuMobile,
  Logo,
  SocialLinksList,
  SocialLinksMobileList,
} from "./components";
import { useHandleScroll } from "./hook/useHandleScroll";
import { HeaderLayout } from "./layout";
import { navItems } from "./utils/constants/navItems";
import { NavMobileLayout } from "./navMobileLayout";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, activeSection } = useHandleScroll();
  const location = useLocation();

  const handleNavClick = (href: string, isSection?: boolean) => {
    setIsMobileMenuOpen(false);

    if (isSection && location.pathname === "/") {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <Logo logoUrl="/images/logo.jpg" />
          </Link>

          {/* Desktop Navigation */}
          <ButtonList
            navItems={navItems}
            handleNavClick={handleNavClick}
            isScrolled={isScrolled}
            activeSection={activeSection}
          />

          {/* Social Icons - Desktop */}
          <SocialLinksList isScrolled={isScrolled} />

          {/* Mobile Menu Button */}
          <ButtonMenuMobile
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isScrolled={isScrolled}
          />
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <NavMobileLayout>
            <nav className="flex items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-6">
                <ButtonListMobile
                  navItems={navItems}
                  handleNavClick={handleNavClick}
                  activeSection={activeSection}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />

                {/* Social icons in mobile menu */}
                <SocialLinksMobileList />
              </ul>
            </nav>
          </NavMobileLayout>
        )}
      </AnimatePresence>
    </HeaderLayout>
  );
}
