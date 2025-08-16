const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Figma", "UI/UX Design", "GenAI", "Firebase", "Node.js", "GraphQL", "Web Animations"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-6xl text-center mb-12 font-bold">My Skillset</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="font-headline text-lg md:text-xl text-primary-foreground bg-primary/80 border border-primary rounded-full px-6 py-3 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg hover:shadow-accent/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
