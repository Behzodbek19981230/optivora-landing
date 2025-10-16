import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string; // optional custom fallback
  eager?: boolean;
  onClick?: () => void;
}

// Simple image component with: lazy loading, error fallback, and small fade-in
export function OptimizedImage({ src, alt, className, fallback = '/placeholder.svg', eager = false, onClick }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  

  // If src changes reset state
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  const effectiveSrc = error ? fallback :  src;

  return (
    <div className={clsx('relative overflow-hidden bg-muted/40', className)}>      
      <img
        src={effectiveSrc}
        

        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        onClick={onClick}
        className={clsx(
          'w-full h-full object-cover transition-all duration-700',
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        )}
        style={{ filter: loaded ? 'none' : 'blur(8px)' }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground animate-pulse">
          Loading...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/60 text-muted-foreground text-[11px] px-2 text-center">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
}
