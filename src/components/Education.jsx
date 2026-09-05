import SectionHeading from './SectionHeading.jsx';

function Education({ education }) {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <SectionHeading
        id="education-title"
        title="教育背景"
        kicker="EDUCATION"
      />
      <article className="panel education-card">
        <div>
          <h3>{education.school}</h3>
          <p>{education.major}</p>
        </div>
        <p className="date">{education.date}</p>
      </article>
    </section>
  );
}

export default Education;

