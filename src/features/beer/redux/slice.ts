import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getBeer } from './thunks/getBeer';
import { selectBeer } from './selectors';

const slice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeBeerPerPage: (state, action) => {
      state.beerPerPage = action.payload;
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
      });
  }
});

const { reducer } = slice;

const { changeBeerPerPage, changeActivePage } = slice.actions;

export { reducer, getBeer, selectBeer, changeBeerPerPage, changeActivePage };
