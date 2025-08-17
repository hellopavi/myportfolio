
"use client"

import * as React from "react"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { BlogSliderCard } from "../blog-slider-card";
import { cn } from "@/lib/utils";

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 4);
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="blog" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="box">
            <div className="inner">
              <span>The Blog</span>
            </div>
            <div className="inner">
              <span>The Blog</span>
            </div>
          </div>
        </div>
        <Carousel setApi={setApi} className="w-full mb-12"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {featuredPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <BlogSliderCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
