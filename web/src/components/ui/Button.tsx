import Link from 'next/link';
import { type ComponentProps, forwardRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-forest-500 text-cream-50 hover:bg-forest-600 focus-visible:bg-forest-600',
  secondary:
    'bg-cream-50 text-forest-500 ring-1 ring-inset ring-forest-500/20 hover:bg-cream-100 hover:ring-forest-500/40',
  ghost:
    'bg-transparent text-forest-500 hover:bg-forest-50',
  accent:
    'bg-terracotta-500 text-cream-50 hover:bg-terracotta-600',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
