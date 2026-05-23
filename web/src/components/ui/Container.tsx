import type { ComponentProps, ElementType } from 'react';
import { cn } from '@/lib/cn';

type Props<T extends ElementType> = {
  as?: T;
} & Omit<ComponentProps<'div'>, 'as'>;

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: Props<T>) {
  const Tag = (as ?? 'div') as ElementType;
  return <Tag className={cn('container-page', className)} {...props} />;
}
