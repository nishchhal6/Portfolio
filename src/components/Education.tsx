import { useInView } from '../hooks/useInView';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const certs = [
  { title: 'Web Development Bootcamp', org: 'Hitesh Choudhary via Udemy', year: '2025' },
  { title: 'Mastering Generative AI and ChatGPT', org: 'GeeksforGeeks', year: '2025' },
  { title: 'Python Development', org: 'Udemy', year: '2025' },
];

const achievements = [
  { text: 'Gold Medalist — University Debate Competition on AI', org: 'University Computer Centre', year: '2024' },
  { text: 'Letter of Recommendation for Exceptional Performance', org: 'Labmentix', year: '2026' },
  { text: 'Letter of Recommendation for Exceptional Performance', org: 'Codec Technologies', year: '2025' },
];

export default function Education() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`fade-up ${visible ? 'visible' : ''} mb-16`} ref={ref}>
          <p className="section-label mb-3">05 / Education</p>
          <h2 className="section-title text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>
            Learning <span className="glow-text">Journey</span>
          </h2>
          <div className="mt-4 section-divider" style={{ maxWidth: '120px' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degree */}
          <div className={`lg:col-span-1 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="cyber-card corner-bracket rounded-lg p-7 h-full">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}
              >
                <GraduationCap size={22} style={{ color: 'var(--cyan)' }} />
              </div>
              <span className="section-label mb-2 block">Degree</span>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', letterSpacing: '0.03em', fontSize: '0.95rem' }}
              >
                Bachelor's of Computer Application
              </h3>
              <p style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '8px' }}>
                Dr. Bhimrao Ambedkar University
              </p>
              <p style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
                Agra, UP — 2023–2026
              </p>
            </div>
          </div>

          {/* Certificates */}
          <div className={`lg:col-span-1 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="cyber-card rounded-lg p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={16} style={{ color: 'var(--cyan)' }} />
                <span className="section-label">Certificates</span>
              </div>
              <div className="flex flex-col gap-4">
                {certs.map((c, i) => (
                  <div
                    key={i}
                    className="pb-4"
                    style={{ borderBottom: i < certs.length - 1 ? '1px solid rgba(0,245,255,0.08)' : 'none' }}
                  >
                    <p className="font-medium mb-0.5" style={{ color: 'var(--text)', fontSize: '0.85rem' }}>
                      {c.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                        {c.org}
                      </span>
                      <span style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', opacity: 0.7 }}>
                        {c.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`lg:col-span-1 fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="cyber-card rounded-lg p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <Award size={16} style={{ color: 'var(--green)' }} />
                <span className="section-label" style={{ color: 'var(--green)', opacity: 0.75 }}>Achievements</span>
              </div>
              <div className="flex flex-col gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="flex gap-3 pb-4"
                    style={{ borderBottom: i < achievements.length - 1 ? '1px solid rgba(0,245,255,0.08)' : 'none' }}
                  >
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}>★</span>
                    <div>
                      <p className="font-medium mb-0.5" style={{ color: 'var(--text)', fontSize: '0.83rem', lineHeight: '1.4' }}>
                        {a.text}
                      </p>
                      <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                        {a.org} · {a.year}
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
