import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Call-to-action section component
 */
export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            ¿Listo para Tomar Control de Tu Futuro Financiero?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ponte en contacto hoy para comenzar tu viaje hacia la libertad financiera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contáctame
              </Button>
            </Link>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                Mensaje por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

