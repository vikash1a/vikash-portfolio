import { useState, useEffect } from 'react';
import data from '../data/resume.json';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const base = import.meta.env.BASE_URL;
  const p = data.personal;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="topbar-spacer"></div>
      <nav className={`topbar ${scrolled ? 'scrolled' : ''}`} id="topbar">
        <div className="topbar-inner container">
          <span className="topbar-name">{p.name}</span>
          <div className="topbar-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href={`${base}Resume_Vikash_Sinha.pdf`} className="topbar-resume" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </nav>

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
