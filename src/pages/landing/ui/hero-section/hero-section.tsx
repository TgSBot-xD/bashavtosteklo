import { HeroContent } from './hero-content';
import { HighlightsPanel } from './highlights-panel';

import { Divider } from 'shared/ui';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
export function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="mb-24 flex w-full flex-col gap-4 md:px-5 lg:mb-12 lg:gap-8"
    >
      <div className="flex w-full flex-col items-center gap-2 md:gap-8 lg:m-auto lg:max-w-4xl lg:gap-10 lg:px-0 xl:m-auto xl:max-w-7xl xl:flex-row xl:gap-8 xl:px-0">
        <HeroContent />
        <HighlightsPanel />
      </div>
      <Divider />
    </section>
  );
}
