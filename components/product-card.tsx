"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

export function ProductCard({ title, description, href, imageSrc }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={href}
      className={cn(
        "group relative overflow-hidden bg-card rounded-xl shadow-md transition-all duration-300 glow-hover",
        "hover:shadow-xl hover:scale-105 cursor-pointer border border-border/50 hover:border-border"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>
      
      <div className="p-6 md:p-8 relative">
        <h3 className="font-display text-2xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className={cn(
          "flex items-center text-sm font-medium text-primary gap-1 transition-transform duration-300",
          isHovered && "translate-x-2"
        )}>
          Learn more <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </Link>
  );
}