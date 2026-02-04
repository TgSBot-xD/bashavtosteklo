'use client';

import React, { Suspense } from 'react';

import { ContactForm } from './contact-form';
import { ContactMap } from './map';
import { SkeletonMapContacts } from './skeleton-map';
import { contactInfoData } from 'pages/landing/config/contact-data';

import { Divider } from 'shared/ui';

export function Contacts() {
  return (
    <section
      id="contacts"
      data-testid="contacts"
      className="flex w-full flex-col gap-4 px-4 lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <div className="flex w-max flex-col gap-2">
        <h5 className="text-foreground text-2xl font-bold">Контакты и запись</h5>
        <Divider />
      </div>

      <div className="flex w-full flex-col gap-4 shadow-2xl/20 md:grid md:grid-cols-2">
        <div className="bg-card flex flex-col rounded-lg p-4 shadow-2xl">
          {renderContactInfo()}
          <ContactForm />
        </div>
        <Suspense fallback={<SkeletonMapContacts />}>
          <ContactMap />
        </Suspense>
      </div>
    </section>
  );
}

export function renderContactInfo() {
  return contactInfoData.map(({ id, title, description }) => {
    return (
      <div key={id} className="flex flex-col p-2">
        <h6 className="text-sm font-bold">{title}</h6>
        <span className="text-foreground/70 text-sm">{description}</span>
      </div>
    );
  });
}
