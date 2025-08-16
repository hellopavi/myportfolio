"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="group font-headline text-lg uppercase tracking-widest text-foreground/80 transition-colors hover:text-accent relative"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Raves" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-sm shadow-lg shadow-primary/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#home" className="font-headline text-3xl font-bold tracking-tighter animate-glitch" data-text="HelloPavi">
          <span className="text-primary">Hello</span><span className="text-accent">Pavi</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-7 w-7 text-accent" /> : <Menu className="h-7 w-7 text-accent" />}
            </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col items-center space-y-6 py-8 border-t border-primary/20">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} onClick={toggleMenu}>{link.label}</NavLink>
              ))}
            </nav>
        </div>
      )}
    </header>
  );
}
