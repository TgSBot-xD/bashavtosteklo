'use client';

import { useEffect, useRef, useState } from 'react';
import { Brand } from './brand';
import { ContactInfo } from './contact-info';
import { DesctopNavigation, MobileNavigation } from './nav-header';

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	const prevScrolledRef = useRef<boolean>(false);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		const getScroll = () => {
			const getScrolled = window.scrollY > 3;

			if (getScrolled !== prevScrolledRef.current) {
				prevScrolledRef.current = getScrolled;
				setIsScrolled(getScrolled);
			}
		};

		const onScroll = () => {
			if (rafRef.current != null) return;
			rafRef.current = requestAnimationFrame(() => {
				rafRef.current = null;
				getScroll();
			});
		};

		getScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<header className="sticky top-0 z-1">
			<div
				className={`flex flex-row justify-around backdrop-blur-sm ${isScrolled ? 'border-b border-white/30' : ''}`}
			>
				<Brand />
				<div className="hidden lg:flex">
					<DesctopNavigation />
				</div>
				<div className="flex">
					<ContactInfo />
					<div className="flex lg:hidden">
						<MobileNavigation />
					</div>
				</div>
			</div>
		</header>
	);
}
