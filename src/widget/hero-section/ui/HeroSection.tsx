import { HeroContent } from './hero-content';
import { HighlightsBlock } from './highlights-block';

// TODO: [BAS-14] Переделать вёрстку под динамические размеры
export function HeroSection() {
	return (
		<main className="flex w-full flex-col gap-12 lg:gap-2 items-center lg:flex-row lg:max-w-7xl lg:justify-between">
			<HeroContent />
			<HighlightsBlock />
		</main>
	);
}
