FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN sudo npm install -y
EXPOSE 8080
CMD [ "node", "src/app.js" ]
