export type Locale = "uz" | "en";

export const locales: Locale[] = ["uz", "en"];
export const defaultLocale: Locale = "uz";

export type ProjectLink = { label: string; href: string };
export type Project = {
  tag: string;
  accentClass: string;
  title: string;
  desc: string;
  stack: string[];
  links?: ProjectLink[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  roleClass: string;
};

export type FaqItem = { q: string; a: string };
export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  bullets: string[];
};

export type SkillCard = { title: string; desc: string; tags: string[] };

export type Dictionary = {
  nav: {
    process: string;
    skills: string;
    projects: string;
    faq: string;
    hireMe: string;
    skipToMain: string;
    toggleMenu: string;
    home: string;
  };
  hero: {
    status: string;
    titleA: string;
    titleB: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    hud: { label: string; value: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
    codeComment: string;
    codeStatus1: string;
    codeStatus2: string;
  };
  skills: {
    title: string;
    subtitle: string;
    cards: SkillCard[];
  };
  about: {
    titleA: string;
    titleB: string;
    p1: string;
    p2: string;
    stats: { value: string; label: string }[];
    values: { label: string; title: string; desc: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    resumeCta: string;
    resumeHint: string;
    channels: { label: string; value: string; href: string }[];
  };
  footer: {
    tagline: string;
    siteHeading: string;
    connectHeading: string;
    links: { process: string; skills: string; projects: string; faq: string };
    connect: { email: string; telegram: string; phone: string };
    rights: string;
  };
  language: {
    label: string;
    uz: string;
    en: string;
  };
};

const EMAIL = "sultonovazizbek73@gmail.com";
const PHONE = "+998 99 060 72 42";
const TELEGRAM_URL = "https://t.me/Azizbek_Sultonov";
const TELEGRAM_HANDLE = "@Azizbek_Sultonov";

export const contactInfo = { EMAIL, PHONE, TELEGRAM_URL, TELEGRAM_HANDLE };

export const dictionaries: Record<Locale, Dictionary> = {
  uz: {
    nav: {
      process: "Jarayon",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      faq: "Savollar",
      hireMe: "ALOQA",
      skipToMain: "Asosiy bo'limga o'tish",
      toggleMenu: "Menyuni ochish/yopish",
      home: "Azizbek Sultonov — Bosh sahifa",
    },
    hero: {
      status: "Yangi loyihalar uchun ochiqman",
      titleA: "Salom, men",
      titleB: "Azizbek Sultonov",
      intro:
        "Flutter, Dart, Telegram bot va AI vositalari yordamida biznes va mahsulot g'oyalarini amaliy raqamli yechimlarga aylantiraman.",
      ctaPrimary: "LOYIHALARNI KO'RING",
      ctaSecondary: "BOG'LANISH",
      stats: [
        { value: "10+", label: "Loyihalar" },
        { value: "4", label: "Tillar" },
        { value: "B2", label: "Inglizcha" },
      ],
      hud: [
        { label: "STATUS", value: "ONLAYN" },
        { label: "ROL", value: "FLUTTER DEV" },
        { label: "JOY", value: "BUXORO" },
        { label: "FOKUS", value: "MOBILE+WEB" },
      ],
    },
    process: {
      title: "Qanday ishlayman",
      subtitle:
        "G'oyadan to'liq raqamli mahsulotgacha — aniq va birgalikdagi jarayon.",
      steps: [
        {
          step: "01-QADAM",
          title: "Tahlil va strategiya",
          desc: "Maqsadlar, foydalanuvchilar va cheklovlardan boshlaymiz. Hamma narsani aniq scope va realistik roadmap'ga aylantiraman.",
          bullets: [
            "Talablarni aniqlash",
            "Foydalanuvchi profili",
            "Tech stack tavsiyasi",
            "Bosqichli roadmap",
          ],
        },
        {
          step: "02-QADAM",
          title: "Dizayn va Build",
          desc: "Toza Flutter UI, type-safe kod va UX/UI prinsiplari. Har hafta progressni ko'rasiz.",
          bullets: [
            "Komponentlarga asoslangan UI",
            "Cross-platform (iOS / Android / Web)",
            "Test va sifat nazorati",
            "Haftalik demo & ko'rib chiqish",
          ],
        },
        {
          step: "03-QADAM",
          title: "Ishga tushirish va iteratsiya",
          desc: "Store'larga chiqaramiz, analitika ulaymiz va haqiqiy foydalanuvchi signallari asosida yaxshilaymiz.",
          bullets: [],
        },
      ],
      codeComment: "// testlarni ishga tushirish",
      codeStatus1: "> Joylashtirilmoqda...",
      codeStatus2: "> Jonli (1.2s)",
    },
    skills: {
      title: "Asosiy ko'nikmalar",
      subtitle:
        "Mobile va web ilovalardan tortib CRM, AI va dizayngacha — keng qamrovli vositalar.",
      cards: [
        {
          title: "Mobile & Web Development",
          desc: "Dart va Flutter bilan iOS, Android va Web uchun ilovalar. Komponentlarga asoslangan UI, test va sifat nazorati.",
          tags: ["Flutter", "Dart", "Mobile", "Web", "Testing"],
        },
        {
          title: "Avtomatlashtirish & Botlar",
          desc: "Telegram botlar va raqamli ish oqimlari yordamida biznes jarayonlarini avtomatlashtirish.",
          tags: ["Telegram Bot", "Workflow", "Automation"],
        },
        {
          title: "CRM & Biznes vositalari",
          desc: "AmoCRM, MoySklad va Microsoft Office (Excel, Word, PowerPoint) bilan kundalik biznes operatsiyalarini boshqarish.",
          tags: ["AmoCRM", "MoySklad", "Excel", "Word", "PowerPoint"],
        },
        {
          title: "AI & Kontent",
          desc: "Claude, ChatGPT va prompt engineering yordamida AI-asoslangan kontent va ish oqimlari yaratish.",
          tags: ["Claude", "ChatGPT", "Prompt Engineering", "AI Content"],
        },
        {
          title: "Dizayn & Media",
          desc: "UI/UX tafakkur, Adobe Premiere Pro va After Effects bilan video va vizual kontent ishlab chiqish.",
          tags: ["UI/UX", "Premiere Pro", "After Effects"],
        },
        {
          title: "Analitik fikrlash",
          desc: "Matematik fonda tizimli fikrlash va muammolarni hal qilish — iqtisodiy va texnik qarorlarda foydali.",
          tags: ["Mathematics", "Problem Solving", "Structured Thinking"],
        },
      ],
    },
    about: {
      titleA: "Iqtisod fonida,",
      titleB: "muhandis ruhi bilan.",
      p1: "Toshkent davlat iqtisodiyot universitetining 4-kurs talabasiman. Buxoro viloyati, Peshku qishlog'ida 2004-yil 9-noyabrda tug'ilganman. Mobile va web dasturlash, CRM jarayonlari, AI yordamida kontent yaratish va raqamli media — men ishlaydigan sohalar.",
      p2: "Iqtisod fonimni mahsulot, texnologiya va dizayn tafakkur bilan birlashtiraman. Tez o'rganish, qiziquvchanlik, matematik fikrlash va muammolarni hal qilish — kuchli tomonlarim.",
      stats: [
        { value: "2004", label: "Tug'ilgan yil" },
        { value: "4-kurs", label: "TDIU talabasi" },
        { value: "4", label: "Tillar" },
      ],
      values: [
        {
          label: "01 / QADRIYAT",
          title: "O'rganish.",
          desc: "Tez o'rganaman va yangi vositalarni tezda ishga solaman.",
        },
        {
          label: "02 / QADRIYAT",
          title: "Aniqlik.",
          desc: "Toza interfeys, toza kod, aniq muloqot.",
        },
        {
          label: "03 / QADRIYAT",
          title: "Qiziquvchanlik.",
          desc: "Yangi texnologiyalar va g'oyalarga doim ochiq.",
        },
        {
          label: "04 / QADRIYAT",
          title: "Yechim.",
          desc: "G'oyani ishlovchi mahsulotga aylantirish — asosiy maqsad.",
        },
      ],
    },
    projects: {
      title: "Tanlangan loyihalar",
      subtitle:
        "Flutter va Dart asosida ishlab chiqilgan ochiq kodli mobile loyihalar.",
      items: [
        {
          tag: "Mobile / Education",
          accentClass: "text-primary",
          title: "Learn Quran",
          desc: "Qur'on o'rganish uchun Flutter va Dart asosidagi mobil ilova. Android'da ishlaydi.",
          stack: ["Flutter", "Dart", "Android"],
          links: [
            { label: "GitHub", href: "https://github.com/futzone/learn_quran" },
          ],
        },
        {
          tag: "Mobile / Utility",
          accentClass: "text-secondary",
          title: "Location Tracker",
          desc: "Joylashuvni aniqlash va fon rejimida kuzatish uchun Flutter ilovasi — background services bilan.",
          stack: ["Flutter", "Dart", "Background Services", "Android"],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/futzone/location_listener",
            },
          ],
        },
        {
          tag: "Package / AI",
          accentClass: "text-cta",
          title: "Face Detector Flutter",
          desc: "Real vaqt yuz aniqlash uchun Flutter package'i — ML Kit va TensorFlow Lite asosida, Android va iOS uchun.",
          stack: ["Flutter", "ML Kit", "Camera", "TensorFlow Lite"],
          links: [
            {
              label: "Pub.dev",
              href: "https://pub.dev/packages/face_detector_flutter",
            },
          ],
        },
      ],
    },
    testimonials: {
      title: "Hamkasblar so'zi",
      items: [
        {
          quote:
            "Azizbek topshiriqlarni vaqtida bajaradi va Flutter UI'ni juda toza yetkazadi. Yangi vositalarni qisqa muddatda o'zlashtiradi.",
          name: "Hamkasb",
          role: "Mobile Developer",
          roleClass: "text-primary",
        },
        {
          quote:
            "CRM va biznes vositalarini Flutter ilova bilan birlashtirishda yaxshi muhandis. Iqtisod fonida muammolarni boshqacha ko'radi.",
          name: "Project Manager",
          role: "Biznes hamkor",
          roleClass: "text-secondary",
        },
        {
          quote:
            "AI vositalardan (Claude, ChatGPT) jamoa ish oqimini yaxshilash uchun amaliy foydalanadi — kontent va dasturlash uchun.",
          name: "Team Lead",
          role: "Texnik rahbar",
          roleClass: "text-cta",
        },
      ],
    },
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Qanday loyihalarni qabul qilasiz?",
          a: "Flutter asosidagi mobile va web ilovalar, Telegram botlar, CRM integratsiyalari va AI yordamidagi kontent vositalari. Kichik MVP'lardan biznes uchun amaliy yechimlargacha.",
        },
        {
          q: "Yakka ishlaysizmi yoki jamoa bilan?",
          a: "Ikkalasi ham. Kichik loyihalarni yakka olib boraman, kattaroq mahsulotlarda jamoa a'zosi sifatida ishlayman.",
        },
        {
          q: "Odatdagi muddat qancha?",
          a: "Kichik mobil prototip: 1–2 hafta. MVP: 4–8 hafta. CRM/AI integratsiyalari ko'lamiga qarab.",
        },
        {
          q: "Qanday boshlaymiz?",
          a: "Telegram (@Azizbek_Sultonov) yoki email orqali g'oyani qisqacha yozing — maqsad, muddat va byudjet. Bir kun ichida javob beraman.",
        },
      ],
    },
    contact: {
      title: "Birgalikda ajoyib narsa quraylik.",
      subtitle:
        "Loyiha, savol yoki noaniq g'oya bormi? Telegram yoki email orqali yozing.",
      resumeCta: "REZYUMENI YUKLAB OLISH",
      resumeHint: "PDF · 54 KB · so'nggi yangilanish 2026",
      channels: [
        { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { label: "Telegram", value: TELEGRAM_HANDLE, href: TELEGRAM_URL },
        { label: "Telefon", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
      ],
    },
    footer: {
      tagline:
        "Mobile va web ilovalar, CRM va AI vositalari ustida ishlovchi dasturchi. Buxorodan, dunyo bo'ylab.",
      siteHeading: "Sayt",
      connectHeading: "Aloqa",
      links: {
        process: "Jarayon",
        skills: "Ko'nikmalar",
        projects: "Loyihalar",
        faq: "Savollar",
      },
      connect: {
        email: "Email",
        telegram: "Telegram",
        phone: "Telefon",
      },
      rights: "Barcha huquqlar himoyalangan.",
    },
    language: { label: "Til", uz: "O'zbekcha", en: "Inglizcha" },
  },

  en: {
    nav: {
      process: "Process",
      skills: "Skills",
      projects: "Projects",
      faq: "FAQ",
      hireMe: "CONTACT",
      skipToMain: "Skip to main content",
      toggleMenu: "Toggle menu",
      home: "Azizbek Sultonov — Home",
    },
    hero: {
      status: "Available for new projects",
      titleA: "Hi, I'm",
      titleB: "Azizbek Sultonov",
      intro:
        "I turn business and product ideas into practical digital solutions using Flutter, Dart, Telegram bots, and AI tools.",
      ctaPrimary: "VIEW PROJECTS",
      ctaSecondary: "GET IN TOUCH",
      stats: [
        { value: "10+", label: "Projects" },
        { value: "4", label: "Languages" },
        { value: "B2", label: "English" },
      ],
      hud: [
        { label: "STATUS", value: "ONLINE" },
        { label: "ROLE", value: "FLUTTER DEV" },
        { label: "LOC", value: "BUKHARA" },
        { label: "FOCUS", value: "MOBILE+WEB" },
      ],
    },
    process: {
      title: "How I Work",
      subtitle:
        "From idea to a finished digital product — a clear, collaborative process.",
      steps: [
        {
          step: "STEP 01",
          title: "Discovery & Strategy",
          desc: "We start with your goals, users, and constraints. I distill everything into a tight scope and a realistic roadmap.",
          bullets: [
            "Requirements gathering",
            "User profile",
            "Tech stack proposal",
            "Milestone roadmap",
          ],
        },
        {
          step: "STEP 02",
          title: "Design & Build",
          desc: "Clean Flutter UI, type-safe code, and UX-first thinking. You see progress every week.",
          bullets: [
            "Component-driven UI",
            "Cross-platform (iOS / Android / Web)",
            "Testing & QA",
            "Weekly demo & review",
          ],
        },
        {
          step: "STEP 03",
          title: "Launch & Iterate",
          desc: "Ship to stores, hook in analytics, and iterate based on real user signals — not assumptions.",
          bullets: [],
        },
      ],
      codeComment: "// run tests",
      codeStatus1: "> Deploying...",
      codeStatus2: "> Live (1.2s)",
    },
    skills: {
      title: "Core Skills",
      subtitle:
        "From mobile and web apps to CRM, AI, and design — a broad toolset.",
      cards: [
        {
          title: "Mobile & Web Development",
          desc: "iOS, Android, and Web apps with Dart and Flutter. Component-driven UI, testing, and quality control.",
          tags: ["Flutter", "Dart", "Mobile", "Web", "Testing"],
        },
        {
          title: "Automation & Bots",
          desc: "Telegram bots and digital workflows that automate everyday business operations.",
          tags: ["Telegram Bot", "Workflow", "Automation"],
        },
        {
          title: "CRM & Business Tools",
          desc: "Manage day-to-day operations with AmoCRM, MoySklad, and Microsoft Office (Excel, Word, PowerPoint).",
          tags: ["AmoCRM", "MoySklad", "Excel", "Word", "PowerPoint"],
        },
        {
          title: "AI & Content",
          desc: "AI-assisted content and workflows with Claude, ChatGPT, and prompt engineering.",
          tags: ["Claude", "ChatGPT", "Prompt Engineering", "AI Content"],
        },
        {
          title: "Design & Media",
          desc: "UI/UX thinking plus Adobe Premiere Pro and After Effects for video and visual content.",
          tags: ["UI/UX", "Premiere Pro", "After Effects"],
        },
        {
          title: "Analytical Thinking",
          desc: "A math-backed, structured approach to problem solving — useful for both economic and technical decisions.",
          tags: ["Mathematics", "Problem Solving", "Structured Thinking"],
        },
      ],
    },
    about: {
      titleA: "Economics background,",
      titleB: "engineering mindset.",
      p1: "I'm a fourth-year student at Tashkent State University of Economics, born on 9 November 2004 in Peshku village, Bukhara region. I work across mobile and web development, CRM workflows, AI-assisted content, and digital media.",
      p2: "I combine an economics foundation with product, technology, and design thinking. Quick learning, curiosity, mathematical reasoning, and problem solving are my strengths.",
      stats: [
        { value: "2004", label: "Born" },
        { value: "Year 4", label: "TSUE student" },
        { value: "4", label: "Languages" },
      ],
      values: [
        {
          label: "01 / VALUES",
          title: "Learn.",
          desc: "I learn fast and put new tools to work quickly.",
        },
        {
          label: "02 / VALUES",
          title: "Clarity.",
          desc: "Clean interfaces, clean code, clear communication.",
        },
        {
          label: "03 / VALUES",
          title: "Curiosity.",
          desc: "Always open to new technologies and ideas.",
        },
        {
          label: "04 / VALUES",
          title: "Outcome.",
          desc: "Turning an idea into a working product is the goal.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Open-source mobile projects built with Flutter and Dart.",
      items: [
        {
          tag: "Mobile / Education",
          accentClass: "text-primary",
          title: "Learn Quran",
          desc: "A Flutter + Dart mobile app for learning the Qur'an on Android.",
          stack: ["Flutter", "Dart", "Android"],
          links: [
            { label: "GitHub", href: "https://github.com/futzone/learn_quran" },
          ],
        },
        {
          tag: "Mobile / Utility",
          accentClass: "text-secondary",
          title: "Location Tracker",
          desc: "A Flutter app for location detection and background tracking with background services on Android.",
          stack: ["Flutter", "Dart", "Background Services", "Android"],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/futzone/location_listener",
            },
          ],
        },
        {
          tag: "Package / AI",
          accentClass: "text-cta",
          title: "Face Detector Flutter",
          desc: "Real-time face detection Flutter package for Android and iOS, powered by ML Kit and TensorFlow Lite.",
          stack: ["Flutter", "ML Kit", "Camera", "TensorFlow Lite"],
          links: [
            {
              label: "Pub.dev",
              href: "https://pub.dev/packages/face_detector_flutter",
            },
          ],
        },
      ],
    },
    testimonials: {
      title: "What People Say",
      items: [
        {
          quote:
            "Azizbek delivers on time and ships very clean Flutter UI. He picks up new tools in record time.",
          name: "Teammate",
          role: "Mobile Developer",
          roleClass: "text-primary",
        },
        {
          quote:
            "Solid engineer when it comes to wiring up CRM and business tools with Flutter apps. His economics background helps him see problems differently.",
          name: "Project Manager",
          role: "Business Partner",
          roleClass: "text-secondary",
        },
        {
          quote:
            "Uses AI tools (Claude, ChatGPT) practically — to improve both content workflows and development speed.",
          name: "Team Lead",
          role: "Technical Lead",
          roleClass: "text-cta",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What kind of projects do you take on?",
          a: "Flutter-based mobile and web apps, Telegram bots, CRM integrations, and AI-assisted content tools — from small MVPs to practical business solutions.",
        },
        {
          q: "Do you work solo or with a team?",
          a: "Both. I lead small projects solo and slot into existing teams on larger products.",
        },
        {
          q: "What's your typical timeline?",
          a: "Small mobile prototype: 1–2 weeks. MVPs: 4–8 weeks. CRM/AI integrations depend on scope.",
        },
        {
          q: "How do we get started?",
          a: "Drop me a short note on Telegram (@Azizbek_Sultonov) or email — goal, timeline, and budget. I reply within a day.",
        },
      ],
    },
    contact: {
      title: "Let's build something great.",
      subtitle:
        "Got a project, a question, or a vague idea? Reach me on Telegram or email.",
      resumeCta: "DOWNLOAD RESUME",
      resumeHint: "PDF · 54 KB · last updated 2026",
      channels: [
        { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { label: "Telegram", value: TELEGRAM_HANDLE, href: TELEGRAM_URL },
        { label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
      ],
    },
    footer: {
      tagline:
        "Developer working on mobile and web apps, CRM workflows, and AI tools. From Bukhara, working worldwide.",
      siteHeading: "Site",
      connectHeading: "Connect",
      links: {
        process: "Process",
        skills: "Skills",
        projects: "Projects",
        faq: "FAQ",
      },
      connect: {
        email: "Email",
        telegram: "Telegram",
        phone: "Phone",
      },
      rights: "All rights reserved.",
    },
    language: { label: "Language", uz: "Uzbek", en: "English" },
  },
};
