/** Configuration SEO centrale du site vitrine Dalibi. */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dalibi.wearekarfi.dev"
).replace(/\/$/, "");

export const SITE_NAME = "Dalibi";

export const SITE_TAGLINE =
  "Logiciel libre de gestion scolaire pour le Togo et l'Afrique de l'Ouest";

export const SITE_DESCRIPTION =
  "Dalibi est une application open source complète de gestion d'école (primaire, collège, lycée) conçue pour le Togo et l'Afrique de l'Ouest : inscriptions, notes et bulletins (trimestre/semestre), examens officiels (CEPD, BEPC, BAC), écolage et Mobile Money, présences, statistiques MEPSTA, documents et portail parents. Gratuite, auto-hébergeable, sous licence GPL v3.";

/** Mots-clés cibles (SEO). */
export const SITE_KEYWORDS = [
  "logiciel de gestion scolaire",
  "logiciel gestion école open source",
  "application de gestion d'école",
  "gestion scolaire Togo",
  "gestion scolaire Afrique de l'Ouest",
  "logiciel école gratuit",
  "logiciel scolaire open source",
  "gestion des notes et bulletins",
  "logiciel bulletins scolaires",
  "écolage Mobile Money",
  "examens officiels CEPD BEPC BAC",
  "logiciel établissement scolaire",
  "SIGE école",
  "MEPSTA statistiques scolaires",
  "Dalibi",
];

/** Image utilisée pour les partages (Open Graph / Twitter) — PNG 1200×630. */
export const OG_IMAGE = "/dalibi-showcase.png";
export const OG_IMAGE_ALT = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Réseaux / profils officiels (schema.org sameAs). */
export const SITE_SAMEAS = ["https://github.com/wearedalibi/dalibi"];

/** Éditeur / mainteneur. */
export const PUBLISHER_NAME = "Karfi";
export const PUBLISHER_URL = "https://wearekarfi.dev";
