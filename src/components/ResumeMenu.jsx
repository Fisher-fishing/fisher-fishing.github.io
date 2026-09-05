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
        查看简历
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
            <div className="resume-option" key={resume.href}>
              <div className="resume-option-copy">
                <strong>{resume.label}</strong>
                <span>{resume.description}</span>
              </div>
              <div className="resume-option-actions">
                <a
                  className="resume-option-action is-open"
                  href={resume.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  在线打开
                </a>
                <a
                  className="resume-option-action is-download"
                  href={resume.href}
                  download={resume.filename}
                  onClick={() => setIsOpen(false)}
                >
                  下载 PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeMenu;
