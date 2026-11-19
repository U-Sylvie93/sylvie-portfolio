import {
  Braces,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  capabilities,
  education,
  experience,
  journey,
  skills,
} from "@/data/portfolio";
import { Reveal } from "./ui";
import { ProfilePhoto } from "./profile-photo";
const skillIcons = [Code2, Braces, Database, Terminal];
function SkillBadge({ name }: { name: string }) { return <span className="technology-badge">{name}</span>; }
export function About() {
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-title"
    >
      <Reveal className="about-grid">
        <div>
          <h2 id="about-title">About me</h2>
          <ProfilePhoto />
        </div>
        <div className="about-copy">
          <p className="lead">I’m Sylvie, a Full-Stack Web Developer and Information Technology student at the University of Rwanda.</p>
          <p>I build practical digital solutions and enjoy connecting responsive interfaces, backend logic, and database systems. My interests span web development and the software that makes those experiences work.</p>
          <p>Alongside my IT studies, I keep learning through projects and technical courses. I focus on clear interfaces, maintainable code, and strengthening the fundamentals behind each application.</p>
          <a href="#projects" className="text-link">
            Explore my projects
            <Code2 size={16} />
          </a>
          <a href="#experience" className="text-link journey-link">My developer journey <Code2 size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}
export function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>

              <h2 id="skills-title">
                Technical skills
              </h2>
              <p>From the browser to the application logic and its data.</p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <article className="skill-card" key={group.name}>
                  <div className="skill-card-title">
                    <Icon className="mint" size={22} strokeWidth={1.5} />
                    <h3>{group.name}</h3>
                  </div>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <SkillBadge key={item} name={item} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="capabilities">
            {capabilities.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Background() {
  return (
    <div className="container background-grid">
      <section
        id="experience"
        className="section"
        aria-labelledby="journey-title"
      >
        <Reveal>
          <h2 id="journey-title">Developer journey</h2>
          {experience.length ? (
            experience.map((item) => (
              <article
                className="background-card"
                key={`${item.organization}-${item.title}`}
              >
                <Workflow size={24} />
                <h3>{item.title}</h3>
                <p>
                  {item.organization}
                  {item.period && ` · ${item.period}`}
                </p>
                <p>{item.description}</p>
              </article>
            ))
          ) : (
            <div className="journey-list">
              {journey.map((item, index) => (
                <article className="journey-item" key={item.title}>
                  <span className="journey-step" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
              <p className="journey-note">
                Current areas of practice and learning.
              </p>
            </div>
          )}
        </Reveal>
      </section>
      <section
        id="education"
        className="section"
        aria-labelledby="education-title"
      >
        <Reveal>
          <h2 id="education-title">Education</h2>
          {education.length ? (
            education.map((item) => (
              <article
                className="background-card education-card"
                key={`${item.institution}-${item.qualification}`}
              >
                <GraduationCap size={24} />
                <span className="small-label">INFORMATION TECHNOLOGY STUDIES</span>
                <h3>{item.institution}</h3>
                <p className="education-field">{item.qualification}</p>
                {item.period && <span className="education-period">{item.period}</span>}
                {item.description && <p>{item.description}</p>}
              </article>
            ))
          ) : (
            <article className="background-card education-placeholder">
              <div className="card-icon">
                <GraduationCap size={22} />
              </div>
              <span className="small-label">EDUCATION & QUALIFICATIONS</span>
              <h3>Education details will be added here.</h3>
              <p>
                For now, my projects and technical skills offer a closer look at
                my development interests and ongoing learning.
              </p>
              <a className="text-link" href="#skills">
                Explore my technical skills
                <Layers3 size={16} />
              </a>
            </article>
          )}
        </Reveal>
      </section>
    </div>
  );
}
