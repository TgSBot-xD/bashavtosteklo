import { Button } from '@/src/shared/ui';

// TODO: Сделать номер кликабельный с модальным окном на все часто использоуемые мессенджеры
export function ContactInfo() {
	return (
		<section aria-label='Контакты' className="items-center pr-4 flex flex-col md:flex-row">
			{/* TODO: [BAS-9] Перенести className в один из вариантов, а не перекрывать его */}
			<Button
				variant="default"
				className=" bg-inherit rounded-full hover:bg-foreground/5 hover:ring hover:ring-offset-0 hover:ring-white/20 hover:saturate-150"
			>
				<span>+7 (927) 236 51 08</span>
			</Button>
			<Button
				variant="secondary"
				className="ml-4 hover:bg-primary bg-primary text-secondary hover:saturate-150 rounded-full"
			>
				Онлайн-запись
			</Button>
		</section>
	);
}
