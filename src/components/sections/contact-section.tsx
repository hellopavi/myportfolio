
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Rocket, User, Mail, MessageSquare } from "lucide-react";
import { contactData } from '@/lib/data';
import { submitContactForm } from "@/app/actions";
import React, { useState, useEffect } from "react";
import { SuccessAnimation } from "@/components/success-animation";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [formState, setFormState] = useState<{ success: boolean; message: string | null }>({ success: false, message: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setFormState({ success: false, message: null });

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    try {
      const result = await submitContactForm(null, formData);
      setFormState(result);

      if (result.success) {
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
       toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: "An unexpected error occurred. Please try again.",
        });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  if (formState.success) {
    return (
      <section id="contact" className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
            <SuccessAnimation />
            <h2 className="font-headline-display text-3xl md:text-5xl font-bold mt-8">
              {formState.message}
            </h2>
            <p className="font-body text-lg text-foreground/80 mt-4">Thank you for reaching out!</p>
            <Button onClick={() => setFormState({ success: false, message: null })} className="mt-8">Send Another Message</Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-headline-display text-4xl md:text-6xl text-center mb-4 font-bold animate-glitch" data-text="Launch a Transmission">
          {contactData.title}
        </h2>
        <p className="font-body text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
          {contactData.description}
        </p>
        <div className="max-w-xl mx-auto p-8 border border-primary/20 rounded-2xl bg-card/50 backdrop-blur-sm relative transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-accent rounded-tl-2xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-accent rounded-br-2xl animate-pulse animation-delay-2000"></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-lg flex items-center"><User className="mr-2 h-5 w-5 text-accent"/> Your Callsign (Name)</FormLabel>
                    <FormControl>
                      <Input placeholder="Captain Kirk" {...field} className="h-12 text-base bg-background/70 border-primary/30 focus:border-accent"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-lg flex items-center"><Mail className="mr-2 h-5 w-5 text-accent"/> Your Comms Channel (Email)</FormLabel>
                    <FormControl>
                      <Input placeholder="kirk@starfleet.com" {...field} className="h-12 text-base bg-background/70 border-primary/30 focus:border-accent"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-lg flex items-center"><MessageSquare className="mr-2 h-5 w-5 text-accent"/> Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Beam me up, Scotty! I have an idea..." {...field} rows={6} className="text-base bg-background/70 border-primary/30 focus:border-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full text-lg font-headline group bg-accent hover:bg-accent/80 text-accent-foreground transform transition-all duration-300 hover:scale-110" disabled={isSubmitting}>
                <Rocket className="mr-3 h-6 w-6 transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:scale-125" />
                {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
