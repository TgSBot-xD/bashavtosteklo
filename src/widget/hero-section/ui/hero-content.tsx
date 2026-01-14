import { Button } from '@/src/shared/ui';
import { BreadCrumbs } from './breadcrumbs';
import { MoveRight } from 'lucide-react';
import { HeroInfoItems } from '../models';

const listSecondaryInfo: HeroInfoItems[] = [
	{
		index: 1,
		label: 'ул. Дмитрия Донского, 50а',
	},
	{
		index: 2,
		label: 'Пн-ВС: 10:00-20:00',
	},
	{
		index: 3,
		label: 'Гарантия на работы',
	},
];

export function HeroContent() {
	return (
		<section className="flex flex-col max-w-xl">
			<BreadCrumbs />
			<div>
				<h1 className="text-6xl text-white text-wrap">Автосёкла и всё, что с ними связано.</h1>
				<h3 className="text-wrap text-sm">
					Замена, ремонт сколов и трещин, тонировка стекол и оптики, бронирование плёнкой. Быстро,
					аккуратно, с гарантией.
				</h3>
			</div>
			<section>
				<div>
					<Button
						variant="default"
						className="text-background rounded-full py-3 h-max w-max text-md hover:saturate-120"
					>
						Позвонить
					</Button>
					<Button variant="link" className="ring ring-white/20 hover:ring-white/25">
						Мессенджеры
					</Button>
					<Button
						variant="link"
						className="text-accent hover:text-accent-foreground hover:ring-0 hover:bg-accent/0"
					>
						Смотреть услуги <MoveRight />
					</Button>
				</div>
				<div className="flex flex-row first:ml-0 last:mr-0">{CompostSecondaryInfo()}</div>
			</section>
		</section>
	);
}

function CompostSecondaryInfo() {
	return listSecondaryInfo.map(({ index, label }) => {
		return (
			<span
				className="text-sm p-2 w-max mx-1 bg-gray-500/20 border rounded-full border-gray-500/40 first:ml-0 last:mr-0"
				key={index}
			>
				{label}
			</span>
		);
	});
}
