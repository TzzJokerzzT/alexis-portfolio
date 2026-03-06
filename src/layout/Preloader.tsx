import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
        >
          <div className="la-ball-triangle-path text-primary">
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
