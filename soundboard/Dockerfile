FROM node:14 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 4200
CMD ["npm", "run", "start"]