FROM node:7.9

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
