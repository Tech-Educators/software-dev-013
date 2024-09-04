import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // let us use the environement variables from .env (please)

// connect to our database
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/jokes", async function (request, response) {
  // query the databse and get the jokes
  const jokes = await db.query("SELECT * FROM jokes");
  response.json(jokes.rows);
});

app.post("/joke", function (request, response) {
  response.json(request.body); // we are sending back the thing we go, to prove we got it!
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
