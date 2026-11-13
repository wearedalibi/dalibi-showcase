import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Archive, ArrowRight, BarChart3, Building2, Calendar, CalendarDays, Check,
  ClipboardList, CloudUpload, DatabaseBackup, FileBadge, Gauge, GraduationCap,
  Languages, LayoutGrid, School, Server, ShieldCheck, UserCheck, Users, Wallet,
} from "lucide-react";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { SiteHeader } from "@/components/landing/site-header";
import {
  DigitalizationIllustration, FeaturesIllustration, FinanceIllustration,
  NetworkIllustration, PedagogieIllustration, ShieldIllustration, StatsIllustration,
} from "@/components/landing/illustrations";

export const metadata = pageMeta({
  title: "Fonctionnalités — gestion scolaire complète",
  description:
    "Toutes les fonctionnalités de Dalibi, logiciel open source de gestion scolaire : élèves, notes & bulletins (trimestre/semestre), examens officiels (CEPD, BEPC, BAC), écolage & Mobile Money, présences, statistiques MEPSTA, documents et portail parents & élèves.",
  path: "/fonctionnalites",
});

type Editorial = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  illustration: React.ReactNode;
};

const editorials: Editorial[] = [
  {
    icon: Gauge,
    eyebrow: "Pilotage",
    title: "Pilotez votre école en temps réel",
    intro:
      "Un tableau de bord clair qui réunit l'essentiel : décidez vite, sur des données fiables.",
    points: [
      "Indicateurs clés en un coup d'œil : effectifs, inscriptions, encaissements",
      "Évolution des paiements mois par mois et derniers règlements",
      "Alertes automatiques sur les élèves en retard de paiement",
      "Contenu et statistiques adaptés au rôle de chaque utilisateur",
      "Filtrage par année académique",
    ],
    illustration: <DigitalizationIllustration className="w-full max-w-md mx-auto h-auto" />,
  },
  {
    icon: BarChart3,
    eyebrow: "Statistiques & pilotage",
    title: "Décidez avec des statistiques, pas à l'aveugle",
    intro:
      "Un menu Statistiques complet, filtrable et exportable, aligné sur les indicateurs de l'annuaire statistique (MEPSTA).",
    points: [
      "Parité (IPS), redoublement, abandon et sur-âge (retard scolaire)",
      "Recouvrement de l'écolage et répartition Mobile Money",
      "Réussite interne et examens officiels (CEPD, BEPC, BAC)",
      "Ratio élèves/enseignant, assiduité et absentéisme",
      "Comparaisons pluriannuelles et origine par préfecture",
      "Export PDF (en-tête d'école) et Excel de chaque section",
    ],
    illustration: <StatsIllustration className="w-full max-w-md mx-auto h-auto" />,
  },
  {
    icon: GraduationCap,
    eyebrow: "Pédagogie",
    title: "Notes, bulletins et examens, sans effort",
    intro:
      "De la saisie des notes au bulletin officiel, Dalibi automatise toute la chaîne pédagogique.",
    points: [
      "Saisie des notes par trimestre ou semestre, selon le type de classe",
      "Moyennes pondérées par coefficients, mentions et seuils paramétrables",
      "Bulletins PDF fidèles au format togolais, configurables (colonnes, groupes)",
      "Modèles d'évaluation déployés vers les classes, planning et export PDF",
      "Examens officiels (CEPD, BEPC, Baccalauréat) : inscriptions et résultats",
      "Réclamations sur les notes et suivi des performances",
    ],
    illustration: <PedagogieIllustration className="w-full max-w-md mx-auto h-auto" />,
  },
  {
    icon: Wallet,
    eyebrow: "Finances",
    title: "Une trésorerie maîtrisée, des paiements fiables",
    intro:
      "Structurez les frais, encaissez en toute sécurité et gardez une vision nette de vos finances.",
    points: [
      "Structures de frais par catégorie, classe et année académique",
      "Tranches de paiement (échéancier) contrôlées côté serveur",
      "Reçus numérotés à code-barres avec vérification anti-falsification",
      "Caisses, bourses, journal des transactions et situation par classe",
      "Réplication des frais d'une année à l'autre, sans doublons",
      "Garde-fou anti trop-perçu et alertes impayés",
    ],
    illustration: <FinanceIllustration className="w-full max-w-md mx-auto h-auto" />,
  },
  {
    icon: Users,
    eyebrow: "Familles",
    title: "Un portail dédié aux parents et aux élèves",
    intro:
      "Impliquez les familles : elles suivent la scolarité en toute autonomie, en toute sécurité.",
    points: [
      "Accès aux notes, bulletins PDF, présences, scolarité et calendrier",
      "Comptes tuteurs créés par invitation e-mail, élèves connectés par matricule",
      "Isolation stricte : un tuteur ne voit que ses enfants",
      "API REST sécurisée par token, prête pour une application mobile",
    ],
    illustration: <NetworkIllustration className="w-full max-w-md mx-auto h-auto" />,
  },
  {
    icon: ShieldCheck,
    eyebrow: "Sécurité",
    title: "Gouverné par les permissions, sécurisé par conception",
    intro:
      "Des données scolaires sensibles méritent une défense en profondeur, du menu à la base.",
    points: [
      "5 rôles préconfigurés et permissions fines par module",
      "Authentification à deux facteurs (2FA)",
      "Fichiers sensibles privés, servis via des routes authentifiées",
      "Journal d'audit des actions sensibles",
      "Limitation des tentatives de connexion",
    ],
    illustration: <ShieldIllustration className="w-full max-w-sm mx-auto h-auto" />,
  },
];

