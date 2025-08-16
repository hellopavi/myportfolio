
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/components/sections/projects-section';
import { DescriptionGenerator } from './description-generator';
import { Wand2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectSliderCard({ project, index }: ProjectCardProps) {
  const [description, setDescription] = useState(project.description);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);

  return (
    <>
      <Card
        className="bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/20"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
               <Badge variant="secondary" className="mb-2 border-accent text-accent">{project.category}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl mb-4 group-hover:text-accent transition-colors">{project.title}</CardTitle>
          <p className="font-body text-foreground/80">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button onClick={() => setIsGeneratorOpen(true)} variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Wand2 className="mr-2 h-4 w-4" />
            AI Enhance Description
          </Button>
        </CardFooter>
      </Card>

      <DescriptionGenerator
        isOpen={isGeneratorOpen}
        setIsOpen={setIsGeneratorOpen}
        setProjectDescription={setDescription}
        project={project}
      />
    </>
  );
}
