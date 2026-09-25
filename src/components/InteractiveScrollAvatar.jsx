import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Code2, Sparkles, FolderGit2, Briefcase, MessageSquare, 
  Layers, Terminal, Zap, ShieldCheck, Atom 
} from 'lucide-react';

export const InteractiveScrollAvatar = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring scroll progression for super buttery physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Track active section to morph avatar cards dynamically
  const [sectionIndex, setSectionIndex] = useState(0);

  // Define section visual states for the floating morphing card
  const stages = [
    {
      id: "hero",
      title: "Ibrohimbek",
      subtitle: "Frontend Visionary",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", // Stylish developer portrait
      badge: "⚡ Available for Hire",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      icon: Sparkles
    },
    {
      id: "skills",
      title: "Tech Arsenal",
      subtitle: "React • TS • Next.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", // Coding & Tech matrix
      badge: "🚀 15+ Technologies",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      glowColor: "rgba(6, 182, 212, 0.4)",
      icon: Atom
    },
    {
      id: "projects",
      title: "Project Vault",
      subtitle: "Fullstack & UI SaaS",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80", // 3D Futuristic Creative
      badge: "✨ 35+ Built Apps",
      gradient: "from-pink-500 via-rose-500 to-amber-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      icon: FolderGit2
    },
    {
      id: "experience",
      title: "Proven Track",
      subtitle: "3+ Years Mastery",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80", // Team & engineering success
      badge: "💼 Senior Engineer",
      gradient: "from-emerald-400 via-teal-500 to-blue-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      icon: Briefcase
    },
    {
      id: "contact",
      title: "Let's Connect!",
      subtitle: "Quick Response 24/7",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", // Communication & digital connect
      badge: "💬 Say Hello",
      gradient: "from-purple-500 via-indigo-600 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
      icon: MessageSquare
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.18) setSectionIndex(0);
      else if (latest < 0.42) setSectionIndex(1);
      else if (latest < 0.68) setSectionIndex(2);
      else if (latest < 0.88) setSectionIndex(3);
      else setSectionIndex(4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Dynamic 3D rotation & transform coordinates mapped across page scroll
  const rotateY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 180, 360, 540, 720]);
  const rotateZ = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, -6, 6, -6, 0]);
  const scale = useTransform(smoothProgress, [0, 0.1, 0.5, 0.9, 1], [1, 0.85, 0.92, 0.88, 1]);
  
  // Smart dynamic position: from top-right down towards sticky side or floating orbit
  const y = useTransform(smoothProgress, [0, 1], [0, 60]);

  const currentStage = stages[sectionIndex];
  const CurrentIcon = currentStage.icon;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 pointer-events-auto select-none">
      <motion.div
        style={{
          y,
          scale,
        }}
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow halo that pulses behind the 3D rotating card */}
        <motion.div 
          animate={{
            boxShadow: `0 0 45px ${currentStage.glowColor}`,
          }}
          transition={{ duration: 0.8 }}
          className="absolute -inset-1 rounded-3xl bg-gradient-to-tr opacity-75 blur-md -z-10"
        />

        {/* 3D Perspective Card Container */}
        <div style={{ perspective: 1200 }}>
          <motion.div
            style={{
              rotateY,
              rotateZ,
              transformStyle: 'preserve-3d',
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Morphing Section Image */}
            <div className="w-full h-full rounded-[22px] overflow-hidden relative">
              <img
                src={currentStage.image}
                alt={currentStage.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Image Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating micro section icon indicator */}
              <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-md">
                <CurrentIcon className="w-3 h-3 text-indigo-400" />
              </div>

              {/* Micro Section Title */}
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <div className="text-[10px] font-bold text-white tracking-tight truncate drop-shadow-md">
                  {currentStage.title}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expandable Info Tooltip on Hover / Indicator Tag */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          key={currentStage.title}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-end pointer-events-none"
        >
          <div className="glass px-3.5 py-1.5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl whitespace-nowrap flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <div className="text-[11px] font-bold text-white tracking-wide">{currentStage.title}</div>
              <div className="text-[9px] font-mono text-indigo-300">{currentStage.badge}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
