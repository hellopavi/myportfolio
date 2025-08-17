
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { ProjectFileCard } from './project-file-card';
import { ProjectFile } from '@/lib/projects';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type PropType = {
  files: ProjectFile[];
  title?: string;
  options?: EmblaOptionsType;
};

const TWEEN_FACTOR = 1.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const ProjectFileSlider: React.FC<PropType> = (props) => {
  const { files, title, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInView = emblaApi.slidesInView();

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div>
      {title && <h3 className="font-headline text-2xl md:text-3xl text-center mb-8 font-bold">{title}</h3>}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4" style={{ perspective: '1000px' }}>
            {files.map((file, index) => {
              const tweenValue = tweenValues[index] || 0;
              return (
              <div
                className="flex-shrink-0 flex-grow-0 min-w-0 pl-4 relative"
                style={{ flexBasis: '40%', '@media (min-width: 768px)': { flexBasis: '25%' } }}
                key={file.url}
              >
                <div style={{
                  transform: `rotateY(${-tweenValue * 20 + 10}deg) scale(${tweenValue * 0.4 + 0.6})`,
                  opacity: tweenValue * 0.5 + 0.5
                }}>
                  <ProjectFileCard
                    file={file}
                    scale={tweenValue}
                    inView={tweenValue > 0.5}
                  />
                </div>
              </div>
            )})}
          </div>
        </div>
        
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 justify-between w-full">
            <Button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                variant="ghost"
                size="icon"
                className="absolute -left-16 rounded-full h-12 w-12 text-accent disabled:opacity-30"
            >
                <ArrowLeft className="h-8 w-8" />
            </Button>
            <Button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                variant="ghost"
                size="icon"
                className="absolute -right-16 rounded-full h-12 w-12 text-accent disabled:opacity-30"
            >
                <ArrowRight className="h-8 w-8" />
            </Button>
        </div>
      </div>
    </div>
  );
};
