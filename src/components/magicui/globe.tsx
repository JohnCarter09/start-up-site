"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
  size?: number;
  markers?: Array<{ lat: number; lng: number; label?: string }>;
}

export function Globe({ 
  className, 
  size = 400,
  markers = []
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 20, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw grid lines
      const gridLines = 8;
      for (let i = 0; i < gridLines; i++) {
        const angle = (i / gridLines) * Math.PI + rotation * 0.01;
        
        // Meridians
        ctx.beginPath();
        ctx.ellipse(
          size / 2, 
          size / 2, 
          (size / 2 - 20) * Math.cos(angle), 
          size / 2 - 20, 
          angle, 
          0, 
          2 * Math.PI
        );
        ctx.strokeStyle = '#f3f4f6';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw markers
      markers.forEach((marker, index) => {
        const markerAngle = (marker.lng / 180) * Math.PI + rotation * 0.01;
        const x = size / 2 + (size / 2 - 30) * Math.cos(markerAngle) * Math.cos((marker.lat / 180) * Math.PI);
        const y = size / 2 + (size / 2 - 30) * Math.sin((marker.lat / 180) * Math.PI);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();
      });

      setRotation(prev => prev + 0.5);
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [size, markers, rotation]);

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
}