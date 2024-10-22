# 1: Use a Node.js base image (alpine is small and lightweight version)
FROM node:alpine

# 2: Set the working directory inside the container
WORKDIR /usr/src/app

# 3: Copy package.json and package-lock.json
COPY package*.json ./

# 4: Install dependencies
RUN npm install

# 5: Copy the rest of the app code
COPY . .

# 6: Build the Next.js app for production
RUN npm run build

# 7: Expose port 8081 for the app
EXPOSE 8081

# 8: Start the Next.js server
CMD ["npm", "start"]












