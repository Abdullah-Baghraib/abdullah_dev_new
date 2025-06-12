import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <a href="/" className="font-bold text-base sm:text-lg">
              Abdulla.dev
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-md">
              Mobile developer focused on creating exceptional user experiences 
              with clean code and innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Abdullah-Baghraib" 
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:size-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdullah-baghrib/" 
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:size-5" />
              </a>
              <a 
                href="https://x.com/ms1ms33__" 
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Twitter"
              >
                <Twitter size={20} className="sm:size-5" />
              </a>
              <a 
                href="mailto:abdullahbaghraib@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Email"
              >
                <Mail size={20} className="sm:size-5" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Abdulla.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
