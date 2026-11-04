# syntax=docker/dockerfile:1
# Node 18 matches the current production server. Upgrade together with Next (step C).
ARG NODE_IMAGE=node:18.20.8-bookworm-slim

FROM ${NODE_IMAGE} AS deps
WORKDIR /app
ENV HUSKY=0
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

FROM ${NODE_IMAGE} AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* values are inlined at build time. They come from a BuildKit secret.
# IMPORTANT: standalone output COPIES .env* files into .next/standalone, so delete
# them in the same RUN. Otherwise the secret (GITHUB_ACCESS_TOKEN) ends up in the image.
# Lint already runs in the pre-commit hook, so skip it here (about 10 s).
RUN --mount=type=secret,id=buildenv,target=/app/.env.production \
    yarn build --no-lint \
    && rm -f .next/standalone/.env* \
    && if ls -A .next/standalone | grep -q '^\.env'; then echo "env file left in standalone" >&2; exit 1; fi

FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]
