import React, { ReactNode, memo } from "react";
import { cn } from "../lib/utils";

interface GridBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  gridSize?: number;
  opacity?: number;
}

export const GridBackground = memo(
  ({
    children,
    className,
    gridSize = 60,
    opacity = 0.3,
    ...props
  }: GridBackgroundProps) => {
    return (
      <div
        className={cn(
          "relative min-h-screen w-full bg-black overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Grid Layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GridBackground.displayName = "GridBackground";
