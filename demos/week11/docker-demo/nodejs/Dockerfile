# 1: Use a Node.js base image (alpine is small and lightweight version)
FROM node:alpine

# 2: Set the working directory inside the container
WORKDIR /usr/src/app

# 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4: Install the app dependencies
RUN npm install

# 5: Copy the rest of the app code to the working directory
COPY . .

# 6: Expose port 8081 to the outside world
EXPOSE 8081

# 7: Command to start the Node.js app
CMD ["npm", "start"]
