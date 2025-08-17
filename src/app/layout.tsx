import type {Metadata} from 'next';
import './globals.css';
import { Belleza, Alegreya, Orbitron } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
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
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("font-body bg-background text-foreground antialiased", belleza.variable, alegreya.variable, orbitron.variable)} suppressHydrationWarning>{children}</body>
    </html>
  );
}
