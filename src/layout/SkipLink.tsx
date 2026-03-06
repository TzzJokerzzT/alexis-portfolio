/**
 * SkipLink Component
 *
 * Provides keyboard users a way to skip repetitive navigation content
 * and jump directly to the main content area.
 *
 * WCAG 2.4.1 (Level A): Bypass Blocks
 * @see https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
    >
      Skip to main content
    </a>
  );
}
