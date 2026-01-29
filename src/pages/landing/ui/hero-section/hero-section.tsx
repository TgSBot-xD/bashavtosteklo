import { HeroContent } from './hero-content';
import { HighlightsPanel } from './highlights-panel';

import { Divider } from 'shared/ui';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
export function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className=" flex w-full flex-col gap-4 md:px-5 lg:gap-8 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
    >
      <div className="flex w-full flex-col gap-2 2xl:flex-row 2xl:justify-between">
        <HeroContent />
        <HighlightsPanel />
      </div>
      <Divider />
    </section>
  );
}
