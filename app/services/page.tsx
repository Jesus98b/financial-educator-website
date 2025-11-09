import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive financial education and advisory services including financial planning, investment strategy, and insurance advisory.',
};

export default function ServicesPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-700">
            Servicios financieros integrales adaptados a tus necesidades y objetivos
            únicos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="space-y-6">
              <ServiceCard service={service} />
              <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Metodología
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.methodology}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Comenzar Hoy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

