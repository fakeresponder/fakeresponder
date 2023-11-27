import { expect, test } from 'bun:test';
import { HOMEPAGE } from '../src/constants.ts';

const host = '0.0.0.0:3000';
const expectedResponse = HOMEPAGE;

test('GET /', async () => {
  const response = await fetch(`http://${host}`);
  expect(response.status).toEqual(200);
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});

test('POST /', async () => {
  const response = await fetch(`http://${host}`, { method: 'POST' });
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});

test('PUT /', async () => {
  const response = await fetch(`http://${host}`, { method: 'PUT' });
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});

test('DELETE /', async () => {
  const response = await fetch(`http://${host}`, { method: 'DELETE' });
  const text = await response.text();
  expect(text).toEqual(expectedResponse);
});
