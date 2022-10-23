FROM node:18 AS development
WORKDIR /app
ENV NODE_ENV=development
COPY package.json ./
RUN npm install
RUN npm install -g nodemon

COPY . ./
EXPOSE 3000
CMD [ "npm", "run", "dev" ]