import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="projects">
        <ProjectsSection />
      </div>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
