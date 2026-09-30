import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { content } from "../data/content";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem("rayan-lang") || "ar",
  );
  const [dark, setDarkState] = useState(
    () => localStorage.getItem("rayan-theme") !== "light",
  );
  const themeTimer = useRef();
  const langTimer = useRef();

  // Briefly add a class to <html> so a switch animation plays, then remove it.
  const flash = useCallback((className, timerRef, ms) => {
    const root = document.documentElement;
    root.classList.remove(className);
    void root.offsetWidth; // force reflow so the animation restarts if re-triggered
    root.classList.add(className);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => root.classList.remove(className), ms);
  }, []);

  const setLang = useCallback(
    (value) => {
      flash("lang-swap", langTimer, 550);
      setLangState(value);
    },
    [flash],
  );

  const setDark = useCallback(
    (value) => {
      flash("theme-transition", themeTimer, 450);
      setDarkState(value);
    },
    [flash],
  );

  useEffect(
    () => () => {
      clearTimeout(themeTimer.current);
      clearTimeout(langTimer.current);
    },
    [],
  );

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("rayan-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("rayan-theme", dark ? "dark" : "light");
  }, [dark]);

  const value = useMemo(
    () => ({ lang, setLang, dark, setDark, t: content[lang] }),
    [lang, dark, setLang, setDark],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
