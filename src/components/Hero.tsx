import { useEffect, useRef } from "react";
import { Github, Mail, MapPin, ChevronDown } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = [
  "Full Stack Developer",
  "React.js Engineer",
  "Node.js Architect",
  "WebSocket Specialist",
  "API Integration Expert",
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  el: HTMLDivElement;
}

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 2000);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Rising Particles Animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const count = 30;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      const size = Math.random() * 3 + 1;
      el.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:${Math.random() > 0.6 ? "rgba(0,245,255,0.6)" : "rgba(57,255,20,0.5)"};
        pointer-events:none;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100 + 100}%;
        opacity: 0;
        z-index: 0;
      `;
      container.appendChild(el);
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100 + 100,
        size,
        speedY: Math.random() * 0.15 + 0.05,
        speedX: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        el,
      });
    }
    particlesRef.current = particles;

    let animId: number;
    const animate = () => {
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < -5) {
          p.y = 105;
          p.x = Math.random() * 100;
        }
        p.el.style.top = `${p.y}%`;
        p.el.style.left = `${p.x}%`;
        p.el.style.opacity = String(p.y < 10 || p.y > 95 ? 0 : p.opacity);
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Orbit rings & Planets */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        {[380, 300, 220].map((size, i) => {
          const radius = size / 2;
          const dotAngles =
            i === 0
              ? [0, 72, 144, 216, 288]
              : i === 1
                ? [0, 120, 240]
                : [90, 270];

          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                marginTop: `-${radius}px`,
                marginLeft: `-${radius}px`,
                animation: `orbit-spin ${12 + i * 6}s linear infinite ${
                  i % 2 === 0 ? "normal" : "reverse"
                }`,
              }}
            >
              {/* Ring Border */}
              <div
                className="absolute inset-0"
                style={{
                  border: `1px solid rgba(0,245,255,${0.06 + i * 0.04})`,
                  borderRadius: "50%",
                }}
              />

              {/* Planets */}
              {dotAngles.map((deg, j) => (
                <div
                  key={j}
                  style={{
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    marginTop: "-4px",
                    marginLeft: "-4px",
                    background:
                      (i + j) % 2 === 0 ? "var(--cyan)" : "var(--green)",
                    borderRadius: "50%",
                    top: `${radius + radius * Math.sin((deg * Math.PI) / 180)}px`,
                    left: `${radius + radius * Math.cos((deg * Math.PI) / 180)}px`,
                    boxShadow:
                      (i + j) % 2 === 0
                        ? `0 0 10px var(--cyan)`
                        : `0 0 10px var(--green)`,
                  }}
                />
              ))}
            </div>
          );
        })}

        {/* Center node */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "100px",
            height: "100px",
            marginTop: "-50px",
            marginLeft: "-50px",
            background:
              "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,200,212,0.05))",
            border: "1px solid rgba(0,245,255,0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 40px rgba(0,245,255,0.2)`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--cyan)",
              fontWeight: "900",
            }}
          >
            NV
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "var(--cyan)",
              }}
            />
            <span className="section-label">Full Stack Developer</span>
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "var(--cyan)",
              }}
            />
          </div>

          {/* Name */}
          <h1 className="mb-4">
            <span
              className="block text-6xl md:text-8xl font-black tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text)",
                lineHeight: "1",
              }}
            >
              NISHCHHAL
            </span>
            <span
              className="block text-6xl md:text-8xl font-black tracking-tight glow-text"
              style={{ lineHeight: "1.05" }}
            >
              VERMA
            </span>
          </h1>

          {/* Role typewriter */}
          <div
            className="flex items-center gap-2 mb-6"
            style={{ minHeight: "2rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--green)",
                opacity: 0.8,
              }}
            >
              {" "}
              &gt;{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--text-dim)",
              }}
            >
              {" "}
              {role}{" "}
            </span>
            <span className="cursor-blink" />
          </div>

          {/* Bio */}
          <p
            className="mb-8 max-w-xl leading-relaxed"
            style={{ color: "var(--text-dim)", fontSize: "1rem" }}
          >
            Results-driven developer building scalable web applications with
            real-time systems. Passionate about React, Node.js, and
            WebSocket-powered solutions that actually ship.
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-10">
            <span
              className="flex items-center gap-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-dim)",
              }}
            >
              <MapPin size={13} style={{ color: "var(--cyan)" }} /> Agra, UP,
              India
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--green)",
                opacity: 0.8,
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 8px var(--green)",
                  display: "inline-block",
                }}
              />
              Available for opportunities
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="cyber-btn-filled">
              {" "}
              View My Work{" "}
            </a>
            <a href="#contact" className="cyber-btn">
              {" "}
              Get In Touch{" "}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nishchhal6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all"
              style={{
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              <Github size={15} /> github.com/nishchhal6
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 transition-all"
              style={{
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              <Mail size={15} /> nishchhalverma6@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-dim)", opacity: 0.5, zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
          }}
        >
          {" "}
          SCROLL{" "}
        </span>
        <ChevronDown
          size={14}
          style={{ animation: "float-anim 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
