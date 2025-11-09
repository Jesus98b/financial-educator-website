import type { Metadata } from 'next';
import { FAQ_ITEMS } from '@/lib/constants';
import { FAQItem } from '@/components/molecules/FAQItem';

export const metadata: Metadata = {
  title: 'Key Financial Questions',
  description:
    'Frequently asked questions about financial planning, financial education, insurance advisory, and more.',
};

export default function QuestionsPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Principales Preguntas
            </h1>
            <p className="text-xl text-gray-700">
              Preguntas frecuentes y respuestas sobre planificación financiera y
              nuestros servicios.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent-light rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              ¿Aún Tienes Preguntas?
            </h2>
            <p className="text-gray-700 mb-6">
              Si no encuentras la respuesta que buscas, no dudes en contactarnos
              directamente.
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
  );
}

