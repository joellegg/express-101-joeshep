'use strict';

const express = require('express');
const app = express();

// ORDER MATTERS! IT RUNS THROUGH UNTIL IT HITS

// middleware is a function placed between request and response
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
};

app.use(express.static(__dirname + '/public'));

app.use(requestTime);

// express.static is middle ware function that tells it where to look for our files
app.get('/monkeys', (req, res, next) => {
  console.log('fetching some monkees');
  console.log(`this ran at ${req.requestedTime}`);
  res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next) => {
  console.log('lookin for chickens');
  res.send('<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>');
})

app.post('/chickens', (req, res, next) => {
  console.log('lookin fo chickens FORM')
})

app.use((req, res) => {
  res.send("We only have monkeys and chickens. Sorry")
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})
