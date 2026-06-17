import { usePersonalInformation } from "@/shared/api/hooks/usePersonalInformation";
import { Container } from "@/shared/components/ui";
import { socialLinks } from "@/shared/data/socialLinks";

/**
 * Footer Component with Accessibility Best Practices
 *
 * Implements:
 * - Semantic <footer> element as contentinfo landmark
 * - WCAG 1.1.1: Non-text Content - sr-only labels for icon-only links
 * - WCAG 2.4.4: Link Purpose - clear accessible names
 * - WCAG 2.5.5: Target Size - minimum 44x44px touch targets
 * - Visible focus indicators (WCAG 2.4.7)
 * - Proper nav landmark for social links
 */
export function Footer() {
  const { data } = usePersonalInformation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="landing-footer"
      role="contentinfo"
      className="bg-white py-8 border-t border-gray-100"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p id="copyright" className="text-xs text-text-muted">
            <span aria-label={`Copyright ${currentYear}`}>
              &copy; {currentYear}
            </span>{" "}
            Made with love by{" "}
            <a
              href="https://github.com/TzzJokerzzT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              {data?.basic.name}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>

          <nav aria-label="Footer social links">
            <ul className="social-icons flex items-center gap-2" role="list">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    href={href}
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-text-muted hover:text-primary transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span className="sr-only">{label} (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
