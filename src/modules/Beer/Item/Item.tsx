import type { NextPage } from 'next';

import { PageHead } from 'src/shared/components';
import { Beer as BeerComponent } from 'src/features/beer';
import { useAppSelector } from 'src/app/hooks';
import { selectBeer } from 'src/features/beer/redux/slice';

import styles from './Item.module.scss';

const Item: NextPage = () => {
  const { currentBeer } = useAppSelector(selectBeer);

  const title = currentBeer !== null ? currentBeer.name : 'Beer Item';
  return (
    <>
      <PageHead title={title} />
      <div className={`${styles.root}`}>
        <BeerComponent view="item"></BeerComponent>
      </div>
    </>
  );
};

export { Item };
