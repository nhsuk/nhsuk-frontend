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
var StylesController = require('./controllers/styles');
var ExamplesController = require('./controllers/examples');

var app = express();

// view engine setup
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', HomeController.index);
app.get('/decisions', HomeController.decisions);

app.get('/styles/layout', StylesController.layout);
app.get('/styles/typography', StylesController.typography);
app.get('/styles/colours', StylesController.colours);

app.get('/examples/page', ExamplesController.page);
app.get('/examples/page-1', ExamplesController.page1);
app.get('/examples/page-2', ExamplesController.page2);
app.get('/examples/page-3', ExamplesController.page3);
app.get('/examples/page-4', ExamplesController.page4);
app.get('/examples/page-5', ExamplesController.page5);

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
