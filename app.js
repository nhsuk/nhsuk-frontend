const app = require('express')();
const express = require('express');
const router = require('./app/config/router');
const nunjucks = require('nunjucks');
const path = require('path');

app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'app/assets')));

nunjucks.configure('app/views', {
  autoescape: true,
  express: app
});

app.use('/', router)

if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Listening for changes at http://localhost:' + app.get('port'));
});

module.exports = app;
