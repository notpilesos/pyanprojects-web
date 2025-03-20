"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";

export function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"
        style={{ zIndex: -1 }}
      />
      
      {/* Animated accent circles */}
      <motion.div 
        className="absolute top-1/4 right-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
              Professional team creating advanced solutions from Unreal Engine games to Python applications, web solutions, and more
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Our Projects
                </Button>
              </motion.div>
            </Link>
            <Link href="https://github.com/PyanProject" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <GitHubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">4</span>
                <span className="text-sm text-muted-foreground">Teams</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">7</span>
                <span className="text-sm text-muted-foreground">Experts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 