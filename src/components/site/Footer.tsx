import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";

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
              <span className="font-display text-lg font-bold tracking-tight">
                {lang === "en" ? "Zyra" : "زيرا"}
                <span className="text-gradient"> {lang === "en" ? "Creative" : "إبداع"}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>
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
