import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { 
  Sparkles, Code2, FolderGit2, Briefcase, MessageSquare, 
  Layers, Terminal, Zap, ArrowRight, ExternalLink, Cpu, Atom,
  RotateCw, Hand, Download, MapPin, Mail, CheckCircle2, Move
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const heroCardRef = useRef(null);

  const [downloading, setDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Position offsets for subtle pull
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Dynamic continuous 3D rotation angles driven by drag distance
  const currentRotateY = useMotionValue(0);
  const currentRotateX = useMotionValue(0);

  // Mouse tilt offsets when hovering without dragging
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!heroCardRef.current || isDragging) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMouseOffset({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDragging]);

  // Smooth spring physics for hover tilt
  const springMouseX = useSpring(mouseOffset.x * 15, { stiffness: 180, damping: 20 });
  const springMouseY = useSpring(mouseOffset.y * -15, { stiffness: 180, damping: 20 });

  // Spring physics for drag displacement (pure spring without jumping)
  const springDragX = useSpring(dragX, { stiffness: 180, damping: 20 });
  const springDragY = useSpring(dragY, { stiffness: 180, damping: 20 });
  const springRotateX = useSpring(currentRotateX, { stiffness: 120, damping: 18 });
  const springRotateY = useSpring(currentRotateY, { stiffness: 120, damping: 18 });

  // Drag interaction handlers
  const pointerStartRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    const deltaX = e.clientX - pointerStartRef.current.x;
    const deltaY = e.clientY - pointerStartRef.current.y;

    // Subtle position displacement (slight tactile stretch)
    dragX.set(deltaX * 0.12);
    dragY.set(deltaY * 0.12);

    // Continuous 3D spin based on drag
    currentRotateY.set(deltaX * 0.75);
    currentRotateX.set(-deltaY * 0.55);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);

    // Gently return displacement to EXACT origin (0, 0)
    animate(dragX, 0, { 
      type: 'spring', 
      stiffness: 80, 
      damping: 18, 
      restDelta: 0.001 
    });
    animate(dragY, 0, { 
      type: 'spring', 
      stiffness: 80, 
      damping: 18, 
      restDelta: 0.001 
    });

    // Smoothly settle rotation back to flat 0° so it aligns perfectly right in place
    animate(currentRotateX, 0, { 
      type: 'spring', 
      stiffness: 70, 
      damping: 16, 
      restDelta: 0.001 
    });
    animate(currentRotateY, 0, { 
      type: 'spring', 
      stiffness: 70, 
      damping: 16, 
      restDelta: 0.001 
    });
  };

  // Scroll progression mapping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // 5 Section Morphing States
  const stages = [
    {
      id: "hero",
      title: "Ibrohimbek",
      role: "Senior Frontend Engineer & UI Craftsman",
      quote: "Transforming vision into pixel-perfect reality",
      frontImage: "/ibrohimbek.jpg",
      backImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      badge: "🚀 Available for Top Projects",
      badgeColor: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10",
      glow: "rgba(99, 102, 241, 0.4)",
      icon: Sparkles
    },
    {
      id: "skills",
      title: "Tech Arsenal",
      role: "React 19 • TypeScript • Tailwind • Next.js",
      quote: "Scalable, blazing-fast frontend architecture",
      frontImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      backImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      badge: "⚡ 99/100 Lighthouse Speed",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      glow: "rgba(6, 182, 212, 0.4)",
      icon: Atom
    },
    {
      id: "projects",
      title: "Engineered Vault",
      role: "SaaS • Fintech Platforms • 3D E-Commerce",
      quote: "Built for speed, user delight & high conversion",
      frontImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      backImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      badge: "💎 35+ Production Deployments",
      badgeColor: "border-pink-500/40 text-pink-300 bg-pink-500/10",
      glow: "rgba(236, 72, 153, 0.4)",
      icon: FolderGit2
    },
    {
      id: "experience",
      title: "Proven Mastery",
      role: "Senior Developer • Tech Lead • Mentor",
      quote: "Delivering world-class codebases across teams",
      frontImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      backImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      badge: "💼 3+ Years Track Record",
      badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
      glow: "rgba(168, 85, 247, 0.4)",
      icon: Briefcase
    },
    {
      id: "contact",
      title: "Let's Collaborate",
      role: "Available for Direct Projects & Contracts",
      quote: "Ready to launch your next big idea",
      frontImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      backImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      badge: "✨ Instant Collaboration",
      badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
      glow: "rgba(168, 85, 247, 0.4)",
      icon: MessageSquare
    }
  ];

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.2) setActiveStageIndex(0);
      else if (v < 0.42) setActiveStageIndex(1);
      else if (v < 0.65) setActiveStageIndex(2);
      else if (v < 0.85) setActiveStageIndex(3);
      else setActiveStageIndex(4);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const scale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.04, 0.98, 1.03, 1]);

  const current = stages[activeStageIndex];
  const CurrentIcon = current.icon;

  const handleDownloadCV = (e) => {
    e.stopPropagation();
    setDownloading(true);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      const cvContent = `================================================
IBROHIMBEK - SENIOR FRONTEND ENGINEER & UI CRAFTSMAN
================================================
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Experience: ${PERSONAL_INFO.yearsExperience} Years
Completed Projects: ${PERSONAL_INFO.completedProjects}
Satisfied Clients: ${PERSONAL_INFO.satisfiedClients}

SUMMARY:
${PERSONAL_INFO.bio}

CORE SKILLS:
- React.js / Next.js / TypeScript / JavaScript (ES6+)
- Tailwind CSS / Framer Motion / Three.js / GSAP
- Redux Toolkit / Zustand / TanStack Query
- High-Performance UI, Micro-frontends & Responsive Architecture

LINKS:
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Telegram: ${PERSONAL_INFO.telegram}
================================================`;

      const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Ibrohimbek_Frontend_Developer_Resume.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloading(false);
    }, 600);
  };

  // Combine transforms: when dragging, rotation follows drag delta; when hovering, follows mouse tilt
  const finalRotateX = isDragging ? springRotateX : springMouseY;
  const finalRotateY = isDragging ? springRotateY : springMouseX;

  return (
    <section id="hero" className="min-h-screen relative pt-24 sm:pt-28 pb-12 flex flex-col justify-center items-center px-4">
      {/* Main Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center z-10">
        
        {/* Left Headline */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4"
          >
            Salom, men <br />
            <span className="text-gradient underline decoration-indigo-500/40 decoration-wavy">
              {PERSONAL_INFO.name}
            </span>. <br />
            <span className="text-slate-200">Zamonaviy va 3D</span> <br />
            <span className="text-gradient-cyan">Frontend Veb Loyihalar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
          >
            {PERSONAL_INFO.bio} Yuqori darajadagi UI/UX, interaktiv animatsiyalar va pixel-perfect kod bilan biznesingizni yangi bosqichga olib chiqaman.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
          >
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <span>Loyihalarni ko'rish</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm sm:text-base hover:bg-slate-800/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Aloqaga chiqish</span>
            </a>
          </motion.div>

          {/* Micro Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center lg:text-left max-w-md"
          >
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">{PERSONAL_INFO.yearsExperience}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Yillik Tajriba</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gradient font-mono">{PERSONAL_INFO.completedProjects}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Top Loyihalar</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Mijoz Qoniqishi</div>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Rotatable Pull Card */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          
          <div 
            ref={heroCardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onPointerDown={handlePointerDown}
            style={{ perspective: 1600 }} 
            className="relative w-full max-w-sm min-h-[420px] flex items-center justify-center p-1 cursor-grab active:cursor-grabbing touch-none select-none"
          >
            
            {/* Dynamic Halo Glow */}
            <motion.div
              animate={{
                boxShadow: `0 0 80px 20px ${current.glow}`,
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-4 rounded-[40px] opacity-80 blur-2xl -z-10 pointer-events-none"
            />

            {/* 3D Dynamic Spin & Slight Drag Card */}
            <motion.div
              style={{
                x: springDragX,
                y: springDragY,
                rotateX: finalRotateX,
                rotateY: finalRotateY,
                scale,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full rounded-[32px] p-2.5 bg-gradient-to-tr from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-shadow duration-300 hover:shadow-indigo-500/25 select-none"
            >
              {/* Inner Double-Sided Container */}
              <div 
                style={{ transformStyle: 'preserve-3d' }}
                className="relative h-[380px] sm:h-[400px] rounded-[24px] overflow-hidden bg-slate-950 flex flex-col justify-between"
              >
                
                {/* --- FRONT SIDE (0 deg) --- */}
                <div 
                  style={{ backfaceVisibility: 'hidden' }} 
                  className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none"
                >
                  {/* Visual Background Image */}
                  <motion.img
                    key={`front-${current.frontImage}`}
                    initial={{ opacity: 0.4, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={current.frontImage}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Bar: Badge + 3D Spin Hint */}
                  <div className="relative z-10 p-4 flex items-center justify-between pointer-events-auto">
                    <motion.div
                      key={current.badge}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${current.badgeColor}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <CurrentIcon className="w-3.5 h-3.5" />
                        {current.badge}
                      </span>
                    </motion.div>

                    <div className="px-2.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-mono flex items-center gap-1.5 shadow-lg">
                      <RotateCw className="w-3 h-3 text-indigo-400" />
                      <span>Ushlab aylantiring</span>
                    </div>
                  </div>

                  {/* Bottom Area: Info + Download CV Button */}
                  <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-8 pointer-events-auto">
                    <div className="text-xs font-mono text-indigo-300 font-semibold tracking-wider uppercase mb-1">
                      {current.role}
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                      {current.title}
                    </h3>
                    <p className="text-xs text-slate-300 italic opacity-90 line-clamp-1 mb-4">
                      "{current.quote}"
                    </p>

                    {/* Integrated Download CV Action Button */}
                    <motion.button
                      onClick={handleDownloadCV}
                      disabled={downloading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {downloading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Yuklanmoqda...
                        </span>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Mening CV ni Yuklab Olish</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* --- BACK SIDE (180 deg) --- */}
                <div 
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }} 
                  className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col justify-between p-6"
                >
                  <img
                    src={current.backImage}
                    alt={`${current.title} Back`}
                    className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm pointer-events-none" />

                  <div className="relative z-10 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Orqa Tomon / Master Specs
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                      <RotateCw className="w-3 h-3" /> 360° Aylanadi
                    </span>
                  </div>

                  <div className="relative z-10 my-auto text-left space-y-3">
                    <div className="text-xs font-mono text-pink-400 uppercase font-semibold">
                      // Frontend Texnik Ko'rsatkichlar
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {current.title} Pro
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-2 font-mono">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Ultra-fast 60+ FPS React render tizimi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Elastik 3D Inersiya & Tortilish Fizikasi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Figma Pixel-Perfect UI/UX Architecture</span>
                      </li>
                    </ul>
                  </div>

                  {/* Back Download CV Option */}
                  <div className="relative z-10 pt-3 border-t border-white/10">
                    <motion.button
                      onClick={handleDownloadCV}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 px-4 rounded-xl glass border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>CV Faylini Ko'chirib Olish</span>
                    </motion.button>
                  </div>
                </div>

              </div>

              {/* Glass sheen reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[36px]" />
            </motion.div>

            {/* Bottom Interactive Hint */}
            <div className="absolute -bottom-8 inset-x-0 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2 pointer-events-none">
              <Hand className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
              <span>Bosib torting: 3D aylanadi va qo'yib yuborganda sekinlashib joyiga qaytadi</span>
            </div>

            {/* Ambient Background 3D Glow Orbs */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 opacity-50 blur-2xl animate-pulse pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-50 blur-2xl animate-pulse pointer-events-none delay-700" />
          </div>
        </div>

      </div>
    </section>
  );
};
