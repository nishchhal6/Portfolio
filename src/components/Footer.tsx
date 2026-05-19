import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6">
      <div className="section-divider mb-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal size={16} style={{ color: 'var(--cyan)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '0.15em' }}>
            NISHCHHAL VERMA
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', opacity: 0.5, letterSpacing: '0.08em' }}>
          © 2026 — Designed & Built by Nishchhal Verma
        </p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', opacity: 0.4 }}>
          React · TailwindCSS · Vite
        </div>
      </div>
    </footer>
  );
}
