"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedBackgroundProps = {
  variant?: "default" | "subtle" | "gradient";
  className?: string;
  particleCount?: number;
  particleClass?: string;
};

export function AnimatedBackground({
  variant = "default",
  className = "",
  particleCount = 20,
  particleClass = "bg-primary/5 dark:bg-primary/10",
}: AnimatedBackgroundProps) {
  // Different variants of the background
  const variants = {
    default: "absolute inset-0 overflow-hidden pointer-events-none",
    subtle: "absolute inset-0 overflow-hidden pointer-events-none opacity-50",
    gradient: "absolute inset-0 overflow-hidden bg-gradient-to-b from-background to-muted/30 pointer-events-none",
  };

  // Create the particles
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    x: Math.random() * 100 - 50 + "%",
    y: Math.random() * 100 + "%",
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 30 + 30, 
  }));

  return (
    <div className={`${variants[variant]} ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particleClass}`}
          initial={{
            width: particle.size,
            height: particle.size,
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [null, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
} 