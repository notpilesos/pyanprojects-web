"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export function AnimatedHeading({ 
  children, 
  as: Component = "h2",
  className = "" 
}: AnimatedHeadingProps) {
  // Simpler animation variant
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Если текст - строка, просто анимируем весь заголовок без разбивки на буквы
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  );
} 