import data from '../data/resume.json';

export default function Contact() {
  const base = import.meta.env.BASE_URL;
  const p = data.personal;

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">📬 Contact</p>
        <div className="contact-card">
          <div className="contact-text">
            <h2>Let's work together</h2>
            <p>Open to senior / staff backend roles and interesting distributed systems problems.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${p.email}`} className="link-row">
              <span className="link-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span>{p.email}</span>
            </a>
            <a href={`https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" className="link-row">
              <span className="link-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              <span>{p.linkedin}</span>
            </a>
            <a href={`${base}Resume_Vikash_Sinha.pdf`} target="_blank" rel="noopener noreferrer" className="link-row dl">
              <span className="link-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
