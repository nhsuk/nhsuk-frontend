let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {});
});

router.get('/pages/components', (req, res) => {
  res.render('pages/components/index', {});
});

module.exports = router;
