export const HOMEPAGE = `
<!DOCTYPE html>

<pre style="font-size: 1rem"><code>- <a href='/?sleepMs=2000'>/?sleepMs=2000</a> - sleep for 2 seconds before responding

- <a href='/?statusCode=404'>/?statusCode=404</a> - respond with 404 status code

- <a href='/?response={"ok": true}'>/?response={"ok": true}</a> - respond with {"ok": true} JSON (application/json)

- <a href='/?response=ok'>/?response=ok</a> - respond with "ok" string (text/plain or text/html)

- <a href='/?headers={"my-header":"value"}'>/?headers={"my-header":"value"}</a> - respond with "my-header": "value" header

- <a href='/?respondWithRequestHeaders=true'>/?respondWithRequestHeaders=true</a> - respond with request headers



All the params can be combined, e.g. <a href='/?sleepMs=2000&statusCode=500'>/?sleepMs=2000&statusCode=500</a>



Repo: <a href="https://github.com/fakeresponder/fakeresponder">https://github.com/fakeresponder/fakeresponder</a>
</code></pre>
`.trim();
