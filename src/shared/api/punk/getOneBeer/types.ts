import type { Beer } from '../types';

type QueryParameters = {
  id: number;
};
type Response = Partial<Beer>[];

export type { QueryParameters, Response };
