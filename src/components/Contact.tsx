import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Mail, Github, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // You will replace this with your actual key in the next step
          access_key: "ccfffe21-9988-45d6-9147-5c456fd8bb33",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
      } else {
        console.error("Error", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(7,24,38,0.8)",
    border: "1px solid rgba(0,245,255,0.15)",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.88rem",
    padding: "12px 16px",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focusStyle = {
    borderColor: "var(--cyan)",
    boxShadow: "0 0 0 2px rgba(0,245,255,0.08)",
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-up ${visible ? "visible" : ""} mb-16`} ref={ref}>
          <p className="section-label mb-3">06 / Contact</p>
          <h2
            className="section-title text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Let's <span className="glow-text">Connect</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: "120px" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info */}
          <div
            className={`fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <p
              className="mb-8"
              style={{
                color: "var(--text-dim)",
                fontSize: "0.95rem",
                lineHeight: "1.8",
                maxWidth: "440px",
              }}
            >
              I'm currently open to new opportunities — whether it's a full-time
              role, freelance project, or interesting collaboration. Drop a
              message and I'll get back to you fast.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "nishchhalverma6@gmail.com",
                  href: "mailto:nishchhalverma6@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 8923066929",
                  href: "tel:+918923066929",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Agra, Uttar Pradesh, India",
                  href: null,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/nishchhal6",
                  href: "https://github.com/nishchhal6",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,245,255,0.07)",
                      border: "1px solid rgba(0,245,255,0.15)",
                    }}
                  >
                    <item.icon size={15} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: "var(--text-dim)",
                        opacity: 0.6,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--text)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          transition: "color 0.2s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--cyan)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text)")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "var(--text)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
              style={{
                background: "rgba(57,255,20,0.06)",
                border: "1px solid rgba(57,255,20,0.2)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 10px var(--green)",
                  display: "inline-block",
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--green)",
                  letterSpacing: "0.06em",
                }}
              >
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Right form */}
          <div
            className={`fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {sent ? (
              <div
                className="cyber-card corner-bracket rounded-lg p-10 flex flex-col items-center justify-center gap-5 text-center"
                style={{ minHeight: "360px" }}
              >
                <CheckCircle size={48} style={{ color: "var(--green)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--text)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-dim)", fontSize: "0.88rem" }}>
                  Thanks for reaching out. I'll be in touch soon.
                </p>
                <button
                  className="cyber-btn"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="cyber-card corner-bracket rounded-lg p-8 flex flex-col gap-5"
              >
                <div>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Nishchhal Verma"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,245,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,245,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="I'd love to collaborate on..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,245,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="cyber-btn-filled"
                  disabled={sending}
                  style={{
                    alignSelf: "flex-start",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  <Send size={13} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
