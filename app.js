const app = require('express')();
const express = require('express');
const router = require('./nhsuk-design-system/config/router');
const nunjucks = require('nunjucks');
const path = require('path');
const reload = require('reload');

app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'nhsuk-design-system/public')));

nunjucks.configure('nhsuk-design-system/views', {
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
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
