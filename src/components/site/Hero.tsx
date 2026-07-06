import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-36 sm:pt-44">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-soft blur-[90px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t.hero.title1}
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#approach"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="mx-auto mt-16 flex max-w-4xl justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
          <img
            src={mark}
            alt="Zyra Creative logo"
            width={220}
            height={220}
            className="h-40 w-40 animate-float-slow sm:h-56 sm:w-56"
          />
        </div>
      </motion.div>

      <div className="mt-14 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        {t.hero.scroll}
      </div>
    </section>
  );
}
