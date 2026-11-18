import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiInertia,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  DatabaseBackup,
  Gauge,
  GraduationCap,
  HandCoins,
  KeyRound,
  Lock,
  ReceiptText,
  School,
  ShieldCheck,
  ShieldUser,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export type FeatureColumn = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  points: string[];
};


export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

export type ModuleItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  subtitle: string;
  color: string;
  iconColor: string;
  iconBg: string;
  points: string[];
};

export type QuickStat = {
  value: string;
  label: string;
};

export type AudienceCard = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  points: string[];
};

export const audiences: AudienceCard[] = [
  {
    id: "direction",
    title: "Direction & établissement",
    tagline: "Piloter l'école en temps réel",
    icon: Building2,
    points: [
      "Tableau de bord : effectifs, présences, finances",
      "Alertes sur les retards de paiement",
      "Bulletins validés et statistiques par classe",
    ],
  },
  {
    id: "enseignants",
    title: "Enseignants",
    tagline: "La saisie des notes, simplifiée",
    icon: GraduationCap,
    points: [
      "Tableau de bord personnalisé : emploi du temps du jour, notes à saisir",
      "Moyennes pondérées calculées automatiquement",
      "Examens officiels et réclamations de notes",
    ],
  },
  {
    id: "administration",
    title: "Secrétariat & comptabilité",
    tagline: "Inscriptions et trésorerie maîtrisées",
    icon: ReceiptText,
    points: [
      "Inscriptions, dossiers élèves et imports CSV",
      "Frais, tranches de paiement et reçus à code-barres",
      "Documents et certificats PDF en un clic",
    ],
  },
  {
    id: "familles",
    title: "Parents & élèves",
    tagline: "Un portail dédié aux familles",
    icon: Users,
    points: [
      "Synthèse par enfant : moyenne, assiduité, écolage, dernier bulletin",
      "Notes, bulletins PDF, présences et solde en temps réel",
      "Accès sécurisé par compte parent ou élève",
    ],
  },
];

export type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

