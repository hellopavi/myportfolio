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
                alt="Profile picture of Pavithran"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                data-ai-hint="professional indian developer portrait"
              />
            </div>
          </div>
          <div className="md:col-span-2 animate-fade-in-right">
            <h2 className="font-headline-display text-4xl md:text-6xl font-bold mb-4">About Me</h2>
            <p className="font-body text-lg text-foreground/80 mb-6">
              I'm Pavithran, a curious and motivated individual with a strong passion for Artificial Intelligence. My journey began with exploring various internet resources, where I diving deep into machine learning, deep learning, and computer vision. I have hands-on experience with scikit-learn and TensorFlow, which I use to build and optimize AI models. My background in computer science and engineering has equipped me with the skills to tackle real-world problems and develop practical solutions.
            </p>
            <p className="font-body text-lg text-foreground/80 mb-8">
              I'm eager to apply my knowledge in AI through collaboration on real-world projects, from data preprocessing to model deployment. I thrive in both independent and team settings, always looking to learn, grow, and contribute to innovative AI solutions. My goal is to gain hands-on experience and further develop my technical skills by working with experienced professionals in the field.
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
