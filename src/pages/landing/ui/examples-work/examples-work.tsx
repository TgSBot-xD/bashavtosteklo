'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ImageCompare } from './image-compare';
import { examplesData } from 'pages/landing/config/examples-data';

import { cn } from 'shared/lib';
import { Divider } from 'shared/ui';

export function ExamplesWork() {
  const [activeId, setActiveId] = useState(1);

  const handleClickOnExampleItem = (id: number): void => {
    setActiveId(id);
  };

  const renderExamplesList = (): React.ReactNode => {
    return examplesData.map(({ id, title, description, image }) => {
      const isActive = id === activeId;
      return (
        <button
          type="button"
          data-testid={`examples-trigger-${id}`}
          key={id}
          aria-label={`Кнопка для отображения примера работы ${title}`}
          onClick={() => handleClickOnExampleItem(id)}
          className={cn(
            'hover:ring-foreground/20 flex w-full max-w-full cursor-pointer p-3 hover:rounded-lg hover:ring hover:transition-all',
            isActive ? 'ring-foreground/20 rounded-md ring' : '',
          )}
        >
          <div className="flex w-full flex-row items-center gap-3">
            <div className="relative aspect-video h-4/5 w-2/5 shrink-0 md:h-auto md:w-1/5 md:self-start lg:w-1/5 xl:w-1/5 2xl:w-1/3">
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-sm object-cover"
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 1280px) 20vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-2 text-left md:self-start">
              <h6 className="text-foreground flex text-sm font-bold md:text-base">{title}</h6>
              <span className="text-foreground/60 flex text-xs md:text-sm">{description}</span>
            </div>
          </div>
        </button>
      );
    });
  };

  return (
    <section
      id="examples"
      data-testid="examples-work"
      className="flex w-full flex-col gap-6 px-4 lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <div className="flex w-max flex-col gap-2">
        <h5 className="text-foreground text-2xl font-bold tracking-wide">Примеры работ</h5>
        <Divider />
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-1 md:items-stretch lg:gap-6 2xl:w-full 2xl:grid-cols-[2fr_1fr]">
        <ImageCompare activeId={activeId} />
        <div className="bg-card/80 flex flex-col gap-6 rounded-lg p-4 shadow-xl/20 xl:justify-between xl:gap-0">
          {renderExamplesList()}
        </div>
      </div>
    </section>
  );
}
