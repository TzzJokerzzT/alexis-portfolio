import { Container } from "@/shared/components/ui";
import { AnimatePresence } from "motion/react";
import { useCallback, useId, useState } from "react";
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
import { useFocusTrap } from "./hook/useFocusTrap";
import { HeaderLayout } from "./layout";
import { navItems } from "./utils/constants/navItems";
import { NavMobileLayout } from "./navMobileLayout";

/**
 * Header Component with Accessibility Best Practices
 *
 * Implements:
 * - WCAG 2.4.3: Focus Order - logical tab sequence
 * - WCAG 2.1.2: No Keyboard Trap - escape mechanism for mobile menu
 * - WCAG 4.1.2: Name, Role, Value - proper ARIA attributes
 * - Focus management for mobile menu open/close
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, activeSection } = useHandleScroll();
  const location = useLocation();
  const mobileMenuId = useId();

  // Close mobile menu handler
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Focus trap for mobile menu
  const focusTrapRef = useFocusTrap(isMobileMenuOpen, closeMobileMenu);

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
          {/* Logo with accessible link */}
          <Link
            to="/"
            className="relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label="Alexis Buelvas - Go to homepage"
          >
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
            mobileMenuId={mobileMenuId}
          />
        </div>
      </Container>

      {/* Mobile Navigation with Focus Trap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <NavMobileLayout ref={focusTrapRef} id={mobileMenuId}>
            <nav
              className="flex items-center justify-center h-full"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col items-center gap-6" role="list">
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
