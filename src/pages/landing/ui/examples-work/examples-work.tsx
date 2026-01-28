'use client';

import Image from 'next/image';
import { examplesData } from 'pages/landing/config/examples-data';
import { useState } from 'react';

import { ImageCompare } from './image-compare';

import { Divider } from 'shared/ui';

export function ExamplesWork() {
  const [activeId, setActiveId] = useState(1);

  const handleClickOnExampleItem = (id: number): void => {
    setActiveId(id);
  };

  const renderExamplesList = () => {
    return examplesData.map(({ id, title, description, image }) => {
      return (
        <div role="button" key={id} onClick={() => handleClickOnExampleItem(id)} className="">
          <div className="">
            <div className="hidden">
              <Image src={String(image?.src)} alt={String(image?.alt)} className="" fill />
            </div>
            <div>
              <h6>{title}</h6>
              <span>{description}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="flex w-max flex-col gap-2">
        <h5>Примеры работ</h5>
        <Divider />
      </div>
      <div>
        <ImageCompare activeId={activeId} />
        <div>{renderExamplesList()}</div>
      </div>
    </section>
  );
}
