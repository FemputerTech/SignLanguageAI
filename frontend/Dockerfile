# Use offical Node.js image as the base image
FROM NODE:14-alpine

# Set the working directory of the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Set the command to start the app using serve
CMD ["npm", "start"]