import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = typeof en;

const en = {
  dir: "ltr",
  nav: { services: "Services", work: "Process", about: "About", contact: "Contact", cta: "Let's talk" },
  hero: {
    badge: "Creative & Marketing Studio",
    title1: "Built with purpose.",
    title2: "Designed for impact.",
    desc: "Elevating brands through refined design, strategic clarity, and immersive digital experiences that inspire growth and drive lasting impact.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See how we work",
    scroll: "Scroll",
  },
  marquee: ["Reels", "Web Design", "Marketing Videos", "Brand Redesigns", "Instagram", "Content Creation"],
  services: {
    tag: "What we do",
    title: "Services built to stand out",
    desc: "We provide many services including but not limited to web design, marketing videos, and brand redesigns.",
    items: [
      { title: "Web Design", desc: "Sleek, responsive websites that make your brand look premium from the very first scroll." },
      { title: "Marketing Videos", desc: "Professional reels and short-form videos crafted to stop the scroll and grow your audience." },
      { title: "Brand Redesigns", desc: "Fresh identities and visual makeovers that make your brand feel modern and memorable." },
    ],
    more: {
      title: "Interested in something else?",
      desc: "We take on all kinds of creative work. Tell us what you have in mind — we'd love to help.",
      cta: "Contact us",
    },
  },
  stats: {
    tag: "Young & hungry",
    title: "Fresh, fast, and all-in",
    items: [
      { value: "New", label: "Fresh studio, fresh ideas" },
      { value: "Weekly", label: "Reels we produce" },
      { value: "24h", label: "Average reply time" },
      { value: "100%", label: "Passion in every project" },
    ],
  },
  approach: {
    tag: "How we work",
    title: "From idea to impact",
    desc: "A simple, honest process focused on results you can actually see.",
    steps: [
      { n: "01", title: "Discover", desc: "We learn your brand, goals, and what makes you different." },
      { n: "02", title: "Create", desc: "We design and film content built to grab attention." },
      { n: "03", title: "Refine", desc: "We polish every detail until it feels just right." },
      { n: "04", title: "Grow", desc: "We help you build momentum and grow." },
    ],
  },
  about: {
    tag: "About Zyra",
    title: "A new studio with big ambitions",
    p1: "Zyra Creative is a young creative studio. We may be new, but we're obsessed with quality — producing professional reels for Instagram, designing modern websites, and giving brands bold new looks.",
    p2: "We pour everything into every project. What we lack in years, we more than make up for in energy, creativity, and care.",
    point1: "Fresh, modern approach",
    point2: "Creative, unique ideas",
    point3: "Personal, hands-on service",
  },
  contact: {
    tag: "Let's talk",
    title: "Have a project in mind?",
    desc: "Tell us about your brand — we'll get back to you fast.",
    name: "Your name",
    email: "Email address",
    message: "Tell us about your project",
    send: "Send message",
    sent: "Thanks — we'll be in touch soon!",
  },
  footer: {
    tagline: "A young creative studio shaping bold ideas into meaningful, lasting experiences.",
    nav: "Navigate",
    social: "Connect",
    rights: "All rights reserved.",
    made: "Crafted with intent.",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
  },
};

