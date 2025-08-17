
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { getProjectFiles } from '@/lib/projects';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ProjectGallery } from '@/components/project-gallery';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectFiles = await getProjectFiles(params.slug);

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
            <h2 className="font-headline text-3xl md:text-4xl text-center mb-12 font-bold">Project Files</h2>
            <ProjectGallery files={projectFiles} projectSlug={project.slug} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
