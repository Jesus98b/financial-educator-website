import React from 'react';

const valueProps = [
  {
    title: 'Orientación Experta',
    description:
      'Años de experiencia en planificación financiera y educación para guiarte a través de decisiones financieras complejas.',
    icon: (
      <svg
        className="w-12 h-12 text-accent mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Enfoque Personalizado',
    description:
      'Estrategias y recomendaciones adaptadas basadas en tu situación financiera única y objetivos personales.',
    icon: (
      <svg
        className="w-12 h-12 text-accent mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Educación Primero',
    description:
      'Creemos en empoderarte con conocimiento para que puedas tomar decisiones informadas de manera independiente.',
    icon: (
      <svg
        className="w-12 h-12 text-accent mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: 'Servicios Integrales',
    description:
      'Desde educación financiera hasta asesoría en seguros, cubrimos todos los aspectos de tu viaje financiero.',
    icon: (
      <svg
        className="w-12 h-12 text-accent mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
] as const;

/**
 * Value proposition section component
 */
export const ValueProposition: React.FC = () => {
  return (
    <section className="section-padding bg-background-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-700">
            Combinamos experiencia, personalización y educación para ayudarte a
            alcanzar tus objetivos financieros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              {prop.icon}
              <h3 className="text-xl font-semibold text-primary mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-700">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

