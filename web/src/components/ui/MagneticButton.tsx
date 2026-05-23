"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<typeof motion.button> & {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/**
 * CTA button with spring-pulled cursor magnetism.
 * Magnetism disabled on touch devices; still works as a normal button.
 */
export function MagneticButton({
  children,
  strength = 0.35,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const [magnetic, setMagnetic] = useState(false);
  useEffect(() => {
    setMagnetic(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cursor="hover"
      style={magnetic ? { x: sx, y: sy } : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors sm:px-7 sm:text-sm",
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
