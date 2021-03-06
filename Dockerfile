FROM node:16.13.1-alpine3.14
# RUN addgroup app && adduser -S -G app app
# USER app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
#shell cmd
# CMD npm start
#exec cmd --should use this,faster
CMD ["npm","start"]
#Entry Point(to avoid overwritting of caommands during running app on docker...)
# ENTRYPOINT ["npm","start"]