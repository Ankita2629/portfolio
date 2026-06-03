import { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Sparkles,
  TrendingUp,
  HeartPulse,
  PenTool,
  Compass,
  Video,
  Brain,
  Mic,
  LayoutGrid,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Imports for project images
import ArogyanveshaImage from "../assets/projects/arogyanvesha.png";
import AirCollabImage from "../assets/projects/aircollab.png";
import IDEAxAIImage from "../assets/projects/ideaxai.png";
import ChatMateImage from "../assets/projects/chatmate.png";
import ManoMitraImage from "../assets/projects/manomitra.png";
import IRAImage from "../assets/projects/ira.png";
import FlowSpaceImage from "../assets/projects/flowspace.png";

export const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 7,
      title: "FlowSpace - Productivity Management System",
      icon: LayoutGrid,
      image: FlowSpaceImage,
      date: "2026",
      category: "fullstack",
      description:
        "Comprehensive productivity system organizing tasks, habits, notes, and reminders with streak tracking and heatmaps.",
      longDescription:
        "Built a progressive web application (PWA) supporting drag-and-drop Weekly Planning, Streak tracking, and GitHub-style heatmaps. Notes with markdown, Recurring reminders, and WebSocket data sync are fully implemented. Features an integrated AI assistant chatbot (Anthropic/Gemini) for productivity coaching.",
      technologies: [
        "React 19",
        "Node.js",
        "Express 5",
        "MongoDB",
        "Framer Motion",
        "PWA Support",
        "WebSockets",
        "Zod",
        "TailwindCSS",
      ],
      features: [
        "Task Management: Create, organize, and track tasks with priorities and categories",
        "Habit Tracking: Streak tracking and GitHub-style visual heatmap",
        "Note Taking: Markdown parsing, tag structures, and pin configurations",
        "AI Assistant: Integrated Gemini/Anthropic AI chatbot for productivity coaching",
        "Offline Mode: fully functional PWA support with service workers",
        "Real-time Updates: WebSocket synchronization across devices",
      ],
      impact: {
        sync: "Real-time",
        planner: "Drag-n-drop",
        pwa: "Installable",
      },
      github: "https://github.com/ankita-singhhh/FlowSpace",
      live: "https://flowspaace.netlify.app/",
      color: "from-blue-500/20 to-indigo-500/20",
      badge: "Productivity SaaS",
      status: "Live",
    },
    {
      id: 1,
      title: "Arogyanvesha - AI Ayurvedic Healthcare Platform",
      icon: HeartPulse,
      image: ArogyanveshaImage,
      date: "2025",
      category: "ai",
      description:
        "Full-stack AI Ayurvedic platform covering 100+ diseases, integrating NLP (RAG), skin disease detection, and yoga posture estimation.",
      longDescription:
        "Built a full-stack AI Ayurvedic health platform covering 100+ diseases across 10 body systems. Features RAG-based search on classical texts via Gemini API, CNN-based skin disease detection with 85% accuracy, and real-time yoga pose tracking using MediaPipe (90% accuracy). Deployed using Supabase PostgreSQL backend and modular FastAPI microservices.",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "TensorFlow",
        "MediaPipe",
        "Gemini API",
        "pgvector",
      ],
      features: [
        "RAG-powered Wisdom Vault using pgvector embeddings to search classical Ayurvedic texts with sub-second API response time",
        "CNN-based skin disease detection with 85% accuracy using TensorFlow",
        "Yoga pose estimation and correctness tracking (90% accuracy) using MediaPipe",
        "Prakriti (Dosha)-based engine generating custom 5-part treatment plans (herbs, diet, yoga, Panchakarma, lifestyle)",
        "Secure microservice architecture using JWT authentication with Supabase",
      ],
      impact: {
        accuracy: "90%",
        diseases: "100+",
        response: "<2s",
      },
      github: "https://github.com/ankita-singhhh/arogyanvesha-ayurveda-ai",
      live: "https://github.com/ankita-singhhh/arogyanvesha-ayurveda-ai",
      color: "from-cyan-500/20 to-teal-500/20",
      badge: "AI Healthcare",
      status: "Live",
    },
    {
      id: 2,
      title: "AirCollab - AI Air Writing & Collaborative Canvas",
      icon: PenTool,
      image: AirCollabImage,
      date: "2025",
      category: "ai",
      description:
        "Production-ready SaaS enabling users to write letters A-Z via hand gestures in the air and draw with real-time sync.",
      longDescription:
        "Developed a full-stack SaaS platform enabling users to write letters A-Z via webcam hand gestures. Includes real-time multi-user drawing sync, presence indicators, and drawing rooms powered by Socket.IO. Hand recognition is powered by a Python ML service with an active fallback chain: Python ML -> TensorFlow.js -> Rule-based.",
      technologies: [
        "Next.js 15",
        "FastAPI",
        "MediaPipe",
        "Socket.IO",
        "MongoDB",
        "TensorFlow.js",
        "Python",
      ],
      features: [
        "Real-time air writing webcam-based character recognition using MediaPipe & geometric analysis",
        "Robust fallback chain for handwriting classification (Python microservice -> TensorFlow.js -> Rule-based)",
        "Real-time multi-user synchronization (canvas drawing & cursors) via Socket.IO",
        "JWT-secured FastAPI backend with async MongoDB (Motor) integration",
      ],
      impact: {
        latency: "<100ms",
        accuracy: "95%",
        users: "Multi-user",
      },
      github: "https://github.com/ankita-singhhh/air-collab",
      live: "https://air-collab.vercel.app/",
      color: "from-cyan-500/20 to-blue-500/20",
      badge: "Computer Vision",
      status: "Live",
    },
    {
      id: 3,
      title: "IDEAxAI - AI Startup Blueprint Generator",
      icon: Compass,
      image: IDEAxAIImage,
      date: "2025",
      category: "ai",
      description:
        "AI-powered SaaS tool transforming a raw startup idea into an 11-section business blueprint and roadmap.",
      longDescription:
        "Built a comprehensive AI-powered SaaS application that takes a single user prompt and generates an 11-section startup blueprint. Utilizes Node.js backend integration with Google Gemini API to analyze MVP features, tech stack, revenue models, and competitor pricing.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Vite",
        "Gemini API",
        "Tailwind CSS",
      ],
      features: [
        "Gemini-powered real-time market research and UVP generation from a single prompt",
        "Automated 11-section business blueprint output (tech stack, competitor analysis, MVP milestones)",
        "Responsive, animated dashboard built with Framer Motion transitions",
        "Per-section copy functionality for easy export to external files",
      ],
      impact: {
        sections: "11",
        focus: "SaaS Blueprint",
        export: "1-Click",
      },
      github: "https://github.com/ankita-singhhh/IDEAxAI",
      live: "https://idea-x-ai.vercel.app/",
      color: "from-purple-500/20 to-pink-500/20",
      badge: "AI SaaS",
      status: "Live",
    },
    {
      id: 4,
      title: "ChatMate - Real-Time Chat & Video Calling App",
      icon: Video,
      image: ChatMateImage,
      date: "10/2025",
      category: "fullstack",
      description:
        "Full-stack MERN platform with real-time text chat, screen sharing, and secure video calls.",
      longDescription:
        "Developed a communication platform supporting real-time messaging via Stream Chat API and HD video calls via Stream Video API. Features JWT-secured friend requests, discovery matching based on language preferences, and a responsive custom UI.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stream APIs",
        "JWT",
      ],
      features: [
        "Real-time group and 1-on-1 chats via Stream Chat",
        "HD quality video calls with audio/video controls and screen sharing",
        "Secure JWT authentication and login credentials",
        "Language learning profile matching and user recommendation system",
      ],
      impact: {
        chat: "Real-time",
        quality: "HD Video",
        auth: "JWT Secure",
      },
      github: "https://github.com/ankita-singhhh/ChatMate",
      live: "https://chatmate-wfdy.onrender.com",
      color: "from-indigo-500/20 to-purple-500/20",
      badge: "MERN Stack",
      status: "Live",
    },
    {
      id: 5,
      title: "ManoMitra - AI Mental Wellness Companion",
      icon: Brain,
      image: ManoMitraImage,
      date: "10/2025",
      category: "ai",
      description:
        "Empathetic AI chatbot providing 24/7 mental wellness support and spiritual guidance, built for HackNova 2025.",
      longDescription:
        "Developed a specialized mental wellness chatbot companion using Google Gemini 2.0 to offer empathetic, therapeutic conversations. Created for the HackNova 2025 hackathon to bridge accessible mental support gaps.",
      technologies: [
        "React",
        "Google Gemini 2.0",
        "Node.js",
        "Vite",
        "Tailwind CSS",
      ],
      features: [
        "24/7 conversational support with emotional understanding metrics",
        "Mindfulness resources and integrated spiritual guidance techniques",
        "Highly responsive React frontend with dark mode aesthetics",
      ],
      impact: {
        support: "24/7",
        model: "Gemini 2.0",
        hackathon: "HackNova 25",
      },
      github: "https://github.com/priyyannshhu/HACKNOVA_Mental_Health_Chatbot",
      live: "https://hacknova-visioneers.vercel.app/",
      color: "from-rose-500/20 to-orange-500/20",
      badge: "AI Wellness",
      status: "Live",
    },
    {
      id: 6,
      title: "IRA - Smart Multilingual Voice Assistant",
      icon: Mic,
      image: IRAImage,
      date: "09/2025",
      category: "ai",
      description:
        "Desktop voice assistant supporting 27+ languages, AI image/PPT generation, and system operations.",
      longDescription:
        "Created a desktop voice companion supporting 27+ languages. Includes voice-activated systems for AI image generation, PowerPoint file creation, automatic code completion with VS Code, and intelligent local file organizer utilities.",
      technologies: [
        "Python",
        "Gemini API",
        "Eel",
        "Speech Recognition",
        "gTTS",
        "Pollinations AI",
      ],
      features: [
        "Voice command parsing in 27+ languages with customizable wake phrases",
        "AI graphic generation using Pollinations AI, and PowerPoint slide generation automation",
        "File organizer system handling PDF, DOCX, and TXT configurations",
        "VS Code extension integrations for code completion helpers",
      ],
      impact: {
        languages: "27+",
        commands: "100+",
        accuracy: "95%",
      },
      github: "https://github.com/ankita-singhhh/IRA",
      live: "https://github.com/ankita-singhhh/IRA",
      color: "from-blue-500/20 to-indigo-500/20",
      badge: "Voice Agent",
      status: "Live",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "ai",
      name: "AI & ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "fullstack",
      name: "Full-Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-none text-xs font-bold tracking-widest uppercase border border-primary/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Project Repositories
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            System architecture, core engineering patterns, and live production deployments.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 transition-all duration-300 transform font-bold text-xs uppercase tracking-widest cursor-pointer ${
                filter === f.id
                  ? "bg-primary text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "bg-white/5 border border-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
              }`}
              style={{
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
              }}
            >
              <span>{f.name}</span>
              <span className="ml-2 text-[10px] opacity-80">({f.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;
            const isExpanded = expandedProject === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="cyber-card cyber-card-hover group relative rounded-none overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.12}s backwards`,
                }}
              >
                {/* Gradient background hover aura */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${
                    project.color
                  } opacity-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-5" : ""
                  }`}
                />

                <div className="relative z-10 p-6 md:p-8">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${!isEven ? 'lg:grid-flow-col' : ''}`}>
                    
                    {/* Visual Mockup Container (5 cols) */}
                    <div className="lg:col-span-5 relative group/image">
                      <div className="relative rounded-none overflow-hidden border border-white/5 group-hover/image:border-primary/40 transition-all duration-300 aspect-video flex items-center justify-center bg-slate-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover/image:scale-[1.02] transition-transform duration-700"
                        />
                        {/* Hover Overlay Action Controls */}
                        <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-white hover:bg-primary hover:text-slate-950 border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                            title="View GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          
                          {/* Live URL Link Button */}
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-white hover:bg-secondary hover:text-white border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                            title="Launch Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Content Container (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between text-left">
                      <div>
                        {/* Title Row */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2.5 bg-white/5 border border-white/10 text-primary">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-all">
                                {project.title}
                              </h3>
                              <span className="px-2 py-0.5 text-[8px] uppercase tracking-widest font-black bg-primary/10 text-primary border border-primary/20">
                                {project.status}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{project.date}</span>
                              </div>
                              <span>•</span>
                              <span className="text-secondary font-extrabold">{project.badge}</span>
                            </div>
                          </div>
                        </div>

                        {/* Summary Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                          {project.longDescription}
                        </p>

                        {/* Technical Metrics */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {Object.entries(project.impact).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-white/5 rounded-none p-3 text-center border border-white/5 hover:border-primary/20 transition-all duration-300"
                            >
                              <div className="text-sm md:text-base font-bold text-white mb-0.5">
                                {value}
                              </div>
                              <div className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Technology Badges */}
                        <div className="mb-6">
                          <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Core Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-1 text-xs rounded-none bg-white/5 border border-white/5 text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Key Features Accordion */}
                      <div className="border-t border-white/5 pt-4">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors py-1 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            Key Architecture Features ({project.features.length})
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="grid grid-cols-1 gap-2 bg-slate-950/50 p-4 border border-white/5">
                            {project.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer GitHub Link Button */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/ankita-singhhh"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-fill text-xs"
          >
            <Github className="w-4 h-4 inline-block mr-2" />
            Check repository details on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};