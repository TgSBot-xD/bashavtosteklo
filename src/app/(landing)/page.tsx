import { Header } from 'widget/header';
import { HeroSection } from 'widget/hero-section';

export default function Home() {
	return (
		<div className="relative max-w-full flex flex-col items-center gap-6">
			<Header />
			<HeroSection />
		</div>
	);
}
