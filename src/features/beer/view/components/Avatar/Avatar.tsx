import Image from 'next/image';
import { FC } from 'react';
import { Beer } from 'src/shared/api/punk';

import styles from './Avatar.module.scss';

type Props = {
  beer: Beer;
};

const Avatar: FC<Props> = ({ beer }) => {
  return (
    <div className={`${styles.container}`}>
      <Image
        className={`${styles.image}`}
        src={beer.image_url === null ? '/img/beer-mock.svg' : beer.image_url}
        alt={beer.name}
        layout="fill"
      ></Image>
    </div>
  );
};

export { Avatar };
