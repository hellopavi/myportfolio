import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="font-headline-display text-5xl md:text-7xl text-center mb-16 font-bold">The Hello Pavi Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.slug}
                  className="bg-card border-primary/20 overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s`, opacity: 0 }}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
