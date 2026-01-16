import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from 'shared/ui';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { BreadCrumbsItem } from '../models';

const breadcrumbsData: BreadCrumbsItem[] = [
	{
		label: 'Автостёкла',
		href: '#Автостёкла',
	},
	{
		label: 'Тонировка',
		href: '#Тонировка',
	},
	{
		label: 'Плёнки',
		href: '#Плёнки',
	},
	{
		label: 'Заправка кондиционеров',
		href: '#Кондиционеры',
	},
];

export function BreadCrumbs() {
	return (
		<Breadcrumb>
			<BreadcrumbList className="items-center">
				<BreadcrumbSeparator>
					<Dot className="text-primary" />
				</BreadcrumbSeparator>
				{ComposeBreadCrumbs()}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

function ComposeBreadCrumbs() {
	return breadcrumbsData.map(({ label, href }) => {
		return (
			<div className="flex items-center text-lg" key={href}>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href={href}>{label}</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<Dot />
				</BreadcrumbSeparator>
			</div>
		);
	});
}
