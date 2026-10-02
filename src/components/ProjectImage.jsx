import { useState } from "react";
import { asset } from "../utils/asset";

export default function ProjectImage({
  project,
  className = "",
  placeholderSize = "text-5xl",
}) {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <img
        src={asset(project.image)}
        alt={project.title}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`w-full rounded-2xl object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-purple-500/10 font-black text-indigo-500/30 dark:from-indigo-500/15 dark:via-slate-900 dark:to-purple-500/10 dark:text-indigo-300/30 ${placeholderSize} ${className}`}
    >
      <span>&lt;/&gt;</span>
    </div>
  );
}
