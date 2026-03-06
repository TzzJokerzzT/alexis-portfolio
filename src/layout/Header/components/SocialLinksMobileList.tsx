import { socialLinks } from "@/shared/data/socialLinks";
import { motion } from "motion/react";

export const SocialLinksMobileList = () => {
  return (
    <motion.li
      className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="text-text-muted hover:text-primary transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
    </motion.li>
  );
};
