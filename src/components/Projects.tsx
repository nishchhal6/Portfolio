import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, Zap, ShoppingCart, User } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "CureAsap",
    subtitle: "Real-Time Emergency Rescue System",
    icon: Zap,
    color: "var(--cyan)",
    image: "/images/cureasap.png",
    description:
      "A real-time emergency dashboard that broadcasts rescue requests to nearby hospitals within a 5 km radius using geo-fencing and WebSockets for live location tracking.",
    highlights: [
      "Sub-500ms WebSocket data between citizens, drivers, and hospitals",
      "Geo-fencing broadcast to hospitals within 5 km radius",
      "Hospital dashboard with 4 core sub-systems: bed inventory, emergency records, driver assignment, and video verification",
    ],
    stack: [
      "React.js",
      "Supabase",
      "WebSockets",
      "TailwindCSS",
      "Geolocation API",
    ],
    status: "Production",
    github: "https://github.com/nishchhal6/CureAsap_Hospital", // Maine update kar diya
    live: "https://cure-asap-hospital.vercel.app/", // Yahan CureAsap ka live link dalein, agar nahi hai toh khali chhod dein
  },
  {
    id: "02",
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
    id: "03",
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

                  {/* Actions - UPDATED HERE */}
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
      </div>
    </section>
  );
}
