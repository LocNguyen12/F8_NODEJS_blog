const path = require('path');
const express = require('express');
var morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3100;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP log
// app.use(morgan('combined'));

// Template engine

// MVC: Action -> Dispatcher -> Function handler 

app.engine('.hbs', handlebars({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Home, search, contact

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});