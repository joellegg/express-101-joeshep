const { Router } = require('express')
const path = require('path');

// a lot of people just set router = Router();
const animalRouter = Router();

// example of how we could limit these routes to only farmers
// animalRouter.use(function (req, res, next) {
//   if (req.user === 'farmer') {
//     next();
//   } else {
//     res.status(403).send('Forbidden');
//   }
// })

animalRouter.get('/monkeys', (req, res, next) => {
  console.log('fetching some monkees');
  console.log(`this ran at ${req.requestedTime}`);
  res.sendFile(path.join(__dirname, '../public', 'monkeys.html'));
});

animalRouter.get('/chickens', (req, res, next) => {
  console.log('lookin for chickens');
  res.send('<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>');
});

animalRouter.post('/chickens', (req, res, next) => {
  console.log('lookin fo chickens FORM');
});

module.exports = animalRouter;
