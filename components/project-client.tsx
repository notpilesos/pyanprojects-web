"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export default function ProjectClient() {
  const pathname = usePathname();
  const projectId = pathname.split('/').pop() || '';
  
  // Найти проект по ID
  const project = projects.find(p => p.id === projectId);
  
  // Если проект не найден, показать 404
  if (!project) {
    return notFound();
  }
  
  // Связанные проекты из той же команды
  const relatedProjects = projects
    .filter(p => p.team === project.team && p.id !== project.id)
    .slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
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
    <>
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <Link href="/projects" className="inline-block mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col space-y-6">
              <div>
                <Badge className="mb-4">{project.teamName}</Badge>
                <AnimatedHeading as="h1" className="text-4xl font-bold mb-4">
                  {project.title}
                </AnimatedHeading>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Team</h2>
                <Link href={`/teams/${project.team}`}>
                  <Button variant="outline" className="gap-2">
                    {project.teamName} Team
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.repoUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button className="gap-2">
                        <GitHubIcon className="h-4 w-4" />
                        GitHub Repository
                      </Button>
                    </a>
                  </motion.div>
                )}
                
                {project.demoUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button variant="outline" className="gap-2">
                        <ExternalLinkIcon className="h-4 w-4" />
                        View Demo
                      </Button>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
                {!project.imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <span className="text-5xl font-bold text-purple-500/20 select-none z-10">
                      {project.title.split(' ').map((word: string) => word[0]).join('').toUpperCase().substring(0, 2)}
                    </span>
                  </div>
                )}
                
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    priority={true}
                  />
                )}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features?.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0, 
                          transition: { delay: index * 0.1 + 0.3 } 
                        }
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <div className="rounded-full bg-primary h-1.5 w-1.5"></div>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
          
          {relatedProjects.length > 0 && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-20"
            >
              <h2 className="text-2xl font-semibold mb-6">Other {project.teamName} Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                          {!relatedProject.imageUrl && (
                            <div className="absolute inset-0 flex items-center justify-center p-3">
                              <span className="text-4xl font-bold text-purple-500/20 select-none z-10">
                                {relatedProject.title.split(' ').map((word: string) => word[0]).join('').toUpperCase().substring(0, 2)}
                              </span>
                            </div>
                          )}
                          
                          {relatedProject.imageUrl && (
                            <Image
                              src={relatedProject.imageUrl}
                              alt={relatedProject.title}
                              fill
                              quality={80}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover w-full h-full"
                            />
                          )}
                        </div>
                        <div className="p-4 bg-card">
                          <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedProject.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 