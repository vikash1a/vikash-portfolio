import { useState, useEffect, useRef } from 'react';
import data from '../data/resume.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const base = import.meta.env.BASE_URL;
  const p = data.personal;

  const toggleMenu = () => setIsOpen(!isOpen);

  const isScrollingToRef = useRef<string | null>(null);

  const handleNavLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);
    isScrollingToRef.current = id;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['about', 'experience', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // detects intersecting when section occupies center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (isScrollingToRef.current) {
            if (id === isScrollingToRef.current) {
              isScrollingToRef.current = null;
              setActiveSection(id);
            }
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    const handleScroll = () => {
      if (isScrollingToRef.current) return;
      // Bottom of page detection (forces active highlighting for Contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavLinkClick('about', e)}>
              <span className="nav-bullet">▸</span> About
            </a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => handleNavLinkClick('experience', e)}>
              <span className="nav-bullet">▸</span> Experience
            </a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleNavLinkClick('skills', e)}>
              <span className="nav-bullet">▸</span> Skills
            </a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavLinkClick('contact', e)}>
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
            <p className="hero-location">📍 {p.location}</p>
            <div className="hero-ctas">
              <a href={`${base}Resume_Vikash_Sinha.pdf`} className="btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
              <a href="#contact" className="btn-ghost" onClick={(e) => handleNavLinkClick('contact', e)}>Get in touch</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
