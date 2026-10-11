'use client';

import { siteConfig } from '@/config/site';
import StarBorder from './react-bits/StarBorder';
import { Terminal, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4 sm:px-6">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#0d0f17]/80 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/40">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            {siteConfig.handle}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <a href="#hub" className="hover:text-emerald-400 transition-colors">
            Hub
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">
            Proyectos
          </a>
          <a href="#stack" className="hover:text-emerald-400 transition-colors">
            Stack
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact">
            <StarBorder
              as="span"
              color="#10b981"
              trailColor="#06b6d4"
              duration={3.5}
              thickness={1}
              radius={9999}
              className="px-4 py-1.5 text-xs font-medium cursor-pointer shadow-sm hover:scale-105 transition-transform"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400 inline mr-1" />
              <span>Hablemos</span>
            </StarBorder>
          </a>
        </div>
      </nav>
    </header>
  );
}
