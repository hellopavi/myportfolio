"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import type { Project } from '@/components/sections/projects-section';

const formSchema = z.object({
  keywords: z.string().min(3, "Please enter at least one keyword."),
  projectDetails: z.string().min(10, "Please provide some project details."),
});

type FormValues = z.infer<typeof formSchema>;

interface DescriptionGeneratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setProjectDescription: (description: string) => void;
  project: Project;
}

export function DescriptionGenerator({
  isOpen,
  setIsOpen,
  setProjectDescription,
  project,
}: DescriptionGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: project.keywords,
      projectDetails: project.projectDetails,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const result = await generateProjectDescription(data);
      if (result.description) {
        setProjectDescription(result.description);
        toast({
          title: "Success!",
          description: "New project description has been generated.",
        });
        setIsOpen(false);
      } else {
        throw new Error("Generated description was empty.");
      }
    } catch (error) {
      console.error("Failed to generate description:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to generate project description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/50">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Generate Description</DialogTitle>
          <DialogDescription className="font-body">
            Use AI to craft a compelling description for your project. Adjust the keywords and details for a perfect result.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, AI, Web Design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your project, its goals, and tech stack." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
