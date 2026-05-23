import { cn } from '@/lib/cn';

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-eyebrow uppercase text-terracotta-700', className)}>
      {children}
    </p>
  );
}
