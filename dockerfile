FROM node:24-slim AS build

WORKDIR /code

COPY .npmrc package*.json ./

RUN --mount=type=secret,id=GHP_TOKEN,env=GHP_TOKEN \
    --mount=type=cache,target=/root/.npm \
    npm config set //npm.pkg.github.com/:_authToken=$GHP_TOKEN && \
    npm ci --include=dev --prefer-offline --no-audit --no-fund

COPY . .

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /code/dist /usr/share/nginx/html

EXPOSE 80