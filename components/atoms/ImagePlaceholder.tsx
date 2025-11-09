import React from 'react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

/**
 * Image placeholder component for reserving space for images
 * @param aspectRatio - Image aspect ratio
 * @param className - Additional CSS classes
 * @param label - Label text to display
 * @param icon - Optional icon to display
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = 'landscape',
  className,
  label,
  icon,
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
  };

  return (
    <div
      className={cn(
        'relative bg-accent-light rounded-lg overflow-hidden border-2 border-dashed border-accent',
        aspectRatios[aspectRatio],
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          {icon || (
            <svg
              className="w-16 h-16 mx-auto text-accent-dark mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
          {label && (
            <>
              <p className="text-sm text-gray-600 font-medium">{label}</p>
              <p className="text-xs text-gray-500 mt-1">
                (Espacio reservado para imagen)
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

