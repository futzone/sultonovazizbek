import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-black px-4 py-2 rounded font-bold shadow-[0_0_15px_rgba(0,255,255,0.5)]"
        href="#main-content"
      >
        Skip to main content
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

          <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-hud tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for new projects
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Building the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                I&apos;m{" "}
                <span className="text-white font-medium">Sultonov Azizbek</span>
                {" "}— a full-stack developer crafting fast, accessible, and
                beautifully engineered web experiences with modern tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <a
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] text-center"
                  href="#projects"
                >
                  VIEW MY WORK
                </a>
                <a
                  className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                  href="#contact"
                >
                  <span>GET IN TOUCH</span>
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
                <div>
                  <div className="text-2xl font-hud text-white font-bold">50+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-hud text-white font-bold">3+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Years Exp.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-hud text-white font-bold">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Client Trust
                  </div>
                </div>
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
                <div>STATUS: ONLINE</div>
                <div>UPTIME: 99.9%</div>
              </div>
              <div className="absolute bottom-10 left-10 font-hud text-xs text-secondary/70">
                <div>MODE: FULL-STACK</div>
                <div>FOCUS: SHIPPING</div>
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
                How I Work
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A clear, collaborative process — from first conversation to a
                production-ready product.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2" />

              {/* Step 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-hud mb-2 rounded border border-primary/20">
                    STEP 01
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Discovery &amp; Strategy
                  </h3>
                  <p className="text-gray-400">
                    We start with your goals, users, and constraints. I distill
                    everything into a tight scope and a realistic roadmap.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-primary rounded-full -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                <div className="pl-12 md:pl-0 order-1 md:order-2">
                  <div className="glass-card p-6 rounded-lg transform group-hover:scale-105 transition-transform duration-500">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-primary">▸</span> Stakeholder interviews
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">▸</span> Competitive audit
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">▸</span> Tech stack proposal
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">▸</span> Milestone roadmap
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
                <div className="pl-12 md:pl-12 order-2">
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-hud mb-2 rounded border border-secondary/20">
                    STEP 02
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    Design &amp; Build
                  </h3>
                  <p className="text-gray-400">
                    Pixel-perfect UI, type-safe code, and accessible by default.
                    You see progress every week in a staging environment.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-secondary rounded-full -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(123,97,255,0.5)]" />
                <div className="pl-12 md:pl-0 md:text-right md:pr-12 order-1">
                  <div className="glass-card p-6 rounded-lg transform group-hover:scale-105 transition-transform duration-500">
                    <ul className="space-y-2 text-sm text-gray-300 md:text-right">
                      <li>Component-driven UI</li>
                      <li>Type-safe APIs end-to-end</li>
                      <li>Automated tests &amp; CI</li>
                      <li>Weekly demo &amp; review</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-cta/10 text-cta text-xs font-hud mb-2 rounded border border-cta/20">
                    STEP 03
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cta transition-colors">
                    Launch &amp; Iterate
                  </h3>
                  <p className="text-gray-400">
                    Ship to production, instrument with analytics, and iterate
                    based on real user data — not assumptions.
                  </p>
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
                      <span className="text-gray-500">// run tests</span>
                    </p>
                    <p className="pl-4">await runCI();</p>
                    <p className="pl-4">await pushToProd();</p>
                    <p>{"}"}</p>
                    <p className="mt-2 text-cta">&gt; Deploying...</p>
                    <p className="text-green-400">&gt; Live (1.2s)</p>
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
                What I Do
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A focused stack for building reliable, modern products end-to-end.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Frontend Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Polished, performant interfaces with Next.js, React, and
                  TypeScript. Accessibility and motion are first-class.
                </p>
                <div className="flex flex-wrap gap-2 font-hud text-xs">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    Tailwind
                  </span>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Backend &amp; APIs
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Type-safe APIs, clean data models, and pragmatic services that
                  scale with the business — not against it.
                </p>
                <div className="flex flex-wrap gap-2 font-hud text-xs">
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                    Postgres
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                    tRPC
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                    Prisma
                  </span>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-cta/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cta/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-cta"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  DevOps &amp; Delivery
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Reliable CI/CD pipelines, observability, and infrastructure as
                  code — so deploys stay calm and predictable.
                </p>
                <div className="flex flex-wrap gap-2 font-hud text-xs">
                  <span className="px-2 py-1 bg-cta/10 text-cta rounded">
                    Docker
                  </span>
                  <span className="px-2 py-1 bg-cta/10 text-cta rounded">
                    GitHub Actions
                  </span>
                  <span className="px-2 py-1 bg-cta/10 text-cta rounded">
                    Vercel
                  </span>
                  <span className="px-2 py-1 bg-cta/10 text-cta rounded">
                    AWS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Engineer by craft,
                  <br />
                  builder at heart.
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  I&apos;ve spent the last few years helping startups and product
                  teams ship software that actually works in production — clear
                  code, fast UI, and a focus on real user outcomes.
                </p>
                <p className="text-gray-400 text-lg mb-6">
                  Beyond shipping features, I care about how a product feels:
                  performance, accessibility, and the small details that turn a
                  good app into a great one.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">8</div>
                    <div className="text-sm text-gray-500">Industries</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">∞</div>
                    <div className="text-sm text-gray-500">Cups of Tea</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6 aspect-square flex flex-col justify-between">
                  <div className="text-primary font-hud text-xs tracking-widest">
                    01 / VALUES
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white">
                      Ship.
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Done &gt; perfect. We iterate from real signals.
                    </p>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-6 aspect-square mt-8 flex flex-col justify-between">
                  <div className="text-secondary font-hud text-xs tracking-widest">
                    02 / VALUES
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white">
                      Clarity.
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Simple code, simple comms, no hidden trade-offs.
                    </p>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-6 aspect-square flex flex-col justify-between">
                  <div className="text-cta font-hud text-xs tracking-widest">
                    03 / VALUES
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white">
                      Quality.
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Tests, types, accessibility — by default.
                    </p>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-6 aspect-square mt-8 flex flex-col justify-between">
                  <div className="text-white font-hud text-xs tracking-widest">
                    04 / VALUES
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white">
                      Care.
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      For users, for teammates, for the long run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A selection of recent work — production systems, products, and
                experiments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  tag: "SaaS",
                  accentClass: "text-primary",
                  title: "Atlas Analytics",
                  desc: "Real-time analytics platform with sub-second dashboards over 1B+ events.",
                  stack: ["Next.js", "ClickHouse", "tRPC"],
                },
                {
                  tag: "FinTech",
                  accentClass: "text-secondary",
                  title: "Vault Pay",
                  desc: "PCI-compliant payments gateway and merchant dashboard for SMBs.",
                  stack: ["Node.js", "Postgres", "AWS"],
                },
                {
                  tag: "AI",
                  accentClass: "text-cta",
                  title: "Lens AI",
                  desc: "Document Q&A copilot with vector search and inline citations.",
                  stack: ["Python", "pgvector", "OpenAI"],
                },
                {
                  tag: "E-Commerce",
                  accentClass: "text-primary",
                  title: "Orbit Store",
                  desc: "Headless storefront with 98+ Lighthouse score across the board.",
                  stack: ["Next.js", "Shopify", "Vercel"],
                },
                {
                  tag: "DevTools",
                  accentClass: "text-secondary",
                  title: "Forge CLI",
                  desc: "Open-source scaffold for type-safe full-stack apps in seconds.",
                  stack: ["TypeScript", "Bun", "Zod"],
                },
                {
                  tag: "Marketing",
                  accentClass: "text-cta",
                  title: "Nova Site",
                  desc: "Award-finalist marketing site with WebGL hero and CMS-driven blocks.",
                  stack: ["Next.js", "Three.js", "Sanity"],
                },
              ].map((p) => (
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
                  <div className="flex flex-wrap gap-2 font-hud text-[10px] uppercase tracking-wider">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
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
              Kind Words
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Azizbek delivered our launch on time and the codebase was the cleanest hand-off we've ever had. Hire him before someone else does.",
                  name: "David K.",
                  role: "CEO, TechFlow",
                  roleClass: "text-primary",
                },
                {
                  quote:
                    "He thinks like a product owner, not just a coder. Every PR moved the metric we cared about.",
                  name: "Maria S.",
                  role: "Head of Product, FutureCorp",
                  roleClass: "text-secondary",
                },
                {
                  quote:
                    "Calm, fast, and genuinely cares about the work. He raised the bar for the rest of our team.",
                  name: "Marcus J.",
                  role: "CTO, SecureNet",
                  roleClass: "text-cta",
                },
              ].map((t) => (
                <div key={t.name} className="glass-card p-8 rounded-xl relative">
                  <svg
                    className="absolute top-6 right-6 w-8 h-8 text-white/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                  <p className="text-gray-300 italic mb-6 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className={`${t.roleClass} text-xs`}>{t.role}</p>
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What kind of projects do you take on?",
                  a: "Marketing sites, SaaS products, internal tools, and AI-powered features. Anything where good engineering and a clear UI move the needle.",
                },
                {
                  q: "Do you work solo or with a team?",
                  a: "Both. I happily lead solo builds and also slot into existing teams as a senior IC or tech lead.",
                },
                {
                  q: "What's your typical timeline?",
                  a: "Small landing pages: 1–2 weeks. MVPs: 4–8 weeks. Larger products: scoped and broken into milestones so you see value every sprint.",
                },
                {
                  q: "How do we get started?",
                  a: "Send me a quick note about your project — goals, timeline, and budget if you have one. I reply within one business day.",
                },
              ].map((item) => (
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
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto glass-card p-12 rounded-2xl border-t border-primary/50 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s build something great.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Got a project, a question, or a vague idea? Drop a line — I read
                every email.
              </p>
              <form
                action="mailto:hello@sultonovazizbek.dev"
                method="post"
                encType="text/plain"
                className="max-w-md mx-auto space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <button
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  Or reach out directly at hello@sultonovazizbek.dev
                </p>
              </form>
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
                  SULTONOV.DEV
                </span>
              </a>
              <p className="text-gray-500 max-w-xs">
                Full-stack developer building the next generation of web
                products. Based in Uzbekistan, working worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Site</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#process">
                    Process
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#contact">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sultonov Azizbek. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                className="text-gray-600 hover:text-white transition-colors"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-white transition-colors"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-white transition-colors"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect height="12" width="4" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
