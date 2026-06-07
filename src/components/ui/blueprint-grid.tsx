"use client";

import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
  opacity?: number;
}

export function BlueprintGrid({ className, opacity = 0.04 }: BlueprintGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
