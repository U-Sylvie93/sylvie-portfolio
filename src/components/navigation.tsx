"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/portfolio";
import { CvButton, SocialLinks } from "./ui";
const subscribeTheme = (notify: () => void) => {
  window.addEventListener("sylvie-theme-change", notify);
  window.addEventListener("storage", notify);
  return () => {
    window.removeEventListener("sylvie-theme-change", notify);
    window.removeEventListener("storage", notify);
  };
};
const readTheme = () => document.documentElement.dataset.theme === "light";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const light = useSyncExternalStore(subscribeTheme, readTheme, () => false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  function toggleTheme() {
    const nextLight = !readTheme();
    document.documentElement.dataset.theme = nextLight ? "light" : "dark";
    try {
      localStorage.setItem("sylvie-theme", nextLight ? "light" : "dark");
    } catch {
      /* Device preferences are optional. */
    }
    window.dispatchEvent(new Event("sylvie-theme-change"));
  }
  return (
    <header className={`header ${scrolled ? "compact" : ""}`}>
      <div className="nav-container">
        <a className="wordmark" href="#home" aria-label="Sylvie home">
          <span className="logo-mark">s.</span>sylvie
          <span className="mint">.</span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${open ? "open" : ""}`}
        >
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <SocialLinks />
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-pressed={light}
            aria-label={
              light ? "Switch to dark theme" : "Switch to light theme"
            }
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="nav-cv">
            <CvButton compact />
          </div>
          <button
            ref={toggleRef}
            className="icon-button mobile-toggle"
            aria-controls="main-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

