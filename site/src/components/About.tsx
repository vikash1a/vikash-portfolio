import data from '../data/resume.json';

export default function About() {
  const { bio } = data.personal;
  const expYears = new Date().getFullYear() - 2020;

  return (
    <section id="about" className="container">
      <p className="section-label">👋 About</p>
      <div className="about-grid">
        <p className="bio">{bio}</p>
        <ul className="highlights">
          <li>
            <span className="hi-icon">⚡</span>
            <span className="hi-num">{expYears}+</span>
            <span className="hi-label">Years of experience</span>
          </li>
          <li>
            <span className="hi-icon">🏢</span>
            <span className="hi-num">3</span>
            <span className="hi-label">Companies in prod</span>
          </li>
          <li>
            <span className="hi-icon">🔥</span>
            <span className="hi-num">∞</span>
            <span className="hi-label">On-call incidents survived</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
