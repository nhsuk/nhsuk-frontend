exports.layout = function(req, res) {
  res.render('styles/layout', {
    title: 'Layout'
  });
};

exports.typography = function(req, res) {
  res.render('styles/typography', {
    title: 'Typography'
  });
};

exports.colours = function(req, res) {
  res.render('styles/colours', {
    title: 'Colours'
  });
};
