import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json()); // please let me have a body in the request

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.post("/joke", function (request, response) {
  response.json(request.body); // we are sending back the thing we go, to prove we got it!
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
