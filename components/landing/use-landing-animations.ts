import { useEffect } from "react";

function animateOrb(gsap: typeof import("gsap").gsap, selector: string, x: number, y: number, duration: number) {
  const orb = document.querySelector(selector) as HTMLElement | null;
  if (!orb) return;

  gsap.to(orb, {
    x,
    y,
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

function registerFadeUps(gsap: typeof import("gsap").gsap) {
  const elements = gsap.utils.toArray<HTMLElement>(".gs-fade-up");
  for (const element of elements) {
    gsap.from(element, {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: "power2.out",
      force3D: true,
      immediateRender: false,
      willChange: "transform, opacity",
      onComplete: () => {
        gsap.set(element, { willChange: "auto", clearProps: "transform" });
      },
      scrollTrigger: { trigger: element, start: "top 90%", once: true },
    });
  }
}

function registerStaggerUps(gsap: typeof import("gsap").gsap) {
  const parents = gsap.utils.toArray<HTMLElement>(".gs-stagger-up");
  for (const parent of parents) {
    gsap.from(parent.children, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      force3D: true,
      immediateRender: false,
      willChange: "transform, opacity",
      onComplete: () => {
        gsap.set(parent.children, { willChange: "auto", clearProps: "transform" });
      },
      scrollTrigger: { trigger: parent, start: "top 88%", once: true },
    });
  }
}

function registerModuleCards(gsap: typeof import("gsap").gsap) {
  const cards = gsap.utils.toArray<HTMLElement>(".gs-module-card");
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.07,
        ease: "power2.out",
        force3D: true,
        immediateRender: false,
        willChange: "transform, opacity",
        onComplete: () => {
          gsap.set(card, { willChange: "auto", clearProps: "transform" });
        },
        scrollTrigger: { trigger: card, start: "top 90%", once: true },
      },
    );
  });
}

export function useLandingAnimations(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    let isCancelled = false;

    const loadAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (isCancelled || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        registerFadeUps(gsap);
        registerStaggerUps(gsap);
        registerModuleCards(gsap);
        animateOrb(gsap, "[data-orb='a']", 30, -20, 8);
        animateOrb(gsap, "[data-orb='b']", -25, 18, 10);
      }, rootRef.current);
    };

    void loadAnimations();

    return () => {
      isCancelled = true;
      if (ctx.revert) {
        ctx.revert();
      }
    };
  }, [rootRef]);
}
