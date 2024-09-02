// import express from our node_modules
import express from "express";

// instantiate our express app (make an instance of)
// app is now a giant object with all of our express properties and methods
const app = express();

// tell express to expect information in the body of the request
app.use(express.json());

// our data
const fruit = [
  { name: "Banana", colour: "Yellow", vegetable: false },
  { name: "Orange", colour: "orange", vegetable: false },
  { name: "Tomato", colour: "tomato", vegetable: true },
  { name: "Strawberry", colour: "red", vegetable: false },
  { name: "Peach", colour: "redish", vegetable: false },
  { name: "Cherry", colour: "red", vegetable: false },
  { name: "Pineapple", colour: "Yellow", vegetable: false },
  { name: "Avocado", colour: "Green", vegetable: false },
  { name: "Lemon", colour: "yellow", vegetable: false },
  { name: "Lime", colour: "lime", vegetable: false },
  { name: "Kiwi", colour: "green", vegetable: false },
];

// create a GET endpoint (http://localhost:8080/)
app.get("/", function (request, response) {
  console.log("endpoint / was visited");
  response.json("You are looking at my root route. How roude.");
});

// http://localhost:8080/fruit
app.get("/fruit", function (request, response) {
  console.log("endpoint /fruit was visited");
  response.json(fruit);
});

app.post("/fruit", function (request, response) {
  response.json("Fruit POST endpoint called");
});

// starting our express server on port 8080
app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});
