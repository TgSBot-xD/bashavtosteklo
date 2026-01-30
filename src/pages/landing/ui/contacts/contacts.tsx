import { Divider } from 'shared/ui';

import { ContactForm } from './contact-form';
import { contactInfoData } from 'pages/landing/config/contact-data';

export function Contacts() {
  return (
    <section id="contacts" data-testid="contacts" className="flex flex-col gap-4 px-4">
      <div className="flex w-max flex-col gap-2">
        <h5 className="text-foreground text-2xl font-bold">Контакты и запись</h5>
        <Divider />
      </div>

      <div className="flex flex-col">
        <div className="bg-card ring-foreground/20 flex flex-col rounded-lg p-4 shadow-2xl">
          {renderContactInfo()}
          <ContactForm />
        </div>
        {/*Временно удалено*/}
        {/*<ContactMap />*/}
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
