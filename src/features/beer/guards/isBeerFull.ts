import { Beer } from 'src/shared/api/punk/types';

const isBeerFull = (beer: Partial<Beer>): beer is Beer => {
  const isFull =
    beer.abv !== undefined &&
    beer.attenuation_level !== undefined &&
    beer.boil_volume !== undefined &&
    beer.brewers_tips !== undefined &&
    beer.contributed_by !== undefined &&
    beer.description !== undefined &&
    beer.ebc !== undefined &&
    beer.first_brewed !== undefined &&
    beer.food_pairing !== undefined &&
    beer.ibu !== undefined &&
    beer.id !== undefined &&
    beer.image_url !== undefined &&
    beer.ingredients !== undefined &&
    beer.method !== undefined &&
    beer.name !== undefined &&
    beer.ph !== undefined &&
    beer.srm !== undefined &&
    beer.tagline !== undefined &&
    beer.target_fg !== undefined &&
    beer.target_og !== undefined &&
    beer.volume !== undefined;

  return isFull;
};

export { isBeerFull };
