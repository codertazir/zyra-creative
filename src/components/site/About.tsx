import { Check } from "lucide-react";
import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();
  const points = [t.about.point1, t.about.point2, t.about.point3];
  return (
    <section id="about" className="px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 shadow-card">
            <div className="absolute inset-0 -z-10 bg-gradient-soft" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
            <img src={mark} alt="Zyra Creative" width={120} height={120} loading="lazy" className="h-24 w-24 animate-float-slow" />
            <p className="mt-8 font-display text-2xl font-semibold leading-snug">
              {t.about.title}
            </p>
            <div className="mt-8 space-y-3">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-accent text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-widest text-gradient">{t.about.tag}</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.about.title}</h2>
          <p className="mt-5 text-muted-foreground">{t.about.p1}</p>
          <p className="mt-4 text-muted-foreground">{t.about.p2}</p>
        </Reveal>
      </div>
    </section>
  );
}
