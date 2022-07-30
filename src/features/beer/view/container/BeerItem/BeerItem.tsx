import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Beer } from 'src/shared/api/punk';
import { BeerItemsCard } from '../../components';

import styles from './BeerItem.module.scss';

type Props = {
  beer: Beer[];
};

const BeerItem: FC<Props> = ({ beer }) => {
  let currentBeerArray: Beer[] = [];
  const router = useRouter();
  const currentID = router.query.id;
  if (currentID !== undefined) {
    currentBeerArray = beer.filter((b) => b.id === Number(currentID));
  }

  const currentBeer = currentBeerArray[0];

  return (
    <>
      <div className={styles.linkContainer}>
        <Link href={'/'}>
          <a className={styles.link}>На главую</a>
        </Link>
      </div>
      {currentBeer === undefined ? (
        <p>Такое пиво не найдено!</p>
      ) : (
        <BeerItemsCard beer={currentBeer}></BeerItemsCard>
      )}
    </>
  );
};

export { BeerItem };
