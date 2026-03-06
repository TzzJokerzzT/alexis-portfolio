import { socialLinks } from "@/shared/data/socialLinks"

export const SocialLinksList = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <aside className="hidden lg:block">
      <ul className="flex items-center gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className={`transition-colors duration-300 hover:text-primary ${isScrolled ? "text-text-secondary" : "text-text-primary"
                }`}
            >
              <Icon size={16} />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
