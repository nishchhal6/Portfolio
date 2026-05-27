import { useInView } from "../hooks/useInView";
import {
  ExternalLink,
  Database,
  Layout,
  Bot,
  Terminal,
  Code,
} from "lucide-react";

const certificates = [
  {
    id: "01",
    name: "Complete Data Science, Machine Learning, DL, NLP",
    subtitle: "Udemy • 99 Total Hours • Krish Naik",
    icon: Database,
    color: "var(--cyan)",
    image: "./certificates/ai & ml.jpg",
    description:
      "An extensive 99-hour intensive bootcamp covering the complete data science lifecycle, from data preprocessing to building advanced Deep Learning and NLP models.",
    highlights: [
      "Mastered Machine Learning algorithms and Deep Learning neural networks",
      "Implemented Natural Language Processing (NLP) techniques for text data",
      "Built and deployed end-to-end data science projects",
    ],
    stack: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Data Science",
    ],
    verifyLink:
      "https://www.udemy.com/certificate/UC-cdafd141-ba05-4045-b926-355842b80e17/",
  },
  {
    id: "02",
    name: "Complete Web Development Course",
    subtitle: "Udemy • 97 Total Hours • Hitesh Choudhary",
    icon: Layout,
    color: "var(--green)",
    image: "./certificates/web development.jpg",
    description:
      "A massive 97-hour comprehensive full-stack web development course focused on building robust, scalable web applications from scratch.",
    highlights: [
      "Developed responsive and interactive front-end user interfaces",
      "Built secure and scalable back-end APIs and database architectures",
      "Mastered modern web development workflows and deployment strategies",
    ],
    stack: ["HTML/CSS", "JavaScript", "Node.js", "React", "MongoDB"],
    verifyLink:
      "https://www.udemy.com/certificate/UC-0949cba2-da53-4a7c-9234-078201b5f1d0/",
  },
  {
    id: "03",
    name: "Generative AI and ChatGPT",
    subtitle: "GeeksforGeeks • Self-Paced",
    icon: Bot,
    color: "var(--orange)",
    image: "./certificates/gfg.png",
    description:
      "Specialized training in Generative AI architectures, focusing on prompt engineering, LLM capabilities, and practical ChatGPT integrations.",
    highlights: [
      "Mastered advanced prompt engineering for optimal AI outputs",
      "Integrated Generative AI tools into software development workflows",
      "Understood the core mechanics behind Large Language Models (LLMs)",
    ],
    stack: ["Generative AI", "ChatGPT", "Prompt Engineering", "LLMs"],
    verifyLink:
      "https://www.geeksforgeeks.org/certificate/af6d4d21eaf15e9bd63296375f5d49cc",
  },
  {
    id: "04",
    name: "Python Development Essentials",
    subtitle: "Udemy • MTF Institute of Management",
    icon: Terminal,
    color: "var(--cyan)",
    image: "./certificates/python development.jpg",
    description:
      "Foundational certification focusing on core Python programming concepts, logic building, and essential syntax for software development.",
    highlights: [
      "Mastered core Python syntax and data structures",
      "Built foundational programming scripts and algorithms",
      "Understood Python development best practices",
    ],
    stack: ["Python", "Scripting", "Logic Building"],
    verifyLink:
      "https://www.udemy.com/certificate/UC-3cd56bc0-aa2f-4be0-8aaf-9eac8f1cf6b7/",
  },
  {
    id: "05",
    name: "Python Development First Steps & IDE",
    subtitle: "Udemy • MTF Institute of Management",
    icon: Code,
    color: "var(--green)",
    image: "./certificates/python ide.jpg",
    description:
      "Focused training on setting up professional Python development environments, IDE configurations, and executing initial programmatic workflows.",
    highlights: [
      "Configured professional Python Integrated Development Environments (IDEs)",
      "Set up robust local development environments effectively",
      "Executed and debugged basic Python applications",
    ],
    stack: ["Python", "IDE Setup", "Environment Config"],
    verifyLink:
      "https://www.udemy.com/certificate/UC-ddfbedc9-e8db-4603-8037-4409fe9b0e75/",
  },
];

export default function Certificates() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="certificates" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">05 / Certificates</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Verified <span className="glow-text">Achievements</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        <div className="flex flex-col gap-10">
          {certificates.map((c, i) => (
            <div
              key={c.id}
              className={`cyber-card rounded-xl overflow-hidden fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.18}s` }}
            >
              <div
                className={`grid ${i % 2 === 0 ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"}`}
              >
                {/* Content Side */}
                <div
                  className={`p-8 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: c.color,
                        opacity: 0.6,
                        letterSpacing: "0.2em",
                      }}
                    >
                      CERTIFICATE {c.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: "var(--green)",
                        border: "1px solid rgba(57,255,20,0.3)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                        background: "rgba(57,255,20,0.05)",
                      }}
                    >
                      VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <c.icon size={20} style={{ color: c.color }} />
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        color: "var(--text)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {c.name}
                    </h3>
                  </div>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: c.color,
                      opacity: 0.75,
                    }}
                  >
                    {c.subtitle}
                  </p>

                  <p
                    className="mb-5"
                    style={{
                      color: "var(--text-dim)",
                      fontSize: "0.88rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {c.description}
                  </p>

                  <ul className="flex flex-col gap-2 mb-6">
                    {c.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-dim)",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ color: c.color, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {c.stack.map((t, j) => (
                      <span key={j} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={c.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-btn-filled"
                      style={{ padding: "8px 20px", fontSize: "0.75rem" }}
                    >
                      <ExternalLink size={13} />
                      Verify Credential
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`relative overflow-hidden min-h-56 lg:min-h-0 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                  style={{ background: "var(--surface)" }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.35, transition: "opacity 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.55")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "0.35")
                    }
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(${i % 2 === 0 ? "270deg" : "90deg"}, var(--surface) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Number Watermark */}
                  <div
                    className="absolute bottom-4 right-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      fontWeight: "900",
                      color: c.color,
                      opacity: 0.08,
                      lineHeight: 1,
                    }}
                  >
                    {c.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
