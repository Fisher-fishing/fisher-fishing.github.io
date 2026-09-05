function Contact({ contact }) {
  return (
    <section
      id="contact"
      className="section panel contact-card"
      aria-labelledby="contact-title"
    >
      <div>
        <p className="card-caption">CONTACT ME</p>
        <h2 id="contact-title">{contact.title}</h2>
        <p>{contact.description}</p>
      </div>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
      </div>
    </section>
  );
}

export default Contact;

