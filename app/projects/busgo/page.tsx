
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BusFront,
  Ticket,
  Armchair,
  ShieldCheck,
  Clock3,
  Database,
  FileText,
  LockKeyhole,
  LayoutDashboard,
  Code2,
  Users,
  CreditCard,
  Route,
  ScanLine,
} from "lucide-react";

const screenshots = [
  {
    number: "01",
    title: "Landing & Login",
    description:
      "The entry point for searching bus routes, selecting travel dates, and accessing account or PNR verification features.",
    src: "/images/busgo/login.png",
    alt: "BusGo Express landing and login interface",
  },
  {
    number: "02",
    title: "User Dashboard",
    description:
      "A passenger dashboard showing account information, booking history, ticket status, and PDF download actions.",
    src: "/images/busgo/user-dashboard.png",
    alt: "BusGo passenger dashboard and booking history",
  },
  {
    number: "03",
    title: "Admin Dashboard",
    description:
      "An administrative overview of the bus fleet, booking occupancy, revenue, registered users, and recent transactions.",
    src: "/images/busgo/admin-dashboard.png",
    alt: "BusGo administrator dashboard",
  },
];

const features = [
  {
    number: "01",
    title: "Temporary Seat Reservation",
    description:
      "Redis temporarily holds selected seats with a three-minute time-to-live (TTL), helping prevent seats from remaining locked indefinitely during the booking process.",
    icon: Clock3,
    tag: "REDIS / TTL",
  },
  {
    number: "02",
    title: "JWT Authentication",
    description:
      "JSON Web Tokens support authenticated access to the application's user-facing and administrative functionality.",
    icon: LockKeyhole,
    tag: "AUTHENTICATION",
  },
  {
    number: "03",
    title: "PDF Ticket Generation",
    description:
      "The system generates downloadable PDF tickets containing passenger and journey information, selected seats, and a barcode encoding the booking ID.",
    icon: FileText,
    tag: "DOCUMENT GENERATION",
  },
  {
    number: "04",
    title: "Booking & Fleet Management",
    description:
      "Passenger booking history and administrative views bring route, occupancy, passenger, and transaction information into one application.",
    icon: LayoutDashboard,
    tag: "DASHBOARD",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "JWT",
  "PDF Generation",
];

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="terminal-label">
        {number} / {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
        <span className="accent">.</span>
      </h2>
    </div>
  );
}

