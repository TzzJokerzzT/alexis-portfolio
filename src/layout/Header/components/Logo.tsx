import { motion } from "motion/react";

interface LogoProps {
  logoUrl: string;
  altText?: string;
}

/**
 * Logo Component with Accessibility
 *
 * Implements:
 * - WCAG 1.1.1: Non-text Content - meaningful alt text
 * - Descriptive alternative text that identifies the website/brand
 */
export const Logo = ({
  logoUrl,
  altText = "Alexis Buelvas Portfolio",
}: LogoProps) => {
  return (
    <motion.img
      src={logoUrl}
      alt={altText}
      className="h-8 md:h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};
