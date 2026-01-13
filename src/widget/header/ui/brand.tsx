import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/shared/ui';
import { Dot } from 'lucide-react';

export function Brand() {
	return (
		<div className="flex flex-col items-center py-6 blur-none z-2 md:flex-row">
			<div>
				<h1 className="pr-4 text-sm md:text-lg">БАШАВТОСТЕКЛО</h1>
				<HoverCard>
					<HoverCardTrigger className="hidden md:flex text-sm items-center leading-none font-medium">
						Уфа {<Dot />} Черниковка
					</HoverCardTrigger>
					<HoverCardContent className="text-sm md:text-lg">
						г. Уфа, Дмитрия донского, 50а
					</HoverCardContent>
				</HoverCard>
			</div>
		</div>
	);
}
