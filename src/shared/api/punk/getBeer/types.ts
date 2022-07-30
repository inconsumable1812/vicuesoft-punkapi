import type { Beer } from '../types';

type QueryParameters = {
  page: number;
  per_page?: number;
};
type Response = Partial<Beer>[];

export type { QueryParameters, Response };
