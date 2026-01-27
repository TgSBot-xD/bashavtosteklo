import { FeaturesList } from './features-list';
import { WhyUsList } from './why-us-list';

import { Divider } from 'shared/ui';

function WhyWeSection() {
  return (
    <section>
      <div>
        <h4>Почему мы</h4>
        <Divider />
      </div>
      <div>
        <FeaturesList />
        <WhyUsList />
      </div>
    </section>
  );
}

export { WhyWeSection };
