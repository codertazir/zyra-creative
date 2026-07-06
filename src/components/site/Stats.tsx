import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.items.map((s, i) => (
          <Reveal key={i} delay={i * 0.06} className="bg-card">
            <div className="p-8 text-center transition-colors hover:bg-secondary/40">
              <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
