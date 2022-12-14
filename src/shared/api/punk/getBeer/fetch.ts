import type { QueryParameters, Response } from './types';

const fetch = async ({
  page,
  per_page = 25
}: QueryParameters): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://api.punkapi.com/v2/beers?page=${page.toString()}&per_page=${per_page.toString()}`
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
