"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectFile } from "@/lib/projects";
import Image from "next/image";
import { FileText, Clapperboard, FileQuestion, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectFileCardProps {
  file: ProjectFile;
  scale: number;
  inView: boolean;
}

const FileIcon = ({ type, extension }: { type: ProjectFile['type'], extension: string }) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-12 w-12 text-accent" />;
    case 'video':
      return <Clapperboard className="h-12 w-12 text-accent" />;
    default:
      return (
          <div className="relative">
              <FileQuestion className="h-12 w-12 text-accent" />
              <span className="absolute -bottom-2 -right-3 text-xs font-bold bg-accent text-accent-foreground rounded-full px-2 py-0.5">
                  {extension.toUpperCase()}
              </span>
          </div>
      );
  }
}

export function ProjectFileCard({ file, scale, inView }: ProjectFileCardProps) {
  return (
    <a href={file.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card 
        className={cn(
            "bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 will-change-transform shadow-lg hover:shadow-2xl hover:shadow-primary/20 rounded-xl",
            !inView && "grayscale"
        )}
        style={{ transform: `scale(${scale})`}}
      >
        <CardHeader className="p-0 h-48 md:h-64 bg-muted/30 flex items-center justify-center">
          {file.type === 'image' && (
            <div className="relative w-full h-full">
              <Image
                src={file.url}
                alt={file.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}
          {file.type === 'video' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                    src={file.url}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    loop
                    autoPlay
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-16 h-16 text-white/80 transform transition-transform group-hover:scale-125" />
                </div>
              </div>
          )}
          {file.type !== 'image' && file.type !== 'video' && (
            <FileIcon type={file.type} extension={file.extension} />
          )}
        </CardHeader>
        <CardContent className="p-4 bg-card">
          <CardTitle className="font-body text-base truncate" title={file.name}>
            {file.name}
          </CardTitle>
        </CardContent>
      </Card>
    </a>
  );
}
