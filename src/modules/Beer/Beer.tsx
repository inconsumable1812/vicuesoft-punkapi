import type { NextPage } from 'next';

import { PageHead } from 'src/shared/components';
import { Beer as BeerComponent } from 'src/features/beer';

import styles from './Beer.module.scss';

const Beer: NextPage = () => {
  return (
    <>
      <PageHead title={'Beer'} />
      <div className={`${styles.root}`}>
        <BeerComponent></BeerComponent>
      </div>
    </>
  );
};

export { Beer };
