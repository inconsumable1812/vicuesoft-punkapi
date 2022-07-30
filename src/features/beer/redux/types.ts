import { Beer } from 'src/shared/api/punk/types';
import { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  beer: Beer[];
};

export type { State };
