"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Button } from "@/components/ui/button";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarFallback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechInnovate",
    quote: "The team at DevTeam delivered our project on time and exceeded our expectations. Their expertise in Unreal Engine development helped us create an immersive experience that our users love.",
    avatarFallback: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "EduSphere",
    quote: "Working with DevTeam was a game-changer for our educational platform. Their Python full-stack developers built a robust system that's both scalable and user-friendly.",
    avatarFallback: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "VisualCraft",
    quote: "The frontend specialists at DevTeam transformed our digital presence with a beautiful and responsive design. Their attention to detail and dedication to user experience made all the difference.",
    avatarFallback: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Operations Director",
    company: "CloudSolutions",
    quote: "The DevOps team provided us with a deployment pipeline that significantly improved our development workflow. Their expertise in containerization and cloud infrastructure has been invaluable.",
    avatarFallback: "DK",
  },
  {
    id: 5,
    name: "Olivia Thompson",
    role: "Marketing Manager",
    company: "BrandLift",
    quote: "DevTeam's web development skills helped us create an interactive platform that perfectly showcases our brand. The analytics dashboard they built gives us invaluable insights into user behavior.",
    avatarFallback: "OT",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background w-full">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mx-auto max-w-3xl mb-12">
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight mb-4">
              Client Testimonials
            </AnimatedHeading>
            <p className="text-lg text-muted-foreground">
              What our clients say about working with our team
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md border-0">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold bg-primary/10 text-primary">
                        {testimonial.avatarFallback}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                        "
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-center italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-muted'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 