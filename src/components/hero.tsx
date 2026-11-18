import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { CvButton, Reveal, SocialLinks } from "./ui";

export function Hero() {
  return (
    <section id="home" className="hero section container" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="hero-intro">Hello, I&apos;m</p>
          <h1 id="hero-title">Umutoniwase <span>Sylvie</span></h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-description">
            I build useful web applications with thoughtful interfaces and reliable
            backend systems, bringing ideas to life from the first screen to the database.
          </p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">
              Explore My Projects <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
          <div className="hero-social">
            <SocialLinks labeled />
            <span className="vertical-rule" aria-hidden="true" />
            <CvButton />
          </div>
        </Reveal>
        <Reveal className="hero-portrait">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="hero-portrait-image">
            <Image
              src={profile.heroImage}
              alt={profile.name}
              fill
              sizes="(max-width: 760px) 90vw, (max-width: 1180px) 45vw, 480px"
              preload
              className="hero-profile-photo"
            />
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <span>Useful interfaces. Reliable logic. Thoughtful code.</span>
        <a href="#about">Get to know me <ArrowDown size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
