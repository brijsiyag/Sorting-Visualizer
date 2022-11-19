# Nodejs Image
FROM node:16.13.1-alpine3.14

# Set Working directory of app
WORKDIR /app

# Copy package.json and package-lock.json to avoid reinstalling packages
COPY package*.json .

# Install packages
RUN npm install

# Copy source code
COPY . .

# Expose port to run app on host machine
EXPOSE 3000

# Start app
CMD ["npm","start"]