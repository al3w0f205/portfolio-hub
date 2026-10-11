'use client';

import { siteConfig } from '@/config/site';
import BlurText from './react-bits/BlurText';
import DecryptedText from './react-bits/DecryptedText';
import Magnet from './react-bits/Magnet';
import StarBorder from './react-bits/StarBorder';
import {
  Mail,
  Send,
  ArrowDownRight,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DiscordIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 text-center max-w-4xl mx-auto px-4">
      {/* Availability Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-400 mb-6 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{siteConfig.availability.label}</span>
      </div>

      {/* Avatar / Profile Graphic */}
      <div className="mb-6 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
          <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl border border-white/10 bg-[#0d0f17] text-3xl sm:text-4xl font-mono font-bold text-white shadow-2xl">
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              {siteConfig.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Name with BlurText */}
      <div className="flex justify-center mb-3">
        <BlurText
          text={siteConfig.name}
          delay={120}
          animateBy="letters"
          direction="top"
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white justify-center"
        />
      </div>

      {/* Role with DecryptedText */}
      <div className="flex items-center justify-center gap-2 font-mono text-sm sm:text-base md:text-lg text-emerald-400 mb-6">
        <span className="text-neutral-500">&gt;</span>
        <DecryptedText
          text={siteConfig.role}
          speed={35}
          maxIterations={14}
          animateOn="view"
          className="text-emerald-400 font-semibold"
          encryptedClassName="text-neutral-600 font-normal"
        />
      </div>

      {/* Bio */}
      <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
        {siteConfig.shortBio}
      </p>

      {/* Location & Metadata Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400 mb-8">
        <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5">
          <MapPin className="h-3.5 w-3.5 text-neutral-400" />
          <span>{siteConfig.location}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          <span>Coolify Ready</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <a href="#contact">
          <StarBorder
            as="span"
            color="#10b981"
            trailColor="#38bdf8"
            duration={3}
            thickness={1.5}
            radius={14}
            className="px-6 py-3 text-sm font-semibold cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all"
          >
            <Sparkles className="h-4 w-4 text-emerald-400 inline mr-2" />
            <span>Iniciar Conversación</span>
          </StarBorder>
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
        >
          <span>Ver Proyectos</span>
          <ArrowDownRight className="h-4 w-4 text-neutral-400" />
        </a>
      </div>

      {/* Social Links with Magnet */}
      <div className="flex items-center justify-center gap-3">
        {siteConfig.socials.github && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all shadow-md"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </Magnet>
        )}

        {siteConfig.socials.linkedin && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all shadow-md"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Magnet>
        )}

        {siteConfig.socials.twitter && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-sky-500/50 hover:text-sky-400 hover:bg-sky-500/10 transition-all shadow-md"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </Magnet>
        )}

        {siteConfig.socials.discord && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={siteConfig.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-indigo-500/50 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all shadow-md"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
          </Magnet>
        )}

        {siteConfig.socials.telegram && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-sky-400/50 hover:text-sky-300 hover:bg-sky-400/10 transition-all shadow-md"
            >
              <Send className="h-5 w-5" />
            </a>
          </Magnet>
        )}

        {siteConfig.socials.email && (
          <Magnet padding={50} magnetStrength={3}>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0f17]/90 text-neutral-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all shadow-md"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Magnet>
        )}
      </div>
    </section>
  );
}
