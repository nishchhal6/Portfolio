import { useInView } from "../hooks/useInView";
// Import custom icons for balance
import { Code2, Zap, Globe, Cpu } from "lucide-react";

const stats = [
  { value: "3+", label: "Full Stack Apps Built" },
  { value: "15+", label: "RESTful APIs Designed" },
  { value: "25%", label: "API Response Improvement" },
  { value: "3+", label: "Automation Created" },
];

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Production-ready Full-Stack code with optimized backend performance and minimal technical debt.",
  },
  {
    icon: Globe,
    title: "Full Stack Architecture",
    desc: "End-to-end ownership from pixel-perfect React/Next.js frontends to robust Node.js backend systems.",
  },
  {
    icon: Cpu,
    title: "AI & Workflows",
    desc: "Integrating event-driven automation pipelines using n8n, custom webhooks, and Generative AI LLM APIs.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "WebSocket-powered systems achieving sub-500ms latency across live data flows.",
  },
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`fade-up ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-3">01 / About</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Who I <span className="glow-text">Am</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div
            className={`fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="cyber-card corner-bracket rounded-lg p-8 mb-8">
              <p
                className="mb-5"
                style={{
                  color: "var(--text-dim)",
                  lineHeight: "1.8",
                  fontSize: "0.95rem",
                }}
              >
                I'm a results-driven Full Stack Developer currently pursuing my
                BCA at{" "}
                <span style={{ color: "var(--cyan)" }}>
                  Dr. Bhimrao Ambedkar University
                </span>
                , Agra. I specialize in architecting scalable web applications
                and connecting complex backend architectures.
              </p>
              <p
                style={{
                  color: "var(--text-dim)",
                  lineHeight: "1.8",
                  fontSize: "0.95rem",
                }}
              >
                Through multiple software internships, including{" "}
                <span style={{ color: "var(--cyan)" }}>Labmentix</span> [cite:
                14], I've shipped production code [cite: 16] handling everything
                from RESTful APIs and WebSocket dashboards to custom data
                workflows. Recently, I've been extending my stack to build
                intelligent, event-driven automation pipelines using{" "}
                <span style={{ color: "var(--cyan)" }}>n8n</span> and
                integrating context-aware LLMs into standard web environments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="cyber-card rounded-lg p-5 text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="text-3xl font-black mb-1 glow-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {traits.map((t, i) => (
              <div
                key={i}
                className={`cyber-card rounded-lg p-6 fade-up ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(0,245,255,0.08)",
                    border: "1px solid rgba(0,245,255,0.2)",
                  }}
                >
                  <t.icon size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <h3
                  className="font-semibold mb-2 text-sm"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: "0.8rem",
                    lineHeight: "1.6",
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
