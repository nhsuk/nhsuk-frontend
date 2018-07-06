let express = require('express')
let router = express.Router()

/* Styles pages */

router.get('/', (req, res) => {
  res.render('home', {});
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

router.get('/styles/icons', (req, res) => {
  res.render('styles/icons', {});
});

router.get('/styles/header-footer', (req, res) => {
  res.render('styles/header-footer', {});
});

router.get('/styles/do-dont-lists', (req, res) => {
  res.render('styles/do-dont-lists', {});
});

router.get('/styles/callouts', (req, res) => {
  res.render('styles/callouts', {});
});

router.get('/styles/care-cards', (req, res) => {
  res.render('styles/care-cards', {});
});

router.get('/styles/breadcrumbs', (req, res) => {
  res.render('styles/breadcrumbs', {});
});

router.get('/styles/action-link', (req, res) => {
  res.render('styles/action-link', {});
});

router.get('/styles/images', (req, res) => {
  res.render('styles/images', {});
});

router.get('/styles/reveals', (req, res) => {
  res.render('styles/reveals', {});
});

router.get('/styles/video', (req, res) => {
  res.render('styles/video', {});
});

/* Examples */

router.get('/examples', (req, res) => {
  res.render('examples/index', {});
});

router.get('/examples/test-condition-blisters-v1', (req, res) => {
  res.render('examples/test-condition-blisters-v1', {});
});

router.get('/examples/test-condition-chickenpox-v2', (req, res) => {
  res.render('examples/test-condition-chickenpox-v2', {});
});

router.get('/examples/test-condition-gout', (req, res) => {
  res.render('examples/test-condition-gout', {});
});

router.get('/examples/test-medicine-amoxicillin-v2', (req, res) => {
  res.render('examples/test-medicine-amoxicillin-v2', {});
});

router.get('/examples/test-condition-heel-pain-v1', (req, res) => {
  res.render('examples/test-condition-heel-pain-v1', {});
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

router.get('/examples/test-general-dental-costs', (req, res) => {
  res.render('examples/test-general-dental-costs', {});
});

router.get('/examples/test-home', (req, res) => {
  res.render('examples/test-home', {});
});

router.get('/examples/allergies', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-overview', {});
});

router.get('/examples/allergies/test-condition-allergies-overview', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-overview', {});
});

router.get('/examples/allergies/test-condition-allergies-symptoms', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-symptoms', {});
});

router.get('/examples/allergies/test-condition-allergies-diagnosis', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-diagnosis', {});
});

router.get('/examples/allergies/test-condition-allergies-treatment', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-treatment', {});
});

router.get('/examples/allergies/test-condition-allergies-prevention', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-prevention', {});
});

router.get('/examples/allergies/test-condition-allergies-overview-v2', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-overview-v2', {});
});

router.get('/examples/allergies/test-condition-allergies-overview-v3', (req, res) => {
  res.render('examples/allergies/test-condition-allergies-overview-v3', {});
});

router.get('/examples/google', (req, res) => {
  res.render('examples/google/index', {});
});

router.get('/examples/google-allergies', (req, res) => {
  res.render('examples/google-allergies/index', {});
});

router.get('/examples/test-template-general', (req, res) => {
  res.render('examples/test-template-general', {});
});


router.get('/examples/video/test-video-1', (req, res) => {
  res.render('examples/video/test-video-1', {});
});

router.get('/examples/video/test-video-2', (req, res) => {
  res.render('examples/video/test-video-2', {});
});

router.get('/examples/video/test-video-3', (req, res) => {
  res.render('examples/video/test-video-3', {});
});

router.get('/examples/test-minihub-amd', (req, res) => {
  res.render('examples/test-minihub-amd/index', {});
});

router.get('/examples/test-minihub-amd/symptoms', (req, res) => {
  res.render('examples/test-minihub-amd/symptoms', {});
});

router.get('/examples/test-minihub-amd/getting-diagnosed', (req, res) => {
  res.render('examples/test-minihub-amd/getting-diagnosed', {});
});

router.get('/examples/test-minihub-amd/treatments', (req, res) => {
  res.render('examples/test-minihub-amd/treatments', {});
});

router.get('/examples/test-minihub-amd/living-with-amd', (req, res) => {
  res.render('examples/test-minihub-amd/living-with-amd', {});
});

router.get('/examples/test-minihub-amd/google', (req, res) => {
  res.render('examples/test-minihub-amd/google', {});
});

router.get('/examples/test-minihub-amd/google-results', (req, res) => {
  res.render('examples/test-minihub-amd/google-results', {});
});

router.get('/examples/test-minihub-amd-v2', (req, res) => {
  res.render('examples/test-minihub-amd-v2/index', {});
});

router.get('/examples/test-minihub-amd-v2/symptoms', (req, res) => {
  res.render('examples/test-minihub-amd-v2/symptoms', {});
});

router.get('/examples/test-minihub-amd-v2/getting-diagnosed', (req, res) => {
  res.render('examples/test-minihub-amd-v2/getting-diagnosed', {});
});

router.get('/examples/test-minihub-amd-v2/treatments', (req, res) => {
  res.render('examples/test-minihub-amd-v2/treatments', {});
});

router.get('/examples/test-minihub-amd-v2/living-with-amd', (req, res) => {
  res.render('examples/test-minihub-amd-v2/living-with-amd', {});
});

router.get('/examples/test-minihub-amd-v2/google', (req, res) => {
  res.render('examples/test-minihub-amd-v2/google', {});
});

router.get('/examples/test-minihub-amd-v2/google-results', (req, res) => {
  res.render('examples/test-minihub-amd-v2/google-results', {});
});

router.get('/examples/components', (req, res) => {
  res.render('examples/components/index', {});
});

module.exports = router;
