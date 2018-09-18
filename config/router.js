let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {});
});

router.get('/components', (req, res) => {
  res.render('pages/components/index', {});
});

router.get('/components/banners', (req, res) => {
  res.render('pages/components/banners', {});
});

module.exports = router;
