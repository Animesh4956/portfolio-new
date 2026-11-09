
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  LayoutDashboard,
  ClipboardCheck,
  CalendarCheck,
  CreditCard,
  Bell,
  BookOpen,
  FileSpreadsheet,
  Code2,
  Database,
  Monitor,
  Users,
  Layers,
} from "lucide-react";

const screenshots = [
  {
    number: "01",
    title: "Student Dashboard",
    description:
      "A centralized student profile with academic information, SGPA, attendance, fee summaries, notifications, and personal details.",
    src: "/images/tcet-erp/dashboard.png",
    alt: "TCET ERP student profile dashboard",
  },
  {
    number: "02",
    title: "Examination Results",
    description:
      "A results interface presenting semester performance, SGPA, CGPA, class rank, subject-wise marks, grades, and credits, with a marksheet download option.",
    src: "/images/tcet-erp/results.png",
    alt: "TCET ERP examination results interface",
  },
  {
    number: "03",
    title: "Attendance Management",
    description:
      "An attendance overview showing overall, theory, and practical attendance, alongside subject-wise attendance percentages and class counts.",
    src: "/images/tcet-erp/attendance.png",
    alt: "TCET ERP attendance dashboard",
  },
  {
    number: "04",
    title: "Fees & Payment",
    description:
      "A fee management interface displaying total fees, amount paid, outstanding balance, installment schedules, and payment statuses.",
    src: "/images/tcet-erp/fees.png",
    alt: "TCET ERP fees and payment interface",
  },
];

