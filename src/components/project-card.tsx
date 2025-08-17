
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/components/sections/projects-section';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card 
        className="bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up h-full flex flex-col"
        style={{ animationDelay: `${0.3 + index * 0.15}s`, opacity: 0 }}
      >
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={project.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <Badge variant="outline" className="mb-2 border-accent text-accent">{project.category}</Badge>
          <CardTitle className="font-headline text-2xl mb-2 group-hover:text-accent transition-colors">{project.title}</CardTitle>
          <p className="font-body text-foreground/80">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
