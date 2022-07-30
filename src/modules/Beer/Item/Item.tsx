import type { NextPage } from 'next';

import { PageHead } from 'src/shared/components';
import { Beer as BeerComponent } from 'src/features/beer';

import styles from './Item.module.scss';

const Item: NextPage = () => {
  return (
    <>
      <PageHead title={'Beer Item'} />
      <div className={`${styles.root}`}>
        <BeerComponent view="item"></BeerComponent>
      </div>
    </>
  );
};

export { Item };
