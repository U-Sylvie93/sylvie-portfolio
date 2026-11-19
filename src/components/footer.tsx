import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { CvButton, SocialLinks } from "./ui";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-name">
      <div className="container">
        <div className="footer-main">
          <div className="footer-identity">
            <a id="footer-name" className="brand-name" href="#home">{profile.name}</a>
            <p>{profile.title}</p>
          </div>
          <div className="footer-contact">
            <span className="footer-kicker">Get in touch</span>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              <span>{profile.email}</span><ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-links-row">
          <nav aria-label="Footer navigation">
            {footerLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="footer-resources">
            <SocialLinks labeled />
            <CvButton />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a className="back-to-top" href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
