FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN rm -rf .next
RUN yarn run build

## Production
FROM node:20-alpine AS production

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["yarn", "start"]