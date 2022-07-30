import type { QueryParameters, Response } from './types';

const fetch = async ({
  id
}: QueryParameters): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://api.punkapi.com/v2/beers/${id.toString()}`
    );

    const data = await response.json();

    if (data.message !== undefined) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
