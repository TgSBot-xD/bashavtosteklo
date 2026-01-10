import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/shared/ui';
import { NavigationHeader } from './nav-header';

// TODO: Переделать дизайн
export function Header() {
	return (
		<header>
			<main className="flex flex-row justify-between px-24">
				<div className="flex md:flex-col">
					<h1>БАШАВТОСТЕКЛО</h1>
					<HoverCard>
						<HoverCardTrigger className="hidden md:flex">
							Уфа * Дмитрия Донского, 50a
						</HoverCardTrigger>
						<HoverCardContent>Карта</HoverCardContent>
					</HoverCard>
				</div>

				{/* TODO [BAS-5]: Сделать active при пересечении точки на сайте */}
				<NavigationHeader />
				<article>
					{/* TODO: поменять на нормальный номер */}
					<Button variant="ghost" type="submit">
						+7 (347) 266-17-84
					</Button>
					<Button variant="secondary">Онлайн-запись</Button>
				</article>
			</main>
		</header>
	);
}
