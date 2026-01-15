import { HighlightsBonusItem, HighlightsListItem } from '../models';

const listHighlights: HighlightsListItem[] = [
	{
		index: '01',
		title: 'Замена стёкол',
		description: 'От 1 часа · гарантия 1 год · стекла напрямую с заводов',
	},
	{
		index: '02',
		title: 'Ремон',
		description: 'От 10 минут · современный прозрачный полимер',
	},
	{
		index: '03',
		title: 'Тонировка',
		description: 'Пленка США/Корея · гарантия 5–10 лет',
	},
];

const listHighlightsBonus: HighlightsBonusItem[] = [
	{
		index: 1,
		label: 'чай/кофе',
	},
	{
		index: 2,
		label: 'Wi-Fi',
	},
	{ index: 3, label: 'Печеньки' },
];

// TODO [BAS-12]: Сделать градиентную заливку для фона
export function HighlightsBlock() {
	return (
		<section className="max-w-full border rounded-lg p-4 md:w-full md:p-6">
			<div className="flex flex-col gap-8 lg:gap-4">
				<h4 className="text-lg md:text-2xl">Быстрые факты</h4>
				<div className="flex flex-col gap-4 w-full md:w-max md:gap-6">{ComposeHighlitsList()}</div>
				<div className="flex flex-row justify-between md:justify-start md:gap-4">
					{ComposeHighlitsBonus()}
				</div>
			</div>
		</section>
	);
}

export function ComposeHighlitsList() {
	return listHighlights.map(({ index, title, description }) => {
		return (
			<div
				key={index}
				className="p-2 border flex flex-row items-center border-white/30 rounded-lg gap-4 md:p-3 md:border-none hover:md:ring hover:md:ring-offset-1 hover:md:ring-white/50"
			>
				<span className="flex border border-white/30 p-2 rounded-lg md:text-2xl md:px-3">
					{index}
				</span>
				<div className="flex flex-col">
					<span className="text-lg text-white md:text-xl">{title}</span>
					<span className="text-sm whitespace-pre-line md:text-lg">{description}</span>
				</div>
			</div>
		);
	});
}

export function ComposeHighlitsBonus() {
	return listHighlightsBonus.map(({ index, label }) => {
		return (
			<div
				key={index}
				className="text-gray-400/80 w-max h-max bg-gray-600/60 p-2 px-4 border border-white/20 rounded-full md:text-lg"
			>
				<div className="flex">{label}</div>
			</div>
		);
	});
}
