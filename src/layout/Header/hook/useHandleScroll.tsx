import { useState, useEffect } from "react";
import { navItems } from "../utils/constants/navItems";

export const useHandleScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href);
      for (const sectionId of sections.reverse()) {
        const element = document.querySelector(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            console.log("Active Section:", sectionId);
            break;
          }
        }
      }
      document.title = `${activeSection.replace("#", "").charAt(0).toUpperCase() + activeSection.slice(2)}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return { isScrolled, activeSection };
};
