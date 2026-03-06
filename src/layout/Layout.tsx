import { Footer, Header, PageBorder, Preloader, ScrollUp } from "./index";
import { SkipLink } from "./SkipLink";
import type { LayoutProps } from "./types";

/**
 * Main Layout Component with Accessibility Best Practices
 *
 * Implements:
 * - Skip link for keyboard navigation (WCAG 2.4.1)
 * - Proper landmark regions (header, main, footer)
 * - Live region for dynamic announcements
 * - Focus management support
 */
export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Skip link for keyboard users - WCAG 2.4.1 */}
      <SkipLink />

      {/* Preloader with accessibility announcements */}
      <Preloader />

      {/* Decorative border - hidden from assistive tech */}
      <PageBorder />

      {/* Header landmark with navigation */}
      <Header />

      {/* Main content area - skip link target */}
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none"
        role="main"
      >
        {children}
      </main>

      {/* Footer landmark */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollUp />

      {/* Live region for dynamic announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="announcer"
      />
    </>
  );
}
