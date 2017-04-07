FROM node:7.7

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
