import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { NetworkIllustration } from "./illustrations";

export function ContributionSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card relative overflow-hidden p-8 md:p-12">
          <div className="absolute -top-24 left-1/4 w-[36rem] h-[36rem] bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-full -z-10" />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
                Prêt à moderniser votre établissement ?
              </h2>
              <p className="text-lg text-muted mb-8 gs-fade-up">
                Demandez une démo personnalisée, ou explorez le code : Dalibi est open source et
                auto-hébergeable.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start gs-fade-up">
                <a href="mailto:contact@dalibi.app?subject=Demande%20de%20démo%20Dalibi" className="btn btn-primary">
                  Demander une démo <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/wearedalibi/dalibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <SiGithub className="w-4 h-4" /> Voir le dépôt GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center gs-fade-up">
              <NetworkIllustration className="w-full max-w-xs h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
