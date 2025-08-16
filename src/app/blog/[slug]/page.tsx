import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    slug: 'demystifying-generative-ai',
    title: "Demystifying Generative AI",
    date: "2024-07-21",
    tags: ["AI", "Web Dev", "Future Tech"],
    image: "https://placehold.co/1200x600.png",
    imageHint: "neural network visualization",
    content: `
      <p>Generative AI is not just a buzzword; it's a revolutionary technology that's reshaping the digital landscape. From creating stunning visuals to writing human-like text, its applications are vast and growing every day. In this post, we'll break down what Generative AI is, how it works, and why it's a game-changer for developers and designers alike.</p>
      <h3 class="font-headline text-2xl mt-6 mb-3 text-primary">The Core Concepts</h3>
      <p>At its heart, Generative AI refers to artificial intelligence models that can create new, original content. Unlike discriminative models that classify or predict based on input data, generative models learn the underlying patterns of data and use that knowledge to generate novel outputs. Think of it as the difference between a student who can only answer multiple-choice questions and one who can write a creative essay.</p>
      <blockquote class="border-l-4 border-accent pl-4 my-6 italic text-foreground/80">
        "The most exciting breakthrough in AI is not just about understanding the world, but about creating it."
      </blockquote>
      <p>We'll explore popular architectures like Generative Adversarial Networks (GANs) and Transformers, the powerhouses behind models like DALL-E and GPT-4. Understanding these concepts is key to harnessing their full potential in your own projects.</p>
    `
  },
    {
    slug: 'the-art-of-ui-animation',
    title: "The Art of UI Animation",
    date: "2024-07-15",
    tags: ["UI/UX", "Design", "Frontend"],
    image: "https://placehold.co/1200x600.png",
    imageHint: "smooth animation curves",
    content: `
      <p>Animation in user interfaces is more than just eye candy. When used thoughtfully, it can guide users, provide feedback, and create a more intuitive and enjoyable experience. This post delves into the principles of effective UI animation and how to implement it without sacrificing performance.</p>
      <h3 class="font-headline text-2xl mt-6 mb-3 text-primary">Principles of Motion Design</h3>
      <p>We'll cover key principles like easing, timing, and choreography. Understanding how to apply these can transform a clunky interface into a fluid and responsive one. For example, an 'ease-out' curve makes an element feel like it's accelerating and then smoothly coming to a stop, which feels natural to the human eye.</p>
      <p>We will also look at practical examples using CSS transitions, keyframe animations, and JavaScript libraries like Framer Motion to bring your designs to life. The goal is to create animations that are both beautiful and purposeful.</p>
    `
  },
];

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
