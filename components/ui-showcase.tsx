'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface UIShowcaseProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function UIShowcase({ images }: UIShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video relative w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Custom indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              activeIndex === index ? 'bg-white w-4' : 'bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  );
}
