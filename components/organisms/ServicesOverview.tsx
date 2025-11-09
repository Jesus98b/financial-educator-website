import React from 'react';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { Link } from '@/components/atoms/Link';
import { Button } from '@/components/atoms/Button';

/**
 * Services overview section component
 */
export const ServicesOverview: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-700">
            Servicios financieros integrales adaptados a tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="primary">
              Ver Todos los Servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

