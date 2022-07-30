import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  beer: [],
  activePage: 1,
  beerPerPage: 25
};

export { initialState };
