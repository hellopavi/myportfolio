import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: "Machine Learning Projects",
    category: "Machine Learning",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract machine learning",
    description: "A collection of machine learning projects including salary classification (KNN), digit classification (SVM), leaf prediction, Titanic survival prediction (Naive Bayes), breast cancer classification, and digit recognition (Random Forest).",
    keywords: "KNN, SVM, Decision Tree, Naive Bayes, Random Forest",
    projectDetails: "Implemented various machine learning algorithms for classification and prediction tasks. Projects cover K-Nearest Neighbors, Support Vector Machine, Decision Tree Classifier, Gaussian Naive Bayes, and Random Forest.",
  },
  {
    title: "Deep Learning Projects",
    category: "Deep Learning",
    image: "https://placehold.co/600x400.png",
    imageHint: "neural network",
    description: "Developed deep learning models for image classification, character recognition, and hand gesture recognition using Convolutional Neural Networks (CNNs).",
    keywords: "Deep Learning, CNN, Image Classification, Character Recognition, Gesture Recognition",
    projectDetails: "Applied Convolutional Neural Networks (CNNs) to solve computer vision problems like image classification, character recognition from images, and real-time hand gesture recognition.",
  },
  {
    title: "Computer Vision Projects",
    category: "Computer Vision",
    image: "https://placehold.co/600x400.png",
    imageHint: "object detection overlay",
    description: "Projects in computer vision including moving object detection, face detection, and emotion recognition using pre-built libraries.",
    keywords: "Computer Vision, OpenCV, Object Detection, Face Detection, Emotion Recognition",
    projectDetails: "Utilized computer vision libraries to build applications for detecting moving objects in video, identifying faces, and recognizing emotions from facial expressions.",
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
