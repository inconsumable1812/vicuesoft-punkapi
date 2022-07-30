import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchOneBeer } from 'src/shared/api/punk';
import type { OneBeerQueryParameters } from 'src/shared/api/punk';
import { isBeerFull } from '../../guards';

const getOneBeer = createAsyncThunk(
  'beer/getOneBeer',
  async (queryParameters: OneBeerQueryParameters) => {
    const beer = await fetchOneBeer(queryParameters);

    if (beer instanceof globalThis.Error) {
      return Promise.reject(beer);
    }

    const fullBeer = beer.filter(isBeerFull);
    return fullBeer;
  }
);

export { getOneBeer };
