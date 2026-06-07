import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "navy" | "muted" | "construction";

interface SectionShellProps {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: React.ReactNode;
  grid?: boolean;
}

const VARIANTS: Record<SectionVariant, string> = {
  default: "bg-background",
  navy: "bg-gradient-to-br from-navy via-navy-light to-navy text-white",
  muted: "bg-gradient-to-b from-muted/40 via-background to-background",
  construction:
    "bg-gradient-to-b from-background via-[#0f172a]/[0.03] to-background dark:via-gold/[0.02]",
};

export function SectionShell({
  id,
  variant = "default",
  className,
  children,
  grid = false,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-24 sm:py-32", VARIANTS[variant], className)}>
      {grid && <BlueprintGrid />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
