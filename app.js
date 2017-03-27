'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// routes modules
const animalRoutes = require('./routes/animals')
const gameRoutes = require('./routes/games')

// ORDER MATTERS! IT RUNS THROUGH UNTIL IT HITS

// middleware is a function placed between request and response
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
};

// express.static is middle ware function that tells it where to look for our files
app.use(express.static(__dirname + '/public'));

app.use(requestTime);

// pulled from separate module
app.use(animalRoutes);
app.use(gameRoutes);

app.use((req, res) => {
  res.send("We only have monkeys and chickens. Sorry")
})
// we can set up an environment variable so we don't declare which port to listen on
// using dotenv (npm package)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
