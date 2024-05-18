import { getParams } from './getParams.ts';

const PORT: number = +(process.env.PORT || 3000);
const NODE_ENV = process.env.NODE_ENV ?? 'development';

const server = Bun.serve({
  port: PORT,
  fetch: async (request) => {
    const params = await getParams(request);

    await Bun.sleep(Number(params.sleepMs));

    const response = new Response(
      typeof params.response === 'string' ? params.response : JSON.stringify(params.response, null, 2),
      {
        headers: {
          'content-type': getContentType(params.response),
        },
        status: Number(params.statusCode) || 200,
      }
    );
    addHeaders(response, params);
    return response;
  },
});

const getContentType = (response: any) => {
  if (typeof response === 'string') {
    console.log(response);
    if (response.startsWith('<')) return 'text/html';
    return 'text/plain';
  }
  return 'application/json';
};

const addHeaders = (response: Response, params: any) => {
  response.headers.set('Access-Control-Allow-Origin', '*');
  if (params.headers) {
    for (const [key, value] of Object.entries(params.headers)) {
      if (typeof key === 'string' && typeof value === 'string') {
        response.headers.set(key, value);
      }
    }
  }
};

console.log(`[${NODE_ENV}] Listening on http://localhost:${server.port}`);
