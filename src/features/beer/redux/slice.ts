import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getBeer } from './thunks/getBeer';
import { selectBeer } from './selectors';
import { getOneBeer } from './thunks';
import { isBeerFull } from '../guards';

const slice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeBeerPerPage: (state, action) => {
      state.beerPerPage = action.payload;
    },
    changeCurrentBeer: (state, action) => {
      state.currentBeer = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBeer.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBeer.fulfilled, (state, action) => {
        const beer = action.payload;

        state.status = 'fulfilled';
        state.beer = beer;
      })
      .addCase(getBeer.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      })
      .addCase(getOneBeer.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getOneBeer.fulfilled, (state, action) => {
        const beer = action.payload;

        if (beer.length === 0) {
          state.currentBeer = null;
          return;
        }

        state.status = 'fulfilled';
        state.currentBeer = beer[0];
      })
      .addCase(getOneBeer.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  }
});

const { reducer } = slice;

const { changeBeerPerPage, changeActivePage, changeCurrentBeer } =
  slice.actions;

export {
  reducer,
  getBeer,
  selectBeer,
  changeBeerPerPage,
  changeActivePage,
  getOneBeer,
  changeCurrentBeer
};
