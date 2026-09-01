import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/** Bloc de code / terminal, dans le style de la page. */
export function Code({
  code,
  title = "Terminal",
  shell = false,
}: {
  code: string;
  title?: string;
  shell?: boolean;
}) {
  const lines = code.replace(/\n+$/, "").split("\n");
  return (
    <div className="card overflow-hidden my-4">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-muted">{title}</span>
      </div>
      <pre className="p-4 text-[13px] leading-relaxed font-mono text-foreground/90 overflow-x-auto whitespace-pre">
        {lines.map((line, i) => (
          <div key={i}>
            {shell && line.trim() && !line.startsWith("#") && (
              <span className="text-primary select-none">$ </span>
            )}
            <span className={line.startsWith("#") ? "text-muted" : undefined}>{line || " "}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

/** Code en ligne. */
export function C({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-[0.85em] px-1.5 py-0.5 rounded bg-surface border border-border text-foreground/90">
      {children}
    </code>
  );
}

/** Encadré d'information / avertissement. */
export function Callout({
  title,
  tone = "info",
  children,
}: {
  title?: string;
  tone?: "info" | "warn";
  children: ReactNode;
}) {
  const tones = {
    info: "border-primary/30 bg-primary/5",
    warn: "border-amber-400/50 bg-amber-400/10",
  };
  return (
    <div className={`rounded-xl border p-4 text-sm ${tones[tone]}`}>
      {title && <p className="font-semibold text-foreground mb-1">{title}</p>}
      <div className="text-muted [&_a]:text-primary [&_a]:font-medium">{children}</div>
    </div>
  );
}

/** Section de documentation avec ancre. */
export function DocSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted [&_strong]:text-foreground/90 [&_a]:text-primary [&_a]:font-medium [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}

/** Étape numérotée. */
export function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
        {n}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
}

/** Petite carte « feature / concept ». */
export function ConceptCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card p-5">
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h3 className="font-bold text-sm mb-1 text-foreground">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{children}</p>
    </div>
  );
}
