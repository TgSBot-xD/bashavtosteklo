import { HeroContent } from './hero-content';
import { HighlightsPanel } from './highlights-panel';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
function HeroSection() {
  return (
    <main className="flex w-full flex-col items-center gap-12 lg:max-w-6xl lg:justify-between lg:gap-2 xl:max-w-7xl xl:flex-row">
      <HeroContent />
      <HighlightsPanel />
    </main>
  );
}

export { HeroSection };
