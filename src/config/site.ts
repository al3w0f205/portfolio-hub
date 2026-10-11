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
  avatarUrl: string;
  tagline: string;
  role: string;
  shortBio: string;
  about: string;
  location: string;
  domain: string;
  contactEmail: string;
  discordId: string;
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
  name: "Alejandro Figueroa",
  handle: "@al3w0f",
  avatarUrl: "https://avatars.githubusercontent.com/u/75915300?v=4",
  tagline: "Software Engineering Student 🇪🇨 | Python Backend, AI & Cloud Orchestration",
  role: "Software Engineering Student & Cloud Orchestrator",
  shortBio: "Estudiante de Ingeniería de Software en Ecuador 🇪🇨. Backend con Python, integraciones de inteligencia artificial y orquestación de servidores propios con Proxmox, Coolify y Docker.",
  about: "Enfocado en crear aplicaciones web modernas de alto rendimiento con Next.js y Django, explorar modelos de Machine Learning y gestionar infraestructura auto-hospedada segura mediante Cloudflare Tunnels.",
  location: "Ecuador 🇪🇨 / Remoto",
  domain: "https://al3w0f.tech",
  contactEmail: "miguel.alejandro.figueroa@gmail.com",
  discordId: "457026491197292546",

  availability: {
    status: "available",
    label: "Disponible para proyectos & colaboraciones",
    description: "Abierto a oportunidades de desarrollo backend, integraciones de IA, frontend moderno o proyectos en la nube.",
  },

  metrics: [
    { value: "Proxmox", label: "Homelab & Virtualización" },
    { value: "Python + AI", label: "Backend & Modelos" },
    { value: "Next.js", label: "Frontend & Full-Stack" },
    { value: "Cloudflare", label: "Zero Trust Tunnels" },
  ],

  socials: {
    github: "https://github.com/al3w0f205",
    linkedin: "https://www.linkedin.com/in/alejandro-figueroa-6248b2340/",
    discord: "https://discord.com/users/457026491197292546",
    email: "miguel.alejandro.figueroa@gmail.com",
  },

  hubLinks: [
    {
      id: "linkedin-profile",
      title: "Conectar en LinkedIn",
      description: "Perfil profesional, trayectoria académica y red de contactos",
      url: "https://www.linkedin.com/in/alejandro-figueroa-6248b2340/",
      iconName: "globe",
      highlight: true,
      tag: "Perfil Oficial",
    },
    {
      id: "github-profile",
      title: "Explorar repositorios en GitHub",
      description: "Código fuente abierto, experimentos de IA y utilidades de sistemas",
      url: "https://github.com/al3w0f205",
      iconName: "code",
      tag: "@al3w0f205",
    },
    {
      id: "inmobiliaria-mvp",
      title: "Proyecto Inmobiliaria Marketplace MVP",
      description: "Plataforma inmobiliaria con búsqueda geoespacial y Django REST",
      url: "https://github.com/al3w0f205/ale-inmobiliaria-mvp",
      iconName: "sparkles",
      tag: "Full-Stack",
    },
    {
      id: "discord-direct",
      title: "Discord Directo (ID: 457026491197292546)",
      description: "Envíame un mensaje directo o mención en Discord para charlar rápido",
      url: "https://discord.com/users/457026491197292546",
      iconName: "message-square",
      tag: "En Línea",
    },
  ],

  skills: [
    {
      category: "Backend & Inteligencia Artificial",
      items: [
        { name: "Python" },
        { name: "Django REST Framework" },
        { name: "FastAPI" },
        { name: "Modelos de IA & Inferencia" },
        { name: "PostgreSQL" },
        { name: "Redis" },
      ],
    },
    {
      category: "Frontend & Full-Stack",
      items: [
        { name: "Next.js (App Router)" },
        { name: "React 19" },
        { name: "TypeScript" },
        { name: "Tailwind CSS v4" },
        { name: "React Bits Animations" },
        { name: "Motion & UI Design" },
      ],
    },
    {
      category: "Infraestructura & Homelab",
      items: [
        { name: "Proxmox VE" },
        { name: "Coolify (Self-hosted PaaS)" },
        { name: "Cloudflare Zero Trust & Tunnels" },
        { name: "Docker & Compose" },
        { name: "Linux Administration" },
        { name: "C / C++ (Sistemas)" },
      ],
    },
  ],

  projects: [
    {
      id: "ale-inmobiliaria",
      title: "Inmobiliaria Marketplace MVP",
      description: "Plataforma integral de marketplace inmobiliario con filtros avanzados geoespaciales, mensajería directa y pasarela de pago desarrollada con Next.js y Django REST.",
      tags: ["Next.js", "Django REST", "PostgreSQL", "TypeScript", "Tailwind"],
      repoUrl: "https://github.com/al3w0f205/ale-inmobiliaria-mvp",
      featured: true,
      badge: "Full-Stack MVP",
      metric: "Next.js + Django",
    },
    {
      id: "ai-enhancer",
      title: "AI Multimedia Enhancer",
      description: "Suite de optimización y mejora multimedia aprovechando modelos de inteligencia artificial para procesamiento avanzado en Python.",
      tags: ["Python", "PyTorch", "AI Models", "FastAPI"],
      repoUrl: "https://github.com/al3w0f205/AI-Multimedia-Enhancer",
      featured: true,
      badge: "AI / ML",
      metric: "★ Destacado",
    },
    {
      id: "homelab-cloud",
      title: "Homelab & Cloudflare Tunnels",
      description: "Arquitectura autónoma de servidores orquestados en Proxmox, con Coolify para despliegues continuos y Cloudflare Zero Trust para tráfico seguro sin exponer puertos al exterior.",
      tags: ["Proxmox VE", "Coolify", "Docker", "Cloudflare Tunnels", "Linux"],
      liveUrl: "https://al3w0f.tech",
      featured: true,
      badge: "Infraestructura",
      metric: "24/7 Uptime",
    },
    {
      id: "any-ps5",
      title: "AnyPS5 Binary Utility",
      description: "Herramienta experimental enfocada en análisis y portabilidad de ejecutables entre plataformas Linux y Windows con bajo nivel.",
      tags: ["C", "C++", "Systems Programming", "Linux"],
      repoUrl: "https://github.com/al3w0f205/AnyPS5",
      featured: false,
      badge: "Low-Level",
    },
    {
      id: "portfolio-zenith",
      title: "al3w0f.tech Portfolio & Hub",
      description: "Sitio web oficial interactivo creado con componentes animados de React Bits, Bento Grid dinámico y auto-despliegue mediante Nixpacks en Coolify.",
      tags: ["Next.js 16", "React Bits", "Tailwind CSS", "OGL Particles"],
      repoUrl: "https://github.com/al3w0f205/portfolio-hub",
      liveUrl: "https://al3w0f.tech",
      featured: true,
      badge: "En Vivo",
    },
  ],
};
