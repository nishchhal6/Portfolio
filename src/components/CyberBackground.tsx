import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      bgRef.current.style.setProperty("--mouse-x", `${x}%`);
      bgRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        ["--mouse-x" as any]: "50%",
        ["--mouse-y" as any]: "50%",
      }}
    >
      <style>{`
        /* 1. Base Static Grid */
        .global-cyber-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,245,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.06) 1px, transparent 1px);
          background-size: 35px 35px;
          background-position: center;
        }

        /* 2. Interactive Breaking Grid (Size 400px se 200px kar diya hai) */
        .global-cyber-grid-interactive {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,245,255,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.18) 1px, transparent 1px);
          background-size: 35px 35px;
          background-position: center;
          /* Mask ka area chota kar diya */
          mask-image: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%);
          transform: translate(calc((var(--mouse-x) - 50%) * -0.05), calc((var(--mouse-y) - 50%) * -0.05));
        }

        /* 3. Mouse Glow (Size 1000px se ghata kar 400px kar diya hai) */
        .global-mouse-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          left: var(--mouse-x);
          top: var(--mouse-y);
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 60%);
          border-radius: 50%;
        }
      `}</style>

      <div className="global-cyber-grid" />
      <div className="global-mouse-glow" />
      <div className="global-cyber-grid-interactive" />
    </div>
  );
}
