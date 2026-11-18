"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { Github, Linkedin } from "./brand-icons";
import { profile } from "@/data/portfolio";
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.6, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
export function SocialLinks({ labeled = false }: { labeled?: boolean }) {
  return (
    <div className={`social-links${labeled ? " social-links-labeled" : ""}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sylvie on GitHub (opens in new tab)"
      >
        <Github size={19} />{labeled && <span>GitHub</span>}
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sylvie on LinkedIn (opens in new tab)"
      >
        <Linkedin size={19} />{labeled && <span>LinkedIn</span>}
      </a>
    </div>
  );
}
export function CvButton({ compact = false }: { compact?: boolean }) {
  return profile.cvUrl ? (
    <a
      className={`button ${compact ? "small" : "ghost"}`}
      href={profile.cvUrl}
      download="Umutoniwase_Sylvie_CV.pdf"
    >
      <Download size={16} aria-hidden="true" />
      Download CV
    </a>
  ) : (
    <button
      className={`button ${compact ? "small" : "ghost"}`}
      onClick={() => {
        const dialog = document.getElementById(
          "cv-dialog",
        ) as HTMLDialogElement | null;
        dialog?.showModal();
      }}
    >
      <Download size={16} />
      Download CV
    </button>
  );
}
export function CvDialog() {
  return (
    <dialog id="cv-dialog" aria-labelledby="cv-title">
      <h2 id="cv-title">CV coming soon</h2>
      <p>
        A downloadable CV hasn’t been added yet. You can connect with Sylvie on
        LinkedIn.
      </p>
      <a
        className="button primary"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit LinkedIn
      </a>
      <form method="dialog">
        <button className="button secondary">Close</button>
      </form>
    </dialog>
  );
}
