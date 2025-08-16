"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="group font-headline text-lg uppercase tracking-widest text-foreground/80 transition-colors hover:text-accent"
  >
    {children}
    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
  </a>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#home" className="font-headline text-2xl font-bold">
          <span className="text-primary">Vibe</span><span className="text-accent">Vault</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4 border-t border-primary/20">
                <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
                <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
                <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
            </nav>
        </div>
      )}
    </header>
  );
}
