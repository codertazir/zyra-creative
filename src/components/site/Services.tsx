import { Globe, Palette, Compass, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const icons = [Globe, Palette, Compass, HeartHandshake];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gradient">{t.services.tag}</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{t.services.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.services.desc}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent">
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.desc}</p>
                  <span className="mt-6 inline-block text-4xl font-bold text-muted-foreground/15">0{i + 1}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
