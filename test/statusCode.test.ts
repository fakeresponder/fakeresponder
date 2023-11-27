import { expect, test } from 'bun:test';
import { HOMEPAGE } from '../src/constants.ts';

const host = '0.0.0.0:3000';
const expectedResponse = HOMEPAGE;

test('GET /?statusCode=400', async () => {
  const response = await fetch(`http://${host}/?statusCode=400`);
  expect(response.status).toEqual(400);
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});

test('POST {"statusCode": 400}', async () => {
  const response = await fetch(`http://${host}`, {
    method: 'POST',
    body: '{"statusCode": 400}',
  });
  expect(response.status).toEqual(400);
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});
