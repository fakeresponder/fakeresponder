import { expect, test } from 'bun:test';

const host = '0.0.0.0:3000';

test('GET /?response=ok', async () => {
  const response = await fetch(`http://${host}/?response=ok`);
  expect(response.headers.get('content-type')).toEqual('text/plain');
  const text = await response.text();
  expect(text).toEqual('ok');
});

test('GET /?response={"ok": true}', async () => {
  const response = await fetch(`http://${host}/?response={"ok": true}`);
  expect(response.headers.get('content-type')).toEqual('application/json');
  const json = await response.json();
  expect(json).toEqual({ ok: true });
});

test('GET /?response={"string": "hello", "number": 123, "array": [1, 2, 3], "object": {"key": "value"}, "null": null, "boolean": true}', async () => {
  const response = await fetch(
    `http://${host}/?response={"string": "hello", "number": 123, "array": [1, 2, 3], "object": {"key": "value"}, "null": null, "boolean": true}`
  );
  expect(response.headers.get('content-type')).toEqual('application/json');
  const json = await response.json();
  expect(json).toEqual({
    string: 'hello',
    number: 123,
    array: [1, 2, 3],
    object: { key: 'value' },
    null: null,
    boolean: true,
  });
});

test('POST response=ok', async () => {
  const response = await fetch(`http://${host}`, {
    method: 'POST',
    body: 'response=ok',
  });
  const text = await response.text();
  expect(text).toEqual('ok');
});

test('POST response={"ok": true}', async () => {
  const response = await fetch(`http://${host}`, {
    method: 'POST',
    body: 'response={"ok": true}',
  });
  const json = await response.json();
  expect(json).toEqual({ ok: true });
});

test('POST {"response": "{\\"ok\\": true}"}', async () => {
  const response = await fetch(`http://${host}`, {
    method: 'POST',
    body: '{"response": "{\\"ok\\": true}"}',
  });
  const json = await response.json();
  expect(json).toEqual({ ok: true });
});
