const express = require("express");
const restaurantsRouter = require("./routes/restaurants");

const app = express();

// Routes
app.use("/apis/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
