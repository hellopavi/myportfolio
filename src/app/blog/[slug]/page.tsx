import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <article>
          <header className="relative py-24 md:py-40 text-white">
            <div className="absolute inset-0">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.imageHint}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="font-headline-display text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  <span>{post.tags.join(', ')}</span>
                </div>
              </div>
            </div>
          </header>
          <div className="bg-background py-16">
            <div className="container mx-auto px-4">
              <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto font-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="max-w-4xl mx-auto mt-12">
                <h3 className="font-headline text-2xl mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-lg px-4 py-1 border-accent text-accent">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}