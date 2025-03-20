import React from "react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Professional development team creating innovative solutions in various fields: from Unreal Engine games to full-scale Python applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/PyanProject/Survansion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Survansion
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/PyanProject/Face-Recognizer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Face Recognizer
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/PyanProject/Structo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Structo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: <a href="mailto:info@pyaninc.com" className="hover:text-foreground transition-colors">info@pyaninc.com</a>
              </li>
              <li className="text-sm text-muted-foreground">
                GitHub: <a href="https://github.com/PyanProject" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">PyanProject</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pyan Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/PyanProject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 