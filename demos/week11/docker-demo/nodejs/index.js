const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker! THIS IS A CHANGE");
});

app.get("/info", (req, res) => {
  res.json({
    app: "Dockerised Node.js App",
    version: "1.0.0",
    status: "Running",
    time: new Date(),
  });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on port 8081`);
});
