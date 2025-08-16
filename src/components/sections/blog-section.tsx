import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    slug: 'demystifying-generative-ai',
    title: "Demystifying Generative AI",
    date: "2024-07-21",
    excerpt: "A deep dive into how generative AI is changing the landscape of web development and design.",
    image: "https://placehold.co/600x400.png",
    imageHint: "neural network visualization"
  },
  {
    slug: 'the-art-of-ui-animation',
    title: "The Art of UI Animation",
    date: "2024-07-15",
    excerpt: "Learn how to use animations to create engaging and intuitive user interfaces that delight users.",
    image: "https://placehold.co/600x400.png",
    imageHint: "smooth animation curves"
  },
  {
    slug: 'headless-cms-for-the-modern-web',
    title: "Headless CMS for the Modern Web",
    date: "2024-07-08",
    excerpt: "Exploring the benefits of a headless architecture for building fast, flexible, and future-proof websites.",
    image: "https://placehold.co/600x400.png",
    imageHint: "API connections diagram"
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-headline-display text-4xl md:text-6xl text-center mb-12 font-bold">From The Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.slug}
              className="bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s`, opacity: 0 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <CardTitle className="font-headline text-2xl mb-2 group-hover:text-accent transition-colors">{post.title}</CardTitle>
                  <p className="font-body text-foreground/80">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <Button asChild size="lg" className="font-headline text-lg group">
                <Link href="/blog">
                    View All Posts
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
