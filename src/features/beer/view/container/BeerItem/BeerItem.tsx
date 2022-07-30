import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { changeCurrentBeer } from 'src/features/beer/redux/slice';
import { getOneBeer } from 'src/features/beer/redux/thunks';

import { Beer } from 'src/shared/api/punk';
import { BeerItemsCard } from '../../components';

import styles from './BeerItem.module.scss';

type Props = {
  currentBeer: Beer | null;
  shouldDisplayProgress: boolean;
};

const BeerItem: FC<Props> = ({ currentBeer, shouldDisplayProgress }) => {
  return (
    <>
      <div className={styles.linkContainer}>
        <Link href={'/'}>
          <a className={styles.link}>На главую</a>
        </Link>
      </div>
      {currentBeer === null ? (
        !shouldDisplayProgress && <p>Такое пиво не найдено!</p>
      ) : (
        <BeerItemsCard beer={currentBeer}></BeerItemsCard>
      )}
    </>
  );
};

export { BeerItem };
