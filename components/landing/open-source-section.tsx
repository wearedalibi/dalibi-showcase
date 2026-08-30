import { ArrowRight, BadgeCheck, Lock, ShieldCheck, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { OpenSourceIllustration } from "./illustrations";

const points = [
  { icon: BadgeCheck, title: "Licence GPL v3", text: "Code source ouvert, auditable et librement réutilisable." },
  { icon: Lock, title: "Données souveraines", text: "Auto-hébergé sur votre serveur : vos données restent chez vous." },
  { icon: ShieldCheck, title: "Sans dépendance propriétaire", text: "Aucun éditeur ne vous enferme : vous gardez le contrôle." },
  { icon: Users, title: "Communauté & contributions", text: "Améliorations, traductions locales et corrections ouvertes à tous." },
];

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex justify-center order-2 lg:order-1 gs-fade-up">
            <OpenSourceIllustration className="w-full max-w-md h-auto" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3 gs-fade-up">Open source</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
              Un logiciel libre, des données souveraines
            </h2>
            <p className="text-lg text-muted mb-8 gs-fade-up">
              Dalibi est <strong className="text-foreground/90">open source sous licence GPL v3</strong> et
              entièrement auto-hébergeable. Transparence du code, indépendance et contrôle total de vos
              données scolaires.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 gs-stagger-up">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary h-fit shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{p.title}</div>
                    <div className="text-sm text-muted">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/wearedalibi/dalibi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gs-fade-up"
            >
              <SiGithub className="w-4 h-4" /> Explorer le code sur GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
