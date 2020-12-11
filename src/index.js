const path = require('path');
const express = require('express');
var morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3100;

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

// HTTP log
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})