type FeatureCard = { icon: LucideIcon; title: string; points: string[] };

const moreFeatures: FeatureCard[] = [
  {
    icon: BarChart3,
    title: "Statistiques & pilotage",
    points: ["7 tableaux : parité, réussite, finances…", "Filtres année / classe / sexe", "Export PDF & Excel"],
  },
  {
    icon: School,
    title: "Élèves & inscriptions",
    points: ["Fiche complète avec photo et dossier privé", "Import CSV en masse", "Promotion & réaffectation de classe", "Effectifs et listes en PDF"],
  },
  {
    icon: Building2,
    title: "Établissements",
    points: ["Multi-écoles (primaire, collège, lycée)", "Paramétrage, logo et devise", "Années, périodes et types de classes"],
  },
  {
    icon: Calendar,
    title: "Emploi du temps",
    points: ["Grille hebdomadaire par classe", "Créneaux (matière, enseignant)", "Export PDF imprimable"],
  },
  {
    icon: UserCheck,
    title: "Présences",
    points: ["Appel par classe, date et séance", "Statuts présent / absent / retard / excusé", "Actions groupées, saisie idempotente"],
  },
  {
    icon: ClipboardList,
    title: "Permissions d'absence",
    points: ["Demandes avec motif et justification", "Validation par le directeur ou l'admin", "Auto-excusement des absences couvertes"],
  },
  {
    icon: Gauge,
    title: "Statistiques de présence",
    points: ["Taux d'absence par élève", "Résumé journalier par séance", "Tableau de bord par classe et période"],
  },
  {
    icon: FileBadge,
    title: "Documents officiels",
    points: ["Modèles PDF personnalisables", "Éditeur d'en-tête glisser-déposer + filigrane", "Code-barres de vérification anti-falsification"],
  },
  {
    icon: Archive,
    title: "Archives documentaires",
    points: ["Tout document avec référence automatique", "Tags colorés et filtrage multi-tags", "Corbeille, rétention et liaison élève/classe"],
  },
  {
    icon: CalendarDays,
    title: "Calendrier académique",
    points: ["Événements de l'année active", "Vue par type d'événement", "Partagé sur le portail des familles"],
  },
  {
    icon: CloudUpload,
    title: "Stockage des fichiers",
    points: ["Local ou cloud S3 / R2 / MinIO", "Bascule sans redéploiement", "Disque privé pour les fichiers sensibles"],
  },
  {
    icon: DatabaseBackup,
    title: "Sauvegardes & restauration",
    points: ["Export JSON et SQL", "Planification et rétention automatiques", "Restauration depuis l'interface"],
  },
  {
    icon: Languages,
    title: "Interface bilingue FR/EN",
    points: ["Disponible en français et en anglais", "Bascule de langue dans l'interface", "Écrans, menus et composants traduits"],
  },
  {
    icon: Server,
    title: "Déploiement & open source",
    points: ["Laravel 12, PostgreSQL, Docker", "Auto-hébergé, données souveraines", "Open source sous licence GPL v3"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Fonctionnalités", icon: LayoutGrid }}
        title="Tout ce qu'il faut pour gérer votre école"
        description="Inscriptions, notes, bulletins, examens officiels, écolage, présences, documents et portail familles : Dalibi couvre toute la vie scolaire, sans logiciel tiers."
        illustration={<FeaturesIllustration className="w-full max-w-sm h-auto" />}
      />

      {/* Sections éditoriales */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 md:space-y-28">
          {editorials.map((e, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={e.title} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className={`rounded-2xl bg-linear-to-br from-primary/5 to-brand-3/10 border border-border p-6 sm:p-8 ${reverse ? "lg:order-2" : ""}`}>
                  {e.illustration}
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="eyebrow mb-3 flex items-center gap-2">
                    <e.icon className="w-4 h-4" /> {e.eyebrow}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{e.title}</h2>
                  <p className="text-lg text-muted mb-6">{e.intro}</p>
                  <ul className="space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grille exhaustive */}
        <section className="bg-surface border-y border-border py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-3">Et bien plus encore</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Une couverture complète de la vie scolaire</h2>
              <p className="text-lg text-muted">
                Chaque besoin administratif, pédagogique et financier trouve sa réponse dans Dalibi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreFeatures.map((f) => (
                <div key={f.title} className="card card-hover p-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-3">{f.title}</h3>
                  <ul className="space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card relative overflow-hidden p-10 md:p-14 text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-full -z-10" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à équiper votre école ?</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                Découvrez Dalibi en conditions réelles avec une démonstration adaptée à votre établissement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Demander une démo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/tarifs" className="btn btn-secondary">
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
