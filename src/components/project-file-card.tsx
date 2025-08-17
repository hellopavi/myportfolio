"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectFile } from "@/lib/projects";
import Image from "next/image";
import { FileText, Clapperboard, FileQuestion } from "lucide-react";

interface ProjectFileCardProps {
  file: ProjectFile;
  index: number;
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

export function ProjectFileCard({ file, index }: ProjectFileCardProps) {
  return (
    <a href={file.url} target="_blank" rel="noopener noreferrer">
      <Card 
        className="bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
        style={{ animationDelay: `${0.1 + index * 0.05}s`, opacity: 0 }}
      >
        <CardHeader className="p-0 h-48 bg-muted/30 flex items-center justify-center">
          {file.type === 'image' ? (
            <div className="relative w-full h-full">
              <Image
                src={file.url}
                alt={file.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ) : (
            <FileIcon type={file.type} extension={file.extension} />
          )}
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="font-body text-base truncate" title={file.name}>
            {file.name}
          </CardTitle>
        </CardContent>
      </Card>
    </a>
  );
}