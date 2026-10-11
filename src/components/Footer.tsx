'use client';

import { siteConfig } from '@/config/site';
import { Terminal, ArrowUp, Heart, Server } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-white/5 bg-[#07080c]/80 py-12 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-tight">
              {siteConfig.name}
            </div>
            <div className="text-[11px] font-mono text-neutral-500">
              {siteConfig.domain.replace('https://', '')}
            </div>
          </div>
        </div>

        {/* Coolify Badge */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs font-mono text-neutral-400">
          <Server className="h-3.5 w-3.5 text-emerald-400" />
          <span>Alojado en Coolify & Docker</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
            <span>© 2026</span>
            <span>• Hecho con</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500/30" />
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
