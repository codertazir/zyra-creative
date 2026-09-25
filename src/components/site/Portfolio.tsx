import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

import studentsHub from "@/assets/portfolio/students-hub.jpg";
import tai from "@/assets/portfolio/tai.jpg";
import flp from "@/assets/portfolio/flp.jpg";
import studentsClub from "@/assets/portfolio/students-club.jpg";
import josh from "@/assets/portfolio/josh.jpg";

const projects = [
  { name: "The Students Hub", nameAr: "ذا ستودنتس هاب", href: "https://the-students-hub-isgj.vercel.app/", img: studentsHub },
  { name: "Tai", nameAr: "تاي", href: "https://tai-prototype.vercel.app/", img: tai },
  { name: "FLP", nameAr: "إف إل بي", href: "https://flp-prototype.vercel.app/", img: flp },
  { name: "The Students Club", nameAr: "ذا ستودنتس كلوب", href: "https://the-students-club.vercel.app/", img: studentsClub },
  { name: "Josh", nameAr: "جوش", href: "https://joshksa-prototype.vercel.app/", img: josh },
];

export function Portfolio() {
  const { t, lang } = useI18n();
  return (
    <section id="portfolio" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gradient">{t.portfolio.tag}</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{t.portfolio.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.portfolio.desc}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={lang === "en" ? p.name : p.nameAr}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-lg font-semibold">
                    {lang === "en" ? p.name : p.nameAr}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-gradient">
                    {t.portfolio.view}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

          {/* "And there's more" card */}
          <Reveal delay={(projects.length % 3) * 0.08}>
            <a
              href="#contact"
              className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-border bg-gradient-soft p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-accent opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-50" />
              <h3 className="font-display text-xl font-semibold">{t.portfolio.more.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.portfolio.more.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                {t.portfolio.more.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-rotate-45" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
