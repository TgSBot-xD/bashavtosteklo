'use client';

import { useIsMobile } from '@/src/shared/hooks';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/src/shared/ui';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const navigationList = ['Услуги', 'Почему мы', 'Примеры', 'Отзывы', 'Контакты'];

function listNavigation() {
	return navigationList.map((link: string, index: number): React.ReactElement => {
		return (
			<NavigationMenuLink asChild key={index}>
				<Link href="#link" title={link}>
					{link}
				</Link>
			</NavigationMenuLink>
		);
	});
}

export function NavigationHeader() {
	const isMobile = useIsMobile();

	return (
		<NavigationMenu viewport={isMobile}>
			{/* TODO [BAS-6]: Переделать показ контент части */}
			<NavigationMenuList className="sm:block md:hidden">
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Menu />
					</NavigationMenuTrigger>
					<NavigationMenuContent>{listNavigation()}</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList className="sm:hidden md:flex">{listNavigation()}</NavigationMenuList>
		</NavigationMenu>
	);
}
