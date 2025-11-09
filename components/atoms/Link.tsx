import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  variant?: 'default' | 'underline';
}

/**
 * Link component with internal/external handling
 * @param href - Link URL
 * @param external - Whether link opens in new tab
 * @param variant - Link style variant
 * @param className - Additional CSS classes
 */
export const Link: React.FC<LinkProps> = ({
  href,
  children,
  external = false,
  className,
  variant = 'default',
}) => {
  const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded';

  const variants = {
    default: 'text-primary hover:text-accent-dark',
    underline: 'text-primary underline hover:text-accent-dark decoration-accent',
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </NextLink>
  );
};

