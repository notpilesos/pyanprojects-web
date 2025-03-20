"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { GitHubIcon } from "@/components/icons";
import { teams } from "@/lib/data";

export function TeamSection() {
  // Stagger animation for cards
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
  
  // Animation for team members
  const memberVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-16">
          <div className="text-center">
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight mb-4">
              Our Teams
            </AnimatedHeading>
            <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-3xl">
              We bring together professionals from various fields to create comprehensive and innovative solutions
            </p>
          </div>
        </AnimatedSection>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {teams.map((team, index) => (
            <motion.div key={team.id} variants={cardVariants}>
              <Card className="overflow-hidden border-0 shadow-md h-full transition-all duration-300 hover:shadow-lg">
                <div className={`h-2 w-full ${team.color}`} />
                <CardHeader>
                  <CardTitle>{team.name}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-col gap-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      Key Skills:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {team.expertise.slice(0, 3).map((skill) => (
                        <span 
                          key={skill} 
                          className="inline-flex text-xs bg-muted px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {team.expertise.length > 3 && (
                        <span className="inline-flex text-xs text-muted-foreground items-center">
                          +{team.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/teams/${team.id}`} className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        More About Team
                      </Button>
                    </motion.div>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 