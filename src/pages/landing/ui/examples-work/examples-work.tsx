'use client';

import Image from 'next/image';
import { examplesData } from 'pages/landing/config/examples-data';
import { useState } from 'react';

import { ImageCompare } from './image-compare';

import { cn } from 'shared/lib';
import { Divider } from 'shared/ui';

export function ExamplesWork() {
  const [activeId, setActiveId] = useState(1);

  const handleClickOnExampleItem = (id: number): void => {
    setActiveId(id);
  };

  const renderExamplesList = () => {
    return examplesData.map(({ id, title, description, image }) => {
      const isActive = id === activeId;
      return (
        <div
          role="button"
          key={id}
          onClick={() => handleClickOnExampleItem(id)}
          className={cn(
            'hover:ring-foreground/20 flex w-full max-w-full p-3 hover:rounded-lg hover:ring hover:transition-all',
            isActive ? 'ring-foreground/20 rounded-md ring' : '',
          )}
        >
          <div className="flex w-full flex-row items-center gap-3">
            <div className="relative aspect-video h-4/5 w-2/5 shrink-0 md:h-auto md:w-1/5 md:self-start lg:w-1/5 xl:w-1/3">
              <Image
                src={String(image?.src)}
                alt={String(image?.alt)}
                className="rounded-sm object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-2 md:self-start">
              <h6 className="text-foreground flex text-sm font-bold md:text-base">{title}</h6>
              <span className="text-foreground/60 flex text-xs md:text-sm">{description}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="mb-28 flex w-full flex-col gap-6 px-4 lg:max-w-4xl lg:px-0 xl:max-w-7xl">
      <div className="flex w-max flex-col gap-2">
        <h5 className="text-foreground text-2xl font-bold tracking-wide">Примеры работ</h5>
        <Divider />
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-1 md:items-stretch lg:gap-6 xl:w-full xl:grid-cols-[2fr_1fr]">
        <ImageCompare activeId={activeId} />
        <div className="bg-card/80 flex flex-col gap-6 rounded-lg p-4 shadow-xl/20 xl:justify-between xl:gap-0">
          {renderExamplesList()}
        </div>
      </div>
    </section>
  );
}
