
"use client";

import { ProjectSliderCard } from '@/components/project-slider-card';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type { Project };

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50 overflow-hidden relative">
       <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="font-headline-display text-4xl md:text-6xl text-center mb-16 font-bold animate-glitch animate-breathe" data-text="Featured Projects">Featured Projects</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full mb-12"
        >
          <CarouselContent className="">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <ProjectSliderCard project={project} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-accent -left-4" />
          <CarouselNext className="text-accent -right-4" />
        </Carousel>
        <div className="text-center">
            <Button asChild size="lg" className="font-headline text-lg group">
                <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
