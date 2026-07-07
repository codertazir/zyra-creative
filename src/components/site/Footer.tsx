import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();
  return (
    <div className="relative inline-flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-medium">
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className="absolute inset-y-0.5 w-[calc(50%-0.125rem)] rounded-full bg-gradient-accent"
        style={{ [theme === "dark" ? "insetInlineStart" : "insetInlineEnd"]: "0.125rem" } as React.CSSProperties}
      />
      <button
        onClick={() => setTheme("dark")}
        aria-label={t.footer.dark}
        className={cn("relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors", theme === "dark" ? "text-white" : "text-muted-foreground")}
      >
        <Moon className="h-3.5 w-3.5" />
        {t.footer.dark}
      </button>
      <button
        onClick={() => setTheme("light")}
        aria-label={t.footer.light}
        className={cn("relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors", theme === "light" ? "text-white" : "text-muted-foreground")}
      >
        <Sun className="h-3.5 w-3.5" />
        {t.footer.light}
      </button>
    </div>
  );
}

export function Footer() {
  const { t, lang } = useI18n();
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#approach", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];
  const socials = ["Instagram", "Behance", "LinkedIn", "X"];

  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={mark} alt="Zyra Creative" width={34} height={34} loading="lazy" className="h-8 w-8" />
              <span className="font-brand text-lg font-bold tracking-tight text-gradient">
                {lang === "en" ? "Zyra Creative" : "زيرا إبداع"}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.footer.theme}</h4>
              <div className="mt-3">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.nav}</h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t.footer.social}</h4>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} {lang === "en" ? "Zyra Creative" : "زيرا إبداع"}. {t.footer.rights}</span>
          <span>{t.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}
