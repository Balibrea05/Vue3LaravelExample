FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY /app/package*.json ./

# install dependencies
RUN npm install

COPY /app .

CMD ["npm", "run", "dev"]
