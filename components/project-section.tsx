"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { projects as allProjects, Project } from "@/lib/data";

interface ProjectSectionProps {
  projects?: Project[];
}

export function ProjectSection({ projects = allProjects.filter(project => project.featured) }: ProjectSectionProps) {
  // Animations for container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16">
          <div className="text-center">
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight mb-4">
              Our Projects
            </AnimatedHeading>
            <p className="text-lg text-muted-foreground mx-auto max-w-3xl">
              Examples of our team's work across various development fields
            </p>
          </div>
        </AnimatedSection>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className="w-full"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-60 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Показываем инициалы только когда нет изображения */}
                  {!project.imageUrl && (
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <span className="text-4xl font-bold text-purple-500/20 select-none z-10">
                        {project.title.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)}
                      </span>
                    </div>
                  )}
                  
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full" 
                    priority={true}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="bg-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="outline">{project.teamName}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-foreground transition-colors"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                  <Link href={`/projects/${project.id}`} className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full"
                    >
                      <Button variant="default" className="w-full">Project Details</Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button variant="outline" size="lg">
                All Projects
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
} 