import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* 3D-like dynamic background particles & glow */}
      <AnimatedBackground />

      {/* Header / Nav */}
      <Navbar />

      {/* Main Content with Scroll-driven entry effects */}
      <main className="relative z-10 space-y-12">
        {/* Main Hero with Draggable Rubber-Band 3D Card & Download CV */}
        <Hero />

        <ScrollReveal direction="up" delay={0.1}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Experience />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
