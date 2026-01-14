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
		description: 'От 10 минут · современный прозрачный полимер.',
	},
	{
		index: '03',
		title: 'Тонировка',
		description: 'Пленка США/Корея · гарантия 5–10 лет.',
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
		<section className="flex border w-max ring-white/5 rounded-xl">
			<div className="flex flex-col m-6 w-full h-full">
				<h4 className="text-lg mb-10">Быстрые факты</h4>
				<div className="flex flex-col w-max ml-8 first:mt-0 last:mb-0">
					<div></div>
					{ComposeHighlitsList()}
				</div>
				<div className="flex flex-row">{ComposeHighlitsBonus()}</div>
			</div>
		</section>
	);
}

export function ComposeHighlitsList() {
	return listHighlights.map(({ index, title, description }) => {
		return (
			<div
				key={index}
				className="flex flex-row p-4 mb-6 h-min hover:ring hover:ring-offset-1 hover:ring-white/5 hover:rounded-xl "
			>
				<div className="-z-10 hover:blur-2xl hover:bg-white/30"></div>
				<span className="flex items-center p-2 px-4 mr-4 rounded-xl text-lg ring ring-white/10 ring-offset-1 ">
					{index}
				</span>
				<div className="flex flex-col">
					<span className="text-lg text-white">{title}</span>
					<span className="text-sm">{description}</span>
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
				className="text-gray-400/80 w-max h-max bg-gray-600/60 p-2 px-4 m-2 border border-white/20 rounded-full first:ml-0 last:mr-0"
			>
				<div className="flex">{label}</div>
			</div>
		);
	});
}
