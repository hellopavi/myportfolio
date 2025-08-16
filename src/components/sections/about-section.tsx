"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { aboutData } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 animate-fade-in-left">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20 transform hover:scale-105 transition-transform duration-500">
              <Image
                src={aboutData.image}
                alt={aboutData.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                data-ai-hint={aboutData.imageHint}
              />
            </div>
          </div>
          <div className="md:col-span-2 animate-fade-in-right">
            <h2 className="font-headline-display text-4xl md:text-6xl font-bold mb-4">About Me</h2>
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="font-body text-lg text-foreground/80 mb-6 last:mb-8">
                {paragraph}
              </p>
            ))}
            <Button asChild size="lg" className="font-headline text-lg group">
              <a href={aboutData.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download My Resume
                <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
