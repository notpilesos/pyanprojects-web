"use client";

import { HeroSection } from "@/components/hero-section";
import { TeamSection } from "@/components/team-section";
import { ProjectSection } from "@/components/project-section";
import { CTASection } from "@/components/cta-section";
import { TechnologiesSection } from "@/components/technologies-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/data";

export default function Home() {
  // Filter projects to show
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <TechnologiesSection />
        <TeamSection />
        <ProjectSection projects={featuredProjects} />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
