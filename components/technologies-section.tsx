"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  SiUnrealengine, SiPython, SiReact, SiNextdotjs, SiNodedotjs, 
  SiCplusplus, SiBlender, SiFigma, SiGit, SiGithub
} from "react-icons/si";

export function TechnologiesSection() {
  const technologies = [
    {
      category: "Game Development",
      color: "from-blue-600 to-blue-300",
      items: [
        { name: "Unreal Engine", icon: SiUnrealengine, style: "text-blue-600" },
        { name: "C++", icon: SiCplusplus, style: "text-blue-500" },
        { name: "3D Modeling", icon: SiBlender, style: "text-blue-400" }
      ]
    },
    {
      category: "Web Development",
      color: "from-green-600 to-green-300",
      items: [
        { name: "React", icon: SiReact, style: "text-green-600" },
        { name: "Next.js", icon: SiNextdotjs, style: "text-green-500" },
        { name: "Node.js", icon: SiNodedotjs, style: "text-green-400" }
      ]
    },
    {
      category: "Backend Development",
      color: "from-yellow-600 to-yellow-300",
      items: [
        { name: "Python", icon: SiPython, style: "text-yellow-600" }
      ]
    },
    {
      category: "System Administration",
      color: "from-purple-600 to-purple-300",
      items: [
        { name: "Git/GitHub", icon: SiGithub, style: "text-purple-600" }
      ]
    },
    {
      category: "Design",
      color: "from-pink-600 to-pink-300",
      items: [
        { name: "Figma", icon: SiFigma, style: "text-pink-600" },
        { name: "UI/UX Design", icon: SiFigma, style: "text-pink-500" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-16 w-full relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            initial={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, "-100%"],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight mb-4">
              Our Technologies
            </AnimatedHeading>
            <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-3xl">
              We use cutting-edge technologies and tools to deliver exceptional products across various domains
            </p>
          </div>
        </AnimatedSection>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {technologies.map((category) => (
            <motion.div 
              key={category.category}
              variants={itemVariants}
              className="bg-card border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="flex flex-col items-center justify-center gap-2 p-3 bg-muted/50 rounded-lg"
                    >
                      <tech.icon className={`text-2xl ${tech.style}`} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 