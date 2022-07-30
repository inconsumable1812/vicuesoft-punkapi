import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { beerReducer } from 'src/features/beer';

const makeStore = () =>
  configureStore({
    reducer: { beer: beerReducer },
    devTools: true
  });

type AppStore = ReturnType<typeof makeStore>;

type AppDispatch = AppStore['dispatch'];

type AppState = ReturnType<AppStore['getState']>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const wrapper = createWrapper<AppStore>(makeStore);

export type { AppStore, AppDispatch, AppState, AppThunk };

export { wrapper, makeStore };
