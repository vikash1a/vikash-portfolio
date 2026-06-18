import { useState } from 'react';
import data from '../data/resume.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const base = import.meta.env.BASE_URL;
  const p = data.personal;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-bar">
        <span className="mobile-name">{p.name}</span>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <span className="sidebar-name">{p.name}</span>
            <span className="sidebar-title">{p.title}</span>
          </div>
          <div className="sidebar-links">
            <a href="#about" onClick={() => setIsOpen(false)}>
              <span className="nav-bullet">▸</span> About
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)}>
              <span className="nav-bullet">▸</span> Experience
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              <span className="nav-bullet">▸</span> Skills
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <span className="nav-bullet">▸</span> Contact
            </a>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href={`${base}Resume_Vikash_Sinha.pdf`} className="sidebar-resume" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </nav>

      {/* Overlay for Mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}

      {/* Hero Header */}
      <header>
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">{p.title}</p>
            <h1>{p.name}</h1>
            <p className="hero-sub">{p.bio}</p>
            <p className="hero-location">📍 {p.location}</p>
            <div className="hero-ctas">
              <a href={`${base}Resume_Vikash_Sinha.pdf`} className="btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
