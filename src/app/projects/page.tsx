import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="font-headline-display text-5xl md:text-7xl text-center mb-4 font-bold">All Projects</h1>
            <p className="font-body text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-16">
              Here is a collection of my work. Feel free to browse and explore the details of each project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
