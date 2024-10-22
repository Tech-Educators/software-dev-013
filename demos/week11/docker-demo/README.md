1. Introduction to Docker

What is Docker?

Docker is an open-source platform that automates the deployment, scaling, and management of applications using containers. A container is a lightweight, standalone package that includes everything an application needs to run: code, runtime, libraries, and settings. Containers are highly portable, meaning they can run consistently across different environments (development, staging, production).

Why use Docker?

Consistency Across Environments: By bundling an application with all its dependencies, Docker ensures that an app will behave the same way regardless of where it's run—on a developer’s machine, on a server, or in the cloud.
Isolation: Docker provides isolated environments, meaning multiple containers can run on the same machine without interfering with each other (for example, different Node.js versions or conflicting library dependencies).
Efficiency: Since containers share the host OS's kernel, they consume fewer resources than traditional virtual machines, resulting in faster startup times and less overhead. 2. Containers vs. Virtual Machines
Virtual Machines (VMs)

A virtual machine is an abstraction of physical hardware. Each VM includes a full copy of an operating system (OS), the application, and its dependencies. VMs are heavyweight because they virtualize the entire hardware stack, which can be slow and resource-intensive.
Containers

A container, on the other hand, virtualizes the OS rather than the hardware. Containers share the host OS's kernel, which makes them much more lightweight than VMs. They contain only the application and its dependencies, which means they start faster and consume less disk space and memory.

Key Differences:
Startup Time:
VMs might take minutes to boot, while containers can start in seconds.
Resource Usage: VMs consume more resources since they include the full OS, while containers share the host OS’s kernel and are much more efficient.
Use Case Discussion:

3. Docker Workflow

Key Concepts:

Images: Docker images are the source code for your containers. An image is a read-only template with instructions for creating a Docker container. For example, an image could include an OS with a Node.js installation and your app's code.

Containers: A container is a runnable instance of an image. When you run an image, Docker creates a container from it. Containers are isolated from each other but can communicate through defined channels.

Dockerfile: A Dockerfile is a text file that contains a set of instructions to build a Docker image. These instructions include details like the base image to use (e.g., node:alpine), how to install dependencies, and how to run the application.

Docker Hub: Docker Hub is a cloud-based registry where developers can store and share Docker images. It has thousands of pre-built images that you can pull and use, including popular ones like nginx, node, and postgres.

4. Hands-on Docker

To Install Docker:

Install Docker Desktop for your respective platform (Windows, Mac, or Linux).
https://www.docker.com/products/docker-desktop/

To Dockerize a Node.js App:

Create the Dockerfile:
The Dockerfile tells Docker how to build your image, what base image to use, what commands to run, and which ports to expose.

Dockerfile:

```
# Step 1: Use a lightweight Node.js base image

FROM node:alpine

# Step 2: Set the working directory inside the container

WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies

COPY package\*.json ./
RUN npm install

# Step 4: Copy the rest of the application code

COPY . .

# Step 5: Expose port 8081

EXPOSE 8081

# Step 6: Define the command to run the app

CMD ["npm", "start"]
```

Build the Docker Image:

Build your Docker image by running the following command: (The -t flag allows you to tag the image)

docker build -t "your docker username"/my-node-app:latest .

Docker will execute the instructions in the Dockerfile, and each step is cached, so if no changes are made, future builds will be faster.

Run the Container:

Run the container using the image you just built. The -p flag maps port 8081 on the container to port 8081 on the host.

docker run -p 8081:8081 my-node-app

Open your browser and navigate to http://localhost:8081. You should see "Hello from Docker!".

To Dockerize a Next.js App:

Create the Dockerfile for Next.js:

# Step 1: Use a lightweight Node.js base image

FROM node:alpine

# Step 2: Set the working directory

WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies

COPY package\*.json ./
RUN npm install

# Step 4: Copy the rest of the application

COPY . .

# Step 5: Build the Next.js app

RUN npm run build

# Step 6: Expose port 8081

EXPOSE 8081

# Step 7: Define the command to run the app

CMD ["npm", "start"]

Build and Run the Container:

docker build -t joeventon/my-next-app:latest .

docker run -p 8081:8081 my-next-app

Navigate to http://localhost:8081 to see your Next.js app running in a container.

5. Using Docker Compose\

Why Docker Compose?

Docker Compose is a tool that helps you define and run multi-container Docker applications. With a single docker-compose.yml file, you can configure all your services (app, database, cache, etc.) and run them with one command.

Example: A Node.js App with PostgreSQL:

Create the docker-compose.yml File:

services:
web:
image: node:alpine
volumes: - .:/usr/src/app
working_dir: /usr/src/app
ports: - "8081:8081"
command: npm start

db:
image: postgres
environment:
POSTGRES_USER: myuser
POSTGRES_PASSWORD: mypassword
POSTGRES_DB: mydatabase
ports: - "5432:5432"

Run Docker Compose:

docker compose up

This command starts both the Node.js application and PostgreSQL database in separate containers.
You can now connect to the PostgreSQL database on localhost:5432 and access the web app on localhost:8081.

This command:

docker exec -it nodejs-db-1 psql -U myuser -d mydatabase

will run a service in your termin that allows tou to write SQL in the terminal and edit your DB.

6. Docker in Development and Production

Mount Volumes: In development, use Docker’s volume mounting to keep your code outside the container but map it into the container’s file system. This allows for live-reloading:

In nextjs, after you have created the image (make sure you edit the command to use the ports that you have specified):

docker run -p 8081:8081 -v $(pwd):/usr/src/app -v /usr/src/app/node_modules "name of your app" npm run dev -- -p 8081

Now, any changes to your code are automatically reflected inside the running container.

When deploying Dockerized applications, you’ll typically want to push the final production image to a container registry like Docker Hub.

Example: Push to Docker Hub (replace app name and dockerhub username with yours!)

docker tag "name of your app" "dockerhub username"/"name of your app":latest
docker push "dockerhub username"/"name of your app":latest

Now the image is available in Docker Hub and can be pulled from anywhere.
