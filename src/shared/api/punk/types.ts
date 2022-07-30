type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: BoilVolume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type BoilVolume = {
  value: number;
  unit: string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
};

type Hop = {
  name: string;
  amount: BoilVolume;
  add: string;
  attribute: string;
};

type Malt = {
  name: string;
  amount: BoilVolume;
};

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null;
};

type Fermentation = {
  temp: BoilVolume;
};

type MashTemp = {
  temp: BoilVolume;
  duration: number;
};

export type { Beer };