export default function BusGoPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-[#e6edf3]">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#1f2630] bg-[#0a0c10]/90 backdrop-blur-xl">
        <nav className="container-main flex h-[70px] items-center justify-between">
          <Link href="/" className="mono text-sm font-bold">
            ANIMESH<span className="accent">.</span>M
          </Link>

          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-[#8b949e] transition hover:text-[#3fb950]"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="site-grid border-b border-[#1f2630]">
        <div className="container-main py-24 sm:py-32">
          <div className="terminal-label mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
            FULL-STACK CASE STUDY / 02
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="border border-[#3fb950]/30 bg-[#3fb950]/10 px-3 py-1.5 font-mono text-[11px] text-[#3fb950]">
              FULL-STACK DEVELOPMENT
            </span>
            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              BOOKING SYSTEM
            </span>
            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              JAVA / NEXT.JS
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-[-0.055em] sm:text-7xl md:text-8xl">
            BusGo
            <br />
            <span className="text-[#3fb950]">Express.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8b949e]">
            A full-stack bus ticket booking system built to bring
            together route discovery, seat reservation, passenger
            bookings, authentication, and downloadable PDF tickets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/Animesh4956/Bus-Ticket-Booking-System"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#3fb950]/40 bg-[#3fb950]/10 px-5 py-3 text-sm font-medium text-[#3fb950] transition hover:bg-[#3fb950]/20"
            >
              View source code <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-8 border-t border-[#1f2630] pt-8 sm:grid-cols-3">
            <div>
              <p className="terminal-label">PROJECT TYPE</p>
              <p className="mt-3 text-sm">Individual project</p>
            </div>
            <div>
              <p className="terminal-label">APPLICATION</p>
              <p className="mt-3 text-sm">Bus ticket booking</p>
            </div>
            <div>
              <p className="terminal-label">MY FOCUS</p>
              <p className="mt-3 text-sm">
                Frontend / Backend / Integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 - Overview */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="01"
            label="OVERVIEW"
            title="The project"
          />

          <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-6 text-sm leading-8 text-[#8b949e]">
              <p>
                BusGo Express is a full-stack bus ticket booking
                application designed to demonstrate the core
                workflow of an online travel reservation platform.
                Passengers can explore routes, select seats, manage
                bookings, and access their ticket documents.
              </p>

              <p>
                I designed and developed the application
                end-to-end, working across the frontend and backend.
                The frontend is built with Next.js, React, and
                TypeScript, while the backend uses Java and
                Spring Boot.
              </p>

              <p>
                PostgreSQL handles persistent application data,
                while Redis supports temporary seat reservations.
                The application also includes JWT-based
                authentication and PDF ticket generation.
              </p>

              <p>
                The project is currently a locally running
                demonstration. It is not presented as a deployed
                production booking service.
              </p>
            </div>

            <div className="panel h-fit p-6">
              <p className="terminal-label mb-6">
                PROJECT HIGHLIGHTS
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: BusFront,
                    title: "Route-based booking",
                    detail: "Search and explore bus journeys",
                  },
                  {
                    icon: Armchair,
                    title: "Seat reservation",
                    detail: "Temporary holds using Redis",
                  },
                  {
                    icon: Ticket,
                    title: "Digital tickets",
                    detail: "Downloadable PDF confirmations",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure access",
                    detail: "JWT-based authentication",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <Icon
                        size={19}
                        className="mt-1 shrink-0 text-[#3fb950]"
                      />
                      <div>
                        <p className="text-sm font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-[#8b949e]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Application Screens */}
      <section className="section bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="02"
            label="APPLICATION"
            title="Three views. One booking platform"
          />

          <div className="space-y-16">
            {screenshots.map((screen) => (
              <article key={screen.number}>
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="terminal-label">
                      SCREEN / {screen.number}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {screen.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#8b949e]">
                      {screen.description}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-[#3fb950]">
                    BUSGO EXPRESS
                  </span>
                </div>

                <div className="overflow-hidden border border-[#1f2630] bg-[#11151c] p-2 sm:p-3">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - Engineering */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="03"
            label="ENGINEERING"
            title="Key implementation details"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="panel p-6 sm:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Icon size={23} className="text-[#3fb950]" />
                    <span className="font-mono text-xs text-[#8b949e]">
                      {feature.number}
                    </span>
                  </div>

                  <p className="terminal-label">{feature.tag}</p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 - Architecture */}
      <section className="section bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="04"
            label="ARCHITECTURE"
            title="How the application is structured"
          />

          <div className="panel p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-[#1f2630] bg-[#0a0c10] p-5">
                <Code2 className="mb-4 text-[#3fb950]" size={22} />
                <p className="terminal-label">FRONTEND</p>
                <h3 className="mt-2 font-semibold">
                  Next.js application
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#8b949e]">
                  React and TypeScript interface for route discovery,
                  seat selection, passenger accounts, and dashboards.
                </p>
              </div>

              <div className="border border-[#1f2630] bg-[#0a0c10] p-5">
                <Database className="mb-4 text-[#3fb950]" size={22} />
                <p className="terminal-label">BACKEND</p>
                <h3 className="mt-2 font-semibold">
                  Spring Boot API
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#8b949e]">
                  Java backend responsible for application logic,
                  authentication, booking operations, and ticket
                  generation.
                </p>
              </div>

              <div className="border border-[#1f2630] bg-[#0a0c10] p-5">
                <CreditCard className="mb-4 text-[#3fb950]" size={22} />
                <p className="terminal-label">DATA LAYER</p>
                <h3 className="mt-2 font-semibold">
                  PostgreSQL + Redis
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#8b949e]">
                  PostgreSQL for persistent data and Redis for
                  temporary seat reservation state.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-[#1f2630] pt-6">
              <p className="terminal-label mb-3">REQUEST FLOW</p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                {[
                  "Next.js UI",
                  "Spring Boot",
                  "PostgreSQL",
                  "Redis",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="border border-[#1f2630] bg-[#11151c] px-4 py-3">
                      {item}
                    </span>

                    {index !== 3 && (
                      <span className="text-[#3fb950]">→</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-6 text-[#8b949e]">
                Conceptual technology flow, not a detailed deployment
                or infrastructure diagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Learnings */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="05"
            label="LEARNINGS"
            title="What I worked through"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock3 className="text-[#3fb950]" size={20} />
                <h3 className="font-semibold">
                  Time-sensitive state
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Implementing temporary seat holds introduced me to
                the challenges of managing short-lived reservation
                state and coordinating it with the booking workflow.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <Route className="text-[#3fb950]" size={20} />
                <h3 className="font-semibold">
                  End-to-end integration
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Building both sides of the application helped me
                understand how frontend interactions connect to
                backend business logic and persistent data.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <ScanLine className="text-[#3fb950]" size={20} />
                <h3 className="font-semibold">
                  Document workflows
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Generating PDF tickets with passenger, journey,
                seat, and booking barcode information added a
                document-generation workflow to the system.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <Users className="text-[#3fb950]" size={20} />
                <h3 className="font-semibold">
                  Multiple user roles
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Creating passenger and administrator experiences
                helped me consider how different roles interact
                with the same underlying booking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - Technology */}
      <section className="section bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="06"
            label="TECHNOLOGY"
            title="Tools & technologies"
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-[#1f2630] bg-[#11151c] px-4 py-3 font-mono text-xs text-[#8b949e]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - Reflection */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="07"
            label="REFLECTION"
            title="From individual features to a complete system"
          />

          <div className="max-w-3xl space-y-6 text-sm leading-8 text-[#8b949e]">
            <p>
              BusGo gave me practical experience connecting a
              modern frontend with a Java backend, persistent
              storage, and a caching layer. It pushed me to think
              beyond individual screens and consider how the
              complete booking workflow behaves.
            </p>

            <p>
              The project also strengthened my understanding of
              authentication, temporary reservations, data flow,
              and generating useful documents from application
              data.
            </p>

            <p>
              There are further opportunities to extend the
              project through deployment, broader failure-path
              testing, and additional verification workflows.
            </p>
          </div>

          <div className="mt-12 border-t border-[#1f2630] pt-8">
            <a
              href="https://github.com/Animesh4956/Bus-Ticket-Booking-System"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3fb950] transition hover:text-[#e6edf3]"
            >
              Explore the project on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f2630]">
        <div className="container-main flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-[#8b949e] transition hover:text-[#3fb950]"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>

          <Link
            href="/#contact"
            className="text-sm text-[#8b949e] transition hover:text-[#3fb950]"
          >
            Get in touch <span className="accent">→</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
