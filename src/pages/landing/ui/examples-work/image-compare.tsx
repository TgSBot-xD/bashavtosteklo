'use client';

import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import { useState } from 'react';

import { examplesData } from 'pages/landing/config/examples-data';

export function ImageCompare({ activeId }: { activeId: number }) {
  const [imageError, setImageError] = useState(false);
  const activeItem = examplesData.find((item) => item.id === activeId);

  if (!activeItem?.image) return null;

  const handleImageError = () => {
    setImageError(true);
    Sentry.captureMessage(`Failed to load image: ${activeItem.image.src}`, {
      level: 'warning',
      tags: { component: 'ImageCompare', imageId: String(activeId) },
    });
  };

  return (
    <div className="bg-card/80 h-full rounded-lg p-4 shadow-xl/20 lg:w-full">
      <div className="relative min-h-80 overflow-hidden rounded-lg lg:aspect-16/10">
        {imageError ? (
          <div className="bg-muted flex h-full min-h-80 items-center justify-center">
            <p className="text-muted-foreground text-sm">Изображение недоступно</p>
          </div>
        ) : (
          <Image
            data-testid={`examples-image-${activeId}`}
            src={activeItem.image.src}
            alt={activeItem.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
            onError={handleImageError}
          />
        )}
      </div>
    </div>
  );
}
