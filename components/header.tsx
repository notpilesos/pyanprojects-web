"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Logo } from "@/components/layout/logo";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Avoid hydration mismatch by rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Teams", href: "/teams" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <XIcon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden px-4 py-2 bg-background border-t"
        >
          <nav className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
} 