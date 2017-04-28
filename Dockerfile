FROM node:7.9

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

EXPOSE 3001

EXPOSE 8000

CMD ["npm", "run", "dev"]
