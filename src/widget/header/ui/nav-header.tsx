import { Menu } from 'lucide-react';
import Link from 'next/link';

import { type NavigationItems } from '../model';
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from 'shared/ui';

const navigationList: NavigationItems[] = [
	{ label: 'Услуги', href: '#services' },
	{ label: 'Почему мы', href: '#why' },
	{ label: 'Примеры', href: '#examples' },
	{ label: 'Отзывы', href: '#reviews' },
	{ label: 'Контакты', href: '#contacts' },
];

export function DesktopNavigation() {
	return <nav className="flex items-center">{ComposeNavigation()}</nav>;
}
// TODO: [BAS-5] Сделать active при пересечении точки на сайте
export function MobileNavigation() {
	return (
		<nav className="flex max-w-full">
			<Sheet>
				<SheetTrigger
					aria-label="Кнопка навигации"
					className="flex p-2 hover:ring hover:ring-offset-1 hover:ring-white/5 hover:rounded-full"
				>
					<Menu />
				</SheetTrigger>
				<SheetContent side="bottom">
					<SheetTitle className="items-center justify-center"></SheetTitle>
					<SheetHeader>{ComposeNavigation()}</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
}

// TODO: [BAS-10] Переделать функцию в компонент
function ComposeNavigation() {
	return navigationList.map(({ label, href }) => {
		return (
			<Button
				key={href}
				variant="link"
				className="max-w-full md:text-base sm:text-xl hover:px-6"
				asChild
			>
				<Link href={href}>{label}</Link>
			</Button>
		);
	});
}
