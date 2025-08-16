import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-accent"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="font-body text-foreground/80 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Vibe Vault. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <SocialLink href="https://twitter.com">
            <Twitter className="h-6 w-6" />
          </SocialLink>
          <SocialLink href="https://github.com">
            <Github className="h-6 w-6" />
          </SocialLink>
          <SocialLink href="https://linkedin.com">
            <Linkedin className="h-6 w-6" />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
