"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32 w-full">
      {/* Decorative background element */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_100%,rgba(76,29,149,0.12),rgba(0,0,0,0))] dark:bg-[radial-gradient(45%_40%_at_50%_100%,rgba(139,92,246,0.12),rgba(0,0,0,0))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:bg-black dark:ring-indigo-900/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
        aria-hidden="true"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Development Team
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We create innovative solutions in various development areas: from Unreal Engine games to full-fledged Python web applications and modern frontend.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/projects">
                  <Button size="lg">Our Projects</Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ x: -2 }}
              >
                <Link href="/contact" className="text-sm font-semibold text-foreground">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Statistics */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Years of Experience", value: "8+" },
              { title: "Completed Projects", value: "200+" },
              { title: "Professionals", value: "40+" },
              { title: "Satisfied Clients", value: "50+" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.title}
                className="flex flex-col items-center gap-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <dt className="text-base leading-7 text-muted-foreground">{stat.title}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">{stat.value}</dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 