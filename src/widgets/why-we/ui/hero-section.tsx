import { FeaturesList } from './features-list';

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
        <div></div>
      </div>
    </section>
  );
}

export { WhyWeSection };
