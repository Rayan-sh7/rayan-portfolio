import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Bridges hash-router URLs to the single-page scroll design.
 *
 * react-router's <Link> changes `location.hash` without the browser performing
 * a native anchor jump, so we read the hash and scroll the matching section
 * into view ourselves. Sections use `scroll-mt-16` (which `scrollIntoView`
 * respects) and `html { scroll-behavior: smooth }` in index.css animates it.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash]);

  return null;
}
