'use client';

import { useEffect, useState } from 'react';

import { Brand } from './brand';
import { ContactInfo } from './contact-info';
import { DesktopNavigation, MobileNavigation } from './nav-header';
import { cn } from 'shared/lib';

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const getScroll = () => {
			const hasScrollY = window.scrollY > 3;
			setIsScrolled((prev) => (prev === hasScrollY ? prev : hasScrollY));
		};

		let rafId: number | null = null;
		const onScroll = () => {
			if (rafId != null) return;
			rafId = requestAnimationFrame(() => {
				rafId = null;
				getScroll();
			});
		};

		getScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			if (rafId != null) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full">
			<div
				className={cn(
					'backdrop-blur-sm border-b',
					isScrolled ? 'border-white/30' : 'border-transparent',
				)}
			>
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
					<Brand />
					<div className="hidden lg:flex">
						<DesktopNavigation />
					</div>
					<div className="flex items-center gap-2">
						{/* NOTE: Умышленно сделан разрыв */}
						<div className="hidden md:flex">
							<ContactInfo />
						</div>
						<div className="lg:hidden">
							<MobileNavigation />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
