import { Contacts } from './contacts/contacts';
import { ExamplesWork } from './examples-work/examples-work';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Reviews } from './reviews/reviews';
import { Services } from './services/services';
import { WhyWeSection } from './why-we/hero-section';

export function MainPage() {
  return (
    <div className="flex min-h-screen flex-col gap-32">
      <Header />
      <main className="relative flex flex-col items-center gap-24">
        <HeroSection />
        <Services />
        <WhyWeSection />
        <ExamplesWork />
        <Reviews />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
