"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TeamSection } from "@/components/team-section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16 pb-10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight mb-4">
                Our Professional Teams
              </AnimatedHeading>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-3xl">
                We bring together experts from various fields to create comprehensive solutions for our clients
              </p>
            </div>
          </AnimatedSection>
          
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 