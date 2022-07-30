import { FC, useEffect } from 'react';
import ReactLoading from 'react-loading';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';

import { REQUEST_STATUS } from 'src/shared/helpers/redux';
import { selectBeer } from './redux/selectors';
import { changeCurrentBeer, getBeer, getOneBeer } from './redux/slice';
import { BeerContainer, BeerItem } from './view/container';
import styles from './Beer.module.scss';
import { useRouter } from 'next/router';

type Props = { view: 'cards' | 'item' };

const Beer: FC<Props> = ({ view }) => {
  const dispatch = useAppDispatch();
  const { beer, status, error, beerPerPage, activePage, currentBeer } =
    useAppSelector(selectBeer);

  useEffect(() => {
    dispatch(getBeer({ page: activePage, per_page: beerPerPage }));
  }, [activePage, beerPerPage, dispatch]);

  const router = useRouter();
  const currentID = router.query.id;

  useEffect(() => {
    if (currentID !== undefined) {
      const currentBeerArray = beer.filter((b) => b.id === Number(currentID));

      if (currentBeerArray.length === 0) {
        dispatch(getOneBeer({ id: Number(currentID) }));
      } else {
        dispatch(changeCurrentBeer(currentBeerArray[0]));
      }
    }
  }, [beer, currentID, dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:

    case REQUEST_STATUS.fulfilled:
      const shouldDisplayProgress = status === REQUEST_STATUS.pending;

      switch (view) {
        case 'cards': {
          return (
            <>
              {shouldDisplayProgress && (
                <div className={styles.loading}>
                  <ReactLoading type="cylon" color="blue" />
                </div>
              )}
              <BeerContainer
                activePage={activePage}
                beer={beer}
                beerPerPage={beerPerPage}
              ></BeerContainer>
            </>
          );
        }
        case 'item': {
          return (
            <>
              {shouldDisplayProgress && (
                <div className={styles.loading}>
                  <ReactLoading type="cylon" color="blue" />
                </div>
              )}
              <BeerItem
                shouldDisplayProgress={shouldDisplayProgress}
                currentBeer={currentBeer}
              />
            </>
          );
        }
        default: {
          return null;
        }
      }

    default:
      return <p className={styles.error}>{error}</p>;
  }
};

export type { Props };

export { Beer };
