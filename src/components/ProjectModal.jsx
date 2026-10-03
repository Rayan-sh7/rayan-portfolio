import { useCallback, useEffect, useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import ProjectImage from "./ProjectImage";

const CLOSE_MS = 180;

export default function ProjectModal({
  project,
  onClose,
  visitLabel,
  stackLabel,
}) {
  const closeRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const handleClose = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!closing) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = setTimeout(onClose, reduced ? 0 : CLOSE_MS);
    return () => clearTimeout(timer);
  }, [closing, onClose]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleClose]);

  return (
    <div
      className={`modal-overlay ${closing ? "is-closing" : ""} fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`modal-panel ${closing ? "is-closing" : ""} relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-900/10 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-slate-900`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute end-6 top-6 z-10 rounded-full bg-slate-900/60 p-2 text-white transition hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <X size={18} />
        </button>

        {project.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={project.title}
            className="aspect-[16/9] w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-purple-500/10 text-6xl font-black text-indigo-500/30 dark:from-indigo-500/15 dark:via-slate-900 dark:to-purple-500/10 dark:text-indigo-300/30">
            <span>&lt;/&gt;</span>
          </div>
        )}

        <div className="p-3 pt-6">
          <h3
            id="project-modal-title"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
            {project.details || project.desc}
          </p>

          <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            {stackLabel}
          </h4>
          <div className="m-3 flex flex-wrap gap-2">
            {(project.stack || project.tags).map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-900/10 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-self-center items-center gap-2 rounded-lg border border-current px-2 py-2 text-lg font-medium transition hover:opacity-80"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                {project.watchVideo}
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                {visitLabel}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
