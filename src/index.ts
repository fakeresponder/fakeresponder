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
          'content-type': typeof params.response === 'string' ? 'text/plain' : 'application/json',
        },
        status: Number(params.statusCode) || 200,
      }
    );
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  },
});

console.log(`[${NODE_ENV}] Listening on http://localhost:${server.port}`);
