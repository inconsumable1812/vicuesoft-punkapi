import Link from 'next/link';
import { FC } from 'react';

import { Beer } from 'src/shared/api/punk';

import { Avatar } from '../Avatar/Avatar';
import { MAX_TEXT_LENGTH } from './constants';
import styles from './BeerCard.module.scss';

type Props = {
  beer: Beer;
};

const BeerCard: FC<Props> = ({ beer }) => {
  const description =
    beer.description.length > MAX_TEXT_LENGTH
      ? beer.description.slice(0, MAX_TEXT_LENGTH) + '...'
      : beer.description;

  return (
    <Link href={`/beer/${beer.id}`} className={`${styles.link}`}>
      <a>
        <div className={`${styles.container}`}>
          <div className={`${styles.beerInfo}`}>
            <div className={`${styles.avatar}`}>
              <Avatar beer={beer}></Avatar>
            </div>
            <h2 className={`${styles.beerName}`}>{beer.name}</h2>
            <p className={`${styles.description}`}>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { BeerCard };
