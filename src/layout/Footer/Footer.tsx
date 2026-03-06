import { Container } from "@/shared/components/ui";
import { socialLinks } from "@/shared/data/socialLinks";

export function Footer() {
  return (
    <footer
      id="landing-footer"
      className="bg-white py-8 border-t border-gray-100"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p id="copyright" className="text-xs text-text-muted">
            Made with love by{" "}
            <a
              href="https://github.com/TzzJokerzzT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Alexis Buelvas
            </a>
          </p>

          <ul className="social-icons flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  href={href}
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
