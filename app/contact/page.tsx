import { pageMeta } from "@/lib/seo";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ContactForm } from "@/components/landing/contact-form";
import { ContactIllustration } from "@/components/landing/illustrations";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata = pageMeta({
  title: "Contact — démonstration & devis",
  description:
    "Contactez l'équipe Dalibi pour une démonstration gratuite ou un devis d'accompagnement : gestion scolaire, écolage, bulletins et portail parents, au Togo et en Afrique de l'Ouest.",
  path: "/contact",
});

const infos = [
  { icon: MessageSquare, title: "Demande de démo", text: "Une présentation adaptée à votre établissement." },
  { icon: Mail, title: "Support & questions", text: "Une réponse rapide à toutes vos questions." },
  { icon: MapPin, title: "Disponibilité", text: "Togo & Afrique de l'Ouest." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Contact", icon: Mail }}
        title="Parlons de votre établissement"
        description="Demandez une démonstration ou posez-nous vos questions : notre équipe vous répond rapidement et vous accompagne dans la digitalisation de votre école."
        illustration={<ContactIllustration className="w-full max-w-sm h-auto" />}
      />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Infos */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Écrivez-nous</h2>
                <p className="text-muted">
                  Remplissez le formulaire, nous revenons vers vous dans les meilleurs délais.
                </p>
              </div>

              <div className="space-y-4">
                {infos.map((info) => (
                  <div key={info.title} className="flex gap-3">
                    <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary h-fit shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{info.title}</div>
                      <div className="text-sm text-muted">{info.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/wearedalibi/dalibi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition"
              >
                <SiGithub className="w-4 h-4" /> Le projet est open source sur GitHub
              </a>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
