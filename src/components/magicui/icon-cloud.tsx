"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
  className?: string;
  size?: number;
}

export function IconCloud({ 
  icons = [], 
  images = [], 
  className,
  size = 400 
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const allItems = [...icons, ...images];
  const radius = size * 0.35;
  const center = size / 2;

  return (
    <div 
      ref={containerRef}
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {allItems.map((item, index) => {
          const angle = (index / allItems.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const scale = 0.8 + 0.2 * Math.sin(rotation * 0.02 + index);
          
          return (
            <div
              key={index}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: x - 20,
                top: y - 20,
                transform: `scale(${scale})`,
                opacity: 0.7 + 0.3 * Math.cos(rotation * 0.03 + index),
              }}
            >
              {typeof item === 'string' ? (
                <img src={item} alt="" className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center">
                  {item}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}