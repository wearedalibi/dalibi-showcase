import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Sécurité", href: "/#securite" },
      { label: "Open source", href: "/#open-source" },
    ],
  },
  {
    title: "Pour qui",
    links: [
      { label: "Direction", href: "/#pour-qui" },
      { label: "Enseignants", href: "/#pour-qui" },
      { label: "Parents & élèves", href: "/#pour-qui" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "API Reference", href: "/documentation#api" },
      { label: "GitHub", href: "https://github.com/wearedalibi/dalibi" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Licence GPL v3", href: "/documentation#licence" },
      { label: "Confidentialité", href: "/documentation#confidentialite" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebook },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Instagram", href: "#", icon: FaInstagram },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 mb-10">
          <div className="md:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dalibi.svg" alt="Dalibi" className="h-6 w-auto mb-4 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dalibi-blanc.svg" alt="Dalibi" className="h-6 w-auto mb-4 hidden dark:block" />
            <p className="text-sm text-muted">
              Le logiciel de gestion scolaire tout-en-un pour l&apos;Afrique.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted mt-4">
              <MapPin className="w-4 h-4 text-primary" /> Togo &amp; Afrique de l&apos;Ouest
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
                <ul className="space-y-2.5 text-sm text-muted">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-foreground transition"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">&copy; 2025 Dalibi. Open source sous licence GPL v3.</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted hover:text-primary transition"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
