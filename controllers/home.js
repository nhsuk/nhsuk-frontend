/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.decisions = function(req, res) {
  res.render('decisions', {
    title: 'decisions'
  });
};
