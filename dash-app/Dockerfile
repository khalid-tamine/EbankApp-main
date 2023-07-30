FROM node:16.16.0-alpine as build
WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/dash-app /usr/share/nginx/html

EXPOSE 80
