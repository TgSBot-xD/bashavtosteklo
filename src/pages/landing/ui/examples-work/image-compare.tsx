import Image from 'next/image';
import { examplesData } from 'pages/landing/config/examples-data';

export function ImageCompare({ activeId }: { activeId: number }) {
  const activeItem = examplesData.find((item) => item.id === activeId);

  if (!activeItem?.image) return null;

  return (
    <div className="bg-card/80 h-full rounded-lg p-4 shadow-xl/20 lg:w-full">
      <div className="relative min-h-80 overflow-hidden rounded-lg lg:aspect-16/10 lg:min-h-0">
        <Image
          data-testid={`examples-image-${activeId}`}
          src={activeItem.image.src}
          alt={activeItem.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
