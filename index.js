const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const db = require('./config/db/');
//Router
const home = require('./routers/index.js');
const product = require('./routers/product.js');


const app = express();
const port = 3000;

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('', home);
app.use('', product);

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({
  extended: true
}));

db.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})