import { useState } from "react";
import Section from "../components/Section";
import { useApp } from "../context/AppContext";

const fieldClass =
  "w-full rounded-2xl border border-slate-900/10 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/10 dark:bg-white/[.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-400/50";

export default function Contact() {
  const { t } = useApp();
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "New Massage from Portfolio",
          name: form.elements.name.value,
          email: form.elements.email.value,
          message: form.elements.message.value,
          botcheck: form.elements.botcheck.checked,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <p className="max-w-md leading-8 text-slate-600 dark:text-slate-400">
          {t.contact.text}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* فخ للبوتات */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            name="name"
            required
            className={fieldClass}
            placeholder={t.contact.name}
          />
          <input
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder={t.contact.email}
          />
          <textarea
            name="message"
            required
            rows="6"
            className={`${fieldClass} resize-none`}
            placeholder={t.contact.message}
          />

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-60 dark:bg-white dark:text-slate-950"
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>

            {status === "success" && (
              <p
                role="status"
                className="text-sm text-emerald-600 dark:text-emerald-400"
              >
                {t.contact.success}
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {t.contact.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
