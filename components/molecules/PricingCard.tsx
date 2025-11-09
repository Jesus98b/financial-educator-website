import React from 'react';
import { Card } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { PricingTier } from '@/types';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: PricingTier;
}

/**
 * Pricing card component for pricing tiers
 * @param tier - Pricing tier data
 */
export const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <Card
      variant={tier.popular ? 'outlined' : 'default'}
      className={cn(
        'h-full flex flex-col relative',
        tier.popular && 'border-accent border-2'
      )}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-primary mb-2">{tier.name}</h3>
        <p className="text-gray-600 mb-4">{tier.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">{tier.price}</span>
          {tier.price !== 'Custom' && (
            <span className="text-gray-600 ml-2">one-time</span>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/contact" className="block">
        <Button
          variant={tier.popular ? 'primary' : 'outline'}
          className="w-full"
          type="button"
        >
          {tier.cta}
        </Button>
      </Link>
    </Card>
  );
};

