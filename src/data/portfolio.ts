export const profile = {
  name: "Umutoniwase Sylvie",
  title: "Full-Stack Web Developer",
  email: "umutoniwasesylvie38@gmail.com",
  phone: "0794 689 345",
  phoneHref: "tel:0794689345",
  profileImage: "/images/sylvie-profile.png",
  heroImage: "/images/sylvie-portrait-cutout.png",
  // Selected portrait supplied by Sylvie. Shared by Hero and About.
  showProfileImage: true,
  github: "https://github.com/U-Sylvie93/",
  linkedin: "https://www.linkedin.com/in/umutoniwase-sylvie-060646393",
  cvUrl: "/cv/Umutoniwase_Sylvie_CV.pdf" as string | null,
};
export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];
export const skills = [
  {
    name: "Frontend",
    description: "Responsive interfaces and modern web experiences.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    description: "Application logic, services, and API integration.",
    items: ["PHP", "C#", ".NET", "REST APIs"],
  },
  {
    name: "Database",
    description: "Structured data and a clear database foundation.",
    items: ["SQL", "MySQL", "Database Design / DBMS"],
  },
  {
    name: "Tools",
    description: "Version control and an organized workflow.",
    items: ["Git", "GitHub", "VS Code"],
  },
];
export const capabilities = [
  "Responsive Web Design",
  "Full-Stack Development",
  "Problem Solving",
  "Version Control",
];
export type ProjectCategory = "Full Stack" | "Frontend" | "Backend";
export type Project = {
  name: string;
  title?: string;
  description: string;
  technologies: string[];
  repository: string;
  category?: ProjectCategory;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  imageKind?: "screenshot" | "illustration";
  featured?: boolean;
  ownership: "Personal Project" | "Team Project";
  note?: string;
  sources?: string[];
};
const repo = (name: string) => `https://github.com/U-Sylvie93/${name}`;
// Verified through GitHub API, README/manifests and selected source files on 2026-10-05.
// Categories describe repository implementation, not professional employment.
export const projects: Project[] = [
  {
    name: "E-learning-mkscholars",
    ownership: "Team Project",
    title: "MK Scholars · Learning Platform",
    featured: true,
    description:
      "A Laravel learning platform with course discovery, enrollment, lesson progress, and a Filament admin interface. Blade and Livewire connect the application UI to the backend.",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "Livewire",
      "Tailwind CSS",
      "Filament",
    ],
    category: "Full Stack",
    repository: repo("E-learning-mkscholars"),
    note: "Collaborative development work. Individual contribution details are not specified.",
    sources: [
      repo("E-learning-mkscholars") + "/blob/main/README.md",
      repo("E-learning-mkscholars") + "/blob/main/composer.json",
      repo("E-learning-mkscholars") + "/blob/main/routes/web.php",
    ],
  },
  {
    name: "mk-innovation",
    ownership: "Personal Project",
    title: "MK Innovation · Business Website",
    featured: true,
    description:
      "A Next.js business website presenting services, company information, portfolio work, and contact sections through reusable React components.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    repository: repo("mk-innovation"),
    // Historical demo could not be reverified in Phase 3. Restore liveUrl only after checking uptime.
    sources: [
      repo("mk-innovation") + "/blob/main/package.json",
      repo("mk-innovation") + "/blob/main/src/app/page.tsx",
    ],
  },
  {
    name: "MKInnovationLtd",
    ownership: "Personal Project",
    title: "MK Innovation Ltd · Laravel Website",
    description:
      "A Laravel and Blade business website with controller-driven service and course sections, plus server-side validation for a newsletter form.",
    technologies: ["Laravel", "PHP", "Blade", "Vite"],
    category: "Full Stack",
    repository: repo("MKInnovationLtd"),
    sources: [
      repo("MKInnovationLtd") + "/blob/main/composer.json",
      repo("MKInnovationLtd") +
        "/blob/main/app/Http/Controllers/HomeController.php",
    ],
  },
  {
    name: "E-Learning",
    ownership: "Personal Project",
    title: "E-Learning · Course Website",
    description:
      "A Bootstrap e-learning frontend with course, instructor, contact, and sign-in pages. This project adapts an existing e-learning template.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "SCSS"],
    category: "Frontend",
    repository: repo("E-Learning"),
    note: "Frontend pages are verified; working authentication has not been established.",
    sources: [repo("E-Learning") + "/blob/main/readme.md"],
  },
  {
    name: "Sylvie-website",
    ownership: "Personal Project",
    title: "Sylvie · Earlier Portfolio",
    description:
      "An earlier personal portfolio using HTML, CSS, JavaScript, and Bootstrap, adapted from TemplateMo’s Elegance design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    repository: repo("Sylvie-website"),
    sources: [repo("Sylvie-website") + "/blob/main/index.html"],
  },
];
export const journey = [
  {
    title: "Frontend development",
    description:
      "Building responsive pages and exploring component-based interfaces with React and Next.js.",
  },
  {
    title: "Backend & database systems",
    description:
      "Developing application logic and strengthening my understanding of APIs, PHP, C#, .NET, SQL, and data design.",
  },
  {
    title: "Software development practice",
    description:
      "Using Git and GitHub, organizing maintainable code, and learning through practical projects.",
  },
];
export type Education = {
  institution: string;
  qualification: string;
  period?: string;
  description?: string;
};
export const education: Education[] = [{ institution: "University of Rwanda", qualification: "Information Technology (IT)", period: "2025 — 2029 (Expected)" }];
export type Experience = {
  title: string;
  organization: string;
  period?: string;
  description: string;
};
export const experience: Experience[] = []; // Add verified roles only; currently a learning journey.

