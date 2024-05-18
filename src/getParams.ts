import { HOMEPAGE } from './constants.ts';

export const getParams = async (request: Request): Promise<any> => {
  const params =
    request.method === 'GET'
      ? // GET params, e.g. /?sleepMs=1000&statusCode=200
        parseSearchStringOrJson(new URL(request.url).searchParams.toString())
      : // POST/PUT/DELETE params
        parseSearchStringOrJson(await request.text());

  if (params.respondWithRequestHeaders !== undefined) {
    params.response = request.headers;
  } else if (params.response === undefined) {
    params.response = HOMEPAGE;
  } else {
    try {
      params.response = parseBooleanParamsInJson(JSON.parse(params.response));
    } catch (error: unknown) {
      // ignore
    }
  }

  if (params.headers) {
    try {
      params.headers = JSON.parse(params.headers);
    } catch (error: unknown) {
      params.headers = {};
    }
  }

  return params;
};

const parseSearchStringOrJson = (searchStringOrJson: string): Record<string, any> => {
  try {
    return JSON.parse(searchStringOrJson);
  } catch (error: unknown) {
    // ignore
  }

  try {
    return Object.fromEntries(new URLSearchParams(searchStringOrJson));
  } catch (error: unknown) {
    // ignore
  }

  return {};
};

// https://stackoverflow.com/a/51345799
const parseBooleanParamsInJson = (input: Record<string, any>): Record<string, any> => {
  return JSON.parse(JSON.stringify(input), (k, v) => (v === 'true' ? true : v === 'false' ? false : v));
};
