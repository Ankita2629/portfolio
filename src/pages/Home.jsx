import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import { ProjectSection } from "../components/ProjectSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />  {/* ADD THIS LINE - Place it after Skills */}
        <ProjectSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;