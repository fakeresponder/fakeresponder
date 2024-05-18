import { expect, test } from 'bun:test';

const host = '0.0.0.0:3000';

test('GET /?respondWithRequestHeaders=true', async () => {
  const response = await fetch(`http://${host}/?respondWithRequestHeaders=true`, {
    headers: {
      'my-header': 'hello',
    },
  });
  expect(response.headers.get('content-type')).toEqual('application/json');
  const json = await response.json();
  expect(json).toHaveProperty('host', host);
  expect(json).toHaveProperty('my-header', 'hello');
});
