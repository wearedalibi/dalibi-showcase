import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, BookOpen, BookOpenCheck, Cpu, FileText, Layers3, Lock, Scale, Server,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { DocsIllustration } from "@/components/landing/illustrations";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata = pageMeta({
  title: "Documentation & guides de déploiement",
  description:
    "Guides d'installation, de configuration et de déploiement de Dalibi (Docker, Kubernetes), référence de l'API du portail parents/élèves, licence GPL v3 et confidentialité des données.",
  path: "/documentation",
});

const GITHUB_URL = "https://github.com/wearedalibi/dalibi";

type Guide = { icon: LucideIcon; title: string; description: string };

const guides: Guide[] = [
  { icon: BookOpenCheck, title: "installation.md", description: "PHP 8.3, Composer, PostgreSQL, Node et déploiement Docker." },
  { icon: FileText, title: "configuration_ecole.md", description: "Logo, nom d'école, années académiques et types de classes." },
  { icon: Layers3, title: "bulletins_et_notes.md", description: "Moyennes pondérées, trimestre ou semestre par type de classe." },
  { icon: Cpu, title: "roles_et_permissions.md", description: "Contrôle d'accès fin par permissions, par module et par rôle." },
];

const steps = [
  "git clone https://github.com/wearedalibi/dalibi.git",
  "cd dalibi",
  "composer install && npm install",
  "cp .env.example .env && php artisan key:generate",
  "php artisan migrate",
  "php artisan storage:link",
  "npm run build && php artisan serve",
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Documentation", icon: BookOpen }}
        title="Installer, configurer, déployer"
        description="Tous les guides pour mettre Dalibi en place et le faire vivre : installation, configuration, API du portail et bonnes pratiques."
        illustration={<DocsIllustration className="w-full max-w-sm h-auto" />}
      />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-20">
          {/* Guides */}
          <section>
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Guides</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Les documents de référence</h2>
              <p className="text-muted">
                Retrouvez l&apos;intégralité des guides dans le dépôt, au format Markdown.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {guides.map((doc) => (
                <a
                  key={doc.title}
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover p-6 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                    <doc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{doc.title}</h3>
                  <p className="text-xs text-muted">{doc.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Démarrage rapide */}
          <section className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="eyebrow mb-3">Démarrage rapide</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Lancez Dalibi en quelques commandes</h2>
              <p className="text-muted mb-6">
                Prérequis : <strong className="text-foreground/90">PHP 8.3+</strong>, PostgreSQL 12+,
                Composer et Node.js. Un déploiement <strong className="text-foreground/90">Docker</strong> est
                aussi disponible pour la production.
              </p>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <SiGithub className="w-4 h-4" /> Voir le guide complet
              </a>
            </div>
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-muted">Terminal</span>
              </div>
              <pre className="p-4 text-[13px] leading-relaxed font-mono text-foreground/90 overflow-x-auto">
                {steps.map((s) => (
                  <div key={s}>
                    <span className="text-primary select-none">$ </span>
                    {s}
                  </div>
                ))}
              </pre>
            </div>
          </section>

          {/* API */}
          <section id="api" className="card p-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary h-fit w-fit shrink-0">
                <Server className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Référence de l&apos;API du portail</h2>
                <p className="text-muted text-sm">
                  Le portail parents &amp; élèves expose une <strong className="text-foreground/90">API REST</strong> (<code className="font-mono">/api/v1</code>),
                  authentifiée par token (Laravel Sanctum) : notes, bulletins PDF, présences, scolarité et
                  calendrier. La spécification <strong className="text-foreground/90">OpenAPI 3.1</strong> est
                  fournie dans le dépôt, avec un visualiseur Redoc disponible en environnement de développement.
                </p>
              </div>
              <a href={`${GITHUB_URL}/blob/main/docs/api/openapi.yaml`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary shrink-0">
                Spécification OpenAPI <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Licence & Confidentialité */}
          <section className="grid md:grid-cols-2 gap-6">
            <div id="licence" className="card p-7 scroll-mt-24">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold mb-2">Licence GPL v3</h2>
              <p className="text-sm text-muted">
                Dalibi est distribué sous licence <strong className="text-foreground/90">GNU GPL v3</strong> :
                code ouvert et auditable, librement utilisable et modifiable. Le logiciel ne peut être revendu
                comme produit propriétaire.
              </p>
              <Link href="/tarifs" className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4 hover:underline">
                En savoir plus sur les tarifs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div id="confidentialite" className="card p-7 scroll-mt-24">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold mb-2">Confidentialité des données</h2>
              <p className="text-sm text-muted">
                En auto-hébergement, vos données restent <strong className="text-foreground/90">chez vous</strong>,
                sur votre PostgreSQL. Les fichiers sensibles (photos, pièces des dossiers) sont stockés hors du
                dossier public et servis uniquement via des routes authentifiées.
              </p>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
