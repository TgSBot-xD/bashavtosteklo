import { Header } from '@/src/widget/header';
import { HeroSection } from '@/src/widget/hero-section';

export default function Home() {
	return (
		<div className="relative flex flex-col">
			<Header />
			<HeroSection />
		</div>
	);
}
