
"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Bot } from 'lucide-react';
import { Button } from '../ui/button';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="group font-headline text-lg uppercase tracking-widest text-foreground/80 transition-colors hover:text-accent relative"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
  </a>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const leftNavLinks = [
    { href: "#testimonials", label: "Raves" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About" },
  ];

  const rightNavLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  
  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-sm shadow-lg shadow-primary/10" : "bg-transparent",
        !isVisible && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-8">
          {leftNavLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        <a href="#home" className="hidden md:flex items-center gap-2 font-headline text-3xl font-bold tracking-tighter animate-glitch mx-8" data-text="HelloPavi">
          <Bot className="h-8 w-8 text-accent" />
          <span>
            <span className="text-primary">Hello</span><span className="text-accent">Pavi</span>
          </span>
        </a>
        
        {/* Mobile Logo */}
        <a href="#home" className="flex md:hidden items-center gap-2 font-headline text-3xl font-bold tracking-tighter animate-glitch" data-text="HelloPavi">
          <Bot className="h-8 w-8 text-accent" />
          <span>
            <span className="text-primary">Hello</span><span className="text-accent">Pavi</span>
          </span>
        </a>

        <nav className="hidden md:flex flex-1 items-center justify-start space-x-8">
           {rightNavLinks.map(link => (
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
              {[
                { href: "#testimonials", label: "Raves" },
                { href: "#blog", label: "Blog" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map(link => (
                <NavLink key={link.href} href={link.href} onClick={toggleMenu}>{link.label}</NavLink>
              ))}
            </nav>
        </div>
      )}
    </header>
  );
}
