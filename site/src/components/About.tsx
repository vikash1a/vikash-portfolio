import data from '../data/resume.json';

export default function About() {
  const { bio } = data.personal;
  const expYears = new Date().getFullYear() - 2020;

  return (
    <section id="about">
      <div className="container">
        <p className="section-label">👋 About</p>
        <div className="about-grid">
          <p className="bio">{bio}</p>
          <ul className="highlights">
            <li>
              <span className="hi-icon">⚡</span>
              <div className="hi-content">
                <span className="hi-num">{expYears}+</span>
                <span className="hi-label">Years of experience</span>
              </div>
            </li>
            <li>
              <span className="hi-icon">🏢</span>
              <div className="hi-content">
                <span className="hi-num">3</span>
                <span className="hi-label">Companies in prod</span>
              </div>
            </li>
            <li>
              <span className="hi-icon">🔥</span>
              <div className="hi-content">
                <span className="hi-num">∞</span>
                <span className="hi-label">On-call incidents</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
