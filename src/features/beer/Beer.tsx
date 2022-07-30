import { FC, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';

import { REQUEST_STATUS } from 'src/shared/helpers/redux';
import { selectBeer } from './redux/selectors';
import { getBeer } from './redux/slice';
import { BeerContainer } from './view/container';

type Props = {};

const Beer: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { beer, status, error } = useAppSelector(selectBeer);

  useEffect(() => {
    dispatch(getBeer({ page: 1 }));
  }, [dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:
      return (
        <div>
          <p>Loading...</p>
        </div>
      );

    case REQUEST_STATUS.fulfilled:
      return <BeerContainer beer={beer}></BeerContainer>;
    default:
      return <p>{error}</p>;
  }
};

export type { Props };

export { Beer };
