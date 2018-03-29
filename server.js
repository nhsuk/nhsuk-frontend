var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var nunjucks = require('nunjucks');
var reload = require('reload')

// Controllers
var HomeController = require('./controllers/home');

var app = express();

// view engine setup
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', HomeController.index);
app.get('/layout', HomeController.layout);
app.get('/typography', HomeController.typography);
app.get('/colours', HomeController.colours);
app.get('/page', HomeController.page);
app.get('/page-1', HomeController.page1);
app.get('/page-2', HomeController.page2);
app.get('/page-3', HomeController.page3);

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));

  if (app.get('env') !== 'production') {
    reload(app);
  }
});

module.exports = app;
