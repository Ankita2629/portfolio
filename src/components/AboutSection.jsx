import { Code2, Cpu, Activity, Download, Mail } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: Code2,
      title: "Full-Stack Engineering",
      description:
        "Building scalable systems using modern frameworks (Next.js 15, FastAPI, .NET Core) integrated with PostgreSQL, MongoDB, and AWS.",
      color: "rgba(6, 182, 212, 0.08)",
      glowColor: "rgba(6, 182, 212, 0.25)",
    },
    {
      id: 2,
      icon: Cpu,
      title: "AI & Machine Learning",
      description:
        "Creating intelligent solutions using LLM orchestration (Gemini 2.0, OpenAI, RAG) and computer vision models (MediaPipe, TensorFlow).",
      color: "rgba(139, 92, 246, 0.08)",
      glowColor: "rgba(139, 92, 246, 0.25)",
    },
    {
      id: 3,
      icon: Activity,
      title: "Real-Time Systems",
      description:
        "Implementing WebSocket protocols, Socket.IO connections, and Stream APIs for real-time video calls, messaging, and multi-user sync.",
      color: "rgba(244, 63, 94, 0.08)",
      glowColor: "rgba(244, 63, 94, 0.25)",
    },
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Description Side */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Executing Code to Compile Premium Full-Stack AI Prototypes
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I am a final-year Computer Science engineering student specializing in Data Science at the Buddha Institute of Technology. I am driven by the passion to engineer robust, high-performance web applications and design intelligent systems.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Through my experience as a Software Development Intern at String AI India and building advanced AI-powered SaaS platforms (such as healthcare diagnostic portals and real-time hand gesture canvas boards), I have developed strong skills in both full-stack technologies and machine learning pipelines.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="cyber-button-fill"
              >
                <Mail className="w-4 h-4 inline-block mr-2" />
                Initialize Link //
              </a>
              <a
                href="/resume.pdf"
                download="Ankita_Singh_Resume.pdf"
                className="cyber-button"
              >
                <Download className="w-4 h-4 inline-block mr-2" />
                Capture CV.pdf //
              </a>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="grid grid-cols-1 gap-6 relative">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === item.id;

              return (
                <div
                  key={item.id}
                  className="cyber-card transition-all duration-300 cursor-pointer p-6"
                  style={{
                    backgroundColor: isHovered ? item.color : "rgba(10, 8, 20, 0.7)",
                    borderColor: isHovered ? "rgba(6, 182, 212, 0.5)" : "rgba(6, 182, 212, 0.15)",
                    boxShadow: isHovered
                      ? `0 0 25px ${item.glowColor}`
                      : "0 4px 30px rgba(0,0,0,0.4)",
                  }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-5 relative z-10">
                    <div
                      className={`p-3 border transition-all duration-300 rounded-none ${
                        isHovered
                          ? "bg-primary/20 border-primary text-white scale-110 rotate-3"
                          : "bg-white/5 border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1">
                      <h4
                        className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                          isHovered ? "text-primary text-glow" : "text-slate-200"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};