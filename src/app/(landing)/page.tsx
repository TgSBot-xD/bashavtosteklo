import { Header } from 'widget/header';
import { HeroSection } from 'widget/hero-section';
import { Services } from 'widget/services';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <Header />
      <HeroSection />
      <Services />
    </div>
  );
}
