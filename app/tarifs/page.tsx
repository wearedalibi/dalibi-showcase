import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Coins, GraduationCap, Scale, Server, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { PricingIllustration } from "@/components/landing/illustrations";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata = pageMeta({
  title: "Tarifs — gratuit et open source (GPL v3)",
  description:
    "Dalibi est open source et gratuit sous licence GPL v3 : tous les modules inclus, sans limite d'élèves ni d'établissements, auto-hébergeable. Seul un accompagnement optionnel (déploiement, migration, formation, support) fait l'objet d'un devis.",
  path: "/tarifs",
});

const openPoints = [
  "Code source ouvert, auditable et librement réutilisable",
  "Tous les modules inclus, sans limite d'élèves ni d'établissements",
  "Auto-hébergeable : vos données restent chez vous",
  "Aucun frais de licence, aujourd'hui comme demain",
];

const selfHost = [
  "Code source complet sur GitHub",
  "Documentation d'installation et déploiement Docker",
  "Réalisable par tout développeur / ingénieur maîtrisant Laravel & PostgreSQL",
  "Support communautaire (issues, contributions)",
];

const assisted = [
  "Installation et mise en production",
  "Configuration : frais, classes, rôles, années académiques",
  "Migration de vos données existantes",
  "Formation des équipes (direction, secrétariat, enseignants)",
  "Support prioritaire de lancement",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Tarifs", icon: Coins }}
        title="Open source, et gratuit"
        description="Dalibi est un logiciel libre : aucun frais de licence. Seul un accompagnement optionnel au déploiement et à la configuration peut faire l'objet d'un devis."
        illustration={<PricingIllustration className="w-full max-w-sm h-auto" />}
      />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* 1. Open source d'abord */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">Avant tout, un logiciel libre</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dalibi est open source et gratuit</h2>
            <p className="text-lg text-muted">
              Sous licence <strong className="text-foreground/90">GPL v3</strong>, Dalibi appartient à
              la communauté. Vous l&apos;utilisez librement, sans frais et sans limite.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {openPoints.map((p) => (
              <div key={p} className="flex gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-sm text-foreground/85">{p}</span>
              </div>
            ))}
          </div>

          {/* Clause licence */}
          <div className="card max-w-3xl mx-auto p-6 sm:p-7 mb-16 border-l-4 border-l-primary">
            <div className="flex gap-4">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary h-fit shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1.5">Le logiciel ne peut jamais être vendu</h3>
                <p className="text-sm text-muted">
                  La licence <strong className="text-foreground/90">GPL v3</strong> garantit que Dalibi
                  reste libre : personne ne peut le revendre comme un produit fermé ni en faire payer la
                  licence. Toute prestation facturée porte uniquement sur un{" "}
                  <strong className="text-foreground/90">service d&apos;accompagnement</strong>, jamais
                  sur le logiciel lui-même.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Deux options */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deux façons de démarrer</h2>
            <p className="text-lg text-muted">
              Déployez Dalibi par vos propres moyens, ou confiez-nous l&apos;installation et la
              configuration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-start">
            {/* Auto-déploiement */}
            <div className="card p-8 flex flex-col h-full">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-5 w-fit">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Auto-déploiement</h3>
              <p className="text-sm text-muted mb-4">Vous installez et configurez vous-même</p>
              <div className="flex items-end gap-1.5 mb-6">
                <span className="text-4xl font-bold leading-none">Gratuit</span>
              </div>
              <a
                href="https://github.com/wearedalibi/dalibi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full mb-6"
              >
                <SiGithub className="w-4 h-4" /> Explorer le code
              </a>
              <ul className="space-y-3 mt-auto">
                {selfHost.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accompagnement */}
            <div className="card p-8 flex flex-col h-full relative ring-2 ring-primary shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-primary text-[var(--primary-foreground)] text-xs font-bold rounded-full">
                  RECOMMANDÉ
                </span>
              </div>
              <div className="inline-flex p-3 rounded-xl bg-primary text-[var(--primary-foreground)] mb-5 w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Accompagnement</h3>
              <p className="text-sm text-muted mb-4">Nous déployons et configurons pour vous</p>
              <div className="flex items-end gap-1.5 mb-6">
                <span className="text-4xl font-bold leading-none">Sur devis</span>
              </div>
              <Link href="/contact" className="btn btn-primary w-full mb-6">
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <ul className="space-y-3">
                {assisted.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Réassurance */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-sm text-muted">
            <span className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-primary" /> Aucun frais de licence</span>
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> Installable par vos équipes techniques</span>
            <span className="flex items-center gap-2"><Scale className="w-4 h-4 text-primary" /> Licence GPL v3</span>
          </div>
        </div>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card relative overflow-hidden p-10 md:p-14 text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-full -z-10" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d&apos;être accompagné ?</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                Parlez-nous de votre établissement : nous établissons un devis d&apos;accompagnement
                adapté à vos besoins.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
