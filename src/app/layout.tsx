
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Belleza, Alegreya, Orbitron } from 'next/font/google';
import { cn } from '@/lib/utils';
import React from 'react';
import { CustomContextMenu } from '@/components/custom-context-menu';
import { useCustomContextMenu } from '@/hooks/use-custom-context-menu';

// This is a workaround for Metadata in a client component
const metadata: Metadata = {
  title: 'Pavithran',
  description: 'A creative portfolio for a visionary developer.',
};

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contextMenu } = useCustomContextMenu();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </head>
      <body className={cn("font-body bg-background text-foreground antialiased", belleza.variable, alegreya.variable, orbitron.variable)} suppressHydrationWarning>
        {children}
        {contextMenu && <CustomContextMenu {...contextMenu} />}
      </body>
    </html>
  );
}
