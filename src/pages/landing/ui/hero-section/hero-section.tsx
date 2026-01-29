import { HeroContent } from './hero-content';
import { HighlightsPanel } from './highlights-panel';

import { Divider } from 'shared/ui';

export function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="flex w-full flex-col gap-4 md:px-5 lg:max-w-4xl lg:gap-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <div className="flex w-full flex-col gap-8 xl:flex-row xl:justify-between">
        <HeroContent />
        <HighlightsPanel />
      </div>
      <Divider />
    </section>
  );
}
