const express = require('express');
const app = express();
const hbs = require('hbs');

require('./src/hbs/helpers');

const port = process.env.PORT || 4000;

//  statics
app.use('/public', express.static(__dirname + '/public'));
// Express HBS Engine
app.set("views", __dirname + '/src/views');
// Partials
hbs.registerPartials(__dirname + '/src/views/partials', function (err) {});

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Darwin',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Darwin',
  });
});

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});