const features = [
  {
    number: "01",
    title: "Student Dashboard",
    description:
      "A unified academic overview that brings together student profile information, academic indicators, notifications, and important details.",
    icon: LayoutDashboard,
    tag: "STUDENT OVERVIEW",
  },
  {
    number: "02",
    title: "Examination Results",
    description:
      "A structured results interface showing semester performance, subject-wise marks, grades, credits, SGPA, CGPA, and class ranking.",
    icon: ClipboardCheck,
    tag: "ACADEMIC PERFORMANCE",
  },
  {
    number: "03",
    title: "Attendance Tracking",
    description:
      "An attendance dashboard with overall, theory, practical, and subject-wise attendance summaries.",
    icon: CalendarCheck,
    tag: "ATTENDANCE",
  },
  {
    number: "04",
    title: "Fees & Payment Interface",
    description:
      "A fee overview with payment schedules, installment amounts, outstanding balances, and payment status indicators.",
    icon: CreditCard,
    tag: "FINANCE",
  },
  {
    number: "05",
    title: "Academic Resources",
    description:
      "Dedicated navigation for syllabus, timetable, results, attendance, and other academic information.",
    icon: BookOpen,
    tag: "ACADEMIC RESOURCES",
  },
  {
    number: "06",
    title: "Marksheets & Data Export",
    description:
      "A marksheet download interface and CSV-based marksheet export functionality for academic records.",
    icon: FileSpreadsheet,
    tag: "DATA EXPORT",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "Thymeleaf",
  "HTML",
  "CSS",
  "JavaScript",
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

export default function TCETERPPage() {
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
            WEB APPLICATION CASE STUDY / 03
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="border border-[#3fb950]/30 bg-[#3fb950]/10 px-3 py-1.5 font-mono text-[11px] text-[#3fb950]">
              WEB DEVELOPMENT
            </span>

            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              ACADEMIC PORTAL
            </span>

            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              JAVA / SPRING BOOT
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.1] tracking-[-0.055em] sm:text-7xl md:text-8xl">
            TCET ERP
            <br />
            <span className="text-[#3fb950]">Portal.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8b949e]">
            A college ERP interface demonstration designed to
            bring student profiles, academic results, attendance,
            timetables, and fee information into one organized portal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/Animesh4956/ERP-PORTAL-Project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#3fb950]/40 bg-[#3fb950]/10 px-5 py-3 text-sm font-medium text-[#3fb950] transition hover:bg-[#3fb950]/20"
            >
              View source code
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-8 border-t border-[#1f2630] pt-8 sm:grid-cols-3">
            <div>
              <p className="terminal-label">PROJECT TYPE</p>
              <p className="mt-3 text-sm">Individual project</p>
            </div>

            <div>
              <p className="terminal-label">APPLICATION</p>
              <p className="mt-3 text-sm">College ERP interface</p>
            </div>

            <div>
              <p className="terminal-label">MY FOCUS</p>
              <p className="mt-3 text-sm">
                UI / Backend / Application flow
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
                TCET ERP Portal is a desktop-focused academic
                portal interface demonstration designed around
                the everyday information needs of college students.
              </p>

              <p>
                The application brings together several academic
                and administrative sections, including student
                profiles, examination results, attendance,
                syllabus, timetable, notifications, and fees.
              </p>

              <p>
                I independently designed and developed the
                interface using Java, Spring Boot, and Thymeleaf.
                The project focuses on organizing academic
                information into a structured and accessible
                student portal.
              </p>

              <p>
                This is a demonstration project using hardcoded
                sample data. It does not use a database for
                persistent storage and is not a production
                college ERP system.
              </p>
            </div>

            <div className="panel h-fit p-6">
              <p className="terminal-label mb-6">
                PROJECT HIGHLIGHTS
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: GraduationCap,
                    title: "Student profile",
                    detail: "Personal and academic information",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Results overview",
                    detail: "Grades, marks, SGPA and CGPA",
                  },
                  {
                    icon: CalendarCheck,
                    title: "Attendance tracking",
                    detail: "Overall and subject-wise attendance",
                  },
                  {
                    icon: CreditCard,
                    title: "Fee management",
                    detail: "Installments and payment statuses",
                  },
                  {
                    icon: Bell,
                    title: "Notifications",
                    detail: "Academic portal notifications",
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

      {/* 02 - Screenshots */}
      <section className="section bg-[#0d1117]">
        <div className="container-main">

          <SectionHeading
            number="02"
            label="APPLICATION"
            title="Inside the portal"
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
                    TCET ERP
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

      {/* 03 - Features */}
      <section className="section">
        <div className="container-main">

          <SectionHeading
            number="03"
            label="FUNCTIONALITY"
            title="Core portal modules"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="panel p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Icon size={23} className="text-[#3fb950]" />

                    <span className="font-mono text-xs text-[#8b949e]">
                      {feature.number}
                    </span>
                  </div>

                  <p className="terminal-label">
                    {feature.tag}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold">
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

      {/* 04 - Technical Implementation */}
      <section className="section bg-[#0d1117]">
        <div className="container-main">

          <SectionHeading
            number="04"
            label="IMPLEMENTATION"
            title="How it is built"
          />

          <div className="grid gap-5 md:grid-cols-2">

            <div className="panel p-6 sm:p-8">
              <Code2 size={24} className="mb-5 text-[#3fb950]" />

              <p className="terminal-label">BACKEND</p>

              <h3 className="mt-3 text-xl font-semibold">
                Java & Spring Boot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                Java and Spring Boot provide the application
                structure and backend functionality for the
                portal demonstration.
              </p>
            </div>

            <div className="panel p-6 sm:p-8">
              <Layers size={24} className="mb-5 text-[#3fb950]" />

              <p className="terminal-label">VIEW LAYER</p>

              <h3 className="mt-3 text-xl font-semibold">
                Thymeleaf
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                Thymeleaf is used to render the portal's
                server-side HTML views and organize the
                student-facing interface.
              </p>
            </div>

            <div className="panel p-6 sm:p-8">
              <Monitor size={24} className="mb-5 text-[#3fb950]" />

              <p className="terminal-label">USER EXPERIENCE</p>

              <h3 className="mt-3 text-xl font-semibold">
                Desktop-focused interface
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                The interface uses a sidebar navigation layout
                to organize academic, personal, and financial
                sections into a single portal.
              </p>
            </div>

            <div className="panel p-6 sm:p-8">
              <Database size={24} className="mb-5 text-[#3fb950]" />

              <p className="terminal-label">DATA HANDLING</p>

              <h3 className="mt-3 text-xl font-semibold">
                Sample data
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                The demonstration uses hardcoded sample data.
                It does not currently implement database-backed
                persistent storage.
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
            title="What I learned"
          />

          <div className="grid gap-5 md:grid-cols-2">

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <LayoutDashboard
                  className="text-[#3fb950]"
                  size={20}
                />

                <h3 className="font-semibold">
                  Information architecture
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Organizing several academic modules into one
                navigation system helped me understand how
                to structure information for a multi-section
                web application.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="text-[#3fb950]" size={20} />

                <h3 className="font-semibold">
                  Server-side rendering
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Working with Spring Boot and Thymeleaf gave me
                practical experience connecting backend
                application logic with rendered web pages.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <Users className="text-[#3fb950]" size={20} />

                <h3 className="font-semibold">
                  Student-focused design
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Designing around student activities helped me
                consider how academic information, results,
                attendance, and financial details can be
                presented clearly.
              </p>
            </div>

            <div className="panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <FileSpreadsheetIcon />
                <h3 className="font-semibold">
                  Data presentation
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#8b949e]">
                Building results tables, attendance summaries,
                and fee schedules improved my understanding
                of presenting structured information through
                a web interface.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 06 - Technologies */}
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
            title="Building a unified academic experience"
          />

          <div className="max-w-3xl space-y-6 text-sm leading-8 text-[#8b949e]">
            <p>
              Developing the TCET ERP Portal helped me explore
              how different academic and administrative
              functions can be brought together within a
              single web application.
            </p>

            <p>
              Working with Java, Spring Boot, and Thymeleaf
              strengthened my understanding of server-side
              application development and the relationship
              between backend logic and frontend presentation.
            </p>

            <p>
              The current version is a UI demonstration with
              sample data. Future improvements could include
              database integration, persistent student records,
              and a responsive layout for mobile and tablet devices.
            </p>
          </div>

          <div className="mt-12 border-t border-[#1f2630] pt-8">
            <a
              href="https://github.com/Animesh4956/ERP-PORTAL-Project"
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

function FileSpreadsheetIcon() {
  return (
    <FileSpreadsheet className="text-[#3fb950]" size={20} />
  );
}
