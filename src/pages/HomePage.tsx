import {
  HeroSection,
  AboutSection,
  GallerySection,
  ServicesSection,
  TestimonialsSection,
  ExperienceSection,
  ClientsSection,
  PricingSection,
} from "@/features/home";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ClientsSection />
      <PricingSection />
    </>
  );
}
