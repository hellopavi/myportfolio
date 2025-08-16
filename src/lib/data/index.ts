import { BrainCircuit, Layers, Camera, Table2, Cpu, Bot } from 'lucide-react';

const resumeUrl = "https://drive.google.com/file/d/1WzQauysTn6igeazuxZRWkpv9X7vlESpg/view?usp=sharing";

export const aboutData = {
  name: "Pavithran",
  image: "/images/profile/mypic4.png",
  imageHint: "professional indian developer portrait",
  bio: [
    "I'm Pavithran, a curious and motivated individual with a strong passion for Artificial Intelligence. My journey began with exploring various internet resources, where I diving deep into machine learning, deep learning, and computer vision. I have hands-on experience with scikit-learn and TensorFlow, which I use to build and optimize AI models. My background in computer science and engineering has equipped me with the skills to tackle real-world problems and develop practical solutions.",
    "I'm eager to apply my knowledge in AI through collaboration on real-world projects, from data preprocessing to model deployment. I thrive in both independent and team settings, always looking to learn, grow, and contribute to innovative AI solutions. My goal is to gain hands-on experience and further develop my technical skills by working with experienced professionals in the field.",
  ],
  resumeUrl: resumeUrl,
};

export const projects = [
  {
    title: "Machine Learning Projects",
    category: "Machine Learning",
    image: "/images/projects/ml.jpg",
    imageHint: "abstract machine learning",
    description: "A collection of machine learning projects including salary classification (KNN), digit classification (SVM), leaf prediction, Titanic survival prediction (Naive Bayes), breast cancer classification, and digit recognition (Random Forest).",
    keywords: "KNN, SVM, Decision Tree, Naive Bayes, Random Forest",
    projectDetails: "Implemented various machine learning algorithms for classification and prediction tasks. Projects cover K-Nearest Neighbors, Support Vector Machine, Decision Tree Classifier, Gaussian Naive Bayes, and Random Forest.",
  },
  {
    title: "Deep Learning Projects",
    category: "Deep Learning",
    image: "/images/projects/dl.webp",
    imageHint: "neural network",
    description: "Developed deep learning models for image classification, character recognition, and hand gesture recognition using Convolutional Neural Networks (CNNs).",
    keywords: "Deep Learning, CNN, Image Classification, Character Recognition, Gesture Recognition",
    projectDetails: "Applied Convolutional Neural Networks (CNNs) to solve computer vision problems like image classification, character recognition from images, and real-time hand gesture recognition.",
  },
  {
    title: "Computer Vision Projects",
    category: "Computer Vision",
    image: "/images/projects/cv.webp",
    imageHint: "object detection overlay",
    description: "Projects in computer vision including moving object detection, face detection, and emotion recognition using pre-built libraries.",
    keywords: "Computer Vision, OpenCV, Object Detection, Face Detection, Emotion Recognition",
    projectDetails: "Utilized computer vision libraries to build applications for detecting moving objects in video, identifying faces, and recognizing emotions from facial expressions.",
  }
];

export type Project = (typeof projects)[0];


export const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: "/images/clients/men27.jpg",
    imageHint: "woman professional portrait",
    quote: "Working with them was an absolute pleasure. Their creativity and technical expertise are unmatched. They took our vision and turned it into a reality that exceeded all our expectations.",
  },
  {
    name: "John Smith",
    title: "Project Manager, Tech Solutions",
    image: "/images/clients/men35.png",
    imageHint: "man professional portrait",
    quote: "The level of professionalism and dedication to our project was outstanding. They are not just a developer, but a true partner who is invested in your success. Highly recommended!",
  },
  {
    name: "Emily White",
    title: "Art Director, Creative Co.",
    image: "/images/clients/fem27.png",
    imageHint: "person professional portrait",
    quote: "I've never seen a developer with such a keen eye for design. The final product was not only technically flawless but also visually stunning. A rare combination of skills!",
  },
];

