import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-accent/30 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-secondary/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="font-headline-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 animate-glitch" data-text="Pavithran">
          <span className="text-primary">Pavi</span><span className="text-accent">thran</span>
        </h1>
        <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 mb-8 animate-[fade-in-up_0.5s_0.2s_ease-out_forwards]" style={{opacity: 0}}>
          A Computer Science Engineer exploring the frontiers of web technology and Artificial Intelligence.
        </p>
        <div className="animate-[fade-in-up_0.5s_0.4s_ease-out_forwards]" style={{opacity: 0}}>
          <Button asChild size="lg" className="font-headline text-lg group">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-accent rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
