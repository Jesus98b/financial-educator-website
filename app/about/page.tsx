import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Victoria Andrea Espinoza Vidal, a professional financial educator and advisor dedicated to empowering your financial future.',
};

export default function AboutPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 text-center">
            Sobre Mí
          </h1>

          {/* Image placeholder - Professional photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-accent-light rounded-lg overflow-hidden">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm text-gray-600">
                    Foto profesional de Victoria Andrea Espinoza Vidal
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    (Espacio reservado para imagen)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6 text-center">
              Soy Victoria Andrea Espinoza Vidal, una apasionada educadora y asesora
              financiera dedicada a ayudar a individuos y familias a lograr sus
              objetivos financieros a través de la educación y orientación experta.
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
              Mi Formación y Objetivo como Profesional
            </h2>
            <p className="text-gray-700 mb-6">
              Mi objetivo como profesional es presentar mis servicios de educación y
              planificación financiera, y asesoría en seguros y productos financieros.
              Estoy comprometida con proporcionar orientación accesible y personalizada
              para ayudar a las personas a tomar decisiones financieras informadas y
              alcanzar sus metas económicas.
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
              Mi Enfoque
            </h2>
            <p className="text-gray-700 mb-6">
              Con años de experiencia en planificación financiera y educación, combino
              conocimiento experto con un enfoque personalizado. Entiendo que cada
              situación financiera es única, y trabajo estrechamente con mis clientes
              para desarrollar estrategias que se alineen con sus objetivos, valores y
              circunstancias personales.
            </p>

            <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
              Mis Servicios
            </h2>
            <p className="text-gray-700 mb-6">
              Ofrezco dos líneas principales de servicio:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Asesoría en Seguros y Productos Financieros:</strong> Guía
                experta para ayudarte a seleccionar los productos financieros y
                seguros adecuados para tu situación específica.
              </li>
              <li>
                <strong>Consultoría en Educación y Planificación Financiera:</strong>{' '}
                Programas educativos y de planificación financiera diseñados para
                empoderarte con el conocimiento necesario para tomar decisiones
                financieras informadas.
              </li>
            </ul>

            <div className="mt-12 p-6 bg-accent-light rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Trabajemos Juntos
              </h3>
              <p className="text-gray-700 mb-4">
                Si estás listo para tomar control de tu futuro financiero, me
                encantaría escucharte. Ya sea que estés comenzando tu viaje financiero
                o buscando optimizar tus estrategias existentes, estoy aquí para
                ayudarte.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

