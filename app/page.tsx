"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  Menu,
  X,
  Code2,
  Terminal,
  Download,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Proactive Guard",
    category: "AI / FULL STACK",
    type: "AI",
    description:
      "An AI-powered women's safety platform designed to assess risk signals and support safety monitoring through an integrated dashboard and Flutter Android application.",
    technologies: ["AI Risk Engine", "Gemini API", "Flutter", "Dashboard"],
    highlights: [
      "AI-powered risk assessment",
      "Safety monitoring dashboard",
      "Flutter-based Android application",
    ],
    featured: true,
    href: "/projects/proactive-guard",
    github: "https://github.com/ProactiveGuard/proactive-guard",
  },
  {
    number: "02",
    name: "BusGo",
    category: "BACKEND / FULL STACK",
    type: "Full Stack",
    description:
      "A full-stack bus ticket booking system combining a Next.js frontend with a Java Spring Boot backend, PostgreSQL and Redis.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "JWT",
    ],
    highlights: [
      "Redis-based temporary seat reservation with a 3-minute TTL",
      "JWT-based authentication",
      "PDF ticket generation with booking barcode",
    ],
    featured: false,
    href: "/projects/busgo",
    github: "https://github.com/Animesh4956/Bus-Ticket-Booking-System",
  },
  {
    number: "03",
    name: "TCET ERP Portal",
    category: "BACKEND / WEB",
    type: "Backend",
    description:
      "A college ERP interface demonstration built with Java, Spring Boot and Thymeleaf, featuring academic and administrative modules.",
    technologies: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "Spring Security",
    ],
    highlights: [
      "Dashboard, attendance and results interfaces",
      "Timetable, syllabus and fee-related screens",
      "Sample data and CSV marksheet export",
    ],
    featured: false,
    href: "/projects/tcet-erp",
    github: "https://github.com/Animesh4956/ERP-PORTAL-Project",
  },
];

const filters = ["All", "AI", "Full Stack", "Backend"];

