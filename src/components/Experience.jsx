import SectionHeading from './SectionHeading.jsx';

function Experience({ experience }) {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        title="工作经历"
        kicker="EXPERIENCE"
      />
      <article className="panel experience-card">
        <header className="record-head">
          <div>
            <p className="card-caption">{experience.caption}</p>
            <h3>{experience.company}</h3>
          </div>
          <p className="date">{experience.date}</p>
        </header>
        <p className="record-intro">{experience.introduction}</p>
        <ul className="detail-list">
          {experience.details.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Experience;

