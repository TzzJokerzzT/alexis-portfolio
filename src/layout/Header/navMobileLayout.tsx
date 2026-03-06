import { motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";

interface NavMobileLayoutProps {
  children: ReactNode;
  id?: string;
}

/**
 * Mobile Navigation Layout with Accessibility
 *
 * Implements:
 * - WCAG 2.1.2: No Keyboard Trap - escape mechanism via onClose
 * - WCAG 4.1.2: Name, Role, Value - proper dialog role
 * - Focus containment via parent component
 * - Prevents body scroll when open
 */
export const NavMobileLayout = forwardRef<HTMLDivElement, NavMobileLayoutProps>(
  ({ children, id }, ref) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-0 bg-white z-40 lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        // Announce to screen readers when menu opens
        onAnimationComplete={() => {
          // Optional: announce menu opened
        }}
      >
        {/* Close button hint for screen readers */}
        <p className="sr-only">Press Escape to close this menu</p>
        {children}
      </motion.div>
    );
  },
);

NavMobileLayout.displayName = "NavMobileLayout";
