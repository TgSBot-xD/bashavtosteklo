import { HeroContent } from './hero-content/hero-content';
import { HighlightsPanel } from './highlights-panel/highlights-panel';

import { Divider } from 'shared/ui';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
function HeroSection() {
  return (
    <article data-testid="hero-section" className="flex w-full flex-col gap-4 lg:gap-8">
      <div className="flex w-full flex-col items-center gap-2 md:gap-8 md:px-5 lg:m-auto lg:max-w-4xl lg:gap-10 lg:p-0 xl:m-auto xl:max-w-7xl xl:flex-row xl:gap-8 xl:px-0">
        <HeroContent />
        <HighlightsPanel data-testid="highlights-panel" />
      </div>
      <Divider />
    </article>
  );
}

export { HeroSection };
