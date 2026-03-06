import { motion } from "motion/react";
import type { ReactNode } from "react";

type ButtonVariant = "outline" | "solid";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  as?: "button" | "a";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "outline",
  href,
  as,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-block text-sm md:text-base font-normal py-3 px-4 border-3 transition-all duration-300 ease-out cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    outline:
      "border-text-primary text-text-primary hover:border-primary hover:text-primary bg-transparent",
    solid: "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === "a" || href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
