//index.js
const path = require('path');
const express = require('express');
const expresshbs = require('express-handlebars');
const port = 8080;

const app = express();
const expresshbsOptions = {};
expresshbsOptions.defaultLayout = 'main';
expresshbsOptions.extname = '.hbs';
//expresshbsOptions.layoutDir = path.join(__dirname,'views/layouts');
/*
const expresshbsOptions = {
    defaultLayout = 'main',
    extname = '.hbs',
    layoutDir = path.join(__dirname, 'views/layouts')
};
*/
app.engine('.hbs', expresshbs(expresshbsOptions));
app.set('view engine', '.hbs')
//app.set('views', path.join(__dirname, 'views'))

const data = {}
data.user = 'Naymat'
data.man = 'mandem'

app.get('/', (request, response) => {
  response.render('home', data)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

const server = require('ws').Server;
//const s = new server( {port = 8081} );