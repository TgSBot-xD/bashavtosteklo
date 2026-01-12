'use client';

import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/shared/ui';
import { NavigationHeader } from './nav-header';
import { Dot } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	const prevScrolledRef = useRef<boolean>(false);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		const getScroll = () => {
			const getScrolled = window.scrollY > 2;

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
				<div className="flex flex-col md:flex-row items-centerpx-48 py-6 blur-none z-2">
					<div>
						<h1 className="pr-4">БАШАВТОСТЕКЛО</h1>
						<HoverCard>
							<HoverCardTrigger className="hidden md:flex text-sm items-center leading-none font-medium">
								Уфа {<Dot />} Черниковка
							</HoverCardTrigger>
							<HoverCardContent>г. Уфа, Дмитрия донского, 50а</HoverCardContent>
						</HoverCard>
					</div>
				</div>

				{/* TODO [BAS-5]: Сделать active при пересечении точки на сайте */}
				<NavigationHeader />
				<article className="flex items-center blur-non">
					{/* TODO: Сделать номер кликабельный с модальным окном на все часто использоуемые мессенджеры */}
					<Button
						variant="default"
						type="submit"
						className=" bg-inherit rounded-full hover:bg-foreground/2 hover:outline-2 hover:outline-solid  hover:outline-foreground/20 hover:saturate-115"
					>
						+7 (927) 236-51-08
					</Button>
					<Button
						variant="secondary"
						className="ml-4 hover:bg-primary bg-primary text-secondary hover:saturate-150 rounded-full"
					>
						Онлайн-запись
					</Button>
				</article>
			</div>
		</header>
	);
}
