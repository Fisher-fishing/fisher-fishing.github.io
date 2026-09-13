import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  const didCopy = document.execCommand('copy');
  textarea.remove();

  if (!didCopy) {
    throw new Error('Copy command failed');
  }
}

function Contact({ contact }) {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (!feedback) return undefined;

    const timer = window.setTimeout(() => setFeedback(null), 1800);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  async function handleCopy(field, value) {
    try {
      await copyText(value);
      setFeedback({ field, message: '已复制' });
    } catch {
      setFeedback({ field, message: '复制失败' });
    }
  }

  const contactItems = [
    {
      field: 'email',
      label: '邮箱',
      value: contact.email,
      copyValue: contact.email,
    },
    {
      field: 'phone',
      label: '电话',
      value: contact.phone,
      copyValue: contact.phone.replace(/\D/g, ''),
    },
    {
      field: 'wechat',
      label: '微信',
      value: `微信：${contact.wechat}`,
      copyValue: contact.wechat,
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <SectionHeading id="contact-title" title={contact.title} kicker="CONTACT" />
      <article className="panel contact-card">
        <h3>{contact.description}</h3>
        <div className="contact-links">
          {contactItems.map((item) => {
            const itemFeedback = feedback?.field === item.field;

            return (
              <button
                key={item.field}
                className="copy-contact"
                type="button"
                aria-label={`复制${item.label}：${item.copyValue}`}
                onClick={() => handleCopy(item.field, item.copyValue)}
              >
                <span className="copy-value">{item.value}</span>
                <span
                  className={`copy-hint${itemFeedback ? ' is-visible' : ''}`}
                  aria-live="polite"
                >
                  {itemFeedback ? feedback.message : '复制'}
                </span>
              </button>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default Contact;
