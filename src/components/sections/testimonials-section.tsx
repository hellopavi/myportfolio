"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: "https://placehold.co/100x100.png",
    imageHint: "woman professional portrait",
    quote: "Working with them was an absolute pleasure. Their creativity and technical expertise are unmatched. They took our vision and turned it into a reality that exceeded all our expectations.",
  },
  {
    name: "John Smith",
    title: "Project Manager, Tech Solutions",
    image: "https://placehold.co/100x100.png",
    imageHint: "man professional portrait",
    quote: "The level of professionalism and dedication to our project was outstanding. They are not just a developer, but a true partner who is invested in your success. Highly recommended!",
  },
  {
    name: "Emily White",
    title: "Art Director, Creative Co.",
    image: "https://placehold.co/100x100.png",
    imageHint: "person professional portrait",
    quote: "I've never seen a developer with such a keen eye for design. The final product was not only technically flawless but also visually stunning. A rare combination of skills!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline-display text-4xl md:text-6xl text-center mb-12 font-bold">Raves & Reviews</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-card border-primary/20 h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                      <Avatar className="w-20 h-20 mb-4 border-4 border-accent">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-body text-foreground/80 italic mb-4 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="font-headline text-xl font-semibold text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-accent" />
          <CarouselNext className="text-accent" />
        </Carousel>
      </div>
    </section>
  )
}
