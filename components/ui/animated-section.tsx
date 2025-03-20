"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedSection({ 
  children, 
  delay = 0.1,
  className = "" 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 