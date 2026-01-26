import { Dot } from 'lucide-react';
import React from 'react';

import { servicesList } from '../config/services-items';

import { Divider } from 'shared/ui';

function Services() {
  return (
    <section className="flex w-full flex-col p-4">
      <div className="flex w-max flex-col">
        <h4 className="">Услуги</h4>
        <Divider />
      </div>
      <div className="grid">{renderServicesList()}</div>
    </section>
  );
}

function renderServicesList() {
  return servicesList.map(({ id, title, description, workingHours }) => {
    return (
      <div key={id} aria-label={title}>
        <div className="flex flex-col">
          <div className="flex">
            {/* Header секции услуг */}
            <span>{title}</span>
            <span>{workingHours}</span>
          </div>

          <div className="flex flex-col">
            {/* Центральная часть секции услуг */}
            <span className="flex flex-row">
              <Dot />
              {description[1]}
            </span>
            <span className="flex flex-row">
              <Dot />
              {description[2]}
            </span>
          </div>

          <div className="flex flex-row">
            {/* Нижняя часть секции услуг */}
            <span className="flex text-xs">Подробнее</span>
          </div>
        </div>
      </div>
    );
  });
}

export { Services };
