import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CyberBackground from "./components/CyberBackground";

export default function App() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* 3D Grid Background */}
      <div className="grid-bg" />
      {/* Scanlines */}
      <div className="scanlines" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <CyberBackground />
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
