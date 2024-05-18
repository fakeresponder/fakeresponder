import { expect, test } from 'bun:test';

const host = '0.0.0.0:3000';

test('GET /?headers={"my-header": "hello"}', async () => {
  const response = await fetch(`http://${host}/?headers={"my-header": "hello"}`);
  expect(JSON.parse(JSON.stringify(response.headers))['my-header']).toEqual('hello');
});
