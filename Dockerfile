FROM node:18

WORKDIR /react-vite-gastos
# COPY package.json .
# RUN npm install

EXPOSE 5173

COPY . .
# CMD npm start