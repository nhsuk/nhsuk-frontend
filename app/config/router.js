let express = require('express')
let router = express.Router()

/* Component pages */

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

router.get('/styles/review-date', (req, res) => {
  res.render('styles/review-date', {});
});

router.get('/styles/tables', (req, res) => {
  res.render('styles/tables', {});
});

router.get('/styles/multi-page-nav', (req, res) => {
  res.render('styles/multi-page-nav', {});
});

router.get('/styles/beta-banner', (req, res) => {
  res.render('styles/beta-banner', {});
});


/* Example pages */

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

router.get('/examples/test-condition-knee-pain-v2', (req, res) => {
  res.render('examples/test-condition-knee-pain-v2', {});
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

router.get('/examples/google', (req, res) => {
  res.render('examples/google/index', {});
});

router.get('/examples/google-allergies', (req, res) => {
  res.render('examples/google-allergies/index', {});
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

router.get('/examples/components-wagtail', (req, res) => {
  res.render('examples/components/wagtail', {});
});

router.get('/examples/header-footer-example', (req, res) => {
  res.render('examples/header-footer-example', {});
});

router.get('/examples/diabetes', (req, res) => {
  res.render('examples/diabetes/index', {});
});

router.get('/examples/diabetes/page', (req, res) => {
  res.render('examples/diabetes/page', {});
});

router.get('/examples/medicines/medicines-v1', (req, res) => {
  res.render('examples/medicines/medicines-v1', {});
});

router.get('/examples/medicines/medicines-v2', (req, res) => {
  res.render('examples/medicines/medicines-v2', {});
});

router.get('/examples/medicines/medicines-v3', (req, res) => {
  res.render('examples/medicines/medicines-v3', {});
});

router.get('/examples/medicines/medicines-v4', (req, res) => {
  res.render('examples/medicines/medicines-v4', {});
});

router.get('/examples/test-condition-sore-throat-v1', (req, res) => {
  res.render('examples/test-condition-sore-throat-v1', {});
});

router.get('/examples/health-a-z/health-a-z', (req, res) => {
  res.render('examples/health-a-z/health-a-z', {});
});

router.get('/examples/home-page/nhsuk-home-page', (req, res) => {
  res.render('examples/home-page/nhsuk-home-page', {});
});

router.get('/examples/home-page/nhsuk-home-page-v2', (req, res) => {
  res.render('examples/home-page/nhsuk-home-page-v2', {});
});

router.get('/examples/home-page/nhsuk-home-page-v3', (req, res) => {
  res.render('examples/home-page/nhsuk-home-page-v3', {});
});

router.get('/examples/home-page/nhsuk-home-page-v4', (req, res) => {
  res.render('examples/home-page/nhsuk-home-page-v4', {});
});

router.get('/examples/home-page/nhsuk-home-page-v5', (req, res) => {
  res.render('examples/home-page/nhsuk-home-page-v5', {});
});

router.get('/examples/maurotest', (req, res) => {
  res.render('examples/maurotest', {});
});

router.get('/examples/maurotest2', (req, res) => {
  res.render('examples/maurotest2', {});
});

router.get('/examples/maurotest3', (req, res) => {
  res.render('examples/maurotest3', {});
});


module.exports = router;
