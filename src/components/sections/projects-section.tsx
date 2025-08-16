
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

export type { Project };

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-headline-display text-4xl md:text-6xl text-center mb-16 font-bold animate-glitch" data-text="Featured Projects">Featured Projects</h2>
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
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <ProjectSliderCard project={project} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-accent -left-4" />
          <CarouselNext className="text-accent -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
