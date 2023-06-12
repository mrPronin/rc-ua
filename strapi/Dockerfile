FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN mkdir /app && chown -R node:node /app
USER node

WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm config set fetch-retry-maxtimeout 600000 && npm install --unsafe-perm --platform=linuxmusl --arch=arm64v8 sharp
ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
