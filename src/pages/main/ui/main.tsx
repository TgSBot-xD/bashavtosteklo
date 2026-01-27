import { Header } from 'widget/header';
import { HeroSection } from 'widget/hero-section';
import { Services } from 'widget/services';
import { WhyWeSection } from 'widget/why-we';

function MainPage() {
  return (
    <div className="relative flex flex-col items-center">
      <Header />
      <HeroSection />
      <Services />
      <WhyWeSection />
    </div>
  );
}

export { MainPage };
