import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';

export type { Project };

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-6xl text-center mb-12 font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
