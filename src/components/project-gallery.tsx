
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectFileCard } from '@/components/project-file-card';
import type { ProjectFile } from '@/lib/projects';

type FilterType = 'all' | 'image' | 'video' | 'other';

interface ProjectGalleryProps {
    files: ProjectFile[];
    projectSlug: string;
}

export function ProjectGallery({ files, projectSlug }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredFiles = useMemo(() => {
    if (activeFilter === 'all') {
      return files;
    }
    if (activeFilter === 'other') {
      return files.filter(file => file.type !== 'image' && file.type !== 'video');
    }
    return files.filter((file) => file.type === activeFilter);
  }, [files, activeFilter]);

  const hasImages = files.some(file => file.type === 'image');
  const hasVideos = files.some(file => file.type === 'video');
  const hasOtherFiles = files.some(file => file.type !== 'image' && file.type !== 'video');

  return (
    <>
      {files.length > 0 ? (
        <>
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => setActiveFilter('all')}>All</Button>
            {hasImages && <Button variant={activeFilter === 'image' ? 'default' : 'outline'} onClick={() => setActiveFilter('image')}>Images</Button>}
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
          <p className="font-body text-foreground/70 text-lg">
            No project files found. Add some files to{' '}
            <code className="bg-primary/10 text-accent p-1 rounded-md text-base">
              public/projects/{projectSlug}
            </code>{' '}
            to see them here.
          </p>
        </div>
      )}
    </>
  )
}
