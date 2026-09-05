import { useEffect, useId, useRef, useState } from 'react';

function ResumeMenu({ resumes }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="resume-menu" ref={menuRef}>
      <button
        ref={buttonRef}
        className="button primary resume-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setIsOpen((current) => !current)}
      >
        下载简历
        <span
          className={`resume-chevron${isOpen ? ' is-open' : ''}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {isOpen && (
        <div id={menuId} className="resume-options" aria-label="选择简历版本">
          {resumes.map((resume) => (
            <a
              key={resume.href}
              href={resume.href}
              download={resume.filename}
              onClick={() => setIsOpen(false)}
            >
              <strong>{resume.label}</strong>
              <span>{resume.description}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeMenu;
