FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

EXPOSE 4444

CMD ["npm", "run", "start"]
