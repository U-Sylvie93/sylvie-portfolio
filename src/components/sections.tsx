import {
  Atom,
  Braces,
  Code2,
  Database,
  GitBranch,
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
  profile,
  skills,
} from "@/data/portfolio";
import { Github } from "./brand-icons";
import { Reveal } from "./ui";
import { ProfilePhoto } from "./profile-photo";
const skillIcons = [Code2, Braces, Database, Terminal];
const technologyMarks: Record<string, string> = {
  HTML5: "H5",
  CSS3: "C3",
  JavaScript: "JS",
  TypeScript: "TS",
  "Next.js": "N",
  "Tailwind CSS": "TW",
  PHP: "php",
  "C#": "C#",
  ".NET": ".N",
  "REST APIs": "API",
  SQL: "SQL",
  MySQL: "My",
  "Database Design / DBMS": "DB",
  "VS Code": "</>",
};
function SkillBadge({ name }: { name: string }) {
  const Icon =
    name === "React"
      ? Atom
      : name === "Git"
        ? GitBranch
        : name === "GitHub"
          ? Github
          : null;
  return (
    <span className="technology-badge">
      <span className="technology-mark" aria-hidden="true">
        {Icon ? <Icon size={14} /> : technologyMarks[name]}
      </span>
      {name}
    </span>
  );
}
export function About() {
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-title"
    >
      <Reveal className="about-grid">
        <div>
          <span className="eyebrow">ABOUT ME</span>
          <h2 id="about-title">
            I like understanding
            <br />
            how it all fits together<span className="mint">.</span>
          </h2>
          <ProfilePhoto />
          <div className="about-focus">
            <Code2 size={17} />
            Interface
            <Braces size={17} />
            Logic
            <Database size={17} />
            Data
          </div>
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
              <span className="eyebrow">TECHNICAL SKILLS</span>
              <h2 id="skills-title">
                Across the full stack<span className="mint">.</span>
              </h2>
              <p>From the browser to the application logic and its data.</p>
            </div>
          </div>
          <div
            className="stack-path" role="img"
            aria-label="Full-stack development connects frontend, backend and database"
          >
            <span>
              <Code2 size={16} />
              Frontend
            </span>
            <i aria-hidden="true" />
            <span>
              <Braces size={16} />
              Backend
            </span>
            <i aria-hidden="true" />
            <span>
              <Database size={16} />
              Database
            </span>
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
                <span className="tiny-dot" />
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
          <span className="eyebrow">DEVELOPER JOURNEY</span>
          <h2 id="journey-title">
            Building, learning, improving<span className="mint">.</span>
          </h2>
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
          <span className="eyebrow">EDUCATION</span>
          <h2 id="education-title">
            A foundation to build on<span className="mint">.</span>
          </h2>
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
export function GitHubSection() {
  return (
    <section
      className="container github-section"
      aria-labelledby="github-heading"
    >
      <div className="github-banner">
        <div className="github-symbol">
          <Github size={42} />
        </div>
        <div>
          <span className="eyebrow">PROJECTS & EXPLORATION</span>
          <h2 id="github-heading">More Code on GitHub</h2>
          <p>
            Explore additional projects, experiments, and development work in my
            repositories.
          </p>
        </div>
        <a
          className="button secondary"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore My GitHub
          <Code2 size={17} />
        </a>
      </div>
    </section>
  );
}


