export const HOMEPAGE = `

- ?sleepMs=2000 - sleep for 2 seconds before responding
- ?statusCode=404 - respond with 404 status code
- ?response={"ok": true} - respond with {"ok": true} JSON
- ?response=ok - respond with "ok" string
- ?headers={"my-header":"value"} - respond with "my-header": "value" header
- ?respondWithRequestHeaders=true - respond with request headers

All the params can be combined, e.g. ?sleepMs=2000&statusCode=500

Repo: https://github.com/fakeresponder/fakeresponder

`.trim();
