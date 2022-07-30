import { Beer } from 'src/shared/api/punk/types';
import { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  beer: Beer[];
  currentBeer: Beer | null;
  activePage: number;
  beerPerPage: number;
};

export type { State };
