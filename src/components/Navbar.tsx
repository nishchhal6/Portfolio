import { useState, useEffect } from "react";
import { Menu, X, Terminal, ChevronDown, ExternalLink } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(2, 11, 18, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          onClick={() => handleNav("#hero")}
        >
          <div className="relative">
            <Terminal
              size={20}
              className="text-cyan-400"
              style={{ color: "var(--cyan)" }}
            />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{
                background: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
              }}
            />
          </div>
          <span
            className="font-bold tracking-widest text-sm"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cyan)",
              letterSpacing: "0.15em",
            }}
          >
            NV<span style={{ color: "var(--text-dim)" }}>_</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? "active" : ""}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}

          {/* Resume Dropdown (Desktop) - Opens in new tab */}
          <div className="relative group">
            <button
              className="cyber-btn flex items-center gap-1"
              style={{
                fontSize: "0.68rem",
                padding: "8px 18px",
                cursor: "default",
              }}
            >
              Resume{" "}
              <ChevronDown
                size={14}
                className="transition-transform group-hover:rotate-180"
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 mt-2 w-48 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:scale-100 scale-95"
              style={{
                background: "rgba(7, 24, 38, 0.95)",
                border: "1px solid rgba(0,245,255,0.2)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
                padding: "8px 0",
              }}
            >
              <a
                href="/AI-Automation-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm transition-colors"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cyan)";
                  e.currentTarget.style.background = "rgba(0,245,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <ExternalLink size={14} />
                AI & Automation
              </a>
              <a
                href="/Full-Stack-Developer-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm transition-colors"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--green)";
                  e.currentTarget.style.background = "rgba(57,255,20,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <ExternalLink size={14} />
                Full-Stack Dev
              </a>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "var(--cyan)" }}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "500px" : "0",
          background: "rgba(2, 11, 18, 0.97)",
          borderBottom: open ? "1px solid rgba(0,245,255,0.1)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile Resume Links - Opens in new tab */}
          <div
            className="mt-2 pt-4 flex flex-col gap-3"
            style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-dim)",
                letterSpacing: "0.1em",
              }}
            >
              VIEW RESUMES:
            </span>
            <a
              href="/AI-Automation-RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn text-center flex justify-center items-center gap-2"
              style={{ fontSize: "0.8rem", padding: "10px 18px" }}
            >
              <ExternalLink size={16} /> AI & Automation
            </a>
            <a
              href="/Full-Stack-Developer-RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn text-center flex justify-center items-center gap-2"
              style={{
                fontSize: "0.8rem",
                padding: "10px 18px",
                background: "rgba(57,255,20,0.05)",
                borderColor: "var(--green)",
              }}
            >
              <ExternalLink size={16} /> Full-Stack Dev
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
