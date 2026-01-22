import { HeroContent } from './hero-content';
import { HighlightsPanel } from './highlights-panel';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
function HeroSection() {
  return (
    <article
      data-testid="hero-section"
      className="flex w-full flex-col items-center gap-12 lg:max-w-6xl lg:justify-between lg:gap-2 xl:max-w-7xl xl:flex-row"
    >
      <HeroContent data-testid="hero-content" />
      <HighlightsPanel data-testid="highlights-panel" />
    </article>
  );
}

export { HeroSection };
