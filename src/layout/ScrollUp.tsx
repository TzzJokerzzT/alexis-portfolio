import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Scroll to Top Button with Accessibility
 *
 * Implements:
 * - WCAG 2.4.7: Focus Visible - clear focus indicator
 * - WCAG 2.5.5: Target Size - minimum 44x44px touch target
 * - WCAG 4.1.2: Name, Role, Value - proper button semantics
 * - Respects prefers-reduced-motion for animations
 */
export function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    // Move focus to skip link or top of page for keyboard users
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 min-w-[48px] min-h-[48px] w-12 h-12 bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors hidden md:flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top of page"
        >
          <ChevronUp size={24} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
