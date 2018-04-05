/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.layout = function(req, res) {
  res.render('layout', {
    title: 'Typography'
  });
};

exports.typography = function(req, res) {
  res.render('typography', {
    title: 'Typography'
  });
};

exports.colours = function(req, res) {
  res.render('colours', {
    title: 'Colours'
  });
};

exports.page = function(req, res) {
  res.render('page', {
    title: 'Page'
  });
};

exports.page1 = function(req, res) {
  res.render('page-1', {
    title: 'Page 1'
  });
};

exports.page2 = function(req, res) {
  res.render('page-2', {
    title: 'Page 2'
  });
};

exports.page3 = function(req, res) {
  res.render('page-3', {
    title: 'Page 3'
  });
};

exports.page4 = function(req, res) {
  res.render('page-4', {
    title: 'Page 4'
  });
};

exports.page5 = function(req, res) {
  res.render('page-5', {
    title: 'Page 5'
  });
};

exports.decisions = function(req, res) {
  res.render('decisions', {
    title: 'decisions'
  });
};

exports.page7 = function(req, res) {
  res.render('page-7', {
    title: 'Page 7'
  });
};
