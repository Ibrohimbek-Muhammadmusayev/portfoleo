export const PERSONAL_INFO = {
  name: "Ibrohimbek",
  role: "Senior Frontend Engineer & UI/UX Craftsman",
  bio: "Men foydalanuvchilarga unutilmas taassurot qoldiruvchi, tezkor, interaktiv va estetik jihatdan mukammal veb-ilovalarni yaratishga ixtisoslashgan Frontend dasturchiman.",
  location: "Toshkent, O'zbekiston",
  email: "ibrohimbekmuhammadmusayev@gmail.com",
  phone: "+998905843504",
  github: "https://github.com/Ibrohimbek-Muhammadmusayev",
  instagram: "https://www.instagram.com/ibrohimbek_officials/",
  linkedin: "https://www.linkedin.com/in/ibrohimbek-muhammadmusayev-7b8b022a9/",
  telegram: "https://t.me/Ibrohimbek_enginer",
  resumeUrl: "#",
  yearsExperience: "3+",
  completedProjects: "35+",
  satisfiedClients: "25+",
  codeReviews: "200+"
};

export const SKILLS = [
  {
    category: "Core Frontend",
    icon: "Code2",
    skills: [
      { name: "React / Next.js", level: 95, icon: "Atom" },
      { name: "TypeScript / JavaScript (ES6+)", level: 90, icon: "FileCode" },
      { name: "Tailwind CSS & SASS", level: 95, icon: "Palette" },
      { name: "HTML5 / Semantic UI / Web Vitals", level: 98, icon: "Globe" },
    ]
  },
  {
    category: "Animatsiya & Interaktivlik",
    icon: "Sparkles",
    skills: [
      { name: "Framer Motion", level: 92, icon: "Zap" },
      { name: "Three.js / React Three Fiber", level: 75, icon: "Box" },
      { name: "GSAP / ScrollTrigger", level: 85, icon: "Flame" },
      { name: "Canvas & SVG Animations", level: 80, icon: "Layers" },
    ]
  },
  {
    category: "State Management & API",
    icon: "Cpu",
    skills: [
      { name: "Redux Toolkit / Zustand", level: 92, icon: "Database" },
      { name: "TanStack Query (React Query)", level: 90, icon: "RefreshCw" },
      { name: "RESTful API / GraphQL", level: 88, icon: "Network" },
      { name: "Axios / Interceptors", level: 95, icon: "Send" },
    ]
  },
  {
    category: "Tools & Testing & DevOps",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub / GitLab", level: 92, icon: "GitBranch" },
      { name: "Vite / Webpack / Turbo", level: 88, icon: "Cog" },
      { name: "Jest / React Testing Library / Vitest", level: 80, icon: "CheckCircle" },
      { name: "Figma to Pixel-Perfect Code", level: 96, icon: "Figma" },
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "NovaCloud - Next-Gen AI SaaS Platform",
    category: "Full Frontend / SaaS",
    description: "AI yordamida kontent yaratish va analitika vositalarini taqdim etuvchi zamonaviy SaaS platformasi. Murakkab dashboardlar, interaktiv grafiklar va tezkor rejim.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: "240+", views: "12k+" }
  },
  {
    id: 2,
    title: "AuraPay - Fintech Banking Experience",
    category: "Fintech / Web App",
    description: "Xalqaro to'lovlar, kartalar monitoringi va real vaqtda valyuta kotirovkalarini kuzatish uchun to'liq responsive fintech interfeysi.",
    tags: ["Next.js", "Tailwind CSS", "TanStack Query", "ApexCharts", "Lucide"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { users: "4.8k+", speed: "99/100" }
  },
  {
    id: 3,
    title: "CyberMarket - 3D E-Commerce Hub",
    category: "E-Commerce",
    description: "Kiber-texnika va gadjetlar savdosi uchun 3D mahsulot ko'rinishiga ega futuristik internet-do'kon. Savat, filterlar va to'liq checkout tizimi.",
    tags: ["React", "Three.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { sales: "$50k+", rating: "4.9/5" }
  },
  {
    id: 4,
    title: "DevPulse - Realtime Collab Code Editor",
    category: "Developer Tool",
    description: "Dasturchilar uchun real vaqt rejimida kod yozish, video chat va syntax highlight imkoniyatiga ega veb platforma.",
    tags: ["React", "WebSockets", "Monaco Editor", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { activeUsers: "1.2k" }
  },
  {
    id: 5,
    title: "Lumina UI - Modern React Component Library",
    category: "Open Source / Design System",
    description: "Accessible, animatsiyali va qulay Tailwind asosidagi ochiq kodli React komponentlar to'plami.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Storybook", "NPM"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { downloads: "15k+" }
  },
  {
    id: 6,
    title: "Voyage - Smart Travel Planning Hub",
    category: "Travel & Lifestyle",
    description: "Interaktiv xaritalar, ob-havo vidjetlari va marshrut tuzuvchi sayohat portali.",
    tags: ["React", "Mapbox GL", "OpenWeather API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { reviews: "300+" }
  }
];

export const EXPERIENCES = [
  {
    period: "2023 - Hozir",
    role: "Senior Frontend Developer",
    company: "Apex Tech Labs",
    description: "Katta masshtabdagi SaaS ilovalari arxitekturasini yaratish, mikrokodlar va komponentlar kutubxonasini ishlab chiqish, jamoani boshqarish va Web Performance (LCP, CLS, FID) ko'rsatkichlarini 40% ga yaxshilash.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Micro-frontends"]
  },
  {
    period: "2022 - 2023",
    role: "Frontend Developer",
    company: "Digital Solutions Agency",
    description: "20 dan ortiq tijorat va startap loyihalarining frontend qismini noldan yaratish. Murakkab animatsiyalar va API integratsiyalarini amalga oshirish.",
    tech: ["React", "Redux Toolkit", "Framer Motion", "REST API", "Tailwind CSS"]
  },
  {
    period: "2021 - 2022",
    role: "Junior / Mid Frontend Developer",
    company: "Creative Web Studio",
    description: "Figma dizaynlarini 100% pixel-perfect HTML/React formatiga o'tkazish, responsive va mobile-first dizayn tamoyillarini joriy etish.",
    tech: ["JavaScript", "React", "SASS", "HTML5", "Git"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Alisher Karimov",
    role: "CTO, Fintech Solutions",
    content: "Ibrohimbek bizning platformamiz uchun aqlbovar qilmas darajada chiroyli va tezkor UI yaratib berdi. Animatsiyalar va foydalanish qulayligi eng yuqori darajada!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, NovaCloud Inc.",
    content: "One of the most detail-oriented frontend engineers I've worked with. Pixel-perfect, fast delivery, and incredible passion for smooth animations.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Bekzod Umarov",
    role: "Founder, CyberMarket",
    content: "Bizning 3D e-commerce loyihamiz uning mahorati bilan o'zga bir bosqichga ko'tarildi. Mijozlarimiz sayt dizayni va tezligidan lol qolmoqda.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];
