import type { Metadata } from 'next';
import { ContactForm } from '@/components/molecules/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/atoms/Button';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Victoria Andrea Espinoza Vidal for financial education and advisory services. Contact via form, WhatsApp, or LinkedIn.',
};

export default function ContactPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Contáctame
            </h1>
            <p className="text-xl text-gray-700">
              ¿Listo para comenzar tu viaje financiero? Me encantaría escucharte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Envíame un mensaje
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Otras Formas de Contactarme
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Contáctame directamente por WhatsApp para respuestas rápidas.
                    </p>
                    <a
                      href={SITE_CONFIG.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">Mensaje por WhatsApp</Button>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Conéctate conmigo en LinkedIn para actualizaciones profesionales
                      y perspectivas.
                    </p>
                    <a
                      href={SITE_CONFIG.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">Visitar Perfil de LinkedIn</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-accent-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Tiempo de Respuesta
                </h3>
                <p className="text-gray-700">
                  Normalmente respondo a todas las consultas dentro de 24-48 horas.
                  Para asuntos urgentes, por favor contáctame por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

