import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LoaderProps {
  variant?: 'spinner' | 'dots' | 'bar';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  full?: boolean; // center and expand to fill parent (min 400x400)
  color?: 'primary' | 'muted' | 'destructive' | 'inherit';
}

const sizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8'
};

export const Loader: React.FC<LoaderProps> = ({
  variant = 'spinner',
  size = 'md',
  text,
  className,
  full,
  color = 'primary'
}) => {
  const colorClass = color === 'primary'
    ? 'text-primary'
    : color === 'muted'
      ? 'text-muted-foreground'
      : color === 'destructive'
        ? 'text-destructive'
        : '';
  const commonWrapper = cn(
    'flex items-center gap-2',
    full && 'justify-center items-center w-full h-full min-h-[400px] min-w-[400px] flex-col',
    colorClass,
    className
  );

  if (variant === 'spinner') {
    return (
      <div className={commonWrapper} role="status" aria-live="polite">
        <span className={cn('inline-block animate-spin rounded-full border-2 border-current border-t-transparent', sizeMap[size])} />
        {text && <span className="text-sm text-muted-foreground">{text}</span>}
      </div>
    );
  }

  if (variant === 'dots') {
    const dotSize = size === 'xs' ? 'h-1.5 w-1.5' : size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-2.5 w-2.5' : 'h-3 w-3';
    return (
      <div className={commonWrapper} role="status" aria-live="polite">
        <div className="flex items-center gap-1">
          <span className={cn('rounded-full bg-current animate-bounce', dotSize)} style={{ animationDelay: '0ms' }} />
          <span className={cn('rounded-full bg-current animate-bounce', dotSize)} style={{ animationDelay: '120ms' }} />
          <span className={cn('rounded-full bg-current animate-bounce', dotSize)} style={{ animationDelay: '240ms' }} />
        </div>
        {text && <span className="text-sm text-muted-foreground">{text}</span>}
      </div>
    );
  }

  if (variant === 'bar') {
    return (
      <div className={commonWrapper} role="status" aria-live="polite">
        <div className="relative h-1.5 w-40 overflow-hidden rounded bg-muted">
          <div className="absolute inset-y-0 left-0 w-1/3 animate-[loading-bar_1s_ease-in-out_infinite] rounded bg-primary" />
        </div>
        {text && <span className="text-sm text-muted-foreground">{text}</span>}
      </div>
    );
  }

  return null;
};

export const PageLoader: React.FC<{ text?: string }>= ({ text = 'Yuklanmoqda...' }) => (
  <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] min-w-[400px] gap-4">
    <Loader size="lg" variant="spinner" full />
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

export const InlineLoader: React.FC<{ text?: string; size?: LoaderProps['size']; }> = ({ text, size = 'sm' }) => (
  <Loader size={size} variant="spinner" text={text} />
);

// Keyframes (global CSS ga qo'shish kerak bo'lmasa bu joydan export qilib developer qo'sha oladi)
// @keyframes loading-bar { 0% { transform: translateX(-100%);} 50% { transform: translateX(50%);} 100% { transform: translateX(100%);} }
