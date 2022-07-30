import { fetch as fetchBeer } from './fetch';
import {
  QueryParameters as BeerQueryParameters,
  Response as BeerResponse
} from './types';

export type { BeerQueryParameters, BeerResponse };

export { fetchBeer };
