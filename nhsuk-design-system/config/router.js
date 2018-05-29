let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {});
});

router.get('/decisions', (req, res) => {
  res.render('decisions', {});
});

router.get('/styles/layout', (req, res) => {
  res.render('styles/layout', {});
});

router.get('/styles/typography', (req, res) => {
  res.render('styles/typography', {});
});

router.get('/styles/colours', (req, res) => {
  res.render('styles/colours', {});
});

router.get('/styles/callouts', (req, res) => {
  res.render('styles/callouts', {});
});

router.get('/styles/icons', (req, res) => {
  res.render('styles/icons', {});
});

router.get('/styles/header-footer', (req, res) => {
  res.render('styles/header-footer', {});
});

router.get('/examples', (req, res) => {
  res.render('examples/index', {});
});

router.get('/examples/chickenpox', (req, res) => {
  res.render('examples/chickenpox', {});
});

router.get('/examples/page', (req, res) => {
  res.render('examples/page', {});
});

router.get('/examples/page-1', (req, res) => {
  res.render('examples/page-1', {});
});

router.get('/examples/page-2', (req, res) => {
  res.render('examples/page-2', {});
});

router.get('/examples/page-3', (req, res) => {
  res.render('examples/page-3', {});
});

router.get('/examples/page-4', (req, res) => {
  res.render('examples/page-4', {});
});

router.get('/examples/page-5', (req, res) => {
  res.render('examples/page-5', {});
});

router.get('/examples/test-medicine', (req, res) => {
  res.render('examples/test-medicine', {});
});

router.get('/examples/test-medicine-v2', (req, res) => {
  res.render('examples/test-medicine-v2', {});
});

router.get('/examples/test-medicine-v3', (req, res) => {
  res.render('examples/test-medicine-v3', {});
});

router.get('/styles/breadcrumbs', (req, res) => {
  res.render('styles/breadcrumbs', {});
});

router.get('/examples/test-gout', (req, res) => {
  res.render('examples/test-gout', {});
});

router.get('/examples/test-sciatica', (req, res) => {
  res.render('examples/test-sciatica', {});
});

router.get('/examples/medicines', (req, res) => {
  res.render('examples/medicines/index', {});
});

router.get('/examples/medicines/propranolol', (req, res) => {
  res.render('examples/medicines/propranolol/index', {});
});

router.get('/examples/medicines/propranolol/page-1', (req, res) => {
  res.render('examples/medicines/propranolol/page-1', {});
});

router.get('/examples/medicines/propranolol/page-2', (req, res) => {
  res.render('examples/medicines/propranolol/page-2', {});
});

router.get('/examples/medicines/propranolol/page-3', (req, res) => {
  res.render('examples/medicines/propranolol/page-3', {});
});

router.get('/examples/header-cookie', (req, res) => {
  res.render('examples/header-cookie', {});
});

router.get('/examples/test-depression', (req, res) => {
  res.render('examples/test-depression', {});
});

router.get('/examples/medicines', (req, res) => {
  res.render('examples/medicines/index', {});
});

router.get('/examples/medicines/propranolol', (req, res) => {
  res.render('examples/medicines/propranolol/index', {});
});

router.get('/examples/medicines/propranolol/page-1', (req, res) => {
  res.render('examples/medicines/propranolol/page-1', {});
});

router.get('/examples/medicines/propranolol/page-2', (req, res) => {
  res.render('examples/medicines/propranolol/page-2', {});
});

router.get('/examples/medicines/propranolol/page-3', (req, res) => {
  res.render('examples/medicines/propranolol/page-3', {});
});

router.get('/examples/test-condition-vertigo', (req, res) => {
  res.render('examples/test-condition-vertigo', {});
});

router.get('/examples/test-condition-slipped-disc', (req, res) => {
  res.render('examples/test-condition-slipped-disc', {});
});

router.get('/examples/test-condition-heel-pain-v1', (req, res) => {
  res.render('examples/test-condition-heel-pain-v1', {});
});

router.get('/examples/test-condition-blisters-v1', (req, res) => {
  res.render('examples/test-condition-blisters-v1', {});
});

module.exports = router;
