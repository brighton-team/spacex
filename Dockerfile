FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

EXPOSE 8080

RUN npm install

CMD ["npm", "run", "start"]
