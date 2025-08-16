import { Github, Linkedin, Twitter, FileText } from 'lucide-react';

const SocialLink = ({ href, children, title }: { href: string; children: React.ReactNode, title: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="text-foreground/60 transition-all duration-300 hover:text-accent hover:scale-125 hover:rotate-12"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 bg-card/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="font-body text-foreground/80 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Hello Pavi. Built with crazy mode.
        </p>
        <div className="flex items-center space-x-6">
          <SocialLink href="/resume.pdf" title="Download Resume">
            <FileText className="h-6 w-6" />
          </SocialLink>
          <SocialLink href="https://twitter.com" title="Twitter">
            <Twitter className="h-6 w-6" />
          </SocialLink>
          <SocialLink href="https://github.com" title="GitHub">
            <Github className="h-6 w-6" />
          </SocialLink>
          <SocialLink href="https://linkedin.com" title="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
