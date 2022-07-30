import { FC, SyntheticEvent, useState } from 'react';

import { Beer } from 'src/shared/api/punk';

import styles from './BeerContainer.module.scss';
import { BeerCard } from '../../components';

type Props = {
  beer: Beer[];
};

const BeerContainer: FC<Props> = ({ beer }) => {
  const [value, setValue] = useState('');

  const changeInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const filteredBeer =
    value.trim() === ''
      ? beer
      : beer.filter((b) =>
          b.name.toLowerCase().includes(value.trim().toLowerCase())
        );

  return (
    <div>
      <input
        className={`${styles.input}`}
        value={value}
        onInput={changeInput}
        placeholder="Поиск пива..."
      ></input>
      <div className={`${styles.container}`}>
        {filteredBeer.map((b) => (
          <BeerCard key={b.id} beer={b}></BeerCard>
        ))}
      </div>
    </div>
  );
};

export { BeerContainer };
