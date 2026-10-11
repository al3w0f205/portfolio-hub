'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import SpotlightCard from './react-bits/SpotlightCard';
import {
  Calendar,
  FileText,
  Code,
  Globe,
  Sparkles,
  MessageSquare,
  ExternalLink,
  Copy,
  Check,
  Server,
  Activity,
  Cpu,
} from 'lucide-react';

const iconMap = {
  calendar: Calendar,
  'file-text': FileText,
  code: Code,
  globe: Globe,
  sparkles: Sparkles,
  'message-square': MessageSquare,
  'external-link': ExternalLink,
};

export default function BentoGridHub() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="hub" className="py-12 max-w-5xl mx-auto px-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            // Access Hub & Link in Bio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Enlaces Clave & Estado
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
          <span>Servidor Activo</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hub Link 1 (Primary / Calendar) */}
        {siteConfig.hubLinks.map((link, idx) => {
          const Icon = iconMap[link.iconName] || ExternalLink;
          const isLarge = idx === 0;

          return (
            <div key={link.id} className={isLarge ? 'md:col-span-2' : 'md:col-span-1'}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <SpotlightCard
                  spotlightColor={link.highlight ? '#10b981' : '#38bdf8'}
                  intensity={0.2}
                  spotlightSize={280}
                  className="h-full border border-white/10 bg-[#0c0e15] hover:border-white/20 transition-all cursor-pointer p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-200 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      {link.tag && (
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                          {link.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                      <span>{link.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                      {link.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <span>Abrir enlace</span>
                    <span className="text-emerald-400 font-medium group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </SpotlightCard>
              </a>
            </div>
          );
        })}

        {/* Server Status & Cloud Node Card */}
        <div className="md:col-span-1">
          <SpotlightCard
            spotlightColor="#6366f1"
            intensity={0.18}
            spotlightSize={260}
            className="h-full border border-white/10 bg-[#0c0e15] p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Server className="h-5 w-5" />
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">Infraestructura</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Desplegado en servidor dedicado con Coolify y aislamiento Docker.
              </p>
            </div>

            <div className="mt-6 space-y-2 font-mono text-xs text-neutral-400">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-500">PaaS Engine</span>
                <span className="text-white font-medium">Coolify Nixpacks</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-500">Uptime</span>
                <span className="text-emerald-400 font-medium">99.99%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">SSL / TLS</span>
                <span className="text-cyan-400 font-medium">Automático Let&apos;s Encrypt</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Quick Email Copy Card */}
        <div className="md:col-span-2">
          <SpotlightCard
            spotlightColor="#10b981"
            intensity={0.2}
            spotlightSize={320}
            className="h-full border border-white/10 bg-[#0c0e15] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Contacto Directo
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                ¿Prefieres conversar por correo?
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-md">
                Respondo habitualmente en menos de 24 horas laborables.
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-mono text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-white font-semibold">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>{siteConfig.contactEmail}</span>
                </>
              )}
            </button>
          </SpotlightCard>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteConfig.metrics.map(metric => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/5 bg-[#0a0c13]/60 p-5 text-center backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
