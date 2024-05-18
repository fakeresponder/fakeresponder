# fakeresponder

A simple HTTP server that could respond with with a given status code and/or sleep for a given amount of time.

## Usage

- https://fakeresponder.onrender.com/?sleepMs=2000 - sleep for 2 seconds before responding
- https://fakeresponder.onrender.com/?statusCode=500 - respond with 500 status code
- https://fakeresponder.onrender.com/?response=ok - respond with `ok` as the response body (`Content-Type: text/plain`)
- https://fakeresponder.onrender.com/?response=%7B%22ok%22:true%7D - respond with `{"ok": true}` as the response body (`Content-Type: application/json`)
- https://fakeresponder.onrender.com/?headers={"my-header":"value"} - respond with `my-header: value` in the response headers

The examples above are for `GET` requests. You can also use `HEAD`, `POST`, `PUT`, `DELETE`, `PATCH`.

All the params can be combined, e.g. https://fakeresponder.onrender.com/?sleepMs=2000&statusCode=500

## Contributing

- `bun dev` to start the dev server.
- `bun start` to start the server without the `--hot` reload flag.
- `bun test` to run the tests.

## Deployment to [Render](https://render.com/)

1. Create a new **web service**
2. Select **Docker** as your service's runtime
