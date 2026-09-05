import ResumeMenu from './ResumeMenu';

function Intro({ profile }) {
  return (
    <section id="intro" className="intro panel" aria-labelledby="name">
      <div className="intro-copy">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1 id="name">{profile.name}</h1>
        <p className="position">
          {profile.role}
          <span>{profile.direction}</span>
        </p>
        <p className="lead">{profile.summary}</p>
        <p className="intro-meta">{profile.education}</p>
        <div className="actions">
          <ResumeMenu resumes={profile.resumes} />
          <a className="button secondary" href="#projects">
            查看项目
          </a>
        </div>
      </div>
      <figure className="portrait">
        <img
          src={profile.portrait}
          alt={`${profile.name}的个人照片`}
          width="230"
          height="345"
          fetchPriority="high"
        />
        <figcaption>{profile.location}</figcaption>
      </figure>
      <div className="intro-strip" aria-label="开发背景">
        {profile.highlights.map((item) => (
          <p key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

export default Intro;
