// Get the --testhost=... argument from the backstop command
const arguments = require('minimist')(process.argv.slice(2));
const TEST_HOST = arguments.testhost || "http://host.docker.internal:3000"

module.exports = {
  "id": "nhsuk-frontend",
  "viewports": [
    {
      "label": "iPhone 5/SE",
      "width": 320,
      "height": 568
    },
    {
      "label": "iPhone 6-8",
      "width": 375,
      "height": 667
    },
    {
      "label": "iPad",
      "width": 768,
      "height": 1024
    },
    {
      "label": "Surface, iPad Pro",
      "width": 1366,
      "height": 768
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "A-Z navigation",
      "url": `${TEST_HOST}/components/nav-a-z/index.html`
    },
    {
      "label": "Action link",
      "url": `${TEST_HOST}/components/action-link/index.html`
    },
    {
      "label": "Back link",
      "url": `${TEST_HOST}/components/back-link/index.html`
    },
    {
      "label": "Breadcrumb",
      "url": `${TEST_HOST}/components/breadcrumb/index.html`
    },
    {
      "label": "Button",
      "url": `${TEST_HOST}/components/button/index.html`
    },
    {
      "label": "Button click",
      "url": `${TEST_HOST}/components/button/index.html`,
      "clickSelector": ".nhsuk-button",
      "viewports": [
        {
          "label": "Surface, iPad Pro",
          "width": 1366,
          "height": 768
        }
      ]
    },
    {
      "label": "Button as a link",
      "url": `${TEST_HOST}/components/button/link.html`
    },
    {
      "label": "Button disabled",
      "url": `${TEST_HOST}/components/button/disabled.html`
    },
    {
      "label": "Button secondary",
      "url": `${TEST_HOST}/components/button/secondary.html`
    },
    {
      "label": "Button reverse",
      "url": `${TEST_HOST}/components/button/reverse.html`
    },
    {
      "label": "Care card - Non urgent",
      "url": `${TEST_HOST}/components/care-card/care-card-non-urgent.html`
    },
    {
      "label": "Care card - Urgent",
      "url": `${TEST_HOST}/components/care-card/care-card-urgent.html`
    },
    {
      "label": "Care card - Immediate",
      "url": `${TEST_HOST}/components/care-card/care-card-immediate.html`
    },
    {
      "label": "Checkboxes",
      "url": `${TEST_HOST}/components/checkboxes/index.html`
    },
    {
      "label": "Checkboxes with hint text",
      "url": `${TEST_HOST}/components/checkboxes/hint.html`
    },
    {
      "label": "Checkboxes with disabled item",
      "url": `${TEST_HOST}/components/checkboxes/disabled.html`
    },
    {
      "label": "Checkboxes with legend as page heading",
      "url": `${TEST_HOST}/components/checkboxes/page-heading.html`
    },
    {
      "label": "Checkboxes with error message",
      "url": `${TEST_HOST}/components/checkboxes/error.html`
    },
    {
      "label": "Contents list",
      "url": `${TEST_HOST}/components/contents-list/index.html`
    },
    {
      "label": "Date input",
      "url": `${TEST_HOST}/components/date-input/index.html`
    },
    {
      "label": "Date input with multiple errors",
      "url": `${TEST_HOST}/components/date-input/multiple-errors.html`
    },
    {
      "label": "Details",
      "url": `${TEST_HOST}/components/details/index.html`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Do & Don't list",
      "url": `${TEST_HOST}/components/do-dont-list/index.html`
    },
    {
      "label": "Emergency alert",
      "url": `${TEST_HOST}/components/emergency-alert/index.html`
    },
    {
      "label": "Error message",
      "url": `${TEST_HOST}/components/error-message/index.html`
    },
    {
      "label": "Error summary",
      "url": `${TEST_HOST}/components/error-summary/index.html`
    },
    {
      "label": "Expander",
      "url": `${TEST_HOST}/components/details/expander.html`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Expander group",
      "url": `${TEST_HOST}/components/details/expander-group.html`,
      "clickSelector": ".nhsuk-details__summary"
    },
    {
      "label": "Feedback banner",
      "url": `${TEST_HOST}/components/feedback-banner/index.html`,
      "delay": 5000
    },
    {
      "label": "Footer",
      "url": `${TEST_HOST}/components/footer/index.html`
    },
    {
      "label": "Footer with list columns",
      "url": `${TEST_HOST}/components/footer/columns.html`
    },
    {
      "label": "Fieldset",
      "url": `${TEST_HOST}/components/fieldset/index.html`
    },
    {
      "label": "Fieldset as page heading",
      "url": `${TEST_HOST}/components/fieldset/page-heading.html`
    },
    {
      "label": "Fieldset with inputs",
      "url": `${TEST_HOST}/components/fieldset/with-inputs.html`
    },
    {
      "label": "Header",
      "url": `${TEST_HOST}/components/header/index.html`
    },
    {
      "label": "Header with logo only",
      "url": `${TEST_HOST}/components/header/header-logo.html`
    },
    {
      "label": "Header transactional",
      "url": `${TEST_HOST}/components/header/header-transactional.html`
    },
    {
      "label": "Header transactional with service name",
      "url": `${TEST_HOST}/components/header/header-transactional-service-name.html`
    },
    {
      "label": "Header transactional with a long service name",
      "url": `${TEST_HOST}/components/header/header-transactional-long-service-name.html`
    },
    {
      "label": "Header with navigation",
      "url": `${TEST_HOST}/components/header/header-navigation.html`
    },
    {
      "label": "Header with navigation open",
      "url": `${TEST_HOST}/components/header/header-navigation.html`,
      "clickSelector": "#toggle-menu",
      "viewports": [
        {
          "label": "iPhone 5/SE",
          "width": 320,
          "height": 568
        },
        {
          "label": "iPhone 6-8",
          "width": 375,
          "height": 667
        },
        {
          "label": "iPad",
          "width": 768,
          "height": 1024
        }
      ]
    },
    {
      "label": "Header with search",
      "url": `${TEST_HOST}/components/header/header-search.html`
    },
    {
      "label": "Header with search open",
      "url": `${TEST_HOST}/components/header/header-search.html`,
      "clickSelector": "#toggle-search",
      "viewports": [
        {
          "label": "iPhone 5/SE",
          "width": 320,
          "height": 568
        },
        {
          "label": "iPhone 6-8",
          "width": 375,
          "height": 667
        }
      ]
    },
    {
      "label": "Header organisational",
      "url": `${TEST_HOST}/components/header/header-org.html`
    },
    {
      "label": "Header organisational with white header",
      "url": `${TEST_HOST}/components/header/header-org-white.html`
    },
    {
      "label": "Header organisational with white header and navigation",
      "url": `${TEST_HOST}/components/header/header-org-white-nav.html`
    },
    {
      "label": "Header organisational with PNG logo",
      "url": `${TEST_HOST}/components/header/header-org-png.html`
    },
    {
      "label": "Hero",
      "url": `${TEST_HOST}/components/hero/index.html`
    },
    {
      "label": "Hero with image",
      "url": `${TEST_HOST}/components/hero/hero-image.html`
    },
    {
      "label": "Hero with image and content",
      "url": `${TEST_HOST}/components/hero/hero-image-content.html`
    },
    {
      "label": "Hint",
      "url": `${TEST_HOST}/components/hint/index.html`
    },
    {
      "label": "Images",
      "url": `${TEST_HOST}/components/images/index.html`
    },
    {
      "label": "Input",
      "url": `${TEST_HOST}/components/input/index.html`
    },
    {
      "label": "Input with hint text",
      "url": `${TEST_HOST}/components/input/hint.html`
    },
    {
      "label": "Input with error message",
      "url": `${TEST_HOST}/components/input/error.html`
    },
    {
      "label": "Input with width modifier",
      "url": `${TEST_HOST}/components/input/custom-width.html`
    },
    {
      "label": "Inset text",
      "url": `${TEST_HOST}/components/inset-text/index.html`
    },
    {
      "label": "Label",
      "url": `${TEST_HOST}/components/label/index.html`
    },
    {
      "label": "Label with bold text",
      "url": `${TEST_HOST}/components/label/bold.html`
    },
    {
      "label": "Label as page heading",
      "url": `${TEST_HOST}/components/label/page-heading.html`
    },
    {
      "label": "List panel",
      "url": `${TEST_HOST}/components/list-panel/index.html`
    },
    {
      "label": "Pagination",
      "url": `${TEST_HOST}/components/pagination/index.html`
    },
    {
      "label": "Panel",
      "url": `${TEST_HOST}/components/panel/index.html`
    },
    {
      "label": "Panel with label",
      "url": `${TEST_HOST}/components/panel/panel-with-label.html`
    },
    {
      "label": "Panel grey",
      "url": `${TEST_HOST}/components/panel/panel-grey.html`
    },
    {
      "label": "Panel group",
      "url": `${TEST_HOST}/components/panel/panel-group.html`
    },
    {
      "label": "Promo",
      "url": `${TEST_HOST}/components/promo/index.html`
    },
    {
      "label": "Promo with image",
      "url": `${TEST_HOST}/components/promo/promo-with-image.html`
    },
    {
      "label": "Promo small",
      "url": `${TEST_HOST}/components/promo/promo-small.html`
    },
    {
      "label": "Promo with no description",
      "url": `${TEST_HOST}/components/promo/promo-no-description.html`
    },
    {
      "label": "Promo group",
      "url": `${TEST_HOST}/components/promo/promo-group.html`
    },
    {
      "label": "Radios",
      "url": `${TEST_HOST}/components/radios/index.html`
    },
    {
      "label": "Radios inline",
      "url": `${TEST_HOST}/components/radios/inline.html`
    },
    {
      "label": "Radios disabled",
      "url": `${TEST_HOST}/components/radios/disabled.html`
    },
    {
      "label": "Radios with a divider",
      "url": `${TEST_HOST}/components/radios/divider.html`
    },
    {
      "label": "Radios with hint text",
      "url": `${TEST_HOST}/components/radios/hint.html`
    },
    {
      "label": "Radios without fieldset",
      "url": `${TEST_HOST}/components/radios/without-fieldset.html`
    },
    {
      "label": "Radios with hint text and error message",
      "url": `${TEST_HOST}/components/radios/hint-error.html`
    },
    {
      "label": "Review date",
      "url": `${TEST_HOST}/components/review-date/index.html`
    },
    {
      "label": "Select",
      "url": `${TEST_HOST}/components/select/index.html`
    },
    {
      "label": "Select with hint text and error message",
      "url": `${TEST_HOST}/components/select/hint-error.html`
    },
    {
      "label": "Summary list",
      "url": `${TEST_HOST}/components/summary-list/index.html`
    },
    {
      "label": "Summary list without actions",
      "url": `${TEST_HOST}/components/summary-list/without-actions.html`
    },
    {
      "label": "Summary list without border",
      "url": `${TEST_HOST}/components/summary-list/without-border.html`
    },
    {
      "label": "Table",
      "url": `${TEST_HOST}/components/tables/index.html`
    },
    {
      "label": "Table as panel",
      "url": `${TEST_HOST}/components/tables/tables-panel.html`
    },
    {
      "label": "Textarea",
      "url": `${TEST_HOST}/components/textarea/index.html`
    },
    {
      "label": "Textarea with error message",
      "url": `${TEST_HOST}/components/textarea/error.html`
    },
    {
      "label": "Warning callout",
      "url": `${TEST_HOST}/components/warning-callout/index.html`
    }
  ],
  "paths": {
    "bitmaps_reference": "tests/backstop/bitmaps_reference",
    "bitmaps_test": "tests/backstop/bitmaps_test",
    "engine_scripts": "tests/backstop/engine_scripts",
    "html_report": "tests/backstop/html_report",
    "ci_report": "tests/backstop/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
