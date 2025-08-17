
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectFile } from '@/lib/projects';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface LightboxProps {
  files: ProjectFile[];
  currentIndex: number;
  onClose: () => void;
  setCurrentIndex: (index: number) => void;
}

export function Lightbox({ files, currentIndex, onClose, setCurrentIndex }: LightboxProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % files.length);
  };

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + files.length) % files.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);
  
  const currentFile = files[currentIndex];
  if (!currentFile) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
        "transition-opacity duration-300",
        isClosing ? "opacity-0" : "opacity-100"
      )}
      onClick={handleClose}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 text-white/80 hover:text-white hover:bg-white/10 h-12 w-12"
          onClick={handleClose}
        >
          <X className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white hover:bg-white/10 h-14 w-14"
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          disabled={files.length <= 1}
        >
          <ChevronLeft className="h-10 w-10" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white hover:bg-white/10 h-14 w-14"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          disabled={files.length <= 1}
        >
          <ChevronRight className="h-10 w-10" />
        </Button>
        
        <div
          className="lightbox-content relative w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {currentFile.type === 'image' && (
            <Image
              src={currentFile.url}
              alt={currentFile.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          )}
          {currentFile.type === 'video' && (
            <video
              src={currentFile.url}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
