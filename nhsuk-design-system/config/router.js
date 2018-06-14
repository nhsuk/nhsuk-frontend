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

router.get('/styles/breadcrumbs', (req, res) => {
  res.render('styles/breadcrumbs', {});
});

router.get('/styles/action-link', (req, res) => {
  res.render('styles/action-link', {});
});

router.get('/styles/do-dont-lists', (req, res) => {
  res.render('styles/do-dont-lists', {});
});

router.get('/styles/images', (req, res) => {
  res.render('styles/images', {});
});

router.get('/styles/reveals', (req, res) => {
  res.render('styles/reveals', {});
});



router.get('/examples', (req, res) => {
  res.render('examples/index', {});
});

router.get('/examples/page', (req, res) => {
  res.render('examples/page', {});
});

router.get('/examples/test-condition-blisters-v1', (req, res) => {
  res.render('examples/test-condition-blisters-v1', {});
});

router.get('/examples/test-condition-chickenpox', (req, res) => {
  res.render('examples/test-condition-chickenpox', {});
});

router.get('/examples/test-condition-chickenpox-v2', (req, res) => {
  res.render('examples/test-condition-chickenpox-v2', {});
});

router.get('/examples/test-condition-chlamydia', (req, res) => {
  res.render('examples/test-condition-chlamydia', {});
});

router.get('/examples/test-condition-depression', (req, res) => {
  res.render('examples/test-condition-depression', {});
});

router.get('/examples/test-condition-gout', (req, res) => {
  res.render('examples/test-condition-gout', {});
});

router.get('/examples/test-amoxicillin-medicine', (req, res) => {
  res.render('examples/test-amoxicillin-medicine', {});
});

router.get('/examples/test-medicine-amoxicillin-v2', (req, res) => {
  res.render('examples/test-medicine-amoxicillin-v2', {});
});

router.get('/examples/test-medicine-amoxicillin-v3', (req, res) => {
  res.render('examples/test-medicine-amoxicillin-v3', {});
});

router.get('/examples/test-condition-heel-pain-v1', (req, res) => {
  res.render('examples/test-condition-heel-pain-v1', {});
});

router.get('/examples/test-condition-overactive-thyroid', (req, res) => {
  res.render('examples/test-condition-overactive-thyroid', {});
});

router.get('/examples/test-condition-sciatica', (req, res) => {
  res.render('examples/test-condition-sciatica', {});
});

router.get('/examples/test-condition-chest-pain', (req, res) => {
  res.render('examples/test-condition-chest-pain', {});
});

router.get('/examples/test-condition-knee-pain', (req, res) => {
  res.render('examples/test-condition-knee-pain', {});
});

router.get('/examples/test-condition-slipped-disc', (req, res) => {
  res.render('examples/test-condition-slipped-disc', {});
});

router.get('/examples/test-condition-vertigo', (req, res) => {
  res.render('examples/test-condition-vertigo', {});
});

router.get('/examples/test-guide-pregnancy', (req, res) => {
  res.render('examples/test-guide-pregnancy', {});
});

router.get('/examples/header-cookie', (req, res) => {
  res.render('examples/header-cookie', {});
});

router.get('/examples/test-medicine-amoxicillin', (req, res) => {
  res.render('examples/test-medicine-amoxicillin', {});
});

router.get('/examples/test-medicine-amoxicillin-v2', (req, res) => {
  res.render('examples/test-medicine-amoxicillin-v2', {});
});

router.get('/examples/test-medicine-amoxicillin-v3', (req, res) => {
  res.render('examples/test-medicine-amoxicillin-v3', {});
});

router.get('/examples/medicines/index', (req, res) => {
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

router.get('/examples/test-medicine-buscopan', (req, res) => {
  res.render('examples/test-medicine-buscopan', {});
});

router.get('/examples/component-test-header-2018-06-11-buscopan', (req, res) => {
  res.render('examples/component-test-header-2018-06-11-buscopan', {
    navigation: 'test-2018-06-11'
  });
});

router.get('/examples/test-news-52-diet', (req, res) => {
  res.render('examples/test-news-52-diet', {});
});

router.get('/examples/test-image-v1', (req, res) => {
  res.render('examples/test-image-v1', {});
});

router.get('/examples/epilepsy', (req, res) => {
  res.render('examples/epilepsy/index', {});
});

router.get('/examples/epilepsy/symptoms', (req, res) => {
  res.render('examples/epilepsy/symptoms', {});
});

router.get('/examples/epilepsy/diagnosis', (req, res) => {
  res.render('examples/epilepsy/diagnosis', {});
});

router.get('/examples/epilepsy/treatment', (req, res) => {
  res.render('examples/epilepsy/treatment', {});
});

router.get('/examples/epilepsy/living-with', (req, res) => {
  res.render('examples/epilepsy/living-with', {});
});

router.get('/examples/test-image-v2', (req, res) => {
  res.render('examples/test-image-v2', {});
});

router.get('/examples/test-hub-live-well-parent', (req, res) => {
  res.render('examples/test-hub-live-well-parent', {});
});

router.get('/examples/test-hub-live-well-child', (req, res) => {
  res.render('examples/test-hub-live-well-child', {});
});

router.get('/examples/test-hub-nhs-in-england-parent', (req, res) => {
  res.render('examples/test-hub-nhs-in-england-parent', {});
});

router.get('/examples/test-hub-nhs-in-england-child', (req, res) => {
  res.render('examples/test-hub-nhs-in-england-child', {});
});

router.get('/examples/test-general-eye-care', (req, res) => {
  res.render('examples/test-general-eye-care', {});
});

router.get('/examples/test-general-prescription-costs', (req, res) => {
  res.render('examples/test-general-prescription-costs', {});
});

router.get('/examples/test-home', (req, res) => {
  res.render('examples/test-home', {});
});

module.exports = router;
