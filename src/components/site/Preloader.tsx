import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import mark from "@/assets/zyra-mark.png";
import { useI18n } from "@/lib/i18n";

export function Preloader() {
  const { lang } = useI18n();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-accent opacity-30 blur-[100px]" />
          </div>

          <motion.img
            src={mark}
            alt="Zyra Creative"
            width={96}
            height={96}
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-24 w-24"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 font-display text-2xl font-bold tracking-tight"
          >
            <span className="text-gradient">{lang === "en" ? "Zyra Creative" : "زيرا إبداع"}</span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-0.5 w-40 origin-left rounded-full bg-gradient-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}