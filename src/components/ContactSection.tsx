'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import SpotlightCard from './react-bits/SpotlightCard';
import StarBorder from './react-bits/StarBorder';
import { Mail, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFeedback(data.message || 'Mensaje enviado correctamente.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setFeedback(data.error || 'Error al enviar el mensaje.');
      }
    } catch {
      setStatus('error');
      setFeedback('Error de red. Intenta nuevamente o escribe directamente por email.');
    }
  };

  return (
    <section id="contact" className="py-16 max-w-5xl mx-auto px-4">
      <div className="mb-10 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          // Conectemos
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Hablemos sobre tu próximo proyecto
        </h2>
        <p className="text-sm text-neutral-400 mt-2 max-w-xl">
          ¿Tienes una idea, necesitas consultoría o quieres colaborar? Déjame un mensaje y te responderé lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info Column */}
        <div className="lg:col-span-2 space-y-4">
          <SpotlightCard
            spotlightColor="#10b981"
            intensity={0.18}
            spotlightSize={260}
            className="border border-white/10 bg-[#0c0e15] p-6 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Email Directo</h3>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-neutral-500" />
                <span>Tiempo de respuesta: &lt; 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Canal cifrado y privado</span>
              </div>
            </div>
          </SpotlightCard>

          <div className="rounded-3xl border border-white/5 bg-[#0a0c13]/60 p-6 text-xs text-neutral-400 font-mono space-y-2 backdrop-blur-sm">
            <div className="text-white font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Estado Actual</span>
            </div>
            <p className="text-neutral-400">
              {siteConfig.availability.description}
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <SpotlightCard
            spotlightColor="#38bdf8"
            intensity={0.15}
            spotlightSize={320}
            className="border border-white/10 bg-[#0c0e15] p-6 sm:p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Nombre o Compañía
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto, objetivos o consulta..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans resize-none"
                />
              </div>

              {feedback && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    status === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  <span>{feedback}</span>
                </div>
              )}

              <div className="pt-2">
                <StarBorder
                  as="button"
                  type="submit"
                  disabled={status === 'loading'}
                  color="#10b981"
                  trailColor="#06b6d4"
                  duration={3}
                  thickness={1.5}
                  radius={12}
                  className="w-full py-3.5 text-sm font-semibold cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 text-emerald-400" />
                  <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </StarBorder>
              </div>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
