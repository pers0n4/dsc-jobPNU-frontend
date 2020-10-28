FROM node:12-alpine as build-stage

WORKDIR ${HOME}/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# EXPOSE 8080
# CMD [ "npm", "run", "serve" ]

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage ${HOME}/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
