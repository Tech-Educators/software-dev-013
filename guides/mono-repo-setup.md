# Setting Up a Monorepo with React (Vite) and Express (Node.js)

## Project Structure

The project structure will be as follows:

- mono-repo
  - client
    - node_modules
    - package.json
    - index.html
    - app.js
    - style.css
  - server
    - .env
    - node_modules
    - package.json
    - server.js
  - .gitignore

## Steps

### 1. Initialize the Monorepo

1. Create the root directory for your monorepo:

   ```bash
   mkdir monorepo
   cd monorepo
   ```

2. Create the `client` and `server` directories:
   ```bash
   mkdir client
   mkdir server
   ```

### 2. Setup the Client

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Initialize a Vite project:

   ```bash
   npm i vite
   ```

3. Navigate back to the root directory:
   ```bash
   cd ..
   ```

### 3. Setup the Server (Express)

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Initialize a new npm project:

   ```bash
   npm init -y
   ```

3. Install required dependencies:

   ```bash
   npm install express cors pg dotenv
   ```

4. cd back up to the root of the mono-repo
   ```bash
   cd ..
   ```

### Setup up both parts

1. Open it up in vscode:

   ```bash
   code .
   ```

2. Add the following scripts to the `client` package.json:

   ```json
   "dev": "vite",
   "build": "npm i && vite build"
   ```

3. Add the following scripts to the `server` package.json:

   ```json
   "dev": "node --watch server"
   ```

4. Ensure the `server.js` can use the import sytax by adding this to the package.json:

   ```json
   "type": "module"
   ```

5. In the root directory (not in the client or server folders) create a file called `.gitignore` and put the following in it:

   ```
   node_modules
   dist
   ```

6. Create a `server.js` file and set up the basic Express server:

   ```js
   // server.js
   // import our node modules
   import express from "express";
   import cors from "cors";
   import pg from "pg";
   import dotenv from "dotenv";

   // setup the server
   const app = express();
   app.use(cors());
   app.use(express.json());
   dotenv.config();

   // connect to our database
   const db = new pg.Pool({
     connectionString: process.env.DATABASE_URL,
   });

   app.get("/", (req, res) => {
     res.send("Hello world!");
   });

   app.listen(8080, function () {
     console.log(`Server is running on port 8080`);
   });
   ```

7. Create a `.env` file in the `server` directory. This is where we will store our DATABASE_URL from Supabase.

8. In the `client` create an app.js and an index.html files. In the html file put:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
       <script type="module" src="./app.js" defer></script>
     </head>
     <body>
       <h1>Hello world!</h1>
     </body>
   </html>
   ```

### 5. Running both the client and the server

In separate terminals:

1. To run the client:

   ```bash
   cd client
   npm run dev
   ```

2. To run the server:
   ```bash
   cd server
   npm run dev
   ```
