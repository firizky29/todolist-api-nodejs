FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3030
CMD npm run start:prod
