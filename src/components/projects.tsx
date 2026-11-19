"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Users } from "lucide-react";
import { profile, projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { Github } from "./brand-icons";
import { Reveal } from "./ui";
const filters: ("All" | ProjectCategory)[] = ["All", "Full Stack", "Frontend", "Backend"];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`project-${project.name}`} className="project-card">
      {project.image && project.imageKind === "screenshot" && (
        <div className="project-image">
          <Image src={project.image} alt={project.imageAlt ?? `${project.title ?? project.name} screenshot`}
            fill sizes="(max-width: 650px) 90vw, (max-width: 1050px) 45vw, 350px" />
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className={"project-ownership " + (project.ownership === "Team Project" ? "team-project" : "personal-project")}>
            {project.ownership === "Team Project" && <Users size={12} aria-hidden="true" />}
            {project.ownership}
          </span>
        </div>
        <div className="project-heading"><h3 id={`project-${project.name}`}>{project.title ?? project.name}</h3></div>
        <p>{project.description}</p>
        <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noopener noreferrer"
            aria-label={`Source code for ${project.name} (opens in new tab)`}>
            <Github size={14} aria-hidden="true" />Source Code<ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {project.liveUrl && <a className="live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`${project.name} live demo (opens in new tab)`}>Live Demo<ArrowUpRight size={14} aria-hidden="true" /></a>}
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
            <h2 id="projects-title">
              Selected projects
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

