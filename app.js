const express = require("express");
const ProductRoutes = require("./routes/product.route.js");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
})

app.use("/api", ProductRoutes);

module.exports = app;