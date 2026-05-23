import { useInView } from "../hooks/useInView";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Labmentix",
    period: "Sep 2025 — Mar 2026",
    type: "Remote",
    color: "var(--cyan)",
    highlights: [
      "Developed 3 full-stack web applications using React.js, Node.js, and MongoDB, reducing backend API response times by 25%.",
      "Designed and integrated 15+ RESTful APIs, reducing data latency by 18% between frontend and backend systems.",
      "Integrated 4 third-party and Generative AI APIs to automate internal operational workflows, eliminating 10+ hours of repetitive manual processing per week.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "n8n",
      "Webhooks",
      "AI Integration",
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">03 / Experience</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Work <span className="glow-text">History</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0"
            style={{
              width: "1px",
              height: visible ? "100%" : "0%",
              background:
                "linear-gradient(to bottom, var(--cyan), rgba(0,245,255,0.1))",
              transition: "height 1.5s ease",
            }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative fade-up ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                {/* Dot */}
                <div
                  className="absolute -left-8 top-6 -translate-x-1/2"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: exp.color,
                    boxShadow: `0 0 14px ${exp.color}, 0 0 28px ${exp.color}44`,
                    flexShrink: 0,
                  }}
                />

                <div className="cyber-card rounded-lg p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <Briefcase size={14} style={{ color: exp.color }} />
                        <h3
                          className="font-bold text-lg"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--text)",
                            letterSpacing: "0.03em",
                            fontSize: "1rem",
                          }}
                        >
                          {exp.role}
                        </h3>
                      </div>
                      <span
                        className="text-base font-semibold"
                        style={{
                          color: exp.color,
                          fontFamily: "var(--font-display)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-right">
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-dim)",
                          marginBottom: "4px",
                        }}
                      >
                        {exp.period}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.62rem",
                          color: exp.color,
                          border: `1px solid ${exp.color}44`,
                          padding: "2px 8px",
                          borderRadius: "2px",
                          opacity: 0.8,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-dim)",
                          lineHeight: "1.6",
                        }}
                      >
                        <span
                          style={{
                            color: exp.color,
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t, j) => (
                      <span key={j} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
