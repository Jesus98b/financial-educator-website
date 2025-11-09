'use client';

import React, { useState } from 'react';
import { FAQItem as FAQItemType } from '@/types';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  item: FAQItemType;
}

/**
 * Expandable FAQ item component
 * @param item - FAQ item data
 */
export const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="font-medium text-primary pr-4">{item.question}</span>
        <svg
          className={cn(
            'w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="py-4 px-4 text-gray-700">{item.answer}</div>
      </div>
    </div>
  );
};

