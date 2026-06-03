import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useState } from "react";

export const EducationSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const education = [
    {
      id: 1,
      degree: "B.Tech - Computer Science & Engineering (Data Science)",
      institution: "Buddha Institute of Technology",
      location: "Gorakhpur, Uttar Pradesh",
      period: "12/2023 – 06/2027",
      score: "SGPA (5th Sem): 8.13",
      icon: GraduationCap,
      color: "rgba(6, 182, 212, 0.08)",
      borderColor: "border-primary/40",
      glowColor: "rgba(6, 182, 212, 0.25)",
    },
    {
      id: 2,
      degree: "Intermediate (12th) - PCM",
      institution: "H.R. College, Mairwa, Siwan",
      location: "Siwan, Bihar",
      period: "04/2020 – 04/2022",
      score: "Bihar Board: 72.8%",
      icon: Award,
      color: "rgba(139, 92, 246, 0.08)",
      borderColor: "border-secondary/40",
      glowColor: "rgba(139, 92, 246, 0.25)",
    },
  ];

  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-none text-xs font-bold tracking-widest uppercase border border-primary/30 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Registry //
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            My <span className="text-primary text-glow">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            System specialized training and engineering foundations.
          </p>
        </div>

        {/* Tree Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-linear-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2 opacity-20" />

          {/* Education Items */}
          <div className="space-y-20">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isHovered = hoveredItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    animation: `slide-up 0.6s ease-out ${
                      index * 0.15
                    }s backwards`,
                  }}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div
                      className={`w-12 h-12 rounded-none bg-slate-900 border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "border-primary shadow-[0_0_15px_rgba(6, 182, 212, 0.3)] scale-105"
                          : "border-white/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isHovered ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Card container */}
                  <div
                    className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className="cyber-card rounded-none p-8 text-left transition-all duration-300"
                      style={{
                        backgroundColor: isHovered ? item.color : "rgba(10, 8, 20, 0.7)",
                        borderColor: isHovered ? "rgba(6, 182, 212, 0.4)" : "rgba(6, 182, 212, 0.15)",
                        boxShadow: isHovered
                          ? `0 0 25px ${item.glowColor}`
                          : "0 4px 30px rgba(0,0,0,0.4)",
                      }}
                    >
                      <div className="relative z-10">
                        {/* Period & Location row */}
                        <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground mb-4 uppercase tracking-widest font-semibold">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span>{item.period}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-secondary" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Degree Name */}
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isHovered ? "text-primary text-glow" : "text-slate-100"
                          }`}
                        >
                          {item.degree}
                        </h3>

                        {/* Institution Name */}
                        <p className="text-sm font-bold text-muted-foreground mb-6">
                          {item.institution}
                        </p>

                        {/* Score Badge */}
                        <div
                          className={`inline-flex px-4 py-1.5 rounded-none font-bold text-[10px] tracking-wider uppercase border transition-all duration-300 ${
                            isHovered
                              ? "bg-primary/10 text-primary border-primary shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                              : "bg-white/5 text-muted-foreground border-white/10"
                          }`}
                        >
                          {item.score}
                        </div>
                      </div>
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