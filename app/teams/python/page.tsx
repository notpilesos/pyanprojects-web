"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { GitHubIcon } from "@/components/icons";
import { teams, projects as allProjects } from "@/lib/data";

// Get team data
const team = teams.find(t => t.id === "python");

// Get all projects that are either directly in the Python team or have Python in teamIds
const teamProjects = allProjects.filter(p => 
  p.team === "python" || (p.teamIds && p.teamIds.includes("python"))
);

// Convert team members data
const teamMembers = team?.members.map((member, index) => ({
  id: index + 1,
  name: member.name,
  role: member.position,
  bio: "Python specialist with experience in various domains including machine learning and data processing.",
  avatarUrl: member.avatar,
  avatarFallback: member.name.split(' ').map(part => part[0]).join('')
}));

export default function PythonTeamPage() {
  // Check if team exists
  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex flex-col w-full">
        {/* Hero section */}
        <section className={`w-full py-24 relative bg-gradient-to-br from-yellow-600 to-amber-600`}>
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <AnimatedHeading as="h1" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {team.name} Team
              </AnimatedHeading>
              <p className="text-xl text-white/80 mb-8">
                {team.description}
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button size="lg" variant="secondary">
                    Work With Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <AnimatedSection>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">About Our Team</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  {team.longDescription}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {team.expertise.map((skill, index) => (
                    <motion.div 
                      key={skill}
                      className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        {/* Team members */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">
                Meet The Team
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our talented professionals bring diverse skills and expertise to every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers?.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback className="text-2xl bg-yellow-500/10">{member.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                      <p className="text-sm">{member.bio}</p>
                    </CardContent>
                    <div className="pt-1 pb-2 px-4 border-t border-muted/20 mt-auto text-center">
                      <a 
                        href={team.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>GitHub Profile</span>
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">
                Featured Projects
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Examples of our work in Python development and data science
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className={`grid ${teamProjects.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8 max-w-4xl mx-auto`}>
                {teamProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="group"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <div className="relative h-56 w-full overflow-hidden">
                          <Image 
                            src={project.imageUrl || `https://placehold.co/600x400/2563eb/ffffff?text=${project.title}`} 
                            alt={project.title} 
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 bg-card">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground">{project.description}</p>
                          {project.teamIds && project.teamIds.length > 1 && (
                            <div className="mt-2 text-xs text-muted-foreground">
                              {project.teamIds.filter(id => id !== "python").map(id => {
                                const teamName = teams.find(t => t.id === id)?.name;
                                return teamName || id;
                              }).join(", ")}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline">View All Projects</Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-yellow-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our Python team today to discuss how we can help bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg">Contact Us</Button>
                  </motion.div>
                </Link>
                <Link href="/teams">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline">See All Teams</Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 