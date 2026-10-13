const links = [
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Community", href: "#community" },
];

const pillars = [
  {
    number: "01",
    title: "Learning",
    description:
      "A clear place to share learning information, resources, and updates with the school community.",
    tone: "bg-[#e7f0e9]",
  },
  {
    number: "02",
    title: "Participation",
    description:
      "Bring school activities and opportunities together so students and families can stay involved.",
    tone: "bg-[#f8edda]",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "Make it easier for families, students, and staff to find the information they need.",
    tone: "bg-[#e9e8f4]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf6] text-[#17251e]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="Shule360 home">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#214e3b] text-lg font-bold text-white">
            S
          </span>
          <span className="text-xl font-semibold tracking-tight">Shule360</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#526158] transition hover:text-[#214e3b]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#214e3b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173a2b]"
        >
          Get started <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7e1d8] bg-white/70 px-4 py-2 text-sm font-medium text-[#42614f]">
            <span className="size-2 rounded-full bg-[#75a27f]" />
            A better connected school community
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Make every part of school feel <span className="text-[#568268]">connected.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#647168]">
            Shule360 brings learning, school life, and communication into one welcoming place for students, families, and educators.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#learning"
              className="rounded-full bg-[#214e3b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173a2b]"
            >
              Explore Shule360 <span aria-hidden="true">→</span>
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#d8ded8] bg-white px-6 py-3.5 text-sm font-semibold text-[#31463a] transition hover:border-[#91a796]"
            >
              See what it brings together
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#e5e8e1] pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#e9c9a5] text-xs">S</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#b6c9b3] text-xs">F</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#fbfaf6] bg-[#d5c8e2] text-xs">T</span>
            </div>
            <p className="text-sm text-[#647168]">
              Designed around the whole school community
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-6 -top-10 size-36 rounded-full bg-[#f2dfb9] blur-3xl" />
          <div className="absolute -bottom-10 -left-8 size-44 rounded-full bg-[#c8ddcb] blur-3xl" />
          <div className="relative rounded-[2rem] border border-white bg-[#e8eee5] p-4 shadow-[0_30px_80px_-35px_rgba(23,53,37,0.38)] sm:p-6">
            <div className="rounded-[1.5rem] bg-[#fbfaf6] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-[#e7e9e2] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#829087]">Your school, together</p>
                  <p className="mt-1 text-xl font-semibold">A day at a glance</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-[#e7f0e9] text-[#426b50]" aria-hidden="true">✳</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-[#e7f0e9] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-lg" aria-hidden="true">▤</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">Learning</p>
                    <p className="mt-1 text-sm text-[#647168]">Resources and classroom updates</p>
                  </div>
                  <span className="text-xl text-[#648570]" aria-hidden="true">→</span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-[#f8edda] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-lg" aria-hidden="true">◷</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">School life</p>
                    <p className="mt-1 text-sm text-[#647168]">Activities, events, and notices</p>
                  </div>
                  <span className="text-xl text-[#987b4d]" aria-hidden="true">→</span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-[#e9e8f4] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-lg" aria-hidden="true">♡</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">Community</p>
                    <p className="mt-1 text-sm text-[#647168]">A shared space for families and staff</p>
                  </div>
                  <span className="text-xl text-[#77739b]" aria-hidden="true">→</span>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-[#214e3b] p-5 text-white">
                <p className="text-sm text-white/70">One school community</p>
                <p className="mt-1 text-xl font-semibold">Many ways to grow.</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-2/3 rounded-full bg-[#c9d8a4]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 top-16 hidden rounded-2xl border border-[#e5e8e1] bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-[#829087]">Built for</p>
            <p className="mt-0.5 text-sm font-semibold">Students · Families · Educators</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#e8e9e2] bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#648570]">A school community platform</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              More than a noticeboard. A shared school experience.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-[#647168]">
            Inspired by the clear, community-first structure of the Karatina reference, Shule360 is taking shape around the people and everyday moments that make a school work. This is the starting point; the specific tools will grow with the needs of the school.
          </p>
        </div>
      </section>

      <section id="learning" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#648570]">One connected place</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Built around school life.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#647168]">
            A simple starting structure for the information and experiences that matter across a school day.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.number} className={`rounded-[1.75rem] ${pillar.tone} p-7 sm:p-8`}>
              <p className="text-sm font-semibold text-[#6d8173]">{pillar.number}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 leading-7 text-[#647168]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="community" className="bg-[#214e3b] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c9d8a4]">Growing together</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              A stronger school experience starts with staying connected.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Shule360 is being built one useful step at a time, with students, families, and educators in mind.
            </p>
          </div>
          <a
            id="contact"
            href="#about"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f8edda] px-6 py-4 text-sm font-semibold text-[#214e3b] transition hover:bg-white"
          >
            Discover the approach <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-[#758078] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <a href="#" className="font-semibold text-[#31463a]">Shule360</a>
        <p>Learning, school life, and community in one place.</p>
        <p>© {new Date().getFullYear()} Shule360</p>
      </footer>
    </main>
  );
}
