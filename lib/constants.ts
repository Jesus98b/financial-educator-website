/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Victoria Andrea Espinoza Vidal',
  title: 'Financial Educator & Advisor',
  description:
    'Professional financial education and advisory services. Expert guidance in financial planning, insurance, and investment strategies.',
  url: 'https://your-domain.com', // Update with actual domain
  linkedIn: 'https://www.linkedin.com/in/victoria-andrea-espinoza-vidal-918853244',
  whatsapp: 'https://wa.me/1234567890', // Update with actual WhatsApp number
} as const;

export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/about' },
  { label: 'Servicios', href: '/services' },
  { label: 'Tarifas', href: '/pricing' },
  { label: 'Preguntas', href: '/questions' },
  { label: 'Contacto', href: '/contact' },
] as const;

export const SERVICES: Array<{
  id: string;
  title: string;
  description: string;
  features: string[];
  methodology: string;
  icon?: string;
}> = [
  {
    id: 'insurance-advisory',
    title: 'Asesoría en Seguros y Productos Financieros',
    description:
      'Guía experta para ayudarte a seleccionar los productos financieros y seguros adecuados para tu situación específica. Analizamos tus necesidades y te recomendamos las mejores opciones del mercado.',
    features: [
      'Análisis de necesidades de seguros',
      'Evaluación de productos financieros',
      'Comparativa de opciones del mercado',
      'Asesoramiento personalizado',
      'Seguimiento y ajustes continuos',
      'Gestión de cartera de seguros',
    ],
    methodology:
      'Nuestro proceso de asesoría incluye una consulta inicial para entender tus necesidades, un análisis exhaustivo de tu situación financiera, recomendaciones personalizadas basadas en tu perfil de riesgo, y seguimiento continuo para asegurar que tus productos se ajusten a tus objetivos cambiantes.',
    icon: 'shield',
  },
  {
    id: 'financial-consulting',
    title: 'Consultoría en Educación y Planificación Financiera',
    description:
      'Programas educativos y de planificación financiera diseñados para empoderarte con el conocimiento necesario para tomar decisiones financieras informadas y alcanzar tus metas económicas.',
    features: [
      'Talleres de educación financiera',
      'Planificación financiera personalizada',
      'Estrategias de ahorro e inversión',
      'Educación sobre gestión de deudas',
      'Planificación para el retiro',
      'Recursos formativos y materiales educativos',
    ],
    methodology:
      'Nuestra metodología educativa combina sesiones prácticas, consultorías personalizadas y apoyo continuo. Trabajamos contigo para crear un plan financiero adaptado a tus objetivos, proporcionándote las herramientas y conocimientos necesarios para tomar decisiones financieras inteligentes a lo largo de tu vida.',
    icon: 'education',
  },
] as const;

export const PRICING_TIERS: Array<{
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}> = [
  {
    id: 'consultation',
    name: 'Initial Consultation',
    price: '$150',
    description: 'Perfect for getting started with your financial journey',
    features: [
      '90-minute comprehensive financial review',
      'Personalized action plan',
      'Financial health assessment',
      'Email support for 30 days',
    ],
    cta: 'Book Consultation',
    popular: false,
  },
  {
    id: 'education',
    name: 'Financial Education Program',
    price: '$500',
    description: 'Complete financial education program',
    features: [
      '4 personalized workshop sessions',
      'Comprehensive financial planning guide',
      'Investment strategy consultation',
      '3 months of email support',
      'Access to educational resources',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 'advisory',
    name: 'Ongoing Advisory',
    price: 'Custom',
    description: 'Comprehensive ongoing financial advisory services',
    features: [
      'Monthly financial reviews',
      'Personalized investment recommendations',
      'Insurance product advisory',
      'Priority support',
      'Quarterly strategy updates',
      'Unlimited email consultation',
    ],
    cta: 'Contact Us',
    popular: false,
  },
] as const;

export const FAQ_ITEMS: Array<{ id: string; question: string; answer: string }> = [
  {
    id: '1',
    question: '¿Qué es la planificación financiera y por qué la necesito?',
    answer:
      'La planificación financiera es un proceso integral de evaluación de tu situación financiera actual y creación de un plan para alcanzar tus objetivos financieros. Te ayuda a tomar decisiones informadas sobre ahorro, inversión, seguros y planificación para el retiro, asegurando seguridad financiera y tranquilidad.',
  },
  {
    id: '2',
    question: '¿Cómo sé si necesito un asesor financiero?',
    answer:
      'Si te sientes inseguro sobre decisiones de inversión, planificación para el retiro, necesidades de seguros o estrategias de optimización fiscal, un asesor financiero puede proporcionarte orientación experta. Te ayudo a navegar situaciones financieras complejas y crear estrategias personalizadas alineadas con tus objetivos.',
  },
  {
    id: '3',
    question: '¿Qué tipos de seguros debería considerar?',
    answer:
      'Los tipos de seguros que necesitas dependen de tus circunstancias personales. Los tipos comunes incluyen seguro de vida, seguro de salud, seguro de discapacidad y seguro de propiedades. Evaluamos tus necesidades específicas y recomendamos la cobertura adecuada para proteger tu futuro financiero.',
  },
  {
    id: '4',
    question: '¿Cuánto debería ahorrar para el retiro?',
    answer:
      'La cantidad que debes ahorrar para el retiro depende de varios factores, incluyendo tu edad actual, edad deseada de retiro, expectativas de estilo de vida y ahorros existentes. Generalmente, se recomienda ahorrar el 15-20% de tus ingresos, pero creamos planes de retiro personalizados basados en tu situación única.',
  },
  {
    id: '5',
    question:
      '¿Cuál es la diferencia entre educación financiera y asesoría financiera?',
    answer:
      'La educación financiera se enfoca en enseñarte el conocimiento y las habilidades para tomar decisiones financieras informadas de manera independiente. La asesoría financiera implica orientación profesional continua y recomendaciones para productos y estrategias específicas. Ambos servicios se complementan y pueden usarse juntos.',
  },
  {
    id: '6',
    question: '¿Cómo aseguran que mi información financiera esté segura?',
    answer:
      'Nos tomamos la seguridad de datos muy en serio y seguimos las mejores prácticas de la industria para proteger tu información. Todas las comunicaciones están cifradas y cumplimos con las regulaciones de privacidad relevantes. Nunca compartimos tu información con terceros sin tu consentimiento explícito.',
  },
  {
    id: '7',
    question: '¿Pueden ayudarme con la gestión de deudas?',
    answer:
      'Sí, la gestión de deudas es un componente clave de nuestros servicios de educación financiera. Te ayudo a entender diferentes tipos de deuda, crear estrategias de pago y desarrollar habilidades de presupuesto para prevenir la acumulación futura de deudas mientras trabajamos hacia la libertad financiera.',
  },
  {
    id: '8',
    question: '¿Qué debo traer a una consulta inicial?',
    answer:
      'Para una consulta inicial, por favor trae información sobre tu situación financiera actual, incluyendo estados de ingresos, gastos, inversiones existentes, pólizas de seguros y cualquier objetivo o preocupación financiera específica que tengas. Mientras más información proporciones, más precisas serán nuestras recomendaciones.',
  },
] as const;

