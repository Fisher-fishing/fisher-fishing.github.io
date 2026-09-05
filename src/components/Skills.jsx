import SectionHeading from './SectionHeading.jsx';
import TagList from './TagList.jsx';

function Skills({ skills }) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        title="能力与技术"
        kicker="WHAT I WORK WITH"
      />
      <div className="skill-grid">
        {skills.map((skill) => (
          <article className="panel skill-card" key={skill.title}>
            <span className="card-caption">{skill.caption}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <TagList tags={skill.tags} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

