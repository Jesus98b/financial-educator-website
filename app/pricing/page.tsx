import type { Metadata } from 'next';
import { PRICING_TIERS } from '@/lib/constants';
import { PricingCard } from '@/components/molecules/PricingCard';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for financial education and advisory services. Choose the plan that best fits your needs.',
};

export default function PricingPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-700">
            Choose the plan that best fits your financial goals and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-background-subtle p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-700 mb-6">
              We understand that every financial situation is unique. If you need a
              customized plan or have specific requirements, please don't hesitate to
              reach out. We're here to create a solution that works for you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Contact Us for Custom Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

