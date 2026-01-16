import { HeroContent } from './hero-content';
import { HighlightsBlock } from './highlights-block';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
export function HeroSection() {
  return (
    <main className="flex w-full flex-col items-center gap-12 lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-2">
      <HeroContent />
      <HighlightsBlock />
    </main>
  );
}