export const blogPosts = [
  {
    slug: 'demystifying-generative-ai',
    title: "Demystifying Generative AI",
    date: "2024-07-21",
    excerpt: "A deep dive into how generative AI is changing the landscape of web development and design.",
    image: "/images/blog/b.png",
    imageHint: "neural network visualization",
    tags: ["AI", "Web Dev", "Future Tech"],
    content: `
      <p>Generative AI is not just a buzzword; it's a revolutionary technology that's reshaping the digital landscape. From creating stunning visuals to writing human-like text, its applications are vast and growing every day. In this post, we'll break down what Generative AI is, how it works, and why it's a game-changer for developers and designers alike.</p>
      <h3 class="font-headline text-2xl mt-6 mb-3 text-primary">The Core Concepts</h3>
      <p>At its heart, Generative AI refers to artificial intelligence models that can create new, original content. Unlike discriminative models that classify or predict based on input data, generative models learn the underlying patterns of data and use that knowledge to generate novel outputs. Think of it as the difference between a student who can only answer multiple-choice questions and one who can write a creative essay.</p>
      <blockquote class="border-l-4 border-accent pl-4 my-6 italic text-foreground/80">
        "The most exciting breakthrough in AI is not just about understanding the world, but about creating it."
      </blockquote>
      <p>We'll explore popular architectures like Generative Adversarial Networks (GANs) and Transformers, the powerhouses behind models like DALL-E and GPT-4. Understanding these concepts is key to harnessing their full potential in your own projects.</p>
    `
  },
  {
    slug: 'the-art-of-ui-animation',
    title: "The Art of UI Animation",
    date: "2024-07-15",
    excerpt: "Learn how to use animations to create engaging and intuitive user interfaces that delight users.",
    image: "/images/blog/d.png",
    imageHint: "smooth animation curves",
    tags: ["UI/UX", "Design", "Frontend"],
    content: `
      <p>Animation in user interfaces is more than just eye candy. When used thoughtfully, it can guide users, provide feedback, and create a more intuitive and enjoyable experience. This post delves into the principles of effective UI animation and how to implement it without sacrificing performance.</p>
      <h3 class="font-headline text-2xl mt-6 mb-3 text-primary">Principles of Motion Design</h3>
      <p>We'll cover key principles like easing, timing, and choreography. Understanding how to apply these can transform a clunky interface into a fluid and responsive one. For example, an 'ease-out' curve makes an element feel like it's accelerating and then smoothly coming to a stop, which feels natural to the human eye.</p>
      <p>We will also look at practical examples using CSS transitions, keyframe animations, and JavaScript libraries like Framer Motion to bring your designs to life. The goal is to create animations that are both beautiful and purposeful.</p>
    `
  },
  {
    slug: 'headless-cms-for-the-modern-web',
    title: "Headless CMS for the Modern Web",
    date: "2024-07-08",
    excerpt: "Exploring the benefits of a headless architecture for building fast, flexible, and future-proof websites.",
    image: "/images/blog/c.webp",
    imageHint: "API connections diagram",
    tags: ["CMS", "Architecture", "Web Dev"],
    content: `<p>A headless CMS decouples the content management backend from the presentation layer frontend. This post explores why this architecture is gaining popularity for building modern, multi-platform digital experiences.</p>`
  },
  {
    slug: 'building-scalable-react-applications',
    title: "Building Scalable React Applications",
    date: "2024-07-01",
    excerpt: "Best practices and patterns for creating large-scale applications with React that are maintainable and performant.",
    image: "/images/blog/a.png",
    imageHint: "component tree structure",
    tags: ["React", "Scalability", "Best Practices"],
    content: `<p>As React applications grow, maintaining them can become a challenge. This article covers architectural patterns like feature-based directory structures, state management strategies, and component design principles to keep your codebase clean and scalable.</p>`
  },
];

export const contactData = {
  title: "Launch a Transmission",
  description: "Got a cosmic idea, a wild project, or just want to decode the universe? Send your signal. My inbox is ready for warp speed."
};

export const skillCategories = [
  {
    title: "The Machine Learning Core",
    icon: BrainCircuit,
    description: "At the heart of my arsenal lies a deep understanding of machine learning principles, allowing me to build intelligent models that learn and predict.",
    skills: ["Machine learning", "scikit-learn"],
  },
  {
    title: "The Deep Learning Arsenal",
    icon: Layers,
    description: "For more complex challenges, I deploy my deep learning arsenal, crafting neural networks that mimic the human brain to solve intricate problems.",
    skills: ["Deep learning", "TensorFlow"],
  },
  {
    title: "The Visionary's Eye",
    icon: Camera,
    description: "With a keen eye for detail, I utilize computer vision to enable machines to see, interpret, and understand the visual world.",
    skills: ["Computer vision", "Python"],
  },
  {
    title: "The Data Toolkit",
    icon: Table2,
    description: "Every great model is built on a foundation of clean data. My toolkit includes the essential libraries for data manipulation and visualization.",
    skills: ["Pandas", "Numpy", "Matplotlib"],
  },
  {
    title: "Developer Essentials",
    icon: Cpu,
    description: "Beyond AI, I possess the fundamental skills of a modern developer, from version control to web basics, ensuring robust and scalable projects.",
    skills: ["Git and Github", "Web development", "Quick learning"],
  },
    {
    title: "The AI Alchemist",
    icon: Bot,
    description: "I transform complex algorithms into practical applications, always ready to learn and adapt with speed and efficiency.",
    skills: ["Quick learning", "Git and Github"],
  }
];

export const socialLinks = {
  resume: "https://drive.google.com/file/d/1WzQauysTn6igeazuxZRWkpv9X7vlESpg/view?usp=sharing",
  email: "pavithranofficial1@gmail.com",
  github: "https://github.com/hellopavi",
  linkedin: "https://www.linkedin.com/in/hellopavi"
};
