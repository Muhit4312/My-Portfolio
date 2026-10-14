import About from "@/components/sections/about";
import ContactSection from "@/components/sections/contractSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Skills from "@/components/sections/skills";
import FooterSection from "@/components/shared/FooterSection";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="min-h-screen bg-background pt-20"
        >
          <HeroSection />
          <About />
          <Skills />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </section>
      </main>
      <FooterSection />
    </>


  );
}
