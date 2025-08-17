import { skillCategories } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
              {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((category, index) => (
                <AccordionItem 
                  key={category.title} 
                  value={`item-${index}`}
                  className="bg-card/50 border border-primary/20 rounded-xl backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-lg hover:shadow-accent/20 data-[state=open]:border-accent"
                >
                  <AccordionTrigger className="font-headline text-xl p-6 text-primary hover:no-underline [&[data-state=open]]:text-accent">
                    <div className="flex items-center gap-4">
                      <category.icon className="h-8 w-8 text-accent" />
                      <span>{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="font-body text-foreground/70 mb-6">{category.description}</p>
                    <div className="flex flex-wrap justify-start gap-3">
                      {category.skills.map(skill => (
                        <span key={skill} className="font-code text-sm bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((category, index) => (
                <AccordionItem 
                  key={category.title} 
                  value={`item-${index + Math.ceil(skillCategories.length / 2)}`}
                  className="bg-card/50 border border-primary/20 rounded-xl backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-lg hover:shadow-accent/20 data-[state=open]:border-accent"
                >
                  <AccordionTrigger className="font-headline text-xl p-6 text-primary hover:no-underline [&[data-state=open]]:text-accent">
                    <div className="flex items-center gap-4">
                      <category.icon className="h-8 w-8 text-accent" />
                      <span>{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="font-body text-foreground/70 mb-6">{category.description}</p>
                    <div className="flex flex-wrap justify-start gap-3">
                      {category.skills.map(skill => (
                        <span key={skill} className="font-code text-sm bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
