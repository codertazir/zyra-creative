import { useState } from "react";
import { Send, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-card sm:p-14">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
            <div className="relative text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-gradient">{t.contact.tag}</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.desc}</p>
            </div>

            {sent ? (
              <div className="relative mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-gradient-soft p-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent text-white">
                  <Check className="h-6 w-6" />
                </span>
                <p className="font-display text-lg font-semibold">{t.contact.sent}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="relative mx-auto mt-10 max-w-xl space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder={t.contact.name}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                  />
                  <input
                    required
                    type="email"
                    placeholder={t.contact.email}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder={t.contact.message}
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  {t.contact.send}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
