
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectFileCard } from '@/components/project-file-card';
import type { ProjectFile } from '@/lib/projects';
import { LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Lightbox } from '@/components/lightbox';

type FilterType = 'all' | 'image' | 'video' | 'other';
type ViewType = 'grid' | 'list';

interface ProjectGalleryProps {
    files: ProjectFile[];
    projectSlug: string;
}

export function ProjectGallery({ files, projectSlug }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [view, setView] = useState<ViewType>('grid');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredFiles = useMemo(() => {
    if (activeFilter === 'all') {
      return files;
    }
    if (activeFilter === 'other') {
      return files.filter(file => file.type !== 'image' && file.type !== 'video');
    }
    return files.filter((file) => file.type === activeFilter);
  }, [files, activeFilter]);
  
  const mediaFiles = useMemo(() => files.filter(f => f.type === 'image' || f.type === 'video'), [files]);

  const openLightbox = (index: number) => {
    const originalIndex = files.findIndex(file => file.url === mediaFiles[index].url);
    setLightboxIndex(originalIndex);
  };
  
  const closeLightbox = () => setLightboxIndex(null);

  const hasImages = files.some(file => file.type === 'image');
  const hasVideos = files.some(file => file.type === 'video');
  const hasOtherFiles = files.some(file => file.type !== 'image' && file.type !== 'video');
  
  const handlePreview = (index: number) => {
    const file = filteredFiles[index];
    const mediaIndex = mediaFiles.findIndex(m => m.url === file.url);
    if(mediaIndex !== -1) {
      setLightboxIndex(mediaIndex);
    }
  }


  return (
    <>
      {files.length > 0 ? (
        <>
          <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
            <div className="flex justify-center flex-wrap gap-2">
                <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => setActiveFilter('all')}>All</Button>
                {hasImages && <Button variant={activeFilter === 'image' ? 'default' : 'outline'} onClick={() => setActiveFilter('image')}>Images</Button>}
                {hasVideos && <Button variant={activeFilter === 'video' ? 'default' : 'outline'} onClick={() => setActiveFilter('video')}>Videos</Button>}
                {hasOtherFiles && <Button variant={activeFilter === 'other' ? 'default' : 'outline'} onClick={() => setActiveFilter('other')}>Files</Button>}
            </div>
            <div className="flex items-center gap-2">
                <Button variant={view === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setView('grid')}>
                    <LayoutGrid className="h-5 w-5" />
                </Button>
                <Button variant={view === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setView('list')}>
                    <List className="h-5 w-5" />
                </Button>
            </div>
          </div>

          <div className={cn(
            view === 'grid' 
                ? 'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6' 
                : 'space-y-4 project-gallery-list'
          )}>
            {filteredFiles.map((file, index) => (
              <ProjectFileCard 
                key={file.url} 
                file={file} 
                index={index} 
                view={view}
                onPreview={handlePreview}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 px-8 bg-card rounded-lg border border-dashed border-primary/30">
          <p className="font-body text-foreground/70 text-lg">
            No project files found. Add some files to{' '}
            <code className="bg-primary/10 text-accent p-1 rounded-md text-base">
              public/projects/{projectSlug}
            </code>{' '}
            to see them here.
          </p>
        </div>
      )}
      {lightboxIndex !== null && (
        <Lightbox
          files={mediaFiles}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          setCurrentIndex={setLightboxIndex}
        />
      )}
    </>
  )
}
