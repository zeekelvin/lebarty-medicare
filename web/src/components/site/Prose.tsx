import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Long-form text wrapper for legal / policy pages. Styles nested headings,
 * links, lists, and strong text without a plugin.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-5 text-base leading-relaxed text-fg/80",
        "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-fg",
        "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-fg",
        "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2",
        "[&_strong]:font-semibold [&_strong]:text-fg",
        "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
