const { Router } = require('express');
const path = require('path');

const gameRouter = Router();

gameRouter.get('/boardgames', (req, res, next) => {
  console.log('Fetching some boardgames');
  res.sendFile(path.join(__dirname, '../public', 'boardgames.html'));
});

gameRouter.get('/videogames', (req, res, next) => {
  console.log('Gettin vid games');
  res.send('<h3>Search for games</h3><form method="POST"><input type="text"><button type="submit">Submit</button></form>')
});

gameRouter.post('/videogames', (req, res, next) => {
  console.log("submitting a form request for vid games");
});

module.exports = gameRouter;
