import { Button } from '@/src/shared/ui';

{
	/* TODO: Сделать номер кликабельный с модальным окном на все часто использоуемые мессенджеры */
}

export function ContactInfo() {
	return (
		<article className="items-center blur-non pr-4 flex flex-col md:flex-row sm:flex-col">
			<Button
				variant="default"
				type="submit"
				className=" bg-inherit rounded-full hover:bg-foreground/2 hover:outline-2 hover:outline-solid  hover:outline-foreground/20 hover:saturate-115"
			>
				+7 (927) 236-51-08
			</Button>
			<Button
				variant="secondary"
				className="ml-4 hover:bg-primary bg-primary text-secondary hover:saturate-150 rounded-full"
			>
				Онлайн-запись
			</Button>
		</article>
	);
}
