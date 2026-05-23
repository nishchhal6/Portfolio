import { useInView } from "../hooks/useInView";

const categories = [
  {
    label: "Frontend & UI",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript ES6+", level: 92 },
      { name: "TailwindCSS", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Node.js & Express", level: 85 },
      { name: "REST APIs & Webhooks", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase", level: 78 },
      { name: "JSON Parsing", level: 90 },
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      { name: "n8n Workflows", level: 90 },
      { name: "Gemini / LLM APIs", level: 85 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Event-Driven Logic", level: 88 },
      { name: "Python Scripting", level: 75 },
    ],
  },
];

const techBadges = [
  "n8n",
  "Webhooks",
  "Gemini API",
  "JSON Data Handling",
  "Prompt Engineering",
  "Python",
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "Supabase",
  "REST APIs",
  "WebSockets",
  "Slack API",
  "Google Workspace",
  "Git",
  "GitHub",
  "Postman",
  "TailwindCSS",
  "OOPs Programming",
  "mySQL",
];

function SkillBar({
  name,
  level,
  animate,
}: {
  name: string;
  level: number;
  animate: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-dim)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--cyan)",
            opacity: 0.7,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            transform: animate ? `scaleX(${level / 100})` : "scaleX(0)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">02 / Skills</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Tech <span className="glow-text">Arsenal</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className={`cyber-card rounded-lg p-7 fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${ci * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    boxShadow: "0 0 8px var(--cyan)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.7rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-col gap-5">
                {cat.skills.map((sk, si) => (
                  <SkillBar key={si} {...sk} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge cloud */}
        <div
          className={`fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.45s" }}
        >
          <div
            className="cyber-card rounded-lg p-8"
            style={{ background: "rgba(7,24,38,0.6)" }}
          >
            <p className="section-label mb-5">All Technologies</p>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
