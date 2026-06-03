import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  ShieldCheck,
  Wrench,
  Palette,
} from "lucide-react";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      title: "Programming Languages",
      icon: Code2,
      description: "Core languages and runtime execution pipelines",
      skills: [
        { name: "JavaScript / TypeScript", level: 90, years: 2.5 },
        { name: "Python", level: 88, years: 3 },
        { name: "SQL", level: 85, years: 2.5 },
        { name: "C# (.NET)", level: 80, years: 1.5 },
        { name: "Java", level: 78, years: 2 },
        { name: "C", level: 75, years: 2 },
        { name: "CLR & JIT/AOT Compilers", level: 70, years: 1 },
      ],
    },
    {
      id: 1,
      title: "Frontend Stack",
      icon: Palette,
      description: "Designing responsive, animated interfaces",
      skills: [
        { name: "React.js", level: 92, years: 2.5 },
        { name: "Next.js 15", level: 88, years: 2 },
        { name: "Tailwind CSS & Shadcn UI", level: 90, years: 2 },
        { name: "HTML5 & CSS3", level: 95, years: 3 },
        { name: "DaisyUI", level: 88, years: 1.5 },
        { name: "Streamlit", level: 75, years: 1 },
      ],
    },
    {
      id: 2,
      title: "Backend & Real-Time",
      icon: Server,
      description: "Server architectures, real-time protocols & REST APIs",
      skills: [
        { name: "FastAPI (Python)", level: 90, years: 2 },
        { name: "Node.js & Express.js", level: 85, years: 2.5 },
        { name: "ASP.NET Core", level: 78, years: 1.5 },
        { name: "REST APIs (CRUD)", level: 92, years: 2.5 },
        { name: "Socket.IO", level: 88, years: 2 },
      ],
    },
    {
      id: 3,
      title: "Databases & ORMs",
      icon: Database,
      description: "Relational, non-relational & vector storage solutions",
      skills: [
        { name: "PostgreSQL & Supabase", level: 88, years: 2 },
        { name: "MongoDB", level: 85, years: 2 },
        { name: "MySQL", level: 85, years: 2.5 },
        { name: "SQL Server", level: 80, years: 1.5 },
        { name: "Entity Framework ORM", level: 78, years: 1 },
      ],
    },
    {
      id: 4,
      title: "AI & Generative APIs",
      icon: Brain,
      description: "Generative AI models, vector search & media APIs",
      skills: [
        { name: "Google Gemini API (2.0/Flash)", level: 92, years: 2 },
        { name: "OpenAI API & RAG Architectures", level: 88, years: 2 },
        { name: "Qwen2-7B & Llama Models", level: 80, years: 1 },
        { name: "SDXL-turbo & Stability AI", level: 82, years: 1 },
        { name: "Stream Chat & Video APIs", level: 88, years: 1.5 },
        { name: "Vector Databases (pgvector)", level: 85, years: 1.5 },
      ],
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Deployment, cloud hosting & collaboration workflows",
      skills: [
        { name: "AWS (S3, EC2)", level: 80, years: 1.5 },
        { name: "Vercel & Render", level: 90, years: 2 },
        { name: "Google Cloud Platform", level: 78, years: 1 },
        { name: "Modal (Serverless GPU)", level: 82, years: 1 },
        { name: "Git & GitHub", level: 92, years: 3 },
      ],
    },
    {
      id: 6,
      title: "Testing & Security",
      icon: ShieldCheck,
      description: "End-to-end testing, authentication & access controls",
      skills: [
        { name: "Playwright (UI & API)", level: 85, years: 1 },
        { name: "Unit Testing (C# & Jest)", level: 80, years: 1.5 },
        { name: "Postman & Swagger APIs", level: 90, years: 2 },
        { name: "JWT Authentication", level: 92, years: 2 },
        { name: "Role-Based Access Control (RBAC)", level: 85, years: 1.5 },
      ],
    },
    {
      id: 7,
      title: "Other Tools & Automation",
      icon: Wrench,
      description: "Developer workflows, web tools & data libraries",
      skills: [
        { name: "BetterAuth & Polar.sh", level: 85, years: 1 },
        { name: "Inngest & Eel", level: 80, years: 1 },
        { name: "Pandas & NumPy (Python)", level: 83, years: 2 },
        { name: "Visual Studio & VS Code Debugger", level: 90, years: 2.5 },
        { name: "Speech Recognition & gTTS", level: 85, years: 1.5 },
      ],
    },
  ];

  const activeData = categories[activeCategory];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Technical <span className="text-primary text-glow">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            System specialized skill sets compiled through full-stack development and artificial intelligence research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer rounded-none ${
                    isActive
                      ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : "bg-slate-950/40 border-white/5 hover:border-white/15 hover:bg-white/5"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10% 100%, 0% 100%)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 border transition-all duration-300 rounded-none ${
                        isActive
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-white/5 border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold mb-1 transition-colors duration-300 text-xs md:text-sm uppercase tracking-wider ${
                          isActive ? "text-primary" : "text-slate-300"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-muted-foreground line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Display Panel */}
          <div className="lg:col-span-8">
            <div className="cyber-card rounded-none p-8 min-h-[520px] flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-10 pb-6 border-b border-white/5">
                  <div className="p-3 bg-white/5 border border-primary/20 text-primary rounded-none">
                    {(() => {
                      const Icon = activeData.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                      {activeData.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activeData.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-6">
                  {activeData.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${
                          index * 0.08
                        }s backwards`,
                      }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-200 text-xs md:text-sm tracking-wide">{skill.name}</span>
                          <span className="text-[9px] uppercase font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-none">
                            {skill.years} {skill.years === 1 ? "yr" : "yrs"}
                          </span>
                        </div>
                        <span className="text-xs font-black text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="relative h-1.5 bg-slate-950 rounded-none overflow-hidden">
                        {/* Shimmer gradient fill */}
                        <div
                          className="absolute inset-y-0 left-0 bg-primary rounded-none transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Metrics */}
              <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {activeData.skills.length}
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                    Modules
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {Math.round(
                      activeData.skills.reduce((acc, s) => acc + s.level, 0) /
                        activeData.skills.length
                    )}
                    %
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                    Avg Skill Level
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">
                    {Math.max(...activeData.skills.map((s) => s.years))}+
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                    Peak Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Summary Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="cyber-card rounded-none p-6 text-center">
            <div className="text-3xl font-black text-primary mb-1">
              {categories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-extrabold">Total Skill Tags</div>
          </div>
          <div className="cyber-card rounded-none p-6 text-center">
            <div className="text-3xl font-black text-primary mb-1">
              {categories.length}
            </div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-extrabold">Core Pillars</div>
          </div>
          <div className="cyber-card rounded-none p-6 text-center">
            <div className="text-3xl font-black text-primary mb-1">3+</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-extrabold">Years Active</div>
          </div>
          <div className="cyber-card rounded-none p-6 text-center">
            <div className="text-3xl font-black text-primary mb-1">100%</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-extrabold">Self-Driven</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
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