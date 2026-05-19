import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(2, 11, 18, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" onClick={() => handleNav('#hero')}>
          <div className="relative">
            <Terminal size={20} className="text-cyan-400" style={{ color: 'var(--cyan)' }} />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}
            />
          </div>
          <span
            className="font-bold tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)', letterSpacing: '0.15em' }}
          >
            NV<span style={{ color: 'var(--text-dim)' }}>_</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:nishchhalverma6@gmail.com"
            className="cyber-btn"
            style={{ fontSize: '0.68rem', padding: '8px 18px' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: 'var(--cyan)' }}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '400px' : '0',
          background: 'rgba(2, 11, 18, 0.97)',
          borderBottom: open ? '1px solid rgba(0,245,255,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
