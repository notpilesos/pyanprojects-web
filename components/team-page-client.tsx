"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GitHubIcon } from "@/components/icons";
import { Team, Project, TeamMember } from "@/lib/data";

interface TeamPageClientProps {
  team: Team;
  teamProjects: Project[];
  teamMembersList: TeamMember[];
}

export function TeamPageClient({ team, teamProjects, teamMembersList }: TeamPageClientProps) {
  return (
    <main className="flex-1">
      <section className={`py-20 bg-gradient-to-b ${team.headerColor}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <nav className="mb-8">
              <Link href="/#teams">
                <Button variant="link" className="pl-0 text-white/80 hover:text-white">
                  ← Back to Teams
                </Button>
              </Link>
            </nav>
            
            <div className="text-center text-white">
              <AnimatedHeading as="h1" className="text-4xl md:text-5xl font-bold mb-4">
                {team.name} Team
              </AnimatedHeading>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                {team.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Team</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {team.longDescription}
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Team Expertise</h3>
              <ul className="space-y-2">
                {team.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`rounded-xl p-6 ${team.color}`}>
              <h3 className="text-xl font-semibold mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {teamMembersList.flatMap(member => member.skills)
                  .filter((skill, index, self) => self.indexOf(skill) === index)
                  .map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))
                }
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Team Projects</h3>
              <div className="grid grid-cols-1 gap-4">
                {teamProjects.map(project => (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <Card className="hover:shadow-md transition-all">
                      <CardHeader className="py-4">
                        <CardTitle className="text-base">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2">
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold mb-12 text-center">Team Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembersList.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          {member.avatarUrl && <AvatarImage src={member.avatarUrl} alt={member.name} />}
                          <AvatarFallback className="bg-primary/10 text-primary">{member.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map(skill => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{member.skills.length - 3}</Badge>
                        )}
                      </div>
                    </CardContent>
                    <div className="pt-1 pb-2 px-4 text-center">
                      <a 
                        href={member.githubUrl} 
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
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Interested in Collaboration?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are always open to new interesting projects and collaborations.
              Get in touch with us to discuss your ideas and potential partnership.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
} 