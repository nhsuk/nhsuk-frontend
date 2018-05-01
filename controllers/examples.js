exports.index = function(req, res) {
  res.render('examples/index', {
    title: 'Examples index'
  });
};

exports.page = function(req, res) {
  res.render('examples/page', {
    title: 'Page'
  });
};

exports.page1 = function(req, res) {
  res.render('examples/page-1', {
    title: 'Page 1'
  });
};

exports.page2 = function(req, res) {
  res.render('examples/page-2', {
    title: 'Page 2'
  });
};

exports.page3 = function(req, res) {
  res.render('examples/page-3', {
    title: 'Page 3'
  });
};

exports.page4 = function(req, res) {
  res.render('examples/page-4', {
    title: 'Page 4'
  });
};

exports.page5 = function(req, res) {
  res.render('examples/page-5', {
    title: 'Page 5'
  });
};

