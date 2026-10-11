'use client';

import { useEffect, useState } from 'react';
import Particles from './react-bits/Particles';

export default function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-[#07080c]" />;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Subtle modern gradients in the background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_70%,rgba(99,102,241,0.08),transparent_70%)]" />

      {/* Interactive WebGL Particles */}
      <div className="absolute inset-0">
        <Particles
          particleCount={90}
          particleSpread={12}
          speed={0.12}
          particleColors={['#10b981', '#34d399', '#38bdf8', '#818cf8']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.6}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.9}
          cameraDistance={22}
        />
      </div>

      {/* Cyberpunk subtle geometric grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_60%,transparent_100%)]" />
    </div>
  );
}
