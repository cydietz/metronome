FROM node:18 AS development
WORKDIR /app
ENV NODE_ENV=development

COPY package*.json .
RUN npm install

COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]