import { pageMeta } from "@/lib/seo";
import {
  BookOpen, Boxes, Database, GraduationCap, Layers3, Rocket,
  Server, ShieldCheck, Terminal, Wallet, Workflow,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
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
  { id: "demarrage", label: "Premier démarrage" },
  { id: "architecture", label: "Comprendre l'app" },
  { id: "roles", label: "Rôles & permissions" },
  { id: "stockage", label: "Stockage & fichiers" },
  { id: "sauvegardes", label: "Sauvegardes" },
  { id: "api", label: "API du portail" },
  { id: "contribuer", label: "Contribuer" },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHero
        badge={{ label: "Documentation", icon: BookOpen }}
        title="Prise en main de Dalibi, de A à Z"
        description="Installez, configurez, lancez et comprenez Dalibi. Ce guide vous mène du dépôt vide à une instance fonctionnelle que vous maîtrisez."
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
                      code={`# Tables + rôles/permissions + (optionnel) données de démo
php artisan migrate --seed
# Lien symbolique pour les fichiers publics
php artisan storage:link`}
                    />
                    <p className="text-sm">
                      Le seeding crée les <strong>rôles et permissions</strong>. Le seeder de démo (
                      <C>SchoolDemoSeeder</C>) ajoute une école et des données d&apos;exemple.
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
                  <a href={`${GITHUB_URL}/blob/main/docs/exploitation/deploiement.md`} target="_blank" rel="noopener noreferrer">guide de déploiement</a>.
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
                  <a href={`${GITHUB_URL}/blob/main/docs/getting-started/configuration-env.md`} target="_blank" rel="noopener noreferrer">référence complète du <C>.env</C></a>.
                </p>
              </DocSection>

              {/* 6. Premier démarrage */}
              <DocSection id="demarrage" eyebrow="Étape 4" title="Premier démarrage dans l'application">
                <p>
                  L&apos;inscription publique est <strong>désactivée</strong> : les comptes sont créés par un
                  administrateur. Pour créer le <strong>premier administrateur</strong>, utilisez Tinker :
                </p>
                <Code
                  shell
                  title="php artisan tinker"
                  code={`$u = App\\Models\\User::create([
    'firstname' => 'Admin',
    'lastname'  => 'École',
    'email'     => 'admin@monecole.tg',
    'password'  => bcrypt('motdepasse'),
]);
$u->assignRole(App\\Constants\\Roles::ADMINISTRATOR);`}
                />
                <p>Connectez-vous, puis configurez l&apos;école dans l&apos;ordre logique :</p>
                <div className="space-y-5 pt-1">
                  <Step n={1} title="Paramétrer l'établissement">
                    École (nom, logo, en-tête des documents), <strong>année académique</strong> active, périodes
                    (trimestres/semestres), types de classes, classes et matières.
                  </Step>
                  <Step n={2} title="Définir la scolarité financière">
                    Catégories et <strong>structures de frais</strong>, bourses éventuelles, caisses.
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
              </DocSection>

              {/* 7. Architecture */}
              <DocSection id="architecture" eyebrow="Comprendre" title="Comment l'application est construite">
                <p>
                  Dalibi est un <strong>monolithe modulaire</strong> : une seule application Laravel rend les pages React
                  via Inertia (pas d&apos;API REST séparée pour l&apos;interface). La logique métier est regroupée dans des{" "}
                  <strong>services</strong> dédiés, et l&apos;accès est filtré par permissions à chaque route.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ConceptCard icon={Layers3} title="Modules">
                    Élèves, Notes & bulletins, Examens, Présences, Comptabilité, Personnel & paie, Archives, Emploi du
                    temps, Statistiques, Administration, Paramètres.
                  </ConceptCard>
                  <ConceptCard icon={Workflow} title="Services métier">
                    <C>GradingService</C> (moyennes/bulletins), <C>PayrollService</C> (paie), <C>BackupService</C>
                    {" "}(sauvegardes), <C>MatriculeService</C> (identifiants).
                  </ConceptCard>
                  <ConceptCard icon={Boxes} title="Front">
                    Pages React/TS dans <C>resources/js/pages</C>, design-system maison, listes normalisées
                    (filtres + bouton « Rechercher »).
                  </ConceptCard>
                  <ConceptCard icon={Database} title="Données">
                    PostgreSQL, migrations Laravel, identifiants UUID, dictionnaire des tables documenté dans le dépôt.
                  </ConceptCard>
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
                  <a href={`${GITHUB_URL}/blob/main/docs/administration/roles-permissions.md`} target="_blank" rel="noopener noreferrer">guide rôles & permissions</a>.
                </p>
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
                <a href={OPENAPI_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-fit">
                  <Server className="w-4 h-4" /> Spécification OpenAPI
                </a>
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
                  <a href={`${GITHUB_URL}/blob/main/docs/index.md`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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
