import { expect, test } from 'bun:test';

const host = '0.0.0.0:3000';

test('GET /?sleepMs=100', async () => {
  const startTime = performance.now();
  const response = await fetch(`http://${host}/?sleepMs=100`);
  const text = await response.text();
  const endTime = performance.now();
  expect(endTime - startTime).toBeGreaterThan(100);
  expect(endTime - startTime).toBeLessThan(110);
});

test('POST {"sleepMs": 100}', async () => {
  const startTime = performance.now();
  const response = await fetch(`http://${host}`, {
    method: 'POST',
    body: '{"sleepMs": 100}',
  });
  const text = await response.text();
  const endTime = performance.now();
  expect(endTime - startTime).toBeGreaterThan(100);
  expect(endTime - startTime).toBeLessThan(110);
});