const ar: Dict = {
  dir: "rtl",
  nav: { services: "خدماتنا", work: "طريقتنا", about: "من نحن", contact: "تواصل", cta: "لنتحدث" },
  hero: {
    badge: "استوديو إبداعي وتسويقي",
    title1: "مبنيّ بهدف.",
    title2: "مصمّم للتأثير.",
    desc: "نرفع مستوى العلامات عبر تصميم راقٍ، ورؤية استراتيجية، وتجارب رقمية غامرة تلهم النمو وتخلق تأثيرًا دائمًا.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد طريقتنا",
    scroll: "مرّر",
  },
  marquee: ["ريلز", "تصميم المواقع", "فيديوهات تسويقية", "إعادة تصميم العلامات", "إنستغرام", "صناعة المحتوى"],
  services: {
    tag: "ما نقدمه",
    title: "خدمات تصنع التميّز",
    desc: "نقدّم خدمات كثيرة تشمل على سبيل المثال لا الحصر تصميم المواقع، والفيديوهات التسويقية، وإعادة تصميم العلامات.",
    items: [
      { title: "تصميم المواقع", desc: "مواقع أنيقة ومتجاوبة تُظهر علامتك بمظهر فاخر من أول لحظة." },
      { title: "فيديوهات تسويقية", desc: "ريلز وفيديوهات قصيرة احترافية مصمّمة لإيقاف التمرير وزيادة جمهورك." },
      { title: "إعادة تصميم العلامات", desc: "هويات جديدة ولمسات بصرية تجعل علامتك عصرية ولا تُنسى." },
    ],
    more: {
      title: "تبحث عن شيء آخر؟",
      desc: "نتولّى كل أنواع الأعمال الإبداعية. أخبرنا بما يدور في بالك — يسعدنا مساعدتك.",
      cta: "تواصل معنا",
    },
  },
  stats: {
    tag: "شباب وطموح",
    title: "سريعون وشغوفون بكل ما نقدّم",
    items: [
      { value: "جديد", label: "استوديو جديد بأفكار جديدة" },
      { value: "أسبوعيًا", label: "ريلز ننتجها" },
      { value: "٢٤ س", label: "متوسط وقت الرد" },
      { value: "٪100", label: "شغف في كل مشروع" },
    ],
  },
  approach: {
    tag: "طريقتنا",
    title: "من الفكرة إلى الأثر",
    desc: "عملية بسيطة وصادقة تركّز على نتائج تراها بنفسك.",
    steps: [
      { n: "٠١", title: "الاكتشاف", desc: "ندرس علامتك وأهدافك وما يميّزك." },
      { n: "٠٢", title: "الإبداع", desc: "نصمّم ونصوّر محتوى يجذب الانتباه." },
      { n: "٠٣", title: "الصقل", desc: "نحسّن كل تفصيلة حتى تصبح مثالية." },
      { n: "٠٤", title: "النمو", desc: "نساعدك على بناء الزخم والنمو." },
    ],
  },
  about: {
    tag: "عن زيرا",
    title: "استوديو جديد بطموح كبير",
    p1: "زيرا إبداع استوديو إبداعي ناشئ. قد نكون جددًا، لكننا مهووسون بالجودة — ننتج ريلز احترافية لإنستغرام، ونصمّم مواقع عصرية، ونمنح العلامات مظهرًا جريئًا جديدًا.",
    p2: "نضع كل طاقتنا في كل مشروع. ما ينقصنا من سنوات نعوّضه بالحماس والإبداع والاهتمام.",
    point1: "أسلوب عصري ومتجدّد",
    point2: "أفكار إبداعية وفريدة",
    point3: "خدمة شخصية وقريبة",
  },
  contact: {
    tag: "لنتحدث",
    title: "لديك مشروع في بالك؟",
    desc: "أخبرنا عن علامتك — سنردّ عليك بسرعة.",
    name: "اسمك",
    email: "البريد الإلكتروني",
    message: "أخبرنا عن مشروعك",
    send: "أرسل الرسالة",
    sent: "شكرًا — سنتواصل معك قريبًا!",
  },
  footer: {
    tagline: "استوديو إبداعي ناشئ يحوّل الأفكار الجريئة إلى تجارب ذات معنى واستمرارية.",
    nav: "تصفّح",
    social: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    made: "صُنع بعناية.",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
  },
};

const dictionaries: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    // Smooth cross-fade between languages
    setFading(true);
    window.setTimeout(() => {
      setLangState(l);
      setFading(false);
    }, 240);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      <div
        style={{
          transition: "opacity 0.4s ease, filter 0.4s ease",
          opacity: fading ? 0 : 1,
          filter: fading ? "blur(6px)" : "none",
        }}
      >
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
