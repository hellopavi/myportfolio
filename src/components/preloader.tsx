
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function Preloader() {
  const text = "HelloPavi";
  return (
    <div className={cn(
      "preloader fixed inset-0 z-[101] flex items-center justify-center bg-background",
    )}>
      <h1 className="preloader-glitch animate-glitch" data-text={text}>
        {text.split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
