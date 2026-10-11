export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metric?: string;
  badge?: string;
}

export interface HubLink {
  id: string;
  title: string;
  description: string;
  url: string;
  iconName: 'calendar' | 'file-text' | 'code' | 'globe' | 'sparkles' | 'message-square' | 'external-link';
  highlight?: boolean;
  tag?: string;
}

export interface SkillCategory {
  category: string;
  items: Array<{ name: string; level?: string; icon?: string }>;
}

export interface SiteConfig {
  name: string;
  handle: string;
  tagline: string;
  role: string;
  shortBio: string;
  about: string;
  location: string;
  domain: string;
  contactEmail: string;
  availability: {
    status: 'available' | 'busy' | 'open_to_offers';
    label: string;
    description: string;
  };
  metrics: Array<{ value: string; label: string }>;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
    email?: string;
  };
  hubLinks: HubLink[];
  skills: SkillCategory[];
  projects: Project[];
}

export const siteConfig: SiteConfig = {
  name: "Miguel Figueroa",
  handle: "@al3w0f",
  tagline: "Construyendo interfaces de alto rendimiento y arquitectura en la nube",
  role: "Full-Stack Engineer & Cloud Architect",
  shortBio: "Desarrollador enfocado en Next.js, TypeScript, arquitecturas escalables y experiencias web fluidas con micro-interacciones de vanguardia.",
  about: "Especializado en diseñar productos digitales limpios, eficientes y desplegados en infraestructura autónoma con Coolify y Docker. Apasionado por el rendimiento, la accesibilidad y el open source.",
  location: "Remoto / Global",
  domain: "https://al3w0f.tech",
  contactEmail: "miguel.alejandro.figueroa@gmail.com",
  
  availability: {
    status: "available",
    label: "Disponible para nuevos proyectos",
    description: "Abierto a consultoría técnica, desarrollo de MVPs y colaboraciones remotas.",
  },

  metrics: [
    { value: "4+", label: "Años de Experiencia" },
    { value: "30+", label: "Proyectos Lanzados" },
    { value: "99.9%", label: "Uptime en Cloud" },
    { value: "< 1s", label: "Tiempo de Carga" },
  ],

  socials: {
    github: "https://github.com/al3w0f205",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    discord: "https://discord.com",
    telegram: "https://t.me",
    email: "miguel.alejandro.figueroa@gmail.com",
  },

  hubLinks: [
    {
      id: "schedule-call",
      title: "Agendar una llamada de 15 min",
      description: "Conversemos sobre tu proyecto o idea técnica sin compromiso",
      url: "https://cal.com",
      iconName: "calendar",
      highlight: true,
      tag: "Recomendado",
    },
    {
      id: "latest-project",
      title: "Último despliegue en Coolify",
      description: "Arquitectura contenerizada con Docker y auto-despliegue continuo",
      url: "https://github.com",
      iconName: "sparkles",
      tag: "En Vivo",
    },
    {
      id: "resume-cv",
      title: "Descargar CV / Hoja de Vida",
      description: "Historial profesional, stack tecnológico y certificaciones",
      url: "#",
      iconName: "file-text",
    },
    {
      id: "notes-blog",
      title: "Artículos & Notas de Ingeniería",
      description: "Guías sobre infraestructura cloud, Docker, Coolify y React",
      url: "#",
      iconName: "globe",
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "Next.js (App Router)" },
        { name: "React 19" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js" },
        { name: "Python / FastAPI" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "Prisma / Drizzle" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Coolify (Self-hosted PaaS)" },
        { name: "Docker & Compose" },
        { name: "Linux / VPS" },
        { name: "Traefik / Nginx" },
        { name: "GitHub Actions CI/CD" },
      ],
    },
  ],

  projects: [
    {
      id: "project-cloud",
      title: "CloudOps Dashboard",
      description: "Panel centralizado para monitorizar servicios auto-hospedados, contenedores Docker y métricas en tiempo real con WebSockets.",
      tags: ["Next.js", "Docker", "Tailwind CSS", "TypeScript", "Coolify"],
      repoUrl: "https://github.com",
      liveUrl: "https://demo.midominio.com",
      featured: true,
      metric: "99.9% SLA",
      badge: "Destacado",
    },
    {
      id: "project-ai",
      title: "OmniAI Assistant Gateway",
      description: "API de inferencia ultrarrápida con streaming de respuestas, rate limiting por token y persistencia en Redis.",
      tags: ["TypeScript", "FastAPI", "Redis", "Docker"],
      repoUrl: "https://github.com",
      featured: true,
      metric: "< 45ms latencia",
    },
    {
      id: "project-saas",
      title: "Zenith Portfolio & Bio Hub",
      description: "Esta misma plantilla de alto impacto con React Bits, Bento Grid interactivo y optimizada para Nixpacks en Coolify.",
      tags: ["React Bits", "Next.js 16", "Tailwind CSS", "Motion"],
      repoUrl: "https://github.com",
      liveUrl: "https://midominio.com",
      featured: true,
      badge: "Open Source",
    },
  ],
};
