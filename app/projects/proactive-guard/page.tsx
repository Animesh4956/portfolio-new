
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
  Activity,
  Smartphone,
  LayoutDashboard,
  Clock3,
  Gauge,
  CheckCircle2,
  Code2,
  Layers3,
} from "lucide-react";

const contributions = [
  {
    number: "01",
    title: "AI Risk Engine",
    description:
      "Developed the risk evaluation engine using weighted scoring, temporal smoothing and confidence thresholds to produce more stable risk assessments, with Gemini-powered summaries.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Monitoring Dashboard",
    description:
      "Redesigned the monitoring dashboard to improve the presentation of risk information and make system activity easier to interpret.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "Flutter Android App",
    description:
      "Developed the Flutter-based Android application as part of the continued development and completion of the platform.",
    icon: Smartphone,
  },
];

const technologies = [
  "Gemini API",
  "Weighted Scoring",
  "Temporal Smoothing",
  "Confidence Thresholds",
  "Flutter",
  "Dart",
  "AI Integration",
];

const engineering = [
  {
    title: "Weighted Risk Scoring",
    description:
      "The engine evaluates risk using a weighted scoring approach. Different risk indicators contribute according to their assigned importance rather than being treated as equally significant.",
    icon: Gauge,
    tag: "RISK EVALUATION",
  },
  {
    title: "Temporal Smoothing",
    description:
      "Risk signals can fluctuate over time. Temporal smoothing helps reduce abrupt changes in the evaluated risk signal, producing more stable assessments.",
    icon: Clock3,
    tag: "SIGNAL STABILITY",
  },
  {
    title: "Confidence Thresholds",
    description:
      "Confidence thresholds provide an additional decision layer, helping distinguish assessments with sufficient confidence from those that require more caution.",
    icon: Activity,
    tag: "DECISION CONTROL",
  },
  {
    title: "Gemini-Powered Summaries",
    description:
      "Integrated Gemini to generate AI-powered summaries of risk information, making the underlying assessment easier for users to understand.",
    icon: BrainCircuit,
    tag: "GENERATIVE AI",
  },
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
    <div className="mb-10 break-after-avoid">
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

export default function ProactiveGuardPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-[#e6edf3]">

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#1f2630] bg-[#0a0c10]/90 backdrop-blur-xl print:hidden">
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
            FEATURED CASE STUDY / 01
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="border border-[#3fb950]/30 bg-[#3fb950]/10 px-3 py-1.5 font-mono text-[11px] text-[#3fb950]">
              ARTIFICIAL INTELLIGENCE
            </span>
            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              WOMEN&apos;S SAFETY
            </span>
            <span className="border border-[#1f2630] px-3 py-1.5 font-mono text-[11px] text-[#8b949e]">
              MOBILE DEVELOPMENT
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-[-0.055em] sm:text-7xl md:text-8xl">
            Proactive
            <br />
            <span className="text-[#3fb950]">Guard.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8b949e]">
            An AI-powered women&apos;s safety platform designed to
            evaluate risk signals, communicate meaningful
            assessments and support safety monitoring through
            an integrated software ecosystem.
          </p>

          <div className="mt-12 grid max-w-3xl gap-8 border-t border-[#1f2630] pt-8 sm:grid-cols-3">
            <div>
              <p className="terminal-label">PROJECT TYPE</p>
              <p className="mt-3 text-sm">Team project</p>
            </div>

            <div>
              <p className="terminal-label">ORIGINAL TEAM</p>
              <p className="mt-3 text-sm">9 contributors</p>
            </div>

            <div>
              <p className="terminal-label">MY FOCUS</p>
              <p className="mt-3 text-sm">AI / Dashboard / Flutter</p>
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
                Proactive Guard was developed as a team project
                focused on women&apos;s safety. The platform combines
                software components intended to support risk
                evaluation, monitoring and mobile interaction.
              </p>

              <p>
                The original project involved nine contributors.
                After the team disbanded, I continued working on
                the platform and took responsibility for completing
                key parts of its implementation.
              </p>

              <p>
                My work concentrated on three areas: the AI risk
                engine, the monitoring dashboard redesign and
                the Flutter Android application.
              </p>

              <p>
                This case study focuses specifically on those
                contributions rather than attributing the entire
                platform to my individual work.
              </p>
            </div>

            <div className="panel h-fit p-6">
              <p className="terminal-label mb-6">
                MY CONTRIBUTIONS
              </p>

              <div className="space-y-5">
                {contributions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.number} className="flex gap-4">
                      <Icon
                        size={19}
                        className="mt-1 shrink-0 text-[#3fb950]"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-[#8b949e]">
                          {item.description}
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

      {/* 02 - Problem */}
      <section className="section bg-[#0d1117] print:bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="02"
            label="PROBLEM"
            title="Why proactive monitoring matters"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Risk interpretation",
                description:
                  "Safety-related signals need to be evaluated in a structured way instead of relying on isolated observations.",
              },
              {
                title: "Changing conditions",
                description:
                  "Risk assessments can fluctuate. Sudden changes need to be interpreted carefully rather than treated as definitive conclusions.",
              },
              {
                title: "Information clarity",
                description:
                  "Technical risk assessments need to be communicated in a format that people can understand and act upon appropriately.",
              },
            ].map((item) => (
              <div key={item.title} className="panel break-inside-avoid p-6">
                <ShieldCheck
                  size={22}
                  className="mb-6 text-[#3fb950]"
                />
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#8b949e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - AI Risk Engine */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="03"
            label="CORE ENGINEERING"
            title="The AI risk engine"
          />

          <div className="mb-10 max-w-3xl text-sm leading-8 text-[#8b949e]">
            One of my primary contributions was developing the
            AI risk engine. Rather than treating risk evaluation
            as a single isolated calculation, the engine uses
            multiple processing stages to produce structured
            assessments.
          </div>

          {/* Architecture */}
          <div className="panel break-inside-avoid p-5 sm:p-8">
            <p className="terminal-label mb-8">
              CONCEPTUAL PROCESSING PIPELINE
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Risk Signals",
                  detail: "Input indicators",
                },
                {
                  title: "Weighted Scoring",
                  detail: "Importance-based evaluation",
                },
                {
                  title: "Temporal Smoothing",
                  detail: "Stability over time",
                },
                {
                  title: "Confidence Layer",
                  detail: "Threshold-based assessment",
                },
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="h-full border border-[#1f2630] bg-[#0a0c10] p-5">
                    <p className="mono text-xs text-[#3fb950]">
                      STAGE 0{index + 1}
                    </p>

                    <h3 className="mt-4 text-sm font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#8b949e]">
                      {step.detail}
                    </p>
                  </div>

                  {index !== 3 && (
                    <ArrowUpRight
                      size={16}
                      className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[#3fb950] lg:block"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 border border-[#3fb950]/30 bg-[#3fb950]/[0.05] p-5">
              <div className="flex items-center gap-3">
                <BrainCircuit
                  size={20}
                  className="text-[#3fb950]"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Gemini-powered summaries
                  </p>
                  <p className="mt-1 text-xs text-[#8b949e]">
                    AI-generated explanations of risk assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {engineering.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="panel break-inside-avoid p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      className="text-[#3fb950]"
                    />
                    <span className="mono text-[10px] text-[#8b949e]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8b949e]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 - Actual Dashboard */}
      <section className="section bg-[#0d1117] print:bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="04"
            label="INTERFACE ENGINEERING"
            title="Monitoring dashboard redesign"
          />

          <div className="mb-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm leading-8 text-[#8b949e]">
                Another major part of my contribution was
                redesigning the monitoring dashboard.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#8b949e]">
                The objective was to improve the way monitoring
                information and risk assessments were presented,
                making the interface more structured and easier
                to interpret.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Redesigned monitoring interface",
                  "Improved information presentation",
                  "Clearer risk assessment visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#e6edf3]"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#3fb950]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="border border-[#1f2630] bg-[#11151c] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="mono text-[10px] text-[#8b949e]">
                    ACTUAL PROJECT SCREENSHOT
                  </span>
                  <Activity size={16} className="text-[#3fb950]" />
                </div>
                <p className="text-sm font-semibold">
                  Proactive Guard Command Center
                </p>
                <p className="mt-1 text-xs text-[#8b949e]">
                  Live safety operations dashboard
                </p>
              </div>
            </div>
          </div>

          <figure className="break-inside-avoid">
            <div className="overflow-hidden border border-[#1f2630] bg-[#11151c]">
              <Image
                src="/images/proactive-guard/dashboard.png"
                alt="Actual Proactive Guard Command Center dashboard displaying incident alerts, risk indicators and the operations interface"
                width={1631}
                height={958}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>

            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="mono text-[10px] text-[#3fb950]">
                FIG 01 / WEB MONITORING DASHBOARD
              </span>
              <span className="text-xs text-[#8b949e]">
                Actual project interface
              </span>
            </figcaption>
          </figure>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-[#8b949e]">
            The dashboard screenshot includes a live operations map
            that is part of the application interface. My documented
            contribution here is the dashboard redesign, not the
            implementation of the live map.
          </p>
        </div>
      </section>

      {/* 05 - Actual Flutter App */}
      <section className="section">
        <div className="container-main">
          <SectionHeading
            number="05"
            label="MOBILE DEVELOPMENT"
            title="Flutter Android application"
          />

          <div className="mb-12 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm leading-8 text-[#8b949e]">
                I also developed the Flutter-based Android
                application as part of my continued work on
                Proactive Guard.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#8b949e]">
                The application provides the mobile interface
                for users to interact with the safety platform.
                The screenshots below show the home screen
                and an active journey monitoring session.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Flutter", "Android", "Dart"].map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#1f2630] px-3 py-2 font-mono text-xs text-[#8b949e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel flex items-center gap-4 p-6">
              <Smartphone
                size={32}
                className="shrink-0 text-[#3fb950]"
              />
              <div>
                <p className="text-sm font-semibold">
                  Android application
                </p>
                <p className="mt-1 text-xs leading-6 text-[#8b949e]">
                  Actual Flutter application screens from
                  Proactive Guard.
                </p>
              </div>
            </div>
          </div>

          {/* Real application screenshots */}
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">

            <figure className="mx-auto w-full max-w-[420px] break-inside-avoid">
              <div className="overflow-hidden border border-[#1f2630] bg-[#11151c]">
                <Image
                  src="/images/proactive-guard/app-home.png"
                  alt="Actual Proactive Guard Flutter Android home screen showing the safety overview, Start Journey button and safety features"
                  width={832}
                  height={1850}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
              </div>

              <figcaption className="mt-4 border-l-2 border-[#3fb950] pl-4">
                <p className="mono text-[10px] text-[#3fb950]">
                  01 / HOME SCREEN
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Safety overview
                </p>
                <p className="mt-1 text-xs leading-6 text-[#8b949e]">
                  User dashboard with journey initiation and
                  an overview of the platform&apos;s safety features.
                </p>
              </figcaption>
            </figure>

            <figure className="mx-auto w-full max-w-[420px] break-inside-avoid">
              <div className="overflow-hidden border border-[#1f2630] bg-[#11151c]">
                <Image
                  src="/images/proactive-guard/app-live.png"
                  alt="Actual Proactive Guard Flutter Android live journey screen displaying GPS location, audio level, motion and network telemetry"
                  width={832}
                  height={1850}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
              </div>

              <figcaption className="mt-4 border-l-2 border-[#3fb950] pl-4">
                <p className="mono text-[10px] text-[#3fb950]">
                  02 / LIVE MONITORING
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Active journey telemetry
                </p>
                <p className="mt-1 text-xs leading-6 text-[#8b949e]">
                  Live journey interface displaying GPS,
                  audio, motion and network telemetry.
                </p>
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* 06 - Technologies */}
      <section className="section bg-[#0d1117] print:bg-[#0d1117]">
        <div className="container-main">
          <SectionHeading
            number="06"
            label="TECHNOLOGY"
            title="Tools and concepts"
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-2 border border-[#1f2630] bg-[#11151c] px-4 py-3 font-mono text-xs text-[#e6edf3]"
              >
                <Code2 size={14} className="text-[#3fb950]" />
                {tech}
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
            title="What this project taught me"
          />

          <div className="max-w-3xl space-y-6 text-sm leading-8 text-[#8b949e]">
            <p>
              Continuing development after the original team
              disbanded required taking ownership of unfinished
              work and understanding how different components
              fit together.
            </p>

            <p>
              Building the risk engine strengthened my
              understanding of scoring systems, signal stability,
              confidence-based evaluation and AI integration.
            </p>

            <p>
              Working across the dashboard and Android
              application also reinforced the importance of
              presenting complex system behaviour through
              understandable interfaces.
            </p>
          </div>

          <div className="panel mt-12 break-inside-avoid border-[#3fb950]/30 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <Layers3 size={21} className="text-[#3fb950]" />
              <span className="terminal-label">
                INDIVIDUAL CONTRIBUTION
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              Taking ownership beyond the original team.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8b949e]">
              Proactive Guard was a collaborative project
              involving nine contributors. My case study
              documents the AI risk engine, dashboard redesign
              and Flutter Android application that I worked on
              during its continued development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f2630] py-10">
        <div className="container-main flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-[#8b949e] transition hover:text-[#3fb950]"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>

          <p className="mono text-[10px] text-[#8b949e]">
            ANIMESH MOHAPATRA · PROACTIVE GUARD
          </p>

          <Link
            href="/#contact"
            className="flex items-center gap-2 text-sm text-[#3fb950]"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
