import { Divider } from 'shared/ui';

import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';
import { ContactMap } from './map';

export function Contacts() {
  return (
    <section data-testid="contacts" className="">
      <div className="">
        <h5 className="">Контакты и запись</h5>
        <Divider />
      </div>

      <div className="">
        <div className="">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </section>
  );
}
