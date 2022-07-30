import { FC } from 'react';

import { Beer } from 'src/shared/api/punk';

import { Avatar } from '../Avatar/Avatar';
import styles from './BeerItemsCard.module.scss';

type Props = {
  beer: Beer;
};

const BeerItemsCard: FC<Props> = ({ beer }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.beerInfo}`}>
        <div className={`${styles.avatar}`}>
          <Avatar beer={beer}></Avatar>
        </div>
        <h2 className={`${styles.beerName}`}>{beer.name}</h2>
        <p className={`${styles.description}`}>
          <span className={styles.bold}>tagline:</span> {beer.tagline}
        </p>
        <p className={`${styles.description}`}>
          <span className={styles.bold}> description:</span> {beer.description}
        </p>
        <p className={`${styles.description}`}>
          <span className={styles.bold}>abv:</span> {beer.abv}
        </p>
        <p className={`${styles.description}`}>
          <span className={styles.bold}> food_pairing:</span>{' '}
          {beer.food_pairing}
        </p>
      </div>
    </div>
  );
};

export { BeerItemsCard };
