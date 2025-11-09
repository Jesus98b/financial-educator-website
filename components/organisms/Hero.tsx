import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';

/**
 * Hero section component for homepage
 */
export const Hero: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Educación y Planificación Financiera para Tu Futuro
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 text-balance">
                Servicios profesionales de educación financiera y asesoría en seguros
                para ayudarte a tomar decisiones informadas sobre tu futuro económico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Comenzar
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Conocer Servicios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Placeholder - Groups of people (family, couples, individuals) */}
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[4/3] bg-accent-light rounded-lg overflow-hidden border-2 border-dashed border-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg
                      className="w-24 h-24 mx-auto text-accent-dark mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <p className="text-sm text-gray-600 font-medium">
                      Imagen: Grupos de personas
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      (Familia, parejas, individuales)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

