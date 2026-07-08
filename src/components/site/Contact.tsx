import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

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
                onSubmit={handleSubmit}
                className="relative mx-auto mt-10 max-w-xl space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    maxLength={100}
                    placeholder={t.contact.name}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder={t.contact.email}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                  />
                </div>
                <textarea
                  required
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder={t.contact.message}
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                />
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? t.contact.sending : t.contact.send}
                  {sending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
