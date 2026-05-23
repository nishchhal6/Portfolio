import { useInView } from "../hooks/useInView";
import {
  ExternalLink,
  Github,
  Zap,
  ShoppingCart,
  User,
  Mail,
  Cpu,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: "01",
    name: "AI eCommerce Support Agent",
    subtitle: "eCommerce Automation Workflow",
    icon: Cpu,
    color: "var(--cyan)",
    image: "/images/01.png",
    description:
      "Designed and deployed an end-to-end automated customer support pipeline using n8n to process incoming customer inquiries via webhooks, performing real-time sentiment analysis and auto-drafting responses.",
    highlights: [
      "Integrated Google Gemini API to analyze ticket sentiment, categorize urgency, and dynamically generate context-aware email response drafts.",
      "Configured advanced conditional routing logic within n8n to instantly isolate high-priority operational issues.",
      "Triggered real-time instant alerts on Slack for human developers, optimizing customer resolution response paths.",
    ],
    stack: [
      "n8n Automation",
      "Gemini API",
      "Webhooks",
      "JSON Data Handling",
      "Google Sheets API",
      "Slack API",
    ],
    status: "Live Agent",
    github: "https://github.com/nishchhal6",
    live: "https://github.com/nishchhal6",
  },
  {
    id: "02",
    name: "Lead Automation Pipeline",
    subtitle: "n8n Event-Driven Integration",
    icon: Mail,
    color: "var(--green)",
    image: "/images/02.png",
    description:
      "Built an automated event-driven communication pipeline that handles dynamic lead routing and triggers immediate, personalized communication upon form submissions.",
    highlights: [
      "Configured automated JSON data extracting layers within n8n to process incoming form fields dynamically.",
      "Mapped real-time database inputs directly into customized dynamic email templates for instant SMTP dispatch.",
      "Eliminated manual logging overhead by syncing client-side data triggers with cloud sheets architectures.",
    ],
    stack: [
      "n8n Workflows",
      "Webhooks",
      "Google Forms API",
      "SMTP Server",
      "JSON Parsing",
    ],
    status: "Deployed",
    github: "https://github.com/nishchhal6",
    live: "https://github.com/nishchhal6",
  },
  {
    id: "03",
    name: "CureAsap",
    subtitle: "Real-Time Emergency Rescue System",
    icon: Zap,
    color: "var(--orange)",
    image: "/images/cureasap.png",
    description:
      "Collaborated in a 2-member team to architect and deploy an end-to-end real-time emergency dashboard for hospitals to accept location-based rescue requests.",
    highlights: [
      "Utilized WebSockets for instant, real-time data streaming between client dashboards and backend services.",
      "Co-developed automated backend sub-systems for instant bed inventory updates and driver assignment pipelines.",
      "Integrated Geolocation APIs to calculate and route rescue assets within sensitive spatial radiuses.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets",
      "Geolocation API",
    ],
    status: "Production",
    github: "https://github.com/nishchhal6/CureAsap_Hospital",
    live: "https://cure-asap-hospital.vercel.app/",
  },
  {
    id: "04",
    name: "Blinkit Clone",
    subtitle: "Quick-Commerce Platform",
    icon: ShoppingCart,
    color: "var(--green)",
    image: "/images/blinkit.png",
    description:
      "A fully responsive quick-commerce website with centralized cart management, optimized REST APIs, and cross-device consistency across all breakpoints.",
    highlights: [
      "Consistent UI across 3+ device breakpoints (Mobile, Tablet, Desktop)",
      "Cart state management for 100+ items with zero rendering lag",
      "500+ products across 10+ categories with efficient client-side filtering",
    ],
    stack: [
      "React.js",
      "TailwindCSS",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    status: "Live",
    github: "https://github.com/nishchhal6/Blinkit-Clone", // Yahan Blinkit ka Github link dalein
    live: "https://blinkit-clone-jade.vercel.app/", // Yahan Blinkit ka live link dalein
  },
  {
    id: "05",
    name: "CyberPunk Portfolio",
    subtitle: "Interactive UI",
    icon: User,
    color: "var(--orange)",
    image: "/images/portfolio.png",
    description:
      "A high-performance personal portfolio with advanced CSS animations and code-splitting, achieving 95+ Lighthouse performance score.",
    highlights: [
      "95+ Performance Score on Google Lighthouse",
      "Initial page load < 1.2 seconds with code-splitting",
      "Advanced CSS animations and background effects",
    ],
    stack: ["React.js", "TailwindCSS", "Framer Motion", "Vercel"],
    status: "Deployed",
    github: "https://github.com/nishchhal6/Portfolio", // Portfolio ka repo link
    live: "https://portfolio-pi-seven-q4rfp03xdw.vercel.app/", // Portfolio ka live link
  },
];

export default function Projects() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">04 / Projects</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Featured <span className="glow-text">Work</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`cyber-card rounded-xl overflow-hidden fade-up ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.18}s` }}
            >
              <div
                className={`grid ${i % 2 === 0 ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"}`}
              >
                {/* Content */}
                <div
                  className={`p-8 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  {/* ID + status */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: p.color,
                        opacity: 0.6,
                        letterSpacing: "0.2em",
                      }}
                    >
                      PROJECT {p.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: p.color,
                        border: `1px solid ${p.color}44`,
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-1">
                    <p.icon size={20} style={{ color: p.color }} />
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        color: "var(--text)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: p.color,
                      opacity: 0.75,
                    }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className="mb-5"
                    style={{
                      color: "var(--text-dim)",
                      fontSize: "0.88rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-dim)",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ color: p.color, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.stack.map((t, j) => (
                      <span key={j} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-btn"
                      >
                        <Github size={13} />
                        Code
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-btn"
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative overflow-hidden min-h-56 lg:min-h-0 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                  style={{ background: "var(--surface)" }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.4, transition: "opacity 0.3s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.6")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "0.4")
                    }
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(${i % 2 === 0 ? "270deg" : "90deg"}, var(--surface) 0%, transparent 50%)`,
                    }}
                  />
                  {/* Number watermark */}
                  <div
                    className="absolute bottom-4 right-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      fontWeight: "900",
                      color: p.color,
                      opacity: 0.08,
                      lineHeight: 1,
                    }}
                  >
                    {p.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button Section */}
        <div
          className={`flex justify-center mt-16 fade-up ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="https://github.com/nishchhal6"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn flex items-center gap-2"
            style={{
              padding: "14px 28px",
              fontSize: "0.95rem",
              background: "rgba(0, 245, 255, 0.05)",
              borderColor: "var(--cyan)",
            }}
          >
            <Github size={18} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.05em",
              }}
            >
              View More on GitHub
            </span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
