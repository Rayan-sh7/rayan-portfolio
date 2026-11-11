import { useCallback, useEffect, useRef, useState } from "react";
import { X, ArrowUpRight, Copy, Check } from "lucide-react";
import { asset } from "../utils/asset";

const CLOSE_MS = 180;

export default function CertificateModal({
  certificate,
  onClose,
  verifyLabel,
  credentialLabel,
  copyLabel,
  copiedLabel,
}) {
  const closeRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const handleClose = useCallback(() => setClosing(true), []);

  const [copied, setCopied] = useState(false);
  const copyTimer = useRef();

  const handleCopy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopid(true);
      clearTimerout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopid(false), 2000);
    } catch {
      console.error("Copy errer ! Try in HTTPs ");
    }
  }, []);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

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
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`modal-panel ${closing ? "is-closing" : ""} relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-900/10 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-slate-900`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute end-6 top-6 z-10 rounded-full bg-slate-900/60 p-2 text-white transition hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <X size={18} />
        </button>

        {certificate.image ? (
          <img
            src={asset(certificate.image)}
            alt={certificate.name}
            className="aspect-[16/9] w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-purple-500/10 text-6xl font-black text-indigo-500/30 dark:from-indigo-500/15 dark:via-slate-900 dark:to-purple-500/10 dark:text-indigo-300/30">
            <span>&lt;/&gt;</span>
          </div>
        )}

        <div className="p-3 pt-6">
          <h3
            id="certificate-modal-title"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            {certificate.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {certificate.provider}
          </p>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
            {certificate.description}
          </p>

          {certificate.credential && (
            <>
              <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-indigo-500">
                {credentialLabel}
              </h4>
              <div className="mt-2 flex items-center gap-3">
                <p
                  dir="ltr"
                  className="min-w-0 flex-1 break-all text-sm text-slate-600 dark:text-slate-300"
                >
                  {certificate.credential}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy(certificate.credential)}
                  aria-label={copied ? copiedLabel : copyLabel}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-900/10 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-indigo-400/50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-white/10 dark:text-slate-300 dark:hover:text-indigo-300"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? copiedLabel : copyLabel}
                </button>
              </div>
            </>
          )}

          {certificate.link && (
            <div className="mt-6 flex justify-center">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                <ArrowUpRight size={16} />
                {verifyLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
