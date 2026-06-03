import { Trophy, Award, Star, Zap, MapPin } from "lucide-react";
import { useState } from "react";

export const AchievementsSection = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "Sparkathon Hackathon Competition",
      position: "Runner Up",
      icon: Trophy,
      year: "2025",
      institution: "Walmart Global Tech",
      description:
        "Secured Runner-Up position in Walmart Sparkathon, showcasing scalable system designs and innovative solutions on a global competition stage.",
      color: "rgba(255, 255, 255, 0.02)",
      iconColor: "text-slate-300",
      borderColor: "border-white/10",
      badgeColor: "bg-white/5 text-slate-300 border-white/10",
    },
    {
      id: 2,
      title: "techYuva 10.0 Innovative Model Presentation",
      position: "1st Place Winner",
      icon: Star,
      year: "2025",
      institution: "Buddha Institute of Technology",
      description:
        "Won first place in the annual flagship innovation and model presentation event, presenting custom ML-driven solutions and full-stack software prototypes.",
      color: "rgba(255, 255, 255, 0.02)",
      iconColor: "text-slate-300",
      borderColor: "border-white/10",
      badgeColor: "bg-white/5 text-slate-300 border-white/10",
    },
    {
      id: 3,
      title: "techYuva 9.0 Innovative Model Presentation",
      position: "2nd Place Runner Up",
      icon: Award,
      year: "2024",
      institution: "Buddha Institute of Technology",
      description:
        "Secured second place runner-up recognition for delivering technical demonstrations, responsive user interfaces, and model feasibility analysis.",
      color: "rgba(255, 255, 255, 0.02)",
      iconColor: "text-slate-300",
      borderColor: "border-white/10",
      badgeColor: "bg-white/5 text-slate-300 border-white/10",
    },
  ];

  return (
    <section id="achievements" className="py-32 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb-2" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-white/5 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/5 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Awards & Recognition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Honors & Milestones
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Competing and winning at high-level technology model events and hackathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isHovered = hoveredAchievement === achievement.id;

            return (
              <div
                key={achievement.id}
                className="relative group text-left"
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${
                    index * 0.15
                  }s backwards`,
                }}
              >
                {/* Modern Card Container */}
                <div
                  className="modern-card rounded-2xl p-6 md:p-8 transition-all duration-300 h-full border border-white/5"
                  style={{
                    backgroundColor: isHovered ? "rgba(25, 25, 30, 0.55)" : "rgba(18, 18, 22, 0.45)",
                    borderColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon & Year row */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-3.5 border transition-all duration-300 rounded-xl ${
                            isHovered
                              ? "bg-white/10 border-white/20 text-white scale-105"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${achievement.iconColor}`} />
                        </div>

                        <div
                          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all duration-300 ${achievement.badgeColor}`}
                        >
                          {achievement.year}
                        </div>
                      </div>

                      {/* Position Ribbon Badge */}
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-4 transition-all duration-300 ${
                          isHovered
                            ? "bg-white/10 text-white border border-white/20"
                            : "bg-white/5 text-slate-300 border border-white/10"
                        }`}
                      >
                        {achievement.position}
                      </div>

                      {/* Achievement Title */}
                      <h3
                        className={`text-lg font-bold mb-3 leading-tight transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-slate-100"
                        }`}
                      >
                        {achievement.title}
                      </h3>

                      {/* Detailed Description */}
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Institution Label */}
                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-slate-400 pt-4 border-t border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-white/50" />
                      <span>{achievement.institution}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Achievements Summary Cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="modern-card rounded-2xl p-5 border border-white/5 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-white/70" />
            <div className="text-2xl font-bold text-white">3+ Major</div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-1">Podium Finishes</div>
          </div>
          <div className="modern-card rounded-2xl p-5 border border-white/5 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-white/70" />
            <div className="text-2xl font-bold text-white">Walmart</div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-1">Hackathon Runner Up</div>
          </div>
          <div className="modern-card rounded-2xl p-5 border border-white/5 text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-white/70" />
            <div className="text-2xl font-bold text-white">2025 Wins</div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-1">techYuva Champions</div>
          </div>
          <div className="modern-card rounded-2xl p-5 border border-white/5 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-white/70" />
            <div className="text-2xl font-bold text-white">100% Core</div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mt-1">Innovation & Tech</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};