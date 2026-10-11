import BackgroundParticles from '@/components/BackgroundParticles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGridHub from '@/components/BentoGridHub';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Interactive WebGL Particles Canvas Background */}
      <BackgroundParticles />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Bento Grid & Link-in-Bio Hub */}
      <BentoGridHub />

      {/* Featured Projects Showcase */}
      <ProjectsShowcase />

      {/* Tech Stack Matrix */}
      <TechStack />

      {/* Interactive Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
