import { useEffect, useState } from "react";
import { motion } from "motion/react";
import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="relative flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-medium">
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className="absolute inset-y-0.5 w-[calc(50%-0.125rem)] rounded-full bg-gradient-accent"
        style={{ [lang === "en" ? "insetInlineStart" : "insetInlineEnd"]: "0.125rem" } as React.CSSProperties}
      />
      <button
        onClick={() => setLang("en")}
        className={cn("relative z-10 w-9 rounded-full py-1.5 transition-colors", lang === "en" ? "text-white" : "text-muted-foreground")}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ar")}
        className={cn("relative z-10 w-9 rounded-full py-1.5 font-arabic transition-colors", lang === "ar" ? "text-white" : "text-muted-foreground")}
      >
        ع
      </button>
    </div>
  );
}

export function Navbar() {
  const { t, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#approach", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass shadow-card" : "border border-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img src={mark} alt="Zyra Creative" width={34} height={34} className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight">
            {lang === "en" ? "Zyra" : "زيرا"}
            <span className="text-gradient"> {lang === "en" ? "Creative" : "إبداع"}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
