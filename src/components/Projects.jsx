import SectionHeading from './SectionHeading.jsx';
import TagList from './TagList.jsx';

function Projects({ projects }) {
  const { business, practice } = projects;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        title="项目经历"
        kicker="SELECTED PROJECTS"
      />
      <article className="panel project business-project">
        <header className="record-head">
          <div>
            <span className="badge">{business.badge}</span>
            <h3>{business.title}</h3>
          </div>
          <p className="date">{business.date}</p>
        </header>
        <p className="record-intro">{business.introduction}</p>
        <div className="project-grid">
          {business.features.map((feature) => (
            <div key={feature.title}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <TagList tags={business.tags} />
      </article>

      <div className="practice-grid">
        {practice.map((project) => (
          <article className="panel project practice-project" key={project.title}>
            <header>
              <span className="badge neutral">{project.badge}</span>
              <h3>{project.title}</h3>
              <p className="date">{project.date}</p>
            </header>
            <p>{project.introduction}</p>
            <ul className="plain-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <TagList tags={project.tags} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

