import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Approach() {
  const { t } = useI18n();
  return (
    <section id="approach" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gradient">{t.approach.tag}</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{t.approach.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.approach.desc}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-accent opacity-30 md:block" />
          {t.approach.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative rounded-3xl border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent font-display text-xl font-bold text-white shadow-glow">
                  {step.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
