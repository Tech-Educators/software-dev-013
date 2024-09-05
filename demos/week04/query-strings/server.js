import express from "express";
import { apples } from "./apples.js";
const app = express();

app.get("/", (_, response) => {
  response.json("What do you get if you cross Tim... a cross Tim.");
});

// http://localhost:8080/apples?sort=asc
// then request.query will be:
// { sort: "asc" }
app.get("/apples", (request, response) => {
  const sort = request.query.sort;

  let filteredApples = apples;

  if (sort === "asc") {
    // sort the apples
    filteredApples.sort();
  } else if (sort === "desc") {
    // sort the apples, then reverse the order
    filteredApples.sort().reverse();
  }

  response.json(filteredApples);
});

app.listen(8080, () => console.log("You startin'? On port A E A E?"));
