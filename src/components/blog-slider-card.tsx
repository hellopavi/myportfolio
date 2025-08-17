
"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import type { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { useInView } from "react-intersection-observer";
import { cn } from '@/lib/utils';

interface BlogSliderCardProps {
    post: (typeof blogPosts)[0];
}

export function BlogSliderCard({ post }: BlogSliderCardProps) {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="h-full">
            <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card 
                    className={cn(
                        "bg-card border-primary/20 overflow-hidden h-full flex flex-col transition-all duration-500",
                        inView ? "opacity-100 scale-100 shadow-2xl shadow-primary/20" : "opacity-40 scale-90"
                    )}
                >
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
                    <CardContent className="p-6 flex-grow">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <CardTitle className="font-headline text-2xl mb-2 group-hover:text-accent transition-colors">{post.title}</CardTitle>
                        <p className="font-body text-foreground/80">
                            {post.excerpt}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}

