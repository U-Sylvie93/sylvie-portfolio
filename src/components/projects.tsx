"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Star, Users, UserRound } from "lucide-react";
import {
  profile,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import { Github } from "./brand-icons";
import { Reveal } from "./ui";
const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
];
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const OwnershipIcon = project.ownership === "Team Project" ? Users : UserRound;
  return (
    <article
      aria-labelledby={`project-${project.name}`}
      className={`project-card ${project.featured ? "featured-project" : ""}`}
    >
      {project.image ? (
        <div className="project-image">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title ?? project.name} screenshot`}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 1180px) 45vw, 520px"
          />
          {project.imageKind === "illustration" && <span className="project-image-label">Project illustration</span>}
        </div>
      ) : (
        <div
          className={`project-art art-${index % 3}`}
          role="img"
          aria-label="Neutral repository illustration; project screenshot not supplied"
        >
          <span className="art-category">
            {project.category ?? "Code project"}
          </span>
          <div className="project-glyph" aria-hidden="true">
            <FolderGit2 size={32} strokeWidth={1.2} />
          </div>
          <span className="project-number">{project.name}</span>
          <span className="art-caption">SOURCE REPOSITORY</span>
          <div className="art-line" aria-hidden="true" />
        </div>
      )}
      <div className="project-content">
        <div className="project-badges">
        {project.featured && (
          <span className="badge featured-badge">
            <Star size={11} aria-hidden="true" />
            Featured project
          </span>
        )}
        <span className={"project-ownership " + (project.ownership === "Team Project" ? "team-project" : "personal-project")}><OwnershipIcon size={13} aria-hidden="true" />{project.ownership}</span>
        </div>
        <div className="project-heading">
          <h3 id={`project-${project.name}`}>{project.title ?? project.name}</h3>
        </div>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="project-links">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source code for ${project.name} (opens in new tab)`}
          >
            <Github size={15} />
            Source Code
            <ArrowUpRight size={14} />
          </a>
          {project.liveUrl && (
            <a
              className="live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo (opens in new tab)`}
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="section container"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2 id="projects-title">
              A closer look at my code<span className="mint">.</span>
            </h2>
            <p>
              Learning platforms, business websites, and earlier frontend work.
            </p>
          </div>
        </div>
        <div className="project-toolbar">
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((value) => (
              <button
                key={value}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="sr-only" role="status">
          {visible.length}{" "}
          {filter === "All" ? "projects" : `${filter} projects`} shown
        </p>
        {visible.length ? (
          <div className="project-grid">
            {visible.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <FolderGit2 size={28} />
            <h3>No standalone backend project listed yet.</h3>
            <p>
              Backend work is currently represented within the full-stack
              repositories.
            </p>
            <button
              className="button secondary"
              onClick={() => setFilter("Full Stack")}
            >
              Explore full-stack projects
            </button>
          </div>
        )}
      </Reveal>
    </section>
  );
}

