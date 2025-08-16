import { skillCategories } from '@/lib/data';

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
                <category.icon className="h-10 w-10 mb-4 text-accent" />
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