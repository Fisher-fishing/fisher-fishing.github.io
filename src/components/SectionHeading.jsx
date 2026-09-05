function SectionHeading({ id, title, kicker }) {
  return (
    <div className="section-head">
      <h2 id={id}>{title}</h2>
      <span className="section-kicker">{kicker}</span>
    </div>
  );
}

export default SectionHeading;

