import { FC, SyntheticEvent, useState } from 'react';
import Pagination from 'react-js-pagination';

import { Beer } from 'src/shared/api/punk';
import { useAppDispatch } from 'src/app/hooks';

import styles from './BeerContainer.module.scss';
import { BeerCard } from '../../components';
import { MAX_BEER_COUNT } from './constants';
import {
  changeActivePage,
  changeBeerPerPage
} from 'src/features/beer/redux/slice';

type Props = {
  beer: Beer[];
  activePage: number;
  beerPerPage: number;
};

const BeerContainer: FC<Props> = ({ beer, activePage, beerPerPage }) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const changeInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const filteredBeer =
    value.trim() === ''
      ? beer
      : beer.filter((b) =>
          b.name.toLowerCase().includes(value.trim().toLowerCase())
        );

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber === activePage) return;

    dispatch(changeActivePage(pageNumber));
  };

  const handleChangeBeerPerPage = (e: SyntheticEvent<HTMLSelectElement>) => {
    const newValue = +e.currentTarget.value;
    dispatch(changeBeerPerPage(newValue));
  };

  return (
    <div>
      <input
        className={`${styles.input}`}
        value={value}
        onInput={changeInput}
        placeholder="Поиск пива..."
      ></input>
      <div className={styles.selectContainer}>
        <p>Кол-во карточек на странице:</p>
        <select value={beerPerPage} onChange={handleChangeBeerPerPage}>
          <option value={25}>25</option>
          <option value={40}>40</option>
          <option value={60}>60</option>
          <option value={80}>80</option>
        </select>
      </div>
      <div className={`${styles.container}`}>
        {filteredBeer.length === 0 ? (
          <p>Такое пиво не найдено!</p>
        ) : (
          filteredBeer.map((b) => <BeerCard key={b.id} beer={b}></BeerCard>)
        )}
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={beerPerPage}
        totalItemsCount={MAX_BEER_COUNT}
        onChange={handleChangePage}
        innerClass={styles.pagination}
        itemClass={styles.paginationItem}
        activeClass={styles.activeItem}
        disabledClass={styles.disabledItem}
      ></Pagination>
    </div>
  );
};

export { BeerContainer };
