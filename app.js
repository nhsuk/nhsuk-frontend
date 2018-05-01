const app = require('express')();
const express = require('express');
const router = require('./config/router');
const nunjucks = require('nunjucks');
const path = require('path');
const reload = require('reload');

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use('/', router)

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
