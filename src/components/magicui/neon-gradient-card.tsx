"use client";

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColorsProps;
  [key: string]: any;
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        "--border-size": `${borderSize}px`,
        "--border-radius": `${borderRadius}px`,
        "--neon-first-color": neonColors.firstColor,
        "--neon-second-color": neonColors.secondColor,
        "--card-width": `${dimensions.width}px`,
        "--card-height": `${dimensions.height}px`,
        "--card-content-radius": `calc(var(--border-radius) - var(--border-size))`,
        "--pseudo-element-background-image": `conic-gradient(from 180deg, transparent 0deg, ${neonColors.firstColor} 80deg, transparent 160deg, transparent 200deg, ${neonColors.secondColor} 280deg, transparent 360deg)`,
        "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
        "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
      } as CSSProperties}
      className={cn(
        "relative z-10 size-full rounded-[var(--border-radius)]",
        "before:absolute before:-inset-[var(--border-size)] before:-z-10",
        "before:animate-spin before:rounded-[var(--border-radius)]",
        "before:bg-[var(--pseudo-element-background-image)]",
        "before:blur-[2px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-white p-6 dark:bg-gray-900",
        )}
      >
        {children}
      </div>
    </div>
  );
};