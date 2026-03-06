import { socialLinks } from "@/shared/data/socialLinks";
import { motion } from "motion/react";

/**
 * Mobile Social Links List with Accessibility
 *
 * Implements:
 * - WCAG 1.1.1: Non-text Content - sr-only labels for icon-only links
 * - WCAG 2.4.4: Link Purpose - clear accessible names
 * - WCAG 2.5.5: Target Size - minimum 44x44px touch targets
 * - Visible focus indicators (WCAG 2.4.7)
 */
export const SocialLinksMobileList = () => {
  return (
    <motion.li
      className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      aria-label="Social media links"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-text-muted hover:text-primary transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Icon size={20} aria-hidden="true" />
          <span className="sr-only">{label} (opens in new tab)</span>
        </a>
      ))}
    </motion.li>
  );
};
