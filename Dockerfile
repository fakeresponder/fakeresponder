FROM oven/bun

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN bun install --yarn
COPY . .

ENV NODE_ENV production

CMD [ "bun", "start" ]
