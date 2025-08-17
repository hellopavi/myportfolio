import fs from 'fs/promises';
import path from 'path';

export interface ProjectFile {
  name: string;
  url: string;
  type: 'image' | 'video' | 'pdf' | 'other';
  extension: string;
}

const getFileType = (extension: string): ProjectFile['type'] => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  const pdfExtensions = ['.pdf'];

  if (imageExtensions.includes(extension)) return 'image';
  if (videoExtensions.includes(extension)) return 'video';
  if (pdfExtensions.includes(extension)) return 'pdf';
  return 'other';
};

export async function getProjectFiles(projectSlug: string): Promise<ProjectFile[]> {
  const projectDirectory = path.join(process.cwd(), 'public', 'projects', projectSlug);

  try {
    const filenames = await fs.readdir(projectDirectory);
    
    return filenames.map(name => {
      const extension = path.extname(name).toLowerCase();
      return {
        name,
        url: `/projects/${projectSlug}/${name}`,
        type: getFileType(extension),
        extension: extension.substring(1),
      };
    });
  } catch (error) {
    // If the directory doesn't exist, just return an empty array.
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.warn(`Directory not found for project slug: ${projectSlug}. Returning empty file list.`);
      return [];
    }
    // For other errors, re-throw them.
    throw error;
  }
}
