const TEST_HOST = process.env.HOSTNAME === 'docker-desktop' ? 'host.docker.internal' : 'localhost';
const TEST_URL = `http://${TEST_HOST}:3000/components`;

module.exports = {
  id: 'nhsuk-frontend',
  viewports: [
    {
      label: 'iPhone 5/SE',
      width: 320,
      height: 568,
    },
    {
      label: 'iPhone 6-8',
      width: 375,
      height: 667,
    },
    {
      label: 'iPad',
      width: 768,
      height: 1024,
    },
    {
      label: 'Surface, iPad Pro',
      width: 1366,
      height: 768,
    },
  ],
  dockerCommandTemplate: 'docker run --rm --network=host --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'A-Z navigation',
      url: `${TEST_URL}/nav-a-z/index.html`,
    },
    {
      label: 'Action link',
      url: `${TEST_URL}/action-link/index.html`,
    },
    {
      label: 'Back link',
      url: `${TEST_URL}/back-link/index.html`,
    },
    {
      label: 'Breadcrumb',
      url: `${TEST_URL}/breadcrumb/index.html`,
    },
    {
      label: 'Button',
      url: `${TEST_URL}/button/index.html`,
    },
    {
      label: 'Button click',
      url: `${TEST_URL}/button/index.html`,
      clickSelector: '.nhsuk-button',
      viewports: [
        {
          label: 'Surface, iPad Pro',
          width: 1366,
          height: 768,
        },
      ],
    },
    {
      label: 'Button as a link',
      url: `${TEST_URL}/button/link.html`,
    },
    {
      label: 'Button disabled',
      url: `${TEST_URL}/button/disabled.html`,
    },
    {
      label: 'Button secondary',
      url: `${TEST_URL}/button/secondary.html`,
    },
    {
      label: 'Button reverse',
      url: `${TEST_URL}/button/reverse.html`,
    },
    {
      label: 'Care card - Non urgent',
      url: `${TEST_URL}/care-card/care-card-non-urgent.html`,
    },
    {
      label: 'Care card - Urgent',
      url: `${TEST_URL}/care-card/care-card-urgent.html`,
    },
    {
      label: 'Care card - Immediate',
      url: `${TEST_URL}/care-card/care-card-immediate.html`,
    },
    {
      label: 'Checkboxes',
      url: `${TEST_URL}/checkboxes/index.html`,
    },
    {
      label: 'Checkboxes with hint text',
      url: `${TEST_URL}/checkboxes/hint.html`,
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${TEST_URL}/checkboxes/disabled.html`,
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${TEST_URL}/checkboxes/page-heading.html`,
    },
    {
      label: 'Checkboxes with error message',
      url: `${TEST_URL}/checkboxes/error.html`,
    },
    {
      label: 'Contents list',
      url: `${TEST_URL}/contents-list/index.html`,
    },
    {
      label: 'Date input',
      url: `${TEST_URL}/date-input/index.html`,
    },
    {
      label: 'Date input with multiple errors',
      url: `${TEST_URL}/date-input/multiple-errors.html`,
    },
    {
      label: 'Details',
      url: `${TEST_URL}/details/index.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: "Do & Don't list",
      url: `${TEST_URL}/do-dont-list/index.html`,
    },
    {
      label: 'Emergency alert',
      url: `${TEST_URL}/emergency-alert/index.html`,
    },
    {
      label: 'Error message',
      url: `${TEST_URL}/error-message/index.html`,
    },
    {
      label: 'Error summary',
      url: `${TEST_URL}/error-summary/index.html`,
    },
    {
      label: 'Expander',
      url: `${TEST_URL}/details/expander.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: 'Expander group',
      url: `${TEST_URL}/details/expander-group.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: 'Feedback banner',
      url: `${TEST_URL}/feedback-banner/index.html`,
      delay: 5000,
    },
    {
      label: 'Footer',
      url: `${TEST_URL}/footer/index.html`,
    },
    {
      label: 'Footer with list columns',
      url: `${TEST_URL}/footer/columns.html`,
    },
    {
      label: 'Fieldset',
      url: `${TEST_URL}/fieldset/index.html`,
    },
    {
      label: 'Fieldset as page heading',
      url: `${TEST_URL}/fieldset/page-heading.html`,
    },
    {
      label: 'Fieldset with inputs',
      url: `${TEST_URL}/fieldset/with-inputs.html`,
    },
    {
      label: 'Header',
      url: `${TEST_URL}/header/index.html`,
    },
    {
      label: 'Header with logo only',
      url: `${TEST_URL}/header/header-logo.html`,
    },
    {
      label: 'Header with service name and search',
      url: `${TEST_URL}/header/header-service-name.html`,
    },
    {
      label: 'Header transactional',
      url: `${TEST_URL}/header/header-transactional.html`,
    },
    {
      label: 'Header transactional with service name',
      url: `${TEST_URL}/header/header-transactional-service-name.html`,
    },
    {
      label: 'Header transactional with a long service name',
      url: `${TEST_URL}/header/header-transactional-long-service-name.html`,
    },
    {
      label: 'Header with navigation',
      url: `${TEST_URL}/header/header-navigation.html`,
    },
    {
      label: 'Header with navigation open',
      url: `${TEST_URL}/header/header-navigation.html`,
      clickSelector: '#toggle-menu',
      viewports: [
        {
          label: 'iPhone 5/SE',
          width: 320,
          height: 568,
        },
        {
          label: 'iPhone 6-8',
          width: 375,
          height: 667,
        },
        {
          label: 'iPad',
          width: 768,
          height: 1024,
        },
      ],
    },
    {
      label: 'Header with search',
      url: `${TEST_URL}/header/header-search.html`,
    },
    {
      label: 'Header with search open',
      url: `${TEST_URL}/header/header-search.html`,
      clickSelector: '#toggle-search',
      viewports: [
        {
          label: 'iPhone 5/SE',
          width: 320,
          height: 568,
        },
        {
          label: 'iPhone 6-8',
          width: 375,
          height: 667,
        },
      ],
    },
    {
      label: 'Hero',
      url: `${TEST_URL}/hero/index.html`,
    },
    {
      label: 'Hero with image',
      url: `${TEST_URL}/hero/hero-image.html`,
    },
    {
      label: 'Hero with image and content',
      url: `${TEST_URL}/hero/hero-image-content.html`,
    },
    {
      label: 'Hint',
      url: `${TEST_URL}/hint/index.html`,
    },
    {
      label: 'Images',
      url: `${TEST_URL}/images/index.html`,
    },
    {
      label: 'Input',
      url: `${TEST_URL}/input/index.html`,
    },
    {
      label: 'Input with hint text',
      url: `${TEST_URL}/input/hint.html`,
    },
    {
      label: 'Input with error message',
      url: `${TEST_URL}/input/error.html`,
    },
    {
      label: 'Input with width modifier',
      url: `${TEST_URL}/input/custom-width.html`,
    },
    {
      label: 'Inset text',
      url: `${TEST_URL}/inset-text/index.html`,
    },
    {
      label: 'Label',
      url: `${TEST_URL}/label/index.html`,
    },
    {
      label: 'Label with bold text',
      url: `${TEST_URL}/label/bold.html`,
    },
    {
      label: 'Label as page heading',
      url: `${TEST_URL}/label/page-heading.html`,
    },
    {
      label: 'List panel',
      url: `${TEST_URL}/list-panel/index.html`,
    },
    {
      label: 'Pagination',
      url: `${TEST_URL}/pagination/index.html`,
    },
    {
      label: 'Panel',
      url: `${TEST_URL}/panel/index.html`,
    },
    {
      label: 'Panel with label',
      url: `${TEST_URL}/panel/panel-with-label.html`,
    },
    {
      label: 'Panel grey',
      url: `${TEST_URL}/panel/panel-grey.html`,
    },
    {
      label: 'Panel group',
      url: `${TEST_URL}/panel/panel-group.html`,
    },
    {
      label: 'Promo',
      url: `${TEST_URL}/promo/index.html`,
    },
    {
      label: 'Promo with image',
      url: `${TEST_URL}/promo/promo-with-image.html`,
    },
    {
      label: 'Promo small',
      url: `${TEST_URL}/promo/promo-small.html`,
    },
    {
      label: 'Promo with no description',
      url: `${TEST_URL}/promo/promo-no-description.html`,
    },
    {
      label: 'Promo group',
      url: `${TEST_URL}/promo/promo-group.html`,
    },
    {
      label: 'Radios',
      url: `${TEST_URL}/radios/index.html`,
    },
    {
      label: 'Radios inline',
      url: `${TEST_URL}/radios/inline.html`,
    },
    {
      label: 'Radios disabled',
      url: `${TEST_URL}/radios/disabled.html`,
    },
    {
      label: 'Radios with a divider',
      url: `${TEST_URL}/radios/divider.html`,
    },
    {
      label: 'Radios with hint text',
      url: `${TEST_URL}/radios/hint.html`,
    },
    {
      label: 'Radios without fieldset',
      url: `${TEST_URL}/radios/without-fieldset.html`,
    },
    {
      label: 'Radios with hint text and error message',
      url: `${TEST_URL}/radios/hint-error.html`,
    },
    {
      label: 'Review date',
      url: `${TEST_URL}/review-date/index.html`,
    },
    {
      label: 'Select',
      url: `${TEST_URL}/select/index.html`,
    },
    {
      label: 'Select with hint text and error message',
      url: `${TEST_URL}/select/hint-error.html`,
    },
    {
      label: 'Summary list',
      url: `${TEST_URL}/summary-list/index.html`,
    },
    {
      label: 'Summary list without actions',
      url: `${TEST_URL}/summary-list/without-actions.html`,
    },
    {
      label: 'Summary list without border',
      url: `${TEST_URL}/summary-list/without-border.html`,
    },
    {
      label: 'Table',
      url: `${TEST_URL}/tables/index.html`,
    },
    {
      label: 'Table as panel',
      url: `${TEST_URL}/tables/tables-panel.html`,
    },
    {
      label: 'Textarea',
      url: `${TEST_URL}/textarea/index.html`,
    },
    {
      label: 'Textarea with error message',
      url: `${TEST_URL}/textarea/error.html`,
    },
    {
      label: 'Warning callout',
      url: `${TEST_URL}/warning-callout/index.html`,
    },
  ],
  paths: {
    bitmaps_reference: 'tests/backstop/bitmaps_reference',
    bitmaps_test: 'tests/backstop/bitmaps_test',
    engine_scripts: 'tests/backstop/engine_scripts',
    html_report: 'tests/backstop/html_report',
    ci_report: 'tests/backstop/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
