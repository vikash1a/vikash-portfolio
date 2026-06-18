import data from '../data/resume.json';

export default function Skills() {
  const { skills } = data;

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">🛠️ Skills</p>
        <div className="groups">
          {skills.map((g, idx) => (
            <div className="group" key={idx}>
              <p className="group-label">{g.label}</p>
              <div className="pills">
                {g.items.map((s, sIdx) => <span className="pill" key={sIdx}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
