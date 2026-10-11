'use client';

import { siteConfig } from '@/config/site';
import SpotlightCard from './react-bits/SpotlightCard';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto px-4">
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
          // Showcase & Open Source
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Proyectos Destacados
        </h2>
        <p className="text-sm text-neutral-400 mt-2 max-w-xl">
          Sistemas en producción, herramientas para desarrolladores y proyectos de código abierto optimizados para la nube.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.projects.map((project, idx) => (
          <SpotlightCard
            key={project.id}
            spotlightColor={idx % 2 === 0 ? '#10b981' : '#38bdf8'}
            intensity={0.22}
            spotlightSize={300}
            className="flex flex-col justify-between border border-white/10 bg-[#0c0e15] p-6 sm:p-7 hover:border-white/20 transition-all rounded-3xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-200">
                  <FolderGit2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-mono text-cyan-400">
                      {project.badge}
                    </span>
                  )}
                  {project.metric && (
                    <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-mono text-neutral-400">
                      {project.metric}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.04] border border-white/5 px-2 py-0.5 text-[11px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Código</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                <div className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500/70" />
                  <span>Featured</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
