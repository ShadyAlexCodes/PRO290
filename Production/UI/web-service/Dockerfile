# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Build the app
RUN npm run build

# Expose the port server is running on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
