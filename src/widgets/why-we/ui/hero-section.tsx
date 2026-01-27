import { FeaturesList } from './features-list';
import { WhyUsList } from './why-us';

import { Divider } from 'shared/ui';

function WhyWeSection() {
  return (
    <section className="scroll mb-24 flex flex-col gap-4 px-4 lg:max-w-4xl lg:px-0 xl:max-w-7xl">
      <div className="flex w-max flex-col gap-2">
        <h4 className="text-2xl font-bold">Почему мы</h4>
        <Divider />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <FeaturesList />
        <WhyUsList />
      </div>
    </section>
  );
}

export { WhyWeSection };
