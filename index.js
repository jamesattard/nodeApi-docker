const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// DB setup
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);

// Middlewares
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require("./routes/userRoutes")(app);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.errmsg });
});

// Server setup
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
