import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  url: string;
  technology: string[];
  alt: string;
}
