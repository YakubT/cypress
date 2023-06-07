FROM cypress/browsers:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY cypress cypress
COPY cypress.json .

RUN npm install 
ENTRYPOINT ["npx","cypress","run"]