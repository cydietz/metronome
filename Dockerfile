FROM node:19 AS development
WORKDIR /app
ENV NODE_ENV=development
COPY package.json ./
RUN mkdir -p node_modules/
RUN chown -R node node_modules/
RUN npm install

COPY . ./
EXPOSE 3000
USER node
CMD [ "npm", "run", "start" ]