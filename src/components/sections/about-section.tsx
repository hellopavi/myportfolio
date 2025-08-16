"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 animate-fade-in-left">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Profile picture"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                data-ai-hint="professional developer portrait"
              />
            </div>
          </div>
          <div className="md:col-span-2 animate-fade-in-right">
            <h2 className="font-headline-display text-4xl md:text-6xl font-bold mb-4">About Me</h2>
            <p className="font-body text-lg text-foreground/80 mb-6">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-centric digital experiences. With a background in both design and development, I bridge the gap between aesthetics and technology to build products that are not only powerful but also a joy to use. I thrive on challenges and I'm constantly learning and exploring new technologies.
            </p>
            <p className="font-body text-lg text-foreground/80 mb-8">
              When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes, or diving into a good sci-fi novel. I believe that creativity and technical skill go hand-in-hand, and I bring this philosophy to every project I work on.
            </p>
            <Button asChild size="lg" className="font-headline text-lg group">
              <a href="/resume.pdf" download>
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
