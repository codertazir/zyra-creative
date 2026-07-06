import { useI18n } from "@/lib/i18n";

export function Marquee() {
  const { t } = useI18n();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="border-y border-border bg-secondary/30 py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pe-10">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-medium text-muted-foreground">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
