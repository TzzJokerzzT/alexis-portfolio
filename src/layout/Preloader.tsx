import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Preloader Component with Accessibility Support
 *
 * Implements:
 * - aria-busy to indicate loading state
 * - aria-live region for loading announcements
 * - Hidden from assistive tech when animation is purely decorative
 * - Proper role for status indication
 */
export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          role="alert"
          aria-busy="true"
          aria-label="Loading page content"
        >
          {/* Screen reader announcement */}
          <span className="sr-only">Loading, please wait...</span>

          {/* Decorative loading animation - hidden from assistive tech */}
          <div
            className="la-ball-triangle-path text-primary"
            aria-hidden="true"
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-current absolute"
              animate={{
                x: [0, "110%", "220%", 0],
                y: ["220%", 0, "220%", "220%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-current absolute"
              animate={{
                x: ["110%", "220%", 0, "110%"],
                y: [0, "220%", "220%", 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-current absolute"
              animate={{
                x: ["220%", 0, "110%", "220%"],
                y: ["220%", "220%", 0, "220%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
