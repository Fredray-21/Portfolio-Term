FROM node:20

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "build"]

ENTRYPOINT ["npx", "http-server", "-p", "5000", "build"]
