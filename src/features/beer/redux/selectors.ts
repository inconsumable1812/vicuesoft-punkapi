import type { AppState } from 'src/app/store';

const selectBeer = (state: AppState) => state.beer;

export { selectBeer };
