import { BrainCircuit, Layers, Camera, GitFork, Sparkles, BarChart3, Table2, Sigma, Code, Cpu, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: "The Machine Learning Core",
    icon: <BrainCircuit className="h-10 w-10 mb-4 text-accent" />,
    description: "At the heart of my arsenal lies a deep understanding of machine learning principles, allowing me to build intelligent models that learn and predict.",
    skills: ["Machine learning", "scikit-learn"],
  },
  {
    title: "The Deep Learning Arsenal",
    icon: <Layers className="h-10 w-10 mb-4 text-accent" />,
    description: "For more complex challenges, I deploy my deep learning arsenal, crafting neural networks that mimic the human brain to solve intricate problems.",
    skills: ["Deep learning", "TensorFlow"],
  },
  {
    title: "The Visionary's Eye",
    icon: <Camera className="h-10 w-10 mb-4 text-accent" />,
    description: "With a keen eye for detail, I utilize computer vision to enable machines to see, interpret, and understand the visual world.",
    skills: ["Computer vision", "Python"],
  },
  {
    title: "The Data Toolkit",
    icon: <Table2 className="h-10 w-10 mb-4 text-accent" />,
    description: "Every great model is built on a foundation of clean data. My toolkit includes the essential libraries for data manipulation and visualization.",
    skills: ["Pandas", "Numpy", "Matplotlib"],
  },
  {
    title: "Developer Essentials",
    icon: <Cpu className="h-10 w-10 mb-4 text-accent" />,
    description: "Beyond AI, I possess the fundamental skills of a modern developer, from version control to web basics, ensuring robust and scalable projects.",
    skills: ["Git and Github", "Web development", "Quick learning"],
  },
    {
    title: "The AI Alchemist",
    icon: <Bot className="h-10 w-10 mb-4 text-accent" />,
    description: "I transform complex algorithms into practical applications, always ready to learn and adapt with speed and efficiency.",
    skills: ["Quick learning", "Git and Github"],
  }
];


export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-grid-pattern bg-background/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline-display text-4xl md:text-6xl font-bold mb-4 animate-glitch" data-text="My Tech Arsenal">My Tech Arsenal</h2>
          <p className="font-body text-lg text-foreground/80 max-w-3xl mx-auto">
            Welcome to my command center. This isn't just a list of skills; it's the story of my journey and the tools I've mastered along the way. Each category represents a chapter in my quest to build smarter, more intuitive technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card/50 border border-primary/20 rounded-xl p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, opacity: 0 }}
            >
              <div className="flex justify-center items-center">
                {category.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">{category.title}</h3>
              <p className="font-body text-foreground/70 mb-6">{category.description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="font-code text-sm bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
