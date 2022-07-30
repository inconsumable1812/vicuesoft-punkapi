import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBeer } from 'src/shared/api/punk';
import type { BeerQueryParameters } from 'src/shared/api/punk';
import { isBeerFull } from '../../guards';

const getBeer = createAsyncThunk(
  'beer/getBeer',
  async (queryParameters: BeerQueryParameters) => {
    const beer = await fetchBeer(queryParameters);

    if (beer instanceof globalThis.Error) {
      return Promise.reject(beer);
    }

    const fullBeer = beer.filter(isBeerFull);
    return fullBeer;
  }
);

export { getBeer };