export const techStack: TechItem[] = [
  { name: "Laravel 12", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP 8.3", icon: SiPhp, color: "#777BB4" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Inertia.js", icon: SiInertia, color: "#9553E9" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS 4", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

export const featureColumns: FeatureColumn[] = [
  {
    title: "Pilotage",
    subtitle: "Piloter l'ecole en temps reel",
    icon: Gauge,
    points: [
      "Tableaux de bord adaptes au role, filtre par annee academique",
      "Alertes sur les eleves en retard de paiement",
      "Statistiques MEPSTA : effectifs, parite, recouvrement, examens",
      "Roles personnalisables sans code, 2FA pour les comptes sensibles",
    ],
  },
  {
    title: "Pedagogie",
    subtitle: "Trimestre ou semestre, selon le type de classe",
    icon: GraduationCap,
    points: [
      "Cycles trimestre et semestre configurables par type de classe",
      "Moyennes ponderees par coefficients, calcul parametrable",
      "Bulletins figes : mentions configurables, PDF individuel ou toute la classe",
      "Evaluations par classe, examens officiels et reclamations de notes",
    ],
  },
  {
    title: "Productivite",
    subtitle: "Moins de papier, plus de decisions",
    icon: Zap,
    points: [
      "Recus et documents PDF generes en un clic",
      "Exports PDF (effectifs, planning) et journaux financiers",
      "Sauvegardes JSON/SQL planifiees, stockage local ou cloud",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-cost",
    q: "Combien coûte Dalibi ?",
    a: "Dalibi est open source sous licence GPL v3 : gratuit et illimité en auto-hébergement, avec tous les modules inclus. Un accompagnement (déploiement, migration des données, formation, support prioritaire) est proposé sur devis pour les établissements et réseaux scolaires.",
  },
  {
    id: "faq-offline",
    q: "Dalibi fonctionne-t-il sans connexion internet permanente ?",
    a: "Oui. Dalibi peut être déployé sur un serveur local de l'école pour un usage en réseau interne, avec des sauvegardes planifiées (quotidiennes ou hebdomadaires) vers le cloud lorsque la connexion est disponible.",
  },
  {
    id: "faq-trim-sem",
    q: "Peut-on gérer à la fois des trimestres et des semestres ?",
    a: "Oui. Le découpage trimestre/semestre est configurable par type de classe : un même établissement peut faire fonctionner le primaire en trimestres et le lycée en semestres. Le calcul des moyennes est paramétrable (coefficients, seuils, mentions).",
  },
  {
    id: "faq-multi",
    q: "Peut-on gérer plusieurs établissements ?",
    a: "Oui. Dalibi est multi-écoles (primaire, collège, lycée). Chaque établissement a son paramétrage propre : nom, code, devise, logo, années académiques, types de classes et niveaux.",
  },
  {
    id: "faq-import",
    q: "Comment inscrire rapidement de nombreux élèves ?",
    a: "Vous pouvez importer les élèves en masse via un fichier CSV, promouvoir une classe entière vers le niveau supérieur en une opération, et réaffecter un élève vers une autre classe. Chaque élève dispose d'une fiche complète avec photo et dossier de pièces justificatives (stockage privé).",
  },
  {
    id: "faq-exams",
    q: "Les examens officiels (CEPD, BEPC, Baccalauréat) sont-ils pris en charge ?",
    a: "Oui. Une section dédiée gère les examens officiels rattachés à l'année académique active : liste filtrable (type, session, statut), gestion des inscriptions et des résultats (admis). En interne, les évaluations se créent via des modèles déployés vers les classes, avec planning et export PDF.",
  },
  {
    id: "faq-tresorerie",
    q: "Comment fonctionne la gestion de l'écolage ?",
    a: "Vous définissez des structures de frais par catégorie et par classe, avec des tranches de paiement (échéancier) contrôlées côté serveur. Chaque paiement génère un reçu numéroté avec code-barres et code de vérification anti-falsification. Le tout est suivi par caisses, avec bourses et journal des transactions.",
  },
  {
    id: "faq-portail",
    q: "Les parents et les élèves ont-ils un espace dédié ?",
    a: "Oui. Un portail (API) donne aux familles l'accès aux notes, bulletins (PDF), présences, scolarité/solde et calendrier. Les comptes tuteurs sont créés par le secrétariat (invitation par e-mail) et les élèves se connectent par matricule. L'accès est strictement cloisonné : un tuteur ne voit que ses enfants.",
  },
  {
    id: "faq-securite",
    q: "La solution est-elle sécurisée ?",
    a: "Dalibi applique une défense en profondeur : contrôle d'accès fin par permission et par module, 5 rôles préconfigurés, authentification à deux facteurs (2FA), fichiers sensibles stockés hors du dossier public et servis via des routes authentifiées, sauvegardes planifiées et base PostgreSQL robuste.",
  },
  {
    id: "faq-stockage",
    q: "Où sont stockés les fichiers et les sauvegardes ?",
    a: "Au choix : en local sur le serveur, ou sur un stockage cloud compatible S3 (AWS S3, Cloudflare R2, MinIO) — la bascule se fait depuis l'interface, sans toucher au .env ni redéployer. Les sauvegardes de la base (JSON et SQL) sont planifiables, avec rétention et restauration depuis l'interface.",
  },
  {
    id: "faq-prerequis",
    q: "Quels sont les prérequis techniques pour l'installer ?",
    a: "Dalibi repose sur Laravel 12 (PHP 8.3+), React 19 + Inertia.js et PostgreSQL 12+. Il faut Composer et Node.js/npm pour l'installation. La première configuration se fait ensuite via un assistant web (façon WordPress) : langue, administrateur, sécurité et école, sans ligne de commande ni identifiant par défaut. Un déploiement Docker est également disponible pour simplifier la mise en production.",
  },
  {
    id: "faq-contribution",
    q: "Comment contribuer au projet ?",
    a: "Le dépôt GitHub accepte les Pull Requests : améliorations de l'interface, traductions et adaptations locales, documentation et optimisations. Le code étant ouvert, il est entièrement auditable.",
  },
];

export const modules: ModuleItem[] = [
  {
    id: "eleves",
    title: "Eleves & Inscriptions",
    icon: School,
    subtitle: "Vie scolaire",
    color: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/15",
    points: [
      "Dossier eleve complet avec photo et pieces justificatives",
      "Import CSV, passage de classe en masse, reaffectation",
      "Effectifs, statistiques et emploi du temps par classe",
    ],
  },
  {
    id: "bulletins",
    title: "Bulletins & Evaluations",
    icon: GraduationCap,
    subtitle: "Pedagogie",
    color: "from-purple-500/20 to-fuchsia-500/10",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/15",
    points: [
      "Saisie des notes par trimestre ou semestre (par type de classe)",
      "Bulletins figes : mentions configurables, PDF par eleve ou toute la classe",
      "Evaluations par classe et examens officiels (CEPD, BEPC, BAC)",
    ],
  },
  {
    id: "tresorerie",
    title: "Tresorerie & Ecolage",
    icon: HandCoins,
    subtitle: "Finances",
    color: "from-fuchsia-500/20 to-pink-500/10",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-500/15",
    points: [
      "Structures de frais et plans de paiement en tranches",
      "Bourses, caisses et journal des transactions",
      "Recus a code-barres avec verification anti-falsification",
    ],
  },
  {
    id: "presences",
    title: "Presences & Permissions",
    icon: UserCheck,
    subtitle: "Suivi quotidien",
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/15",
    points: [
      "Appel par classe, date et seance (matin / apres-midi)",
      "Demandes de permission avec auto-excusement des absences",
      "Statistiques de presence par eleve et par periode",
    ],
  },
  {
    id: "personnel",
    title: "Personnel & Paie",
    icon: Briefcase,
    subtitle: "Ressources humaines",
    color: "from-cyan-500/20 to-sky-500/10",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-500/15",
    points: [
      "Fiches employes, grilles salariales et primes tracees",
      "Cycles de paie mensuels : bulletins PDF, validation et decaissement en caisse",
      "Anciennete, CNSS et ITS calcules automatiquement (parametrables)",
    ],
  },
  {
    id: "documents",
    title: "Documents & Archives",
    icon: ReceiptText,
    subtitle: "Administration",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/15",
    points: [
      "Modeles de documents PDF (certificats, attestations)",
      "Archivage documentaire avec tags et recherche",
      "Stockage local ou S3/R2 et sauvegardes planifiees",
    ],
  },
  {
    id: "securite",
    title: "Securite & Acces",
    icon: ShieldUser,
    subtitle: "Roles & permissions",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/15",
    points: [
      "Controle d'acces fin par permissions et par module",
      "Cinq roles preconfigures, ajustables sans toucher au code",
      "Authentification a deux facteurs (2FA) et multi-etablissements",
    ],
  },
];

export type SecurityFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const securityFeatures: SecurityFeature[] = [
  {
    title: "Permissions par module",
    description:
      "Controle d'acces fin : chaque action (voir, creer, modifier, supprimer) est gouvernee par une permission, du menu jusqu'a la base.",
    icon: ShieldCheck,
  },
  {
    title: "Cinq roles preconfigures",
    description:
      "Administrateur, directeur, enseignant, comptabilite, secretariat — ajustables a la volee, sans toucher au code.",
    icon: ShieldUser,
  },
  {
    title: "Authentification a deux facteurs",
    description:
      "2FA pour les comptes sensibles, limitation des tentatives de connexion et inscription publique desactivee.",
    icon: KeyRound,
  },
  {
    title: "Fichiers sensibles prives",
    description:
      "Photos d'eleves et pieces du dossier stockees hors du dossier public, servies uniquement via des routes authentifiees.",
    icon: Lock,
  },
  {
    title: "Sauvegardes & restauration",
    description:
      "Export JSON/SQL planifie, stockage local ou S3/R2, et restauration de la base depuis l'interface.",
    icon: DatabaseBackup,
  },
  {
    title: "Donnees souveraines",
    description:
      "Auto-hebergement complet sur PostgreSQL : vos donnees restent dans votre etablissement, sans dependance proprietaire.",
    icon: BadgeCheck,
  },
];

export const quickStats: QuickStat[] = [
  { value: "8+", label: "Modules métier" },
  { value: "5", label: "Rôles préconfigurés" },
  { value: "2FA", label: "Sécurité renforcée" },
  { value: "Portail", label: "Parents & élèves" },
];
