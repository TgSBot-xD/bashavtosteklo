import { HeroContent } from './hero-content';
import { HighlightsBlock } from './highlights-block';

TODO [BAS-14]: Переделать вёрстку под динамические размеры
export function HeroSection() {
	return (
		<main className="flex justify-around">
			<HeroContent />
			<HighlightsBlock />
		</main>
	);
}
