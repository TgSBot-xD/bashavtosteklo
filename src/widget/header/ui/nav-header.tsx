import { Button } from '@/src/shared/ui';
import Link from 'next/link';
import React from 'react';

const navigationList = ['Услуги', 'Почему мы', 'Примеры', 'Отзывы', 'Контакты'];

function listNavigation() {
	return navigationList.map((link: string, index: number): React.ReactElement => {
		return (
			<Button
				key={index}
				className="bg-inherit hover:bg-foreground/2 hover:border hover:border-foreground/10 hover:rounded-full hover:px-6 "
			>
				<Link href="#link" title={link}>
					{link}
				</Link>
			</Button>
		);
	});
}

// TODO [BAS-7]:
export function NavigationHeader() {
	return (
		<nav className="flex items-center">
			{/* TODO: [BAS-6] Переделать показ контент части */}
			{/* FIXME: Убрать мигание при наведении на навигацию в Desctop режиме */}
			{/* FIXME: Переделать бургер на Sheet окно в mobile */}
			{listNavigation()}
		</nav>
	);
}
