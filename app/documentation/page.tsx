import { pageMeta } from "@/lib/seo";
import type { LucideIcon } from "lucide-react";
import {
  Archive, BarChart3, BookOpen, Boxes, Briefcase, Calendar, Database, FileText,
  GraduationCap, LayoutDashboard, Layers3, NotebookPen, Rocket, Server, Settings,
  Shield, ShieldCheck, Smartphone, Terminal, TrendingUp, UserCheck, Users, Wallet, Workflow,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { DocsIllustration } from "@/components/landing/illustrations";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { SiteHeader } from "@/components/landing/site-header";
import { DocsSidebar, type DocNavItem } from "@/components/docs/docs-sidebar";
import { C, Callout, Code, ConceptCard, DocSection, Step } from "@/components/docs/doc-ui";

export const metadata = pageMeta({
  title: "Documentation — prise en main de A à Z",
  description:
    "Guide complet pour installer, configurer, lancer et comprendre Dalibi : prérequis, installation locale et Docker, configuration .env, premier démarrage, architecture, rôles & permissions, stockage, sauvegardes et API du portail.",
  path: "/documentation",
});

const GITHUB_URL = "https://github.com/wearedalibi/dalibi";
const OPENAPI_URL = `${GITHUB_URL}/blob/main/docs/api/openapi.yaml`;

const nav: DocNavItem[] = [
  { id: "introduction", label: "Présentation" },
  { id: "prerequis", label: "Prérequis" },
  { id: "installation", label: "Installation locale" },
  { id: "docker", label: "Installation Docker" },
  { id: "configuration", label: "Configuration (.env)" },
  { id: "email", label: "E-mails (SMTP)" },
  { id: "demarrage", label: "Seeding & démarrage" },
  { id: "production", label: "Mise en production" },
  { id: "architecture", label: "Comprendre l'app" },
  { id: "modules", label: "Les modules" },
  { id: "roles", label: "Rôles & permissions" },
  { id: "stockage", label: "Stockage & fichiers" },
  { id: "sauvegardes", label: "Sauvegardes" },
  { id: "api", label: "API du portail" },
  { id: "securite", label: "Sécurité" },
  { id: "maj", label: "Mise à jour" },
  { id: "depannage", label: "Dépannage" },
  { id: "glossaire", label: "Glossaire" },
  { id: "contribuer", label: "Contribuer" },
];

type ModuleDoc = { icon: LucideIcon; title: string; purpose: string; features: string[] };

const modules: ModuleDoc[] = [
  {
    icon: LayoutDashboard,
    title: "Tableau de bord",
    purpose: "Synthèse d'activité, composée par permission — chaque profil ne voit que ses sections.",
    features: [
      "Finances : facturé / encaissé / reste, évolution mensuelle, caisses, répartition par moyen de paiement",
      "Inscriptions & effectifs : totaux, parité, inscriptions récentes, répartition par classe",
      "Vie scolaire : présences du jour, permissions en attente, prochains examens",
      "Vue enseignant : emploi du temps du jour, notes à saisir, accès rapide « Faire l'appel »",
    ],
  },
  {
    icon: Users,
    title: "Élèves & inscriptions",
    purpose: "Le cœur de la scolarité : dossiers des élèves et leur parcours d'une année à l'autre.",
    features: [
      "Dossiers élèves complets (état civil, parents, contacts, photo)",
      "Inscriptions à l'année académique active et affectation aux classes",
      "Effectifs & listes de classe, passage de classe (promotion) en fin d'année",
      "Bourses d'étudiants et statistiques élèves (parité, répartition)",
      "Emploi du temps hebdomadaire par classe",
    ],
  },
  {
    icon: UserCheck,
    title: "Présences",
    purpose: "Suivi de l'assiduité au quotidien.",
    features: [
      "Saisie de l'appel par classe et par séance",
      "Statistiques d'assiduité (taux de présence, absences répétées)",
      "Demandes et justificatifs de permission d'absence",
    ],
  },
  {
    icon: FileText,
    title: "Examens",
    purpose: "Organisation des évaluations, des devoirs de classe aux examens officiels.",
    features: [
      "Modèles d'évaluation réutilisables",
      "Évaluations par classe et planning des examens",
      "Examens officiels (CEPD, BEPC, BAC) et suivi des résultats",
    ],
  },
  {
    icon: NotebookPen,
    title: "Notes & bulletins",
    purpose: "De la saisie des notes au bulletin PDF fidèle.",
    features: [
      "Saisie des notes par matière et par évaluation",
      "Calcul des moyennes paramétrable (par type de classe, trimestre ou semestre)",
      "Génération des bulletins PDF avec en-tête et modèle configurables",
      "Réclamations et révisions de notes",
    ],
  },
  {
    icon: TrendingUp,
    title: "Comptabilité & écolage",
    purpose: "Toute la gestion financière de l'établissement.",
    features: [
      "Structures et catégories de frais, écolage par classe",
      "Encaissements, reçus vérifiables, situation financière par classe",
      "Dépenses et journal des transactions",
      "Caisses multiples (dont Mobile Money) et soldes",
    ],
  },
  {
    icon: Briefcase,
    title: "Personnel & Paie",
    purpose: "Ressources humaines et paie du personnel, connectées à la comptabilité.",
    features: [
      "Fiches employés, grilles salariales et rubriques de paie",
      "Cycles de paie mensuels : bulletins PDF, validation et décaissement en caisse",
      "Ancienneté, CNSS et ITS calculés automatiquement (paramétrables)",
    ],
  },
  {
    icon: Archive,
    title: "Archives & documents",
    purpose: "Production et conservation des documents administratifs.",
    features: [
      "Modèles de documents (certificats, attestations) avec en-tête et filigrane par école",
      "Archivage des documents générés, corbeille et restauration",
      "Classement par tags",
    ],
  },
  {
    icon: BarChart3,
    title: "Statistiques & pilotage",
    purpose: "Indicateurs de direction alignés sur la carte scolaire (MEPSTA).",
    features: [
      "Filtres par année, classe et sexe",
      "Indicateurs d'effectifs, de réussite et de vie scolaire",
      "Export PDF et Excel sur chaque section",
    ],
  },
  {
    icon: Calendar,
    title: "Calendrier",
    purpose: "Les événements de l'année scolaire.",
    features: ["Événements, échéances et jalons de l'année académique active"],
  },
  {
    icon: Smartphone,
    title: "Portail parents & élèves",
    purpose: "Consultation à distance via une API dédiée (voir la section API).",
    features: [
      "Notes, bulletins PDF, présences et scolarité par enfant",
      "Calendrier et informations de l'établissement",
      "Authentifié par token (Laravel Sanctum)",
    ],
  },
  {
    icon: Shield,
    title: "Administration",
    purpose: "Gestion des accès et traçabilité.",
    features: [
      "Utilisateurs, rôles et permissions (contrôle d'accès fin)",
      "Affectations enseignant / matière / classe",
      "Journal d'audit des actions et gestion des accès portail",
    ],
  },
  {
    icon: Settings,
    title: "Paramètres",
    purpose: "La configuration de référence de l'établissement.",
    features: [
      "École, classes, types de classes, matières, pays",
      "Années et périodes académiques, types d'évaluation",
      "Catégories et structures de frais, bourses, calcul des moyennes",
      "Fichiers & stockage (local / S3), modèles de documents, sauvegardes",
    ],
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Documentation", icon: BookOpen }}
        title="Prise en main de Dalibi, de A à Z"
        description="Installez, configurez, lancez et comprenez Dalibi. Ce guide vous mène du dépôt vide à une instance fonctionnelle que vous maîtrisez."
        illustration={<DocsIllustration className="w-full max-w-sm h-auto" />}
      />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
            {/* Sommaire */}
            <aside className="lg:block">
              <DocsSidebar items={nav} />
            </aside>

            {/* Contenu */}
            <div className="min-w-0 space-y-16">
              {/* 1. Présentation */}
              <DocSection id="introduction" eyebrow="Découvrir" title="Qu'est-ce que Dalibi ?">
                <p>
                  <strong>Dalibi</strong> est un logiciel <strong>libre et open-source</strong> (GPL v3) de gestion
                  d&apos;établissement scolaire, pensé pour le Togo et l&apos;Afrique (primaire, collège, lycée). Il
                  couvre toute la vie de l&apos;école : élèves, notes, examens, présences, finances, personnel et documents.
                </p>
                <p>
                  Techniquement, c&apos;est une application <strong>Laravel 12</strong> (PHP 8.3+) avec une interface{" "}
                  <strong>React 19 + TypeScript</strong> reliée par <strong>Inertia.js</strong> (SPA sans API séparée),
                  sur <strong>PostgreSQL</strong>. En auto-hébergement, vos données restent chez vous.
                </p>
                <Callout tone="info" title="Version stable : v1.2.0">
                  La version stable actuelle. Ce guide décrit la{" "}
                  <a href={GITHUB_URL + "/releases/tag/v1.2.0"} target="_blank" rel="noopener noreferrer">v1.2.0</a>{" "}
                  — voir le{" "}
                  <a href={GITHUB_URL + "/blob/main/CHANGELOG.md"} target="_blank" rel="noopener noreferrer">journal des versions</a>.
                </Callout>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-2">
                  <ConceptCard icon={GraduationCap} title="Scolarité">
                    Élèves & inscriptions, notes & bulletins, examens officiels, présences, emploi du temps.
                  </ConceptCard>
                  <ConceptCard icon={Wallet} title="Gestion">
                    Comptabilité & écolage, personnel & paie, caisses, dépenses, statistiques de pilotage.
                  </ConceptCard>
                  <ConceptCard icon={ShieldCheck} title="Cadre">
                    Rôles & permissions fins, documents PDF, archives, sauvegardes et portail parents/élèves.
                  </ConceptCard>
                </div>
              </DocSection>

              {/* 2. Prérequis */}
              <DocSection id="prerequis" eyebrow="Étape 1" title="Prérequis">
                <p>Sur votre machine (ou serveur), installez :</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>PHP 8.3+</strong> avec les extensions usuelles (pdo_pgsql, mbstring, zip, gd, intl).</li>
                  <li><strong>Composer</strong> (gestionnaire de dépendances PHP).</li>
                  <li><strong>PostgreSQL 12+</strong> (recommandé). SQLite convient pour un test rapide.</li>
                  <li><strong>Node.js 20+</strong> et npm (build de l&apos;interface).</li>
                  <li><strong>Git</strong>.</li>
                </ul>
                <Callout tone="info" title="Optionnel mais recommandé">
                  Les binaires <C>pg_dump</C> / <C>pg_restore</C> (client PostgreSQL) pour les sauvegardes SQL natives, et{" "}
                  <strong>Docker</strong> pour un déploiement de production reproductible.
                </Callout>
              </DocSection>

              {/* 3. Installation locale */}
              <DocSection id="installation" eyebrow="Étape 2" title="Installation locale">
                <div className="space-y-6">
                  <Step n={1} title="Cloner le dépôt et installer les dépendances">
                    <Code
                      shell
                      code={`git clone ${GITHUB_URL}.git
cd dalibi
composer install
npm install`}
                    />
                  </Step>
                  <Step n={2} title="Préparer l'environnement">
                    <Code shell code={`cp .env.example .env
php artisan key:generate`} />
                    <p className="text-sm">
                      Ouvrez ensuite <C>.env</C> et renseignez la base de données (voir{" "}
                      <a href="#configuration">Configuration</a>).
                    </p>
                  </Step>
                  <Step n={3} title="Créer le schéma et les données de base">
                    <Code
                      shell
                      code={`# Développement : schéma + données de référence + comptes de démo
php artisan migrate --seed
# Lien symbolique pour les fichiers publics
php artisan storage:link`}
                    />
                    <p className="text-sm">
                      <C>--seed</C> exécute le <C>DatabaseSeeder</C> (données de <strong>démonstration</strong>, dont
                      des comptes prêts à l&apos;emploi). Pour la production, on seede uniquement les données de
                      référence — voir <a href="#demarrage">Seeding &amp; premier démarrage</a>.
                    </p>
                  </Step>
                  <Step n={4} title="Compiler l'interface et lancer le serveur">
                    <Code
                      shell
                      code={`# Développement (rechargement à chaud)
npm run dev
php artisan serve

# …ou build de production
npm run build
php artisan serve`}
                    />
                    <p className="text-sm">L&apos;application est disponible sur <C>http://localhost:8000</C>.</p>
                  </Step>
                  <Step n={5} title="Traitements en arrière-plan (files d'attente & planificateur)">
                    <p className="text-sm">
                      Les <strong>e-mails</strong> et les <strong>sauvegardes manuelles</strong> passent par une file
                      d&apos;attente ; les sauvegardes <strong>planifiées</strong> par le planificateur. En local :
                    </p>
                    <Code
                      shell
                      code={`php artisan queue:work      # worker (e-mails, sauvegardes manuelles)
php artisan schedule:work   # planificateur (tâches automatiques)`}
                    />
                  </Step>
                </div>
                <Callout tone="warn" title="Sans worker actif">
                  Les sauvegardes lancées depuis l&apos;interface et les e-mails restent en attente et ne s&apos;exécutent
                  jamais. Gardez un <C>queue:work</C> en service.
                </Callout>
              </DocSection>

              {/* 4. Docker */}
              <DocSection id="docker" eyebrow="Alternative" title="Installation Docker (production)">
                <p>
                  Pour un déploiement reproductible, une image et une configuration Docker sont fournies dans le dépôt
                  (services <strong>app</strong>, <strong>worker</strong>, <strong>scheduler</strong>, PostgreSQL). Le
                  schéma type :
                </p>
                <Code
                  shell
                  code={`cp .env.example .env        # renseigner APP_KEY, DB_*, MAIL_*
docker compose up -d --build
docker compose exec app php artisan migrate --seed
docker compose exec app php artisan storage:link`}
                />
                <Callout tone="info">
                  Le service <strong>scheduler</strong> doit tourner en <strong>un seul exemplaire</strong> (sinon
                  sauvegardes en double). Détails et fichiers de déploiement dans le{" "}
                  <a href={`${GITHUB_URL}/blob/main/documentations/exploitation/deploiement.md`} target="_blank" rel="noopener noreferrer">guide de déploiement</a>.
                </Callout>
              </DocSection>

              {/* 5. Configuration */}
              <DocSection id="configuration" eyebrow="Étape 3" title="Configuration (.env)">
                <p>Les variables essentielles à renseigner dans <C>.env</C> :</p>
                <Code
                  title=".env"
                  code={`APP_NAME=Dalibi
APP_URL=http://localhost:8000

# Base de données (PostgreSQL)
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=dalibi
DB_USERNAME=postgres
DB_PASSWORD=secret

# Files d'attente (recommandé : database)
QUEUE_CONNECTION=database

# E-mails (pour notifications, ex. échec de sauvegarde)
MAIL_MAILER=smtp
MAIL_HOST=...
MAIL_USERNAME=...
MAIL_PASSWORD=...

# Génération des matricules
MATRICULE_COUNTRY_CODE=TG`}
                />
                <p className="text-sm">
                  Le <strong>stockage des fichiers</strong> (local ou S3/R2) se configure ensuite depuis l&apos;interface
                  (Paramètres → Fichiers & Stockage), pas seulement via <C>.env</C>. Voir aussi la{" "}
                  <a href={`${GITHUB_URL}/blob/main/documentations/prise-en-main/configuration-env.md`} target="_blank" rel="noopener noreferrer">référence complète du <C>.env</C></a>.
                </p>
              </DocSection>

              {/* 5bis. E-mails */}
              <DocSection id="email" eyebrow="Étape 3b" title="Configurer les e-mails (SMTP)">
                <p>
                  Dalibi envoie des e-mails (notifications, <strong>alerte d&apos;échec de sauvegarde</strong>, accès
                  portail…). La messagerie se configure via les variables <C>MAIL_*</C> de Laravel. En développement, la
                  valeur par défaut <C>MAIL_MAILER=log</C> écrit les mails dans les logs (aucun envoi réel).
                </p>
                <Code
                  title=".env — envoi réel (SMTP)"
                  code={`MAIL_MAILER=smtp
MAIL_HOST=smtp.votre-fournisseur.com
MAIL_PORT=587
MAIL_USERNAME=...
MAIL_PASSWORD=...
MAIL_FROM_ADDRESS=no-reply@votre-domaine.tg   # sur un domaine que vous contrôlez
MAIL_FROM_NAME="\${APP_NAME}"`}
                />
                <Callout tone="warn" title="Délivrabilité : éviter les spams">
                  Pour que les mails arrivent en boîte de réception, l&apos;adresse <C>MAIL_FROM_ADDRESS</C> doit être sur
                  un <strong>domaine authentifié</strong> : configurez <strong>SPF</strong>, <strong>DKIM</strong> et{" "}
                  <strong>DMARC</strong> dans votre DNS, via un fournisseur transactionnel (Brevo, Mailgun, Postmark,
                  Resend…). Un domaine non authentifié part en spam. Testez avec{" "}
                  <a href="https://www.mail-tester.com" target="_blank" rel="noopener noreferrer">mail-tester.com</a>.
                </Callout>
                <p className="text-sm">
                  Rappel : les e-mails et les sauvegardes manuelles passent par la file d&apos;attente — un{" "}
                  <strong>worker</strong> doit tourner (voir Installation et Mise en production).
                </p>
              </DocSection>

              {/* 6. Seeding & premier démarrage */}
              <DocSection id="demarrage" eyebrow="Étape 4" title="Seeding & premier démarrage">
                <p>
                  Le <strong>seeding</strong> pré-remplit la base. C&apos;est aussi par là que naît le{" "}
                  <strong>premier utilisateur</strong> : l&apos;inscription publique est désactivée, aucun compte ne peut
                  s&apos;auto-créer. Quatre points d&apos;entrée existent, du plus minimal au plus complet :
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border text-left text-foreground">
                        <th className="py-2 pr-4 font-semibold">Seeder</th>
                        <th className="py-2 pr-4 font-semibold">Contenu</th>
                        <th className="py-2 font-semibold">Usage</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-border/60">
                        <td className="py-2.5 pr-4 align-top"><C>RolesAndPermissionsSeeder</C></td>
                        <td className="py-2.5 pr-4 align-top">~145 permissions + les rôles de base.</td>
                        <td className="py-2.5 align-top">Minimum vital.</td>
                      </tr>
                      <tr className="border-b border-border/60">
                        <td className="py-2.5 pr-4 align-top"><C>ReferenceDataSeeder</C></td>
                        <td className="py-2.5 pr-4 align-top">
                          Rôles/permissions <strong>+ catalogues</strong> : pays, types de classes, classes PS→Tle,
                          matières, catégories de frais, types d&apos;évaluation, bourses, tags. Idempotent, sans données
                          de démo.
                        </td>
                        <td className="py-2.5 align-top"><strong>Production</strong>.</td>
                      </tr>
                      <tr className="border-b border-border/60">
                        <td className="py-2.5 pr-4 align-top"><C>DefaultUsersSeeder</C></td>
                        <td className="py-2.5 pr-4 align-top">
                          École « École Centrale » + <strong>1 compte par rôle</strong> (mot de passe <C>password</C>).
                        </td>
                        <td className="py-2.5 align-top">Démo / dev.</td>
                      </tr>
                      <tr className="border-b border-border/60">
                        <td className="py-2.5 pr-4 align-top"><C>DatabaseSeeder</C> <span className="text-xs">(défaut de <C>db:seed</C>)</span></td>
                        <td className="py-2.5 pr-4 align-top">
                          ReferenceData + DefaultUsers + modèles de documents + élèves fictifs (inscrits à
                          l&apos;année active).
                        </td>
                        <td className="py-2.5 align-top">Dev / démo — <strong>bloqué en prod</strong>.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 align-top"><C>DemoSeeder</C></td>
                        <td className="py-2.5 pr-4 align-top">
                          Une <strong>année scolaire complète</strong> sur toutes les classes (≥ 20 élèves) : notes,
                          moyennes, bulletins, factures &amp; paiements, présences, emploi du temps, calendrier, paie —
                          noms et villes <strong>réels (Togo)</strong>.
                        </td>
                        <td className="py-2.5 align-top">Démo riche — <strong>bloqué en prod</strong>.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Callout tone="info" title="Le choix du seeder est manuel">
                  Il n&apos;y a <strong>pas de bascule automatique selon l&apos;environnement</strong> : c&apos;est vous
                  qui choisissez le seeder à lancer (démo en dev, <C>ReferenceDataSeeder</C> en prod). Laravel ajoute
                  toutefois un garde-fou — en production, <C>db:seed</C> et <C>migrate --seed</C> demandent une
                  confirmation et refusent de s&apos;exécuter sans <C>--force</C> (utile en déploiement non-interactif).
                </Callout>

                {/* Dev / démo */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Développement / démo — connexion immédiate</h3>
                  <p className="text-sm mb-3">
                    <C>php artisan migrate --seed</C> exécute le <C>DatabaseSeeder</C> : vous obtenez une école et{" "}
                    <strong>cinq comptes prêts à l&apos;emploi</strong>, tous avec le mot de passe <C>password</C>.
                  </p>
                  <Code
                    title="Comptes de démonstration"
                    code={`admin@dalibi.tg        →  Administrateur
directeur@dalibi.tg    →  Directeur
enseignant@dalibi.tg   →  Enseignant
comptable@dalibi.tg    →  Comptable
secretaire@dalibi.tg   →  Secrétaire
# Mot de passe commun : password`}
                  />
                  <Callout tone="info" title="Changement de mot de passe imposé">
                    Ces comptes portent un mot de passe connu : à la première connexion, l&apos;application{" "}
                    <strong>oblige à en définir un nouveau</strong> avant de donner accès au reste de l&apos;interface.
                  </Callout>
                  <Callout tone="warn" title="Protection automatique en production">
                    Les seeders de démonstration (<C>DefaultUsersSeeder</C>, <C>StudentTestSeeder</C>) sont{" "}
                    <strong>automatiquement ignorés</strong> lorsque <C>APP_ENV=production</C> — même avec{" "}
                    <C>db:seed --force</C>. Un <C>db:seed</C> en production n&apos;installe donc que les données de
                    référence.
                  </Callout>
                </div>

                {/* Jeu de démonstration complet */}
                <div className="pt-4">
                  <h3 className="font-semibold text-foreground mb-2">Données de démonstration complètes</h3>
                  <p className="text-sm mb-3">
                    Pour présenter l&apos;application avec une école qui « vit », le <C>DemoSeeder</C> génère une{" "}
                    <strong>année scolaire entière</strong> sur toutes les classes actives (au moins 20 élèves par
                    classe) : dossiers d&apos;élèves, programme et affectations des enseignants, évaluations notées et
                    moyennes par matière, bulletins figés, facturation et paiements, présences, emploi du temps,
                    calendrier, cycles de paie et dossiers courants (justificatifs, réclamations, primes, documents).
                    Les noms, prénoms et villes sont <strong>réels</strong> (divisions administratives du Togo).
                  </p>
                  <p className="text-sm mb-3">
                    Il se lance <strong>après</strong> un seed de base (qui pose l&apos;école, l&apos;année, les classes
                    et les matières) — il ne fait pas partie de <C>DatabaseSeeder</C>, trop lourd pour chaque
                    installation&nbsp;:
                  </p>
                  <Code
                    shell
                    code={`# 1. socle : école, année, classes, matières, comptes de démo
php artisan migrate --seed

# 2. jeu de démonstration complet (une année scolaire vivante)
php artisan db:seed --class=DemoSeeder`}
                  />
                  <Callout tone="info" title="Idempotent et déterministe">
                    Relançable sans doublon (il complète chaque classe jusqu&apos;à l&apos;effectif cible) et
                    reproductible d&apos;une machine à l&apos;autre (graine fixe). Comme les autres seeders de
                    démonstration, il est <strong>ignoré en production</strong>.
                  </Callout>
                </div>

                {/* Production */}
                <div className="pt-4">
                  <h3 className="font-semibold text-foreground mb-2">Production — seeding prod-safe + premier admin</h3>
                  <p className="text-sm mb-3">
                    En production, on migre puis on ne seede que les <strong>données de référence</strong> (aucun compte
                    de démo, aucun élève fictif) :
                  </p>
                  <Code
                    shell
                    code={`php artisan migrate --force
php artisan db:seed --class=ReferenceDataSeeder --force`}
                  />
                  <p className="text-sm mt-3 mb-2">
                    Il ne reste plus qu&apos;à créer votre <strong>premier administrateur</strong>. Via Tinker :
                  </p>
                  <Code
                    title="php artisan tinker"
                    code={`$u = App\\Models\\User::create([
    'firstname' => 'Admin',
    'lastname'  => 'École',
    'email'     => 'admin@monecole.tg',
    'gender'    => 'male',
    'password'  => 'un-mot-de-passe-fort', // haché automatiquement
]);
$u->assignRole(App\\Constants\\Roles::ADMINISTRATOR); // le matricule est généré automatiquement`}
                  />
                  <p className="text-sm mt-3">
                    Alternative rapide : lancer <C>db:seed --class=DefaultUsersSeeder</C> puis{" "}
                    <strong>changer immédiatement le mot de passe</strong> du compte <C>admin@dalibi.tg</C> et supprimer
                    les comptes de démo superflus.
                  </p>
                </div>

                {/* Onboarding */}
                <div className="pt-4">
                  <h3 className="font-semibold text-foreground mb-3">Configurer l&apos;établissement</h3>
                  <p className="text-sm mb-4">
                    Connectez-vous, puis suivez l&apos;ordre logique (les catalogues classes/matières/frais sont déjà
                    pré-remplis par <C>ReferenceDataSeeder</C> — il reste à les adapter à votre école) :
                  </p>
                  <Callout tone="info" title="Provisionnement automatique">
                    À la <strong>création d&apos;un établissement</strong>, son <strong>en-tête de documents</strong> et
                    son <strong>modèle de bulletin</strong> par défaut sont générés automatiquement — rien à seeder.
                  </Callout>
                  <div className="h-4" />
                  <div className="space-y-5">
                    <Step n={1} title="Paramétrer l'établissement">
                      École (nom, logo, en-tête des documents), <strong>année académique</strong> active, périodes
                      (trimestres/semestres), classes et matières.
                    </Step>
                    <Step n={2} title="Définir la scolarité financière">
                      <strong>Structures de frais</strong> (à partir des catégories seedées), bourses éventuelles, caisses.
                    </Step>
                    <Step n={3} title="Créer les comptes du personnel">
                      Utilisateurs (enseignants, secrétariat, comptabilité) avec leurs <strong>rôles</strong>.
                    </Step>
                    <Step n={4} title="Inscrire les élèves">
                      Dossiers élèves, <strong>inscriptions</strong> à l&apos;année active, affectation aux classes.
                    </Step>
                    <Step n={5} title="Faire vivre l'année">
                      Appel des présences, saisie des notes, génération des <strong>bulletins</strong>, encaissement de
                      l&apos;écolage, documents et archives.
                    </Step>
                  </div>
                </div>
              </DocSection>

              {/* 6bis. Mise en production */}
              <DocSection id="production" eyebrow="Étape 5" title="Mise en production">
                <p>
                  Passer d&apos;un lancement local à une instance de production demande quelques réglages de robustesse et
                  de sécurité.
                </p>

                <div className="space-y-6 pt-1">
                  <Step n={1} title="Régler l'environnement">
                    <Code
                      title=".env"
                      code={`APP_ENV=production
APP_DEBUG=false
APP_URL=https://ecole.votre-domaine.tg
# APP_KEY doit être défini (php artisan key:generate) et gardé secret`}
                    />
                  </Step>
                  <Step n={2} title="Installer et compiler pour la prod">
                    <Code
                      shell
                      code={`composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan optimize        # config:cache + route:cache + view:cache
php artisan storage:link`}
                    />
                  </Step>
                  <Step n={3} title="Servir derrière HTTPS">
                    <p className="text-sm">
                      Un <strong>reverse proxy</strong> (Nginx ou Caddy) devant PHP-FPM, avec un certificat TLS
                      (Let&apos;s Encrypt). Assurez-vous qu&apos;il transmet l&apos;en-tête <C>X-Forwarded-Proto</C> pour
                      que Laravel génère des URLs en <C>https</C>.
                    </p>
                  </Step>
                  <Step n={4} title="Worker de file d'attente en service">
                    <p className="text-sm">
                      Indispensable (sinon e-mails et sauvegardes manuelles ne partent jamais). À superviser avec
                      systemd ou Supervisor pour redémarrage automatique :
                    </p>
                    <Code shell code={`php artisan queue:work --tries=3`} />
                  </Step>
                  <Step n={5} title="Planificateur (tâches automatiques)">
                    <p className="text-sm">Une seule entrée cron qui déclenche le planificateur Laravel :</p>
                    <Code title="crontab" code={`* * * * * cd /chemin/app && php artisan schedule:run >> /dev/null 2>&1`} />
                  </Step>
                  <Step n={6} title="Droits & prérequis">
                    <p className="text-sm">
                      <C>storage/</C> et <C>bootstrap/cache/</C> accessibles en écriture par le serveur web ;{" "}
                      <C>pg_dump</C> / <C>pg_restore</C> installés pour les sauvegardes SQL natives.
                    </p>
                  </Step>
                </div>

                <Callout tone="warn" title="Un seul planificateur">
                  N&apos;exécutez qu&apos;<strong>un seul</strong> scheduler (une seule machine / un seul conteneur) —
                  sinon les sauvegardes planifiées se déclenchent en double.
                </Callout>
                <p className="text-sm">
                  Une image et une configuration <strong>Docker</strong> (services app / worker / scheduler / PostgreSQL)
                  sont fournies — voir le{" "}
                  <a href={`${GITHUB_URL}/blob/main/documentations/exploitation/deploiement.md`} target="_blank" rel="noopener noreferrer">guide de déploiement</a>.
                </p>
              </DocSection>

              {/* 7. Architecture */}
              <DocSection id="architecture" eyebrow="Comprendre" title="Comment l'application est construite">
                <p>
                  Dalibi est un <strong>monolithe modulaire</strong> : une seule application Laravel qui rend directement
                  des pages React via <strong>Inertia.js</strong>. Il n&apos;y a donc <strong>pas d&apos;API REST séparée
                  pour l&apos;interface</strong> — le contrôleur renvoie une page et ses données en une fois. Une API REST
                  distincte existe uniquement pour le <strong>portail parents/élèves</strong> (voir la section API). La
                  logique métier est regroupée dans des <strong>services</strong>, et l&apos;accès est filtré par
                  permission à chaque route.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <ConceptCard icon={Layers3} title="Modules">
                    Un contrôleur et un jeu de pages par module ; la navigation (<C>menu.ts</C>) est la source unique des
                    entrées, filtrée par permission.
                  </ConceptCard>
                  <ConceptCard icon={Workflow} title="Services métier">
                    La logique complexe (paie, moyennes, compta, PDF…) vit dans des services testables, réutilisés par
                    les contrôleurs et les commandes.
                  </ConceptCard>
                  <ConceptCard icon={Boxes} title="Front">
                    React 19 + TypeScript dans <C>resources/js/pages</C>, design-system maison, listes normalisées
                    (filtres + bouton « Rechercher » + pagination).
                  </ConceptCard>
                  <ConceptCard icon={Database} title="Données">
                    PostgreSQL, migrations Laravel, identifiants <strong>UUID</strong>, journal d&apos;audit des actions,
                    dictionnaire des tables documenté.
                  </ConceptCard>
                </div>

                {/* Cycle d'une requête */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Le cycle d&apos;une requête</h3>
                  <p className="text-sm mb-3">
                    Un clic sur un lien Inertia déclenche une requête serveur classique ; Laravel répond avec la page et
                    ses données, React met à jour l&apos;écran sans rechargement complet.
                  </p>
                  <Code
                    title="De l'URL à l'écran"
                    code={`Navigateur  (Link Inertia)
   │
   ▼
Route  routes/web.php   ──►  middleware  can:view_students
   │
   ▼
Contrôleur  StudentController@index
   │
   ▼
Service métier  ──►  Modèles Eloquent  ──►  PostgreSQL
   │
   ▼
Inertia::render('Eleves/Index', props)
   │
   ▼
Page React  resources/js/pages/Eleves/Index.tsx`}
                  />
                </div>

                {/* Données partagées */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Données partagées à chaque page</h3>
                  <p className="text-sm">
                    Inertia partage automatiquement, sur toutes les pages : l&apos;<strong>utilisateur connecté</strong>,
                    ses <strong>rôles</strong> et la liste de ses <strong>permissions</strong>, ainsi que la{" "}
                    <strong>monnaie</strong> de l&apos;établissement. C&apos;est ce qui permet au front de n&apos;afficher
                    que les menus, cartes et actions autorisés — sans requête supplémentaire.
                  </p>
                </div>

                {/* Structure du code */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Structure du code</h3>
                  <Code
                    title="Arborescence"
                    code={`app/
├── Http/Controllers/   ← 1 contrôleur par écran / ressource
├── Models/             ← entités Eloquent (UUID)
├── Services/           ← logique métier réutilisable et testable
├── Jobs/               ← tâches en file d'attente (sauvegardes, e-mails)
├── Notifications/      ← e-mails (ex. échec de sauvegarde)
└── Constants/          ← Roles, Permissions
resources/js/
├── pages/              ← pages React (Inertia)
├── components/         ← design-system + composants partagés
└── types/menu.ts       ← navigation (source des modules)
routes/web.php          ← routes + gardes  can:*
database/
├── migrations/         ← schéma
└── seeders/            ← données de référence & démo`}
                  />
                </div>

                {/* Services métier */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Les services métier</h3>
                  <p className="text-sm mb-3">
                    Le « cerveau » de l&apos;application. Chaque service isole une logique précise, ce qui la rend
                    testable et réutilisable (contrôleurs, commandes CLI, jobs) :
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {[
                      ["GradingService", "calcul des moyennes et règles de notation (par type de classe, trimestre/semestre)"],
                      ["ReportCardBuilder / BulletinRenderer", "construction des données puis rendu PDF fidèle des bulletins"],
                      ["PayrollService", "paie : ancienneté, CNSS/ITS, génération des bulletins de salaire"],
                      ["AccountingService", "écritures comptables : écolage, dépenses, mouvements de caisse"],
                      ["InvoiceService", "reçus et factures"],
                      ["StatisticsService", "indicateurs de pilotage et exports"],
                      ["DocumentRenderer", "documents PDF (certificats) avec en-tête et filigrane"],
                      ["MatriculeService", "génération des matricules et numéros d'enregistrement"],
                      ["BackupService", "sauvegardes, archives d'année et restauration"],
                    ].map(([name, desc]) => (
                      <li key={name} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span><C>{name}</C> — {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conventions transverses */}
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Conventions transverses</h3>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {[
                      "Identifiants UUID sur toutes les tables (pas d'entiers auto-incrémentés exposés).",
                      "Contrôle d'accès par permission à chaque route (can:*), et permissions partagées au front.",
                      "Journal d'audit : les actions sensibles sont tracées (qui, quoi, quand).",
                      "Listes normalisées : filtres + bouton « Rechercher » explicite + pagination, partout.",
                      "Files d'attente (e-mails, sauvegardes manuelles) + planificateur (tâches automatiques).",
                      "Stockage séparé : disque media (public) et disque secure (privé), local ou S3/R2.",
                      "Observabilité optionnelle : logs JSON (Loki/Grafana) + capture d'exceptions (Sentry/GlitchTip).",
                    ].map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DocSection>

              {/* 7bis. Les modules en détail */}
              <DocSection id="modules" eyebrow="Comprendre" title="Les modules en détail">
                <p>
                  Dalibi s&apos;organise en modules accessibles depuis le menu latéral. Chacun regroupe des fonctions
                  cohérentes, filtrées par vos permissions. Voici ce que couvre chaque module.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 not-prose">
                  {modules.map((m) => (
                    <div key={m.title} className="card p-5 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <m.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground">{m.title}</h3>
                      </div>
                      <p className="text-sm text-muted mb-3">{m.purpose}</p>
                      <ul className="mt-auto space-y-1.5 text-sm text-muted">
                        {m.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DocSection>

              {/* 8. Rôles & permissions */}
              <DocSection id="roles" eyebrow="Comprendre" title="Rôles & permissions">
                <p>
                  L&apos;accès est <strong>piloté par les permissions</strong> (<C>{"{capacité}_{module}"}</C>, ex.{" "}
                  <C>view_students</C>, <C>create_marks</C>, <C>delete_backups</C>) — environ <strong>145</strong> au
                  total. Un rôle est simplement un ensemble de permissions ; il n&apos;existe pas de super-rôle magique.
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Administrateur</strong> — accès complet, configuration, gestion des comptes.</li>
                  <li><strong>Directeur</strong> — école, années, classes, suivi, rapports.</li>
                  <li><strong>Enseignant</strong> — ses classes, notes, présences.</li>
                  <li><strong>Comptable</strong> — finances, rapports, exports.</li>
                  <li><strong>Secrétaire</strong> — élèves & inscriptions, utilisateurs.</li>
                  <li><strong>Parent / Élève</strong> — portail de consultation.</li>
                </ul>
                <p className="text-sm">
                  Vous pouvez créer un <strong>rôle personnalisé</strong> depuis Administration → Rôles & permissions : il
                  fonctionne aussitôt (menus, routes, cartes). Détails :{" "}
                  <a href={`${GITHUB_URL}/blob/main/documentations/administration/roles-permissions.md`} target="_blank" rel="noopener noreferrer">guide rôles & permissions</a>.
                </p>

                <div className="pt-2">
                  <h3 className="font-semibold text-foreground mb-2">Ce que le contrôle d&apos;accès garantit</h3>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {[
                      "Une permission par verbe : un droit de lecture (view_*) ne permet jamais de créer, modifier ou supprimer.",
                      "Cloisonnement enseignant : un professeur ne saisit notes et appels que dans les classes où il est affecté.",
                      "Contrôle d'appartenance : on ne note ni ne pointe qu'un élève réellement inscrit dans la classe visée.",
                      "Comptes à privilèges : seul un administrateur peut modifier ou supprimer un compte administrateur.",
                      "Un mot de passe défini par un tiers doit être changé à la première connexion.",
                    ].map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DocSection>

              {/* 9. Stockage */}
              <DocSection id="stockage" eyebrow="Comprendre" title="Stockage & fichiers">
                <p>Deux disques applicatifs séparent les usages :</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <C>media</C> — fichiers <strong>publics</strong> (logos, filigranes, exports) servis via{" "}
                    <C>/storage</C>.
                  </li>
                  <li>
                    <C>secure</C> — fichiers <strong>sensibles</strong> (photos d&apos;élèves, pièces des dossiers),
                    stockés hors du dossier public et servis uniquement via des routes authentifiées.
                  </li>
                </ul>
                <p className="text-sm">
                  Les deux suivent la même configuration centralisée : <strong>local</strong> par défaut, ou{" "}
                  <strong>S3 / Cloudflare R2</strong> activé depuis Paramètres → Fichiers & Stockage.
                </p>
              </DocSection>

              {/* 10. Sauvegardes */}
              <DocSection id="sauvegardes" eyebrow="Exploiter" title="Sauvegardes & restauration">
                <p>
                  Depuis Paramètres → Sauvegardes, aux formats <strong>JSON</strong> et <strong>SQL</strong>. Conçu pour
                  tenir sur plusieurs années : écriture <strong>en flux</strong>, compression <strong>gzip</strong>, et{" "}
                  <C>pg_dump</C> natif sur PostgreSQL (repli portable sinon).
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Médias au choix</strong> : archive <C>.zip</C> regroupant la base + les fichiers uploadés.</li>
                  <li><strong>Archives par année scolaire</strong> : instantané verrouillé, exclu de la rétention (manuel ou à la clôture d&apos;année).</li>
                  <li><strong>Intégrité</strong> : empreinte SHA-256 vérifiable + alerte e-mail en cas d&apos;échec.</li>
                  <li><strong>Restauration</strong> : <C>.json</C>, <C>.sql</C>, <C>.gz</C>, <C>.dump</C>, <C>.zip</C> — avec sauvegarde de sécurité automatique préalable, et restauration <strong>sélective par table</strong>.</li>
                  <li><strong>Planification</strong> : quotidienne/hebdomadaire + rétention (les archives verrouillées ne sont jamais purgées).</li>
                </ul>
                <Code shell code={`php artisan backup:run --formats=json,sql`} />
              </DocSection>

              {/* 11. API */}
              <DocSection id="api" eyebrow="Intégrer" title="API du portail parents & élèves">
                <p>
                  Le portail expose une <strong>API REST</strong> (<C>/api/v1</C>) authentifiée par token{" "}
                  <strong>Laravel Sanctum</strong> : notes, bulletins PDF, présences, scolarité et calendrier. La
                  spécification <strong>OpenAPI 3.1</strong> est fournie dans le dépôt.
                </p>
                <Callout tone="info" title="Le portail se configure dans les réglages — désactivé par défaut">
                  Le portail (et donc son API) s&apos;active <strong>au niveau de l&apos;école</strong> depuis
                  Paramètres → École. Surtout, l&apos;accès de chaque parent/élève est <strong>désactivé par
                  défaut</strong> : il faut l&apos;<strong>activer compte par compte</strong> depuis Administration →
                  Accès portail. Tant qu&apos;un compte n&apos;est pas activé, il ne peut ni se connecter au portail ni
                  consommer l&apos;API.
                </Callout>
                <p className="text-sm">
                  <strong>Côté parent/élève</strong> : une fois son accès activé (Administration → Accès portail), la
                  personne reçoit ses identifiants, se connecte au portail et consulte — pour chacun de ses enfants — ses
                  notes, bulletins, présences, la scolarité et le calendrier. Aucune saisie : c&apos;est une vue en
                  lecture seule alimentée par l&apos;API.
                </p>
                <a href={OPENAPI_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-fit">
                  <Server className="w-4 h-4" /> Spécification OpenAPI
                </a>
              </DocSection>

              {/* Sécurité */}
              <DocSection id="securite" eyebrow="Exploiter" title="Sécurité & bonnes pratiques">
                <ul className="space-y-1.5 text-sm text-muted">
                  {[
                    "Les comptes de démonstration sont bloqués en production et imposent un changement de mot de passe à la première connexion — ne contournez pas ce garde-fou.",
                    "APP_DEBUG=false en production, et ne commitez jamais l'APP_KEY ni le .env.",
                    "Servez toujours en HTTPS ; forcez la redirection HTTP → HTTPS.",
                    "Activez la double authentification (2FA) sur les comptes à privilèges (administrateur, direction).",
                    "Appliquez le moindre privilège : donnez à chaque rôle uniquement les permissions nécessaires.",
                    "Écritures financières protégées : encaissements et cycles de paie sont validés sous verrou — un double-clic ne peut pas encaisser ni décaisser deux fois.",
                    "La preuve d'un encaissement est indestructible : une inscription portant des paiements ne peut pas être supprimée.",
                    "Sauvegardez régulièrement et hors-site (règle 3-2-1) ; testez la restauration et l'intégrité (SHA-256).",
                    "Les pièces sensibles (photos, justificatifs) sont déjà sur un disque privé (secure), hors du dossier public.",
                    "Le journal d'audit trace les actions : consultez-le en cas d'incident.",
                  ].map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </DocSection>

              {/* Mise à jour */}
              <DocSection id="maj" eyebrow="Exploiter" title="Mettre à jour l'application">
                <Callout tone="warn" title="Sauvegardez d'abord">
                  Faites une sauvegarde (base + médias) avant toute mise à jour, et lisez les notes de version.
                </Callout>
                <Code
                  shell
                  code={`# 1. Récupérer la nouvelle version
git pull

# 2. Dépendances
composer install --no-dev --optimize-autoloader
npm ci && npm run build

# 3. Base de données
php artisan migrate --force

# 4. Rafraîchir les caches
php artisan optimize:clear
php artisan optimize

# 5. Redémarrer le worker (recharge le code)
php artisan queue:restart`}
                />
              </DocSection>

              {/* Dépannage */}
              <DocSection id="depannage" eyebrow="Aide" title="Dépannage (problèmes fréquents)">
                <div className="space-y-4">
                  {[
                    ["Les sauvegardes ou e-mails restent « en attente »", "Le worker de file d'attente ne tourne pas. Lancez php artisan queue:work (et supervisez-le en service)."],
                    ["Logos / images en 404", "Le lien symbolique manque : php artisan storage:link."],
                    ["Erreur 500 / « Permission denied » à l'écriture", "Droits insuffisants sur storage/ et bootstrap/cache/ pour l'utilisateur du serveur web."],
                    ["La sauvegarde SQL échoue en production", "pg_dump / pg_restore ne sont pas installés. Installez le client PostgreSQL (l'app bascule sinon sur l'export portable)."],
                    ["Erreur 419 « Page expirée » à la connexion", "Problème de session/CSRF : vérifiez APP_URL, le domaine des cookies et que le proxy transmet bien le HTTPS (X-Forwarded-Proto)."],
                    ["Styles/JS non chargés ou « contenu mixte »", "APP_URL doit être en https et le reverse proxy doit transmettre X-Forwarded-Proto."],
                    ["Les tâches planifiées ne s'exécutent pas", "Le cron du planificateur est absent : ajoutez * * * * * php artisan schedule:run."],
                    ["Anciennes pages après un déploiement", "Videz les caches : php artisan optimize:clear puis php artisan optimize."],
                  ].map(([q, a]) => (
                    <div key={q} className="card p-4">
                      <p className="font-semibold text-foreground text-sm mb-1">{q}</p>
                      <p className="text-sm text-muted">{a}</p>
                    </div>
                  ))}
                </div>
              </DocSection>

              {/* Glossaire */}
              <DocSection id="glossaire" eyebrow="Référence" title="Glossaire métier">
                <p>
                  Dalibi gère <strong>un ou plusieurs établissements</strong> (table <C>schools</C>) ; certains paramètres
                  (modèles de bulletin et de documents, en-tête, calcul des moyennes, examens officiels, emploi du temps)
                  sont définis <strong>par école</strong>.
                </p>
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {[
                    ["Année académique", "Le cycle scolaire (ex. 2024-2025). Une seule est active à la fois."],
                    ["Période", "Découpage de l'année : trimestre ou semestre, selon le type de classe."],
                    ["Type de classe", "Catégorie (maternelle, primaire, collège…) qui pilote les règles de moyennes."],
                    ["Structure / catégorie de frais", "Le barème d'écolage et sa ventilation, par classe."],
                    ["Écolage", "Les frais de scolarité facturés et encaissés."],
                    ["Bulletin", "Le relevé de notes périodique, généré en PDF depuis un modèle."],
                    ["Matricule", "L'identifiant unique d'un utilisateur ou d'un élève (préfixe par rôle)."],
                    ["Rôle / Permission", "Un rôle est un ensemble de permissions ; l'accès est piloté par permissions."],
                    ["Caisse", "Un compte de trésorerie (espèces, Mobile Money…) pour encaissements et dépenses."],
                    ["Rubrique de paie", "Un élément de bulletin de salaire (gain ou retenue)."],
                    ["Portail", "L'espace de consultation des parents/élèves, alimenté par l'API."],
                  ].map(([term, def]) => (
                    <div key={term}>
                      <dt className="font-semibold text-foreground">{term}</dt>
                      <dd className="text-muted">{def}</dd>
                    </div>
                  ))}
                </dl>
              </DocSection>

              {/* 12. Contribuer */}
              <DocSection id="contribuer" eyebrow="Aller plus loin" title="Contribuer & ressources">
                <p>
                  Dalibi est ouvert aux contributions. Le workflow : branches de fonctionnalité vers <C>develop</C>, PR,
                  puis <C>main</C>. Les tests se lancent avec <C>php artisan test</C>.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <SiGithub className="w-4 h-4" /> Dépôt GitHub
                  </a>
                  <a href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Terminal className="w-4 h-4" /> Guide de contribution
                  </a>
                  <a href={`${GITHUB_URL}/blob/main/documentations/README.md`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <BookOpen className="w-4 h-4" /> Toute la documentation
                  </a>
                </div>
                <Callout tone="info" title="Licence GPL v3">
                  Code ouvert et auditable, librement utilisable et modifiable ; il ne peut être revendu comme produit
                  propriétaire.
                </Callout>
              </DocSection>

              <div className="pt-4">
                <a href="#introduction" className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <Rocket className="w-4 h-4" /> Revenir au début
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
