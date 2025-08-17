
"use client";

import { useState, useMemo, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { getProjectFiles } from '@/lib/projects';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectFileCard } from '@/components/project-file-card';
import type { ProjectFile } from '@/lib/projects';
import type { Project } from '@/lib/data';

type FilterType = 'all' | 'image' | 'video' | 'other';

// This needs to be a client component for the filtering logic,
// but we need to fetch server-side data. We can do this with a wrapper or useEffect.
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [projectFiles, setProjectFiles] = useState<ProjectFile[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectData = projects.find((p) => p.slug === params.slug);
    if (!projectData) {
      notFound();
    }
    setProject(projectData);

    const fetchFiles = async () => {
      setLoading(true);
      const files = await getProjectFiles(params.slug);
      setProjectFiles(files);
      setLoading(false);
    };

    fetchFiles();
  }, [params.slug]);

  const filteredFiles = useMemo(() => {
    if (activeFilter === 'all') {
      return projectFiles;
    }
    if (activeFilter === 'other') {
      return projectFiles.filter(file => file.type !== 'image' && file.type !== 'video');
    }
    return projectFiles.filter((file) => file.type === activeFilter);
  }, [projectFiles, activeFilter]);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
            <div className="text-center">
                <p className="text-2xl">Loading Project...</p>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasVideos = projectFiles.some(file => file.type === 'video');
  const hasOtherFiles = projectFiles.some(file => file.type !== 'image' && file.type !== 'video');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <header className="relative py-24 md:py-40 text-white">
          <div className="absolute inset-0">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.imageHint}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent bg-accent/10 text-lg px-4 py-1">{project.category}</Badge>
            <h1 className="font-headline-display text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="font-body max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
              {project.description}
            </p>
          </div>
        </header>
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl text-center mb-8 font-bold">Project Files</h2>
            
            {projectFiles.length > 0 ? (
              <>
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                  <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => setActiveFilter('all')}>All</Button>
                  <Button variant={activeFilter === 'image' ? 'default' : 'outline'} onClick={() => setActiveFilter('image')}>Images</Button>
                  {hasVideos && <Button variant={activeFilter === 'video' ? 'default' : 'outline'} onClick={() => setActiveFilter('video')}>Videos</Button>}
                  {hasOtherFiles && <Button variant={activeFilter === 'other' ? 'default' : 'outline'} onClick={() => setActiveFilter('other')}>Files</Button>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {filteredFiles.map((file, index) => (
                    <ProjectFileCard key={file.url} file={file} index={index} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16 px-8 bg-card rounded-lg border border-dashed border-primary/30">
                 {loading ? (
                   <p className="font-body text-foreground/70 text-lg">Loading project files...</p>
                 ) : (
                  <p className="font-body text-foreground/70 text-lg">
                    No project files found. Add some files to{' '}
                    <code className="bg-primary/10 text-accent p-1 rounded-md text-base">
                      public/projects/{project.slug}
                    </code>{' '}
                    to see them here.
                  </p>
                 )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