const skills = [
  {
    title: "LANGUAGES",
    items: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "BACKEND",
    items: ["Spring Boot", "Spring Security", "REST APIs", "JWT"],
  },
  {
    title: "FRONTEND",
    items: ["React", "Next.js", "HTML", "CSS", "Flutter"],
  },
  {
    title: "TOOLS & INFRASTRUCTURE",
    items: ["Git", "Docker", "Redis", "GitHub Actions"],
  },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);

  const links = [
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#1f2630] bg-[#0a0c10]/90 backdrop-blur-xl">
      <nav className="container-main flex h-[72px] items-center justify-between">
        <a href="#" className="mono text-lg font-bold tracking-tight">
          ANIMESH<span className="accent">.</span>
          <span className="muted text-xs">M</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-[#8b949e] transition hover:text-white"
            >
              {label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setTalkOpen(!talkOpen)}
              aria-expanded={talkOpen}
              aria-haspopup="true"
              className="outline-button"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </button>

            {talkOpen && (
              <div className="absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-lg border border-[#1f2630] bg-[#11151c] p-2 shadow-2xl">
                <a
                  href="mailto:animeshmohapatramail@gmail.com"
                  onClick={() => setTalkOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-[#e6edf3] transition hover:bg-[#1f2630] hover:text-[#3fb950]"
                >
                  <Mail size={17} />
                  Email me
                </a>

                <a
                  href="tel:+918424916316"
                  onClick={() => setTalkOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-[#e6edf3] transition hover:bg-[#1f2630] hover:text-[#3fb950]"
                >
                  <Phone size={17} />
                  Call me
                </a>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#1f2630] bg-[#11151c] px-6 py-5 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-[#e6edf3]"
            >
              {label}
            </a>
          ))}

          <div className="mt-3 border-t border-[#1f2630] pt-3">
            <p className="terminal-label mb-2">GET IN TOUCH</p>

            <a
              href="mailto:animeshmohapatramail@gmail.com"
              className="flex items-center gap-3 py-3 text-sm text-[#e6edf3]"
            >
              <Mail size={16} />
              Email me
            </a>

            <a
              href="tel:+918424916316"
              className="flex items-center gap-3 py-3 text-sm text-[#e6edf3]"
            >
              <Phone size={16} />
              Call me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="site-grid relative flex min-h-[720px] items-center overflow-hidden border-b border-[#1f2630] pt-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-[#3fb950]/[0.055] blur-[120px]" />

      <div className="container-main relative py-24">
        <Reveal>
          <div className="terminal-label mb-8 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3fb950]" />
            COMPUTER ENGINEERING / SOFTWARE DEVELOPMENT
          </div>

          <p className="mono mb-5 text-sm text-[#8b949e]">
            {"<"} hello, world! {"/>"}
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.12] tracking-[-0.055em] sm:text-6xl md:text-8xl">
            Animesh
            <br />
            <span className="text-[#3fb950]">Mohapatra.</span>
          </h1>

          <div className="mono mt-8 flex items-center gap-2 text-sm sm:text-base">
            <span className="text-[#3fb950]">$</span>
            <span className="text-[#e6edf3]">
              Computer Engineering Student
            </span>
            <span className="cursor" />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#8b949e] sm:text-lg">
            I build software applications with a focus on backend
            engineering, full-stack development and practical
            problem-solving. I enjoy working across the stack,
            understanding system architecture and turning ideas
            into functional applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="green-button">
              Explore Projects <ArrowDown size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-8 text-sm text-[#8b949e]">
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-[#3fb950]" />
              Software Development
            </span>

            <span className="flex items-center gap-2">
              <Terminal size={16} className="text-[#3fb950]" />
              Backend Engineering
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-8 hidden text-right md:block">
        <span className="terminal-label">SCROLL TO EXPLORE</span>
        <div className="mt-2 flex justify-end">
          <ArrowDown size={18} className="text-[#3fb950]" />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section id="projects" className="section scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <p className="terminal-label">01 / SELECTED WORK</p>

          <h2 className="section-heading">
            Projects<span className="accent">.</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[#8b949e]">
            A selection of applications and systems I've worked on,
            exploring backend architecture, full-stack development
            and AI-powered features.
          </p>
        </Reveal>

        <div className="my-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-sm border px-4 py-2 font-mono text-xs transition ${
                filter === item
                  ? "border-[#3fb950] bg-[#3fb950]/10 text-[#3fb950]"
                  : "border-[#1f2630] text-[#8b949e] hover:border-[#3fb950]/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <article
                className={`project-card panel flex h-full flex-col p-6 sm:p-8 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="mono text-sm text-[#3fb950]">
                    /{project.number}
                  </span>

                  <span className="mono text-right text-[10px] tracking-widest text-[#8b949e]">
                    {project.category}
                  </span>
                </div>

                <div className="mt-10 flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8b949e]">
                    {project.description}
                  </p>

                  <div className="mt-7">
                    <p className="terminal-label mb-4">
                      ENGINEERING HIGHLIGHTS
                    </p>

                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-[#e6edf3]"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-[#3fb950]"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#1f2630] pt-6">
                    <a
                      href={project.href}
                      className="flex w-fit items-center gap-2 text-sm font-semibold text-[#3fb950] transition hover:gap-3"
                    >
                      Explore project <ArrowUpRight size={16} />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-2 text-sm text-[#8b949e] transition hover:text-white"
                      >
                        GitHub <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mono mt-7 text-xs text-[#8b949e]">
          SHOWING {visibleProjects.length.toString().padStart(2, "0")} / 03
          PROJECTS
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <p className="terminal-label">02 / ABOUT ME</p>

          <h2 className="section-heading">
            Engineering with purpose<span className="accent">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-sm leading-8 text-[#8b949e]">
              <p>
                I'm Animesh Mohapatra, a Computer Engineering student
                at Thakur College of Engineering and Technology,
                Mumbai.
              </p>

              <p>
                My project experience includes developing a
                full-stack bus ticket booking system, building a
                college ERP interface and contributing to an
                AI-powered women's safety platform.
              </p>

              <p>
                I am particularly interested in backend development,
                application architecture, authentication systems
                and building software that solves practical
                problems.
              </p>

              <p>
                I value clean implementation, continuous learning
                and understanding how software systems work beyond
                their user interfaces.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.07}>
                <div className="panel h-full p-5">
                  <h3 className="mono mb-5 text-xs text-[#3fb950]">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-[#e6edf3]"
                      >
                        <span className="mr-2 text-[#3fb950]">/</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <p className="terminal-label">03 / EDUCATION</p>

          <h2 className="section-heading">
            Academic background<span className="accent">.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="panel mt-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#3fb950]/20 bg-[#3fb950]/10 text-[#3fb950]">
              <GraduationCap size={24} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="terminal-label">2025 — PRESENT</p>

                <span className="border border-[#1f2630] px-3 py-1 font-mono text-[10px] text-[#8b949e]">
                  UNDERGRADUATE
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[#e6edf3]">
                Bachelor of Engineering
              </h3>

              <p className="mt-2 text-sm text-[#3fb950]">
                Computer Engineering
              </p>

              <p className="mt-3 text-sm text-[#8b949e]">
                Thakur College of Engineering and Technology
              </p>

              <div className="mt-6 border-t border-[#1f2630] pt-5">
                <p className="terminal-label">FIRST-YEAR AGGREGATE CGPA</p>
                <p className="mt-2 text-2xl font-semibold text-[#e6edf3]">
                  8.25
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const contactOptions = [
    {
      title: "Email",
      detail: "animeshmohapatramail@gmail.com",
      href: "mailto:animeshmohapatramail@gmail.com",
      icon: Mail,
      label: "SEND AN EMAIL",
    },
    {
      title: "Phone",
      detail: "+91 84249 16316",
      href: "tel:+918424916316",
      icon: Phone,
      label: "GIVE ME A CALL",
    },
    {
      title: "LinkedIn",
      detail: "Connect professionally",
      href: "https://www.linkedin.com/in/animesh-mohapatra-tcet2431/",
      icon: ArrowUpRight,
      label: "CONNECT WITH ME",
    },
    {
      title: "GitHub",
      detail: "Explore my repositories",
      href: "https://github.com/Animesh4956",
      icon: Code2,
      label: "VIEW MY CODE",
    },
  ];

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <p className="terminal-label">04 / GET IN TOUCH</p>

          <h2 className="section-heading max-w-2xl">
            Have a project in mind? Let's build something.
            <span className="accent">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#8b949e]">
            Feel free to reach out for conversations about software
            engineering, project collaborations or professional
            connections.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            const isExternal =
              option.title === "LinkedIn" || option.title === "GitHub";

            return (
              <Reveal key={option.title} delay={index * 0.07}>
                <a
                  href={option.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="panel group flex items-center justify-between gap-4 p-6 transition duration-300 hover:border-[#3fb950]/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#3fb950]/20 bg-[#3fb950]/10 text-[#3fb950]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-[#e6edf3]">
                        {option.title}
                      </p>

                      <p className="mt-1 text-xs text-[#8b949e]">
                        {option.detail}
                      </p>

                      <p className="mono mt-3 text-[10px] tracking-wider text-[#3fb950]">
                        {option.label}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-[#8b949e] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3fb950]"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1f2630] py-8">
      <div className="container-main flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <a href="#" className="mono text-sm font-bold">
          ANIMESH<span className="accent">.</span>M
        </a>

        <p className="text-xs text-[#8b949e]">
          Designed & built by Animesh Mohapatra.
        </p>

        <div className="flex gap-5 text-[#8b949e]">
          <a
            href="https://github.com/Animesh4956"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-[#3fb950]"
          >
            <Code2 size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/animesh-mohapatra-tcet2431/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-[#3fb950]"
          >
            <ArrowUpRight size={18} />
          </a>

          <a
            href="mailto:animeshmohapatramail@gmail.com"
            aria-label="Email"
            className="transition hover:text-[#3fb950]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="container-main mt-8 border-t border-[#1f2630] pt-5">
        <p className="mono text-[10px] text-[#8b949e]">
          © 2026 ANIMESH MOHAPATRA · BUILT WITH NEXT.JS
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}