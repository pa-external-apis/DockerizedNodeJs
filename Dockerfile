FROM node:18.16-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["npm", "start"]