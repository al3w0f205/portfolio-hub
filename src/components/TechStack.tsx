'use client';

import { siteConfig } from '@/config/site';
import SpotlightCard from './react-bits/SpotlightCard';
import { Layers, Terminal, Cloud, Database } from 'lucide-react';

const categoryIcons = [Layers, Database, Cloud];

export default function TechStack() {
  return (
    <section id="stack" className="py-16 max-w-5xl mx-auto px-4">
      <div className="mb-10 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
          // Arsenal Tecnológico
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Habilidades & Stack
        </h2>
        <p className="text-sm text-neutral-400 mt-2 max-w-xl">
          Tecnologías modernas seleccionadas por su confiabilidad, velocidad y soporte de infraestructura contenerizada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteConfig.skills.map((category, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length] || Terminal;
          return (
            <SpotlightCard
              key={category.category}
              spotlightColor="#6366f1"
              intensity={0.16}
              spotlightSize={250}
              className="border border-white/10 bg-[#0c0e15] p-6 sm:p-7 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{category.category}</h3>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {category.items.length} tecnologías
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-neutral-300 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
