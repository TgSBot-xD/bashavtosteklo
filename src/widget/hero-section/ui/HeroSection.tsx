import { HeroContent } from './hero-content';
import { HighlightsBlock } from './highlights-block';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
export function HeroSection() {
  return (
    <main className="flex w-full flex-col items-center gap-12 lg:max-w-6xl lg:justify-between lg:gap-2 xl:max-w-7xl xl:flex-row">
      <HeroContent />
      <HighlightsBlock />
    </main>
  );
}
