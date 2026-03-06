import { socialLinks } from "@/shared/data/socialLinks";

/**
 * Desktop Social Links List with Accessibility
 *
 * Implements:
 * - WCAG 1.1.1: Non-text Content - sr-only labels for icon-only links
 * - WCAG 2.4.4: Link Purpose - clear accessible names via sr-only
 * - WCAG 2.5.5: Target Size - minimum 44x44px touch targets
 * - Proper nav landmark with aria-label
 * - Visible focus indicators (WCAG 2.4.7)
 */
export const SocialLinksList = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <nav className="hidden lg:block" aria-label="Social media links">
      <ul className="flex items-center gap-3" role="list">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isScrolled ? "text-text-secondary" : "text-text-primary"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="sr-only">{label} (opens in new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
