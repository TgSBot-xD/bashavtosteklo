import { ExamplesWork } from './examples-work/examples-work';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Services } from './services/services';
import { WhyWeSection } from './why-we/hero-section';

export function MainPage() {
  return (
    <div className="relative flex flex-col items-center">
      <Header />
      <HeroSection />
      <Services />
      <WhyWeSection />
      <ExamplesWork />
    </div>
  );
}
