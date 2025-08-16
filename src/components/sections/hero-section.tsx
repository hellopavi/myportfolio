import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 animate-[fade-in-up_0.5s_ease-out]">
          <span className="text-primary">Vibe</span> <span className="text-accent">Vault</span>
        </h1>
        <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 mb-8 animate-[fade-in-up_0.5s_0.2s_ease-out_forwards]" style={{opacity: 0}}>
          A creative developer exploring the frontiers of web technology and design.
        </p>
        <div className="animate-[fade-in-up_0.5s_0.4s_ease-out_forwards]" style={{opacity: 0}}>
          <Button asChild size="lg" className="font-headline text-lg">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
