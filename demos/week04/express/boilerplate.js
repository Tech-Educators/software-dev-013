// import express from our node_modules
import express from "express";

// instantiate our express app (make an instance of)
// app is now a giant object with all of our express properties and methods
const app = express();

// tell express to expect information in the body of the request
app.use(express.json());

// create a GET endpoint (http://localhost:8080/)
app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

// starting our express server on port 8080
app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});
