import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Download, FileText, CheckCircle2, Sparkles, MapPin, Mail, 
  Briefcase, Award, Code2, ArrowUpRight, Move, Globe, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DraggableProfileCard = () => {
  const constraintsRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  // Motion values for smooth drag and 3D rotation physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate smoothly in 3D depending on where it is dragged
  const rotateX = useTransform(y, [-120, 120], [18, -18]);
  const rotateY = useTransform(x, [-120, 120], [-18, 18]);
  const rotateZ = useTransform(x, [-120, 120], [-8, 8]);

  // Spring physics for buttery responsiveness
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 25 });
  const springRotateZ = useSpring(rotateZ, { stiffness: 300, damping: 25 });

  const handleDownloadCV = (e) => {
    e.stopPropagation();
    setDownloading(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      // Create and download a structured CV summary text file as sample resume
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
- Redux Toolkit / Zustand / TanStack Query (React Query)
- WebSockets / REST APIs / Responsive & Performance Optimization

CONTACT & SOCIAL:
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

  return (
    <section className="py-16 px-4 relative z-20 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <Move className="w-3.5 h-3.5 text-pink-400" />
          <span>Interaktiv Suriluvchi 3D Karta</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Mening Ma'lumotlarim & <span className="text-gradient">Rasmiy CV</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Ushbu kartani ushlab ixtiyoriy tomonga surishingiz mumkin — u erkin buriladi va tebranadi!
        </p>
      </div>

      {/* Drag Bounds Area */}
      <div 
        ref={constraintsRef} 
        className="w-full h-[540px] sm:h-[500px] rounded-3xl border border-dashed border-indigo-500/20 bg-slate-950/40 relative flex items-center justify-center overflow-hidden p-4"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent pointer-events-none" />

        {/* Drag Hint Top-Right */}
        <div className="absolute top-4 right-4 text-xs font-mono text-slate-500 flex items-center gap-1.5 pointer-events-none">
          <Move className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>Surish uchun cheklangan erkin maydon</span>
        </div>

        {/* Draggable Card with 3D Rotation Physics */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.15}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
          style={{
            x,
            y,
            rotateX: springRotateX,
            rotateY: springRotateY,
            rotateZ: springRotateZ,
            transformStyle: 'preserve-3d',
          }}
          whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-md glass-card rounded-[32px] p-6 sm:p-7 border border-white/15 shadow-2xl backdrop-blur-2xl relative cursor-grab select-none z-30 group"
        >
          {/* Card Header Profile & Badge */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Ibrohimbek Profile"
                  className="w-full h-full object-cover rounded-[14px]"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                  <span>{PERSONAL_INFO.name}</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs font-mono text-indigo-300">
                  {PERSONAL_INFO.role}
                </p>
              </div>
            </div>

            <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Open to Work
            </div>
          </div>

          {/* Quick Specs & Bio */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            {PERSONAL_INFO.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/60 border border-white/5 mb-5 text-center">
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">{PERSONAL_INFO.yearsExperience}</div>
              <div className="text-[10px] text-slate-400">Tajriba</div>
            </div>
            <div className="border-x border-white/10">
              <div className="text-base sm:text-lg font-bold text-gradient font-mono">{PERSONAL_INFO.completedProjects}</div>
              <div className="text-[10px] text-slate-400">Loyihalar</div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">100%</div>
              <div className="text-[10px] text-slate-400">Sifat</div>
            </div>
          </div>

          {/* Contact Details Tags */}
          <div className="space-y-2 mb-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-mono text-slate-400">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Download CV Action Button */}
          <motion.button
            onClick={handleDownloadCV}
            disabled={downloading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
          >
            {downloading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Yuklanmoqda...
              </span>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Mening CV (Resume) ni Yuklab Olish</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
