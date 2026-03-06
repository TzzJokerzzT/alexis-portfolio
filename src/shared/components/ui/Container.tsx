import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`max-w-[1245px] mx-auto px-5 ${className}`}>{children}</Component>;
}
