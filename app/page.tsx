import { Hero } from '@/components/organisms/Hero';
import { ValueProposition } from '@/components/organisms/ValueProposition';
import { ServicesOverview } from '@/components/organisms/ServicesOverview';
import { CTASection } from '@/components/organisms/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <CTASection />
    </>
  );
}

