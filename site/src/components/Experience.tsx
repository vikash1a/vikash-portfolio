import data from '../data/resume.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">💼 Experience</p>
        <div className="jobs">
          {experience.map((job, idx) => (
            <article key={idx} className={`job ${job.current ? 'current' : ''}`}>
              <div className="job-header">
                <div className="job-left">
                  <span className="company">{job.company}</span>
                  <span className="job-title">{job.title}</span>
                </div>
                <div className="job-right">
                  {job.current && <span className="badge">Current</span>}
                  <span className="period">📅 {job.period}</span>
                  <span className="loc">📍 {job.location}</span>
                </div>
              </div>
              {job.bullets.length > 0 && (
                <ul className="bullets">
                  {job.bullets.map((b, bIdx) => <li key={bIdx}>{b}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
