import { useInView } from "../hooks/useInView";
import { GraduationCap, Award, Rocket } from "lucide-react";

const achievements = [
  {
    text: "Gold Medalist — University Debate Competition on AI",
    org: "University Computer Centre",
    year: "2024",
  },
  {
    text: "Letter of Recommendation for Exceptional Performance",
    org: "Labmentix",
    year: "2026",
  },
];

export default function Education() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">06 / Education</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Learning <span className="glow-text">Journey</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: Current Degree */}
          <div
            className={`lg:col-span-1 fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="cyber-card corner-bracket rounded-lg p-7 h-full flex flex-col">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "rgba(0,245,255,0.08)",
                  border: "1px solid rgba(0,245,255,0.2)",
                }}
              >
                <GraduationCap size={22} style={{ color: "var(--cyan)" }} />
              </div>
              <span className="section-label mb-2 block">Current Degree</span>
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text)",
                  letterSpacing: "0.03em",
                  fontSize: "0.95rem",
                }}
              >
                Bachelor of Computer Applications
              </h3>
              <p
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  marginBottom: "8px",
                }}
              >
                Dr. Bhimrao Ambedkar University
              </p>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                }}
              >
                Agra, UP — 2023–2026 (6th Semester)
              </p>

              <div
                className="mt-auto pt-5"
                style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}
              >
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    marginBottom: "4px",
                  }}
                >
                  SENIOR PROJECT:
                </p>
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: "0.8rem",
                    lineHeight: "1.4",
                  }}
                >
                  Developed{" "}
                  <span style={{ color: "var(--cyan)" }}>CureAsap</span>, a
                  real-time emergency rescue system.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Future Academic Goals */}
          <div
            className={`lg:col-span-1 fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="cyber-card corner-bracket rounded-lg p-7 h-full flex flex-col">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "rgba(255,165,0,0.08)",
                  border: "1px solid rgba(255,165,0,0.2)",
                }}
              >
                <Rocket size={22} style={{ color: "var(--orange)" }} />
              </div>
              <span
                className="section-label mb-2 block"
                style={{ color: "var(--orange)", opacity: 0.8 }}
              >
                Future Goal
              </span>
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text)",
                  letterSpacing: "0.03em",
                  fontSize: "0.95rem",
                }}
              >
                Master of Computer Applications
              </h3>
              <p
                style={{
                  color: "var(--orange)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  marginBottom: "8px",
                }}
              >
                Specialization: AI & Machine Learning
              </p>
              <p
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                }}
              >
                Planned for Post-Graduation
              </p>

              <div
                className="mt-auto pt-5"
                style={{ borderTop: "1px solid rgba(255,165,0,0.1)" }}
              >
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    marginBottom: "4px",
                  }}
                >
                  CAREER OBJECTIVE:
                </p>
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: "0.8rem",
                    lineHeight: "1.4",
                  }}
                >
                  Transitioning into{" "}
                  <span style={{ color: "var(--orange)" }}>
                    Software & AI Automation Engineering
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Achievements */}
          <div
            className={`lg:col-span-1 fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="cyber-card rounded-lg p-7 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(57,255,20,0.08)",
                    border: "1px solid rgba(57,255,20,0.2)",
                  }}
                >
                  <Award size={18} style={{ color: "var(--green)" }} />
                </div>
                <span
                  className="section-label"
                  style={{ color: "var(--green)", opacity: 0.8 }}
                >
                  Achievements
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="flex gap-3 pb-5"
                    style={{
                      borderBottom:
                        i < achievements.length - 1
                          ? "1px solid rgba(57,255,20,0.1)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--green)",
                        flexShrink: 0,
                        marginTop: "1px",
                        fontSize: "0.9rem",
                      }}
                    >
                      ✦
                    </span>
                    <div>
                      <p
                        className="font-medium mb-1"
                        style={{
                          color: "var(--text)",
                          fontSize: "0.85rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {a.text}
                      </p>
                      <span
                        style={{
                          color: "var(--text-dim)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                        }}
                      >
                        {a.org} ·{" "}
                        <span style={{ color: "var(--green)", opacity: 0.8 }}>
                          {a.year}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
