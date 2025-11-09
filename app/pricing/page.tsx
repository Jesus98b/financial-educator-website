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
            Tarifas
          </h1>
          <p className="text-xl text-gray-700">
            Elige el plan que mejor se ajuste a tus objetivos y necesidades financieras.
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
              ¿Necesitas una Solución Personalizada?
            </h2>
            <p className="text-gray-700 mb-6">
              Entendemos que cada situación financiera es única. Si necesitas un plan
              personalizado o tienes requisitos específicos, no dudes en contactarnos.
              Estamos aquí para crear una solución que funcione para ti.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Contáctame para Precios Personalizados
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

