"use client";

import Header from "./_components/Header";
import { useT } from "./_components/LanguageProvider";
import { contactInfo } from "./_lib/translations";

export default function Home() {
  const t = useT();

  return (
    <>
      <Header />

      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-black px-4 py-2 rounded font-bold shadow-[0_0_15px_rgba(0,255,255,0.5)]"
        href="#main-content"
      >
        {t.nav.skipToMain}
      </a>

      <main id="main-content">
        {/* Hero */}
        <section
          id="hero"
          className="min-h-[calc(100dvh-5rem)] interference-pattern flex items-center justify-center relative overflow-hidden py-20"
        >
          <div className="grid-overlay" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-hud tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t.hero.status}
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                {t.hero.titleA}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow">
                  {t.hero.titleB}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                {t.hero.intro}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <a
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] text-center"
                  href="#projects"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                  href="#contact"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-8">
                {t.hero.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-hud text-white font-bold">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-cta/30 rounded-full animate-[spin_20s_linear_infinite]" />

                <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-md border border-white/20 shadow-[0_0_50px_rgba(0,255,255,0.2)] flex items-center justify-center">
                  <div className="text-4xl font-hud text-white animate-pulse">
                    &lt;/&gt;
                  </div>
                </div>

                <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#00FFFF] -translate-x-1/2 -translate-y-2" />
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_#7B61FF] -translate-x-1/2 translate-y-2" />
              </div>

              <div className="absolute top-10 right-10 font-hud text-xs text-primary/70">
                <div>
                  {t.hero.hud[0].label}: {t.hero.hud[0].value}
                </div>
                <div>
                  {t.hero.hud[1].label}: {t.hero.hud[1].value}
                </div>
              </div>
              <div className="absolute bottom-10 left-10 font-hud text-xs text-secondary/70">
                <div>
                  {t.hero.hud[2].label}: {t.hero.hud[2].value}
                </div>
                <div>
                  {t.hero.hud[3].label}: {t.hero.hud[3].value}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {t.process.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.process.subtitle}
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2" />

              {/* Step 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-hud mb-2 rounded border border-primary/20">
                    {t.process.steps[0].step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {t.process.steps[0].title}
                  </h3>
                  <p className="text-gray-400">{t.process.steps[0].desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-primary rounded-full -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                <div className="pl-12 md:pl-0 order-1 md:order-2">
                  <div className="glass-card p-6 rounded-lg transform group-hover:scale-105 transition-transform duration-500">
                    <ul className="space-y-2 text-sm text-gray-300">
                      {t.process.steps[0].bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-primary">▸</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
                <div className="pl-12 md:pl-12 order-2">
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-hud mb-2 rounded border border-secondary/20">
                    {t.process.steps[1].step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {t.process.steps[1].title}
                  </h3>
                  <p className="text-gray-400">{t.process.steps[1].desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-secondary rounded-full -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(123,97,255,0.5)]" />
                <div className="pl-12 md:pl-0 md:text-right md:pr-12 order-1">
                  <div className="glass-card p-6 rounded-lg transform group-hover:scale-105 transition-transform duration-500">
                    <ul className="space-y-2 text-sm text-gray-300 md:text-right">
                      {t.process.steps[1].bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-cta/10 text-cta text-xs font-hud mb-2 rounded border border-cta/20">
                    {t.process.steps[2].step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cta transition-colors">
                    {t.process.steps[2].title}
                  </h3>
                  <p className="text-gray-400">{t.process.steps[2].desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-cta rounded-full -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                <div className="pl-12 md:pl-0 order-1 md:order-2">
                  <div className="glass-card p-6 rounded-lg transform group-hover:scale-105 transition-transform duration-500 bg-black/50 font-code text-sm text-gray-300 border-l-4 border-cta">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <p>
                      <span className="text-secondary">async function</span>{" "}
                      <span className="text-primary">deploy</span>() {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-500">{t.process.codeComment}</span>
                    </p>
                    <p className="pl-4">await runCI();</p>
                    <p className="pl-4">await pushToProd();</p>
                    <p>{"}"}</p>
                    <p className="mt-2 text-cta">{t.process.codeStatus1}</p>
                    <p className="text-green-400">{t.process.codeStatus2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-midnight to-black opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {t.skills.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.skills.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.skills.cards.map((card, idx) => {
                const palettes = [
                  {
                    iconBg: "bg-primary/10 group-hover:bg-primary/20",
                    iconText: "text-primary",
                    tag: "bg-primary/10 text-primary",
                  },
                  {
                    iconBg: "bg-secondary/10 group-hover:bg-secondary/20",
                    iconText: "text-secondary",
                    tag: "bg-secondary/10 text-secondary",
                  },
                  {
                    iconBg: "bg-cta/10 group-hover:bg-cta/20",
                    iconText: "text-cta",
                    tag: "bg-cta/10 text-cta",
                  },
                ];
                const iconPaths = [
                  // Mobile & Web Development — phone/device
                  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                  // Automation & Bots — bot face
                  "M9 13h6m-3-3v.01M12 3v2m0 0a4 4 0 014 4v2H8V9a4 4 0 014-4zM5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6m-3 4h.01M9 17h.01",
                  // CRM & Business — briefcase
                  "M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  // AI & Content — sparkle/bolt
                  "M13 10V3L4 14h7v7l9-11h-7z",
                  // Design & Media — paint/film
                  "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                  // Analytical — chart-bar
                  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                ];
                const v = palettes[idx % palettes.length];
                const path = iconPaths[idx] ?? iconPaths[0];
                return (
                  <div
                    key={card.title}
                    className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div
                      className={`w-12 h-12 ${v.iconBg} rounded-lg flex items-center justify-center mb-6 transition-colors`}
                    >
                      <svg
                        className={`w-6 h-6 ${v.iconText}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d={path}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 font-hud text-xs">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${v.tag} rounded`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  {t.about.titleA}
                  <br />
                  {t.about.titleB}
                </h2>
                <p className="text-gray-400 text-lg mb-6">{t.about.p1}</p>
                <p className="text-gray-400 text-lg mb-6">{t.about.p2}</p>
                <div className="flex gap-4">
                  {t.about.stats.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          {s.value}
                        </div>
                        <div className="text-sm text-gray-500">{s.label}</div>
                      </div>
                      {i < t.about.stats.length - 1 && (
                        <div className="w-px h-10 bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {t.about.values.map((v, i) => {
                  const labelClass =
                    i === 0
                      ? "text-primary"
                      : i === 1
                      ? "text-secondary"
                      : i === 2
                      ? "text-cta"
                      : "text-white";
                  const mt = i % 2 === 1 ? "mt-8" : "";
                  return (
                    <div
                      key={v.title}
                      className={`glass-card rounded-lg p-6 aspect-square flex flex-col justify-between ${mt}`}
                    >
                      <div
                        className={`${labelClass} font-hud text-xs tracking-widest`}
                      >
                        {v.label}
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-white">
                          {v.title}
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {t.projects.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.projects.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.projects.items.map((p) => (
                <article
                  key={p.title}
                  className="glass-card p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`${p.accentClass} font-hud text-xs tracking-widest`}
                    >
                      {p.tag}
                    </span>
                    <svg
                      className="w-4 h-4 text-white/40 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 font-hud text-[10px] uppercase tracking-wider mb-4">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.links && p.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
                      {p.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                        >
                          {link.label}
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-midnight to-black opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white mb-16">
              {t.testimonials.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.testimonials.items.map((tm) => (
                <div key={tm.name} className="glass-card p-8 rounded-xl relative">
                  <svg
                    className="absolute top-6 right-6 w-8 h-8 text-white/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                  <p className="text-gray-300 italic mb-6 relative z-10">
                    &ldquo;{tm.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-sm">{tm.name}</h4>
                    <p className={`${tm.roleClass} text-xs`}>{tm.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-black">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {t.faq.title}
            </h2>
            <div className="space-y-4">
              {t.faq.items.map((item) => (
                <details key={item.q} className="glass-card rounded-lg group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-bold text-white">{item.q}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 text-center">
            <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl border-t border-primary/50 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">{t.contact.subtitle}</p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {t.contact.channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-lg p-4 flex flex-col items-center gap-1 hover:border-primary/40 transition-colors"
                  >
                    <span className="font-hud text-[11px] tracking-widest uppercase text-primary">
                      {ch.label}
                    </span>
                    <span className="text-sm text-white break-all">{ch.value}</span>
                  </a>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <a
                  href="/Sultonov_Azizbek_CV.pdf"
                  download="Sultonov_Azizbek_CV.pdf"
                  className="group inline-flex w-full items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  {t.contact.resumeCta}
                </a>
                <p className="text-xs text-gray-500 mt-4">{t.contact.resumeHint}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a className="flex items-center gap-2 mb-4" href="#hero">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span className="font-heading font-bold text-xl text-white">
                  Azizbek <span className="text-primary">Sultonov</span>
                </span>
              </a>
              <p className="text-gray-500 max-w-xs">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">
                {t.footer.siteHeading}
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#process">
                    {t.footer.links.process}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#skills">
                    {t.footer.links.skills}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#projects"
                  >
                    {t.footer.links.projects}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#faq">
                    {t.footer.links.faq}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">
                {t.footer.connectHeading}
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href={`mailto:${contactInfo.EMAIL}`}
                  >
                    {t.footer.connect.email}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href={contactInfo.TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.footer.connect.telegram}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href={`tel:${contactInfo.PHONE.replace(/\s/g, "")}`}
                  >
                    {t.footer.connect.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sultonov Azizbek. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <a
                className="text-gray-600 hover:text-primary transition-colors"
                href={contactInfo.TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Telegram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-primary transition-colors"
                href={`mailto:${contactInfo.EMAIL}`}
              >
                <span className="sr-only">Email</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-primary transition-colors"
                href={`tel:${contactInfo.PHONE.replace(/\s/g, "")}`}
              >
                <span className="sr-only">Phone</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
