import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: "Project Alpha",
    category: "Web App",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract technology",
    description: "A cutting-edge web application that leverages generative AI to create dynamic user experiences. Built with a modern tech stack for maximum performance.",
    keywords: "React, Next.js, AI, TypeScript, Tailwind CSS",
    projectDetails: "Developed a full-stack web application using Next.js for the frontend and a serverless backend on Firebase. Integrated a generative AI model for personalized content creation and user interaction.",
  },
  {
    title: "Project Beta",
    category: "Mobile Design",
    image: "https://placehold.co/600x400.png",
    imageHint: "vibrant user interface",
    description: "An innovative mobile app design focused on intuitive navigation and a visually stunning interface. Every interaction is crafted for delight.",
    keywords: "UI/UX, Figma, Mobile, Design System, Prototyping",
    projectDetails: "Designed a mobile application focused on improving user engagement through gamification. Created high-fidelity prototypes and a comprehensive design system in Figma, ensuring consistency and scalability.",
  },
  {
    title: "Project Gamma",
    category: "E-commerce",
    image: "https://placehold.co/600x400.png",
    imageHint: "futuristic online store",
    description: "A dynamic e-commerce platform with a unique, artistic flair. Breaks the mold of traditional online stores with creative layouts and animations.",
    keywords: "Shopify, Headless, React, E-commerce, WebGL",
    projectDetails: "Built a headless e-commerce store using Shopify's API and a custom React frontend. Implemented WebGL for interactive product visualizations, focusing on performance and unique user interactions.",
  }
];

export type Project = (typeof projects)[0];

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
