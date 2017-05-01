# This dockerfile is made to create a dev server by default
# Run docker-compose up to start working on your application

FROM node:7.9

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

EXPOSE 3001

CMD ["npm", "run", "dev"]
