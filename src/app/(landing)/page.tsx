import { Header } from 'widget/header';
import { HeroSection } from 'widget/hero-section';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center gap-32">
      <Header />
      <HeroSection />
    </div>
  );
}
