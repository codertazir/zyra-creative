import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = typeof en;

const en = {
  dir: "ltr",
  nav: { services: "Services", work: "Approach", about: "About", contact: "Contact", cta: "Start a project" },
  hero: {
    badge: "Creative & Marketing Studio",
    title1: "We build brands",
    title2: "people stay loyal to",
    desc: "Zyra Creative is a premium studio crafting websites, brand redesigns, and coaching — engineered around lasting customer loyalty.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our approach",
    scroll: "Scroll",
  },
  marquee: ["Web Design", "Brand Identity", "Redesigns", "Brand Coaching", "Marketing", "Customer Loyalty"],
  services: {
    tag: "What we do",
    title: "Services crafted for growth",
    desc: "A full-service creative partner — from the first pixel to lasting relationships with your customers.",
    items: [
      { title: "Website Design & Build", desc: "Fast, responsive, conversion-focused websites that feel as premium as your brand." },
      { title: "Brand Redesigns", desc: "Refresh or reinvent your identity with strategy-led design that stands out and lasts." },
      { title: "Brand Coaching", desc: "Hands-on guidance to sharpen your voice, positioning, and creative direction." },
      { title: "Loyalty & Marketing", desc: "Campaigns and experiences built to turn first-time buyers into lifelong fans." },
    ],
  },
  stats: {
    tag: "Proven experience",
    title: "Results that compound",
    items: [
      { value: "10+", label: "Years of experience" },
      { value: "120+", label: "Projects delivered" },
      { value: "94%", label: "Client retention" },
      { value: "40+", label: "Brands coached" },
    ],
  },
  approach: {
    tag: "Our approach",
    title: "Loyalty by design",
    desc: "We don't just launch — we build systems that keep your customers coming back.",
    steps: [
      { n: "01", title: "Discover", desc: "We learn your market, audience, and what truly drives loyalty." },
      { n: "02", title: "Design", desc: "Strategy-led creative that expresses a clear, confident identity." },
      { n: "03", title: "Build", desc: "Pixel-perfect, performant experiences ready to scale." },
      { n: "04", title: "Grow", desc: "Ongoing coaching and marketing that deepen every relationship." },
    ],
  },
  about: {
    tag: "About Zyra",
    title: "A studio obsessed with loyalty",
    p1: "We're a small, senior team of designers, strategists, and marketers. For over a decade we've helped ambitious brands look sharper and grow deeper relationships with their customers.",
    p2: "Every engagement is measured by one thing: do people come back? That focus on loyalty shapes how we design, build, and coach.",
    point1: "Senior team, no hand-offs",
    point2: "Strategy before pixels",
    point3: "Built to retain, not just launch",
  },
  contact: {
    tag: "Let's talk",
    title: "Ready to build something people love?",
    desc: "Tell us about your brand. We'll reply within one business day.",
    name: "Your name",
    email: "Email address",
    message: "Tell us about your project",
    send: "Send message",
    sent: "Thanks — we'll be in touch soon!",
  },
  footer: {
    tagline: "Premium creative & marketing studio building brands people stay loyal to.",
    nav: "Navigate",
    social: "Connect",
    rights: "All rights reserved.",
    made: "Crafted with intent.",
  },
};

const ar: Dict = {
  dir: "rtl",
  nav: { services: "خدماتنا", work: "منهجنا", about: "من نحن", contact: "تواصل", cta: "ابدأ مشروعك" },
  hero: {
    badge: "استوديو إبداعي وتسويقي",
    title1: "نصنع علامات تجارية",
    title2: "يبقى العملاء أوفياء لها",
    desc: "زيرا إبداع استوديو متميّز يصمّم المواقع، ويعيد تصميم العلامات، ويقدّم التدريب — مبنيّ على ولاء العملاء الدائم.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "اكتشف منهجنا",
    scroll: "مرّر",
  },
  marquee: ["تصميم المواقع", "هوية العلامة", "إعادة التصميم", "تدريب العلامات", "التسويق", "ولاء العملاء"],
  services: {
    tag: "ما نقدمه",
    title: "خدمات مصمّمة للنمو",
    desc: "شريك إبداعي متكامل — من أول بكسل إلى علاقات دائمة مع عملائك.",
    items: [
      { title: "تصميم وبناء المواقع", desc: "مواقع سريعة ومتجاوبة تركّز على التحويل وتعكس فخامة علامتك." },
      { title: "إعادة تصميم العلامة", desc: "جدّد أو أعد ابتكار هويتك بتصميم قائم على الاستراتيجية يبقى ويتميّز." },
      { title: "تدريب العلامات", desc: "إرشاد عملي لصقل صوتك وموقعك واتجاهك الإبداعي." },
      { title: "الولاء والتسويق", desc: "حملات وتجارب تحوّل المشتري لأول مرة إلى عميل وفيّ مدى الحياة." },
    ],
  },
  stats: {
    tag: "خبرة مثبتة",
    title: "نتائج تتراكم",
    items: [
      { value: "+10", label: "سنوات خبرة" },
      { value: "+120", label: "مشروع منجز" },
      { value: "٪94", label: "نسبة الاحتفاظ" },
      { value: "+40", label: "علامة مدرَّبة" },
    ],
  },
  approach: {
    tag: "منهجنا",
    title: "الولاء بالتصميم",
    desc: "لا نكتفي بالإطلاق — بل نبني أنظمة تُعيد عملاءك مرارًا.",
    steps: [
      { n: "٠١", title: "الاكتشاف", desc: "ندرس سوقك وجمهورك وما يصنع الولاء حقًا." },
      { n: "٠٢", title: "التصميم", desc: "إبداع قائم على الاستراتيجية يعبّر عن هوية واثقة وواضحة." },
      { n: "٠٣", title: "البناء", desc: "تجارب دقيقة وعالية الأداء جاهزة للتوسّع." },
      { n: "٠٤", title: "النمو", desc: "تدريب وتسويق مستمر يعمّق كل علاقة." },
    ],
  },
  about: {
    tag: "عن زيرا",
    title: "استوديو مهووس بالولاء",
    p1: "نحن فريق صغير من كبار المصممين والاستراتيجيين والمسوّقين. لأكثر من عقد ساعدنا علامات طموحة على أن تبدو أكثر تميّزًا وتبني علاقات أعمق مع عملائها.",
    p2: "نقيس كل عمل بمعيار واحد: هل يعود الناس؟ هذا التركيز على الولاء يشكّل طريقة تصميمنا وبنائنا وتدريبنا.",
    point1: "فريق خبير بلا وسطاء",
    point2: "الاستراتيجية قبل التصميم",
    point3: "مبنيّ للاحتفاظ لا للإطلاق فقط",
  },
  contact: {
    tag: "لنتحدث",
    title: "جاهز لبناء شيء يحبه الناس؟",
    desc: "أخبرنا عن علامتك. سنردّ خلال يوم عمل واحد.",
    name: "اسمك",
    email: "البريد الإلكتروني",
    message: "أخبرنا عن مشروعك",
    send: "أرسل الرسالة",
    sent: "شكرًا — سنتواصل معك قريبًا!",
  },
  footer: {
    tagline: "استوديو إبداعي وتسويقي متميّز يبني علامات يبقى الناس أوفياء لها.",
    nav: "تصفّح",
    social: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    made: "صُنع بعناية.",
  },
};

const dictionaries: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
