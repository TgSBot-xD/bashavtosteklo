import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/src/shared/ui';
import Link from 'next/link';
import React from 'react';
import { Menu } from 'lucide-react';

const navigationList = ['Услуги', 'Почему мы', 'Примеры', 'Отзывы', 'Контакты'];

function listNavigation() {
	return navigationList.map((link: string, index: number): React.ReactElement => {
		return (
			<Button
				key={index}
				className="bg-inherit md:text-base sm:text-xl hover:bg-foreground/2 hover:border hover:border-foreground/10 hover:rounded-full hover:px-6 "
			>
				<Link href="#link" title={link}>
					{link}
				</Link>
			</Button>
		);
	});
}

export function MobileNavigation() {
	return (
		<nav className="flex">
			<Sheet>
				<SheetTrigger className="">
					<div className="flex p-2 hover:outline hover:outline-solid hover:rounded-full ">
						<Menu className="" />
					</div>
				</SheetTrigger>
				<SheetContent side="bottom">
					<SheetTitle></SheetTitle>
					<SheetHeader>{listNavigation()}</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
}

export function DesctopNavigation() {
	return <nav className="flex items-center">{listNavigation()}</nav>;
}

{
	/* TODO [BAS-5]: Сделать active при пересечении точки на сайте */
	/* TODO: [BAS-6] Переделать показ контент части */
}
