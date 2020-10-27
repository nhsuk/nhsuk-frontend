const TEST_HOST = process.env.HOSTNAME === 'docker-desktop' ? 'host.docker.internal' : 'localhost';
const TEST_URL = `http://${TEST_HOST}:3000/components`;

module.exports = {
  dockerCommandTemplate: 'docker run --rm --network=host --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
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
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'A-Z navigation',
      url: `${TEST_URL}/components/nav-a-z/index.html`,
    },
    {
      label: 'Action link',
      url: `${TEST_URL}/components/action-link/index.html`,
    },
    {
      label: 'Back link',
      url: `${TEST_URL}/components/back-link/index.html`,
    },
    {
      label: 'Breadcrumb',
      url: `${TEST_URL}/components/breadcrumb/index.html`,
    },
    {
      label: 'Button',
      url: `${TEST_URL}/components/button/index.html`,
    },
    {
      label: 'Button click',
      url: `${TEST_URL}/components/button/index.html`,
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
      url: `${TEST_URL}/components/button/link.html`,
    },
    {
      label: 'Button disabled',
      url: `${TEST_URL}/components/button/disabled.html`,
    },
    {
      label: 'Button secondary',
      url: `${TEST_URL}/components/button/secondary.html`,
    },
    {
      label: 'Button reverse',
      url: `${TEST_URL}/components/button/reverse.html`,
    },
    {
      label: 'Card - Basic card',
      url: `${TEST_URL}/components/card/basic-card.html`,
    },
    {
      label: 'Card - Clickable card',
      url: `${TEST_URL}/components/card/clickable-card.html`,
    },
    {
      label: 'Card - Card with image',
      url: `${TEST_URL}/components/card/card-with-image.html`,
    },
    {
      label: 'Card - Card group',
      url: `${TEST_URL}/components/card/card-group.html`,
    },
    {
      label: 'Card - Card group',
      url: `${TEST_URL}/components/card/feature-card.html`,
    },
    {
      label: 'Care card - Non urgent',
      url: `${TEST_URL}/components/care-card/care-card-non-urgent.html`,
    },
    {
      label: 'Care card - Urgent',
      url: `${TEST_URL}/components/care-card/care-card-urgent.html`,
    },
    {
      label: 'Care card - Immediate',
      url: `${TEST_URL}/components/care-card/care-card-immediate.html`,
    },
    {
      label: 'Checkboxes',
      url: `${TEST_URL}/components/checkboxes/index.html`,
    },
    {
      label: 'Checkboxes with hint text',
      url: `${TEST_URL}/components/checkboxes/hint.html`,
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${TEST_URL}/components/checkboxes/disabled.html`,
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${TEST_URL}/components/checkboxes/page-heading.html`,
    },
    {
      label: 'Checkboxes with error message',
      url: `${TEST_URL}/components/checkboxes/error.html`,
    },
    {
      label: 'Checkboxes with conditional content',
      url: `${TEST_URL}/components/checkboxes/conditional.html`,
      clickSelector: '#contact-1',
    },
    {
      label: 'Contents list',
      url: `${TEST_URL}/components/contents-list/index.html`,
    },
    {
      label: 'Date input',
      url: `${TEST_URL}/components/date-input/index.html`,
    },
    {
      label: 'Date input with multiple errors',
      url: `${TEST_URL}/components/date-input/multiple-errors.html`,
    },
    {
      label: 'Details',
      url: `${TEST_URL}/components/details/index.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: "Do & Don't list",
      url: `${TEST_URL}/components/do-dont-list/index.html`,
    },
    {
      label: 'Error message',
      url: `${TEST_URL}/components/error-message/index.html`,
    },
    {
      label: 'Error summary',
      url: `${TEST_URL}/components/error-summary/index.html`,
    },
    {
      label: 'Expander',
      url: `${TEST_URL}/components/details/expander.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: 'Expander group',
      url: `${TEST_URL}/components/details/expander-group.html`,
      clickSelector: '.nhsuk-details__summary',
    },
    {
      label: 'Footer',
      url: `${TEST_URL}/components/footer/index.html`,
    },
    {
      label: 'Footer with list columns',
      url: `${TEST_URL}/components/footer/columns.html`,
    },
    {
      label: 'Fieldset',
      url: `${TEST_URL}/components/fieldset/index.html`,
    },
    {
      label: 'Fieldset as page heading',
      url: `${TEST_URL}/components/fieldset/page-heading.html`,
    },
    {
      label: 'Fieldset with inputs',
      url: `${TEST_URL}/components/fieldset/with-inputs.html`,
    },
    {
      label: 'Header',
      url: `${TEST_URL}/components/header/index.html`,
    },
    {
      label: 'Header with logo only',
      url: `${TEST_URL}/components/header/header-logo.html`,
    },
    {
      label: 'Header transactional',
      url: `${TEST_URL}/components/header/header-transactional.html`,
    },
    {
      label: 'Header transactional with service name',
      url: `${TEST_URL}/components/header/header-transactional-service-name.html`,
    },
    {
      label: 'Header transactional with a long service name',
      url: `${TEST_URL}/components/header/header-transactional-long-service-name.html`,
    },
    {
      label: 'Header with navigation',
      url: `${TEST_URL}/components/header/header-navigation.html`,
    },
    {
      label: 'Header with navigation open',
      url: `${TEST_URL}/components/header/header-navigation.html`,
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
      url: `${TEST_URL}/components/header/header-search.html`,
    },
    {
      label: 'Header with search open',
      url: `${TEST_URL}/components/header/header-search.html`,
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
      label: 'Header organisational',
      url: `${TEST_URL}/components/header/header-org.html`,
    },
    {
      label: 'Header organisational with white header',
      url: `${TEST_URL}/components/header/header-org-white.html`,
    },
    {
      label: 'Header organisational with white header and navigation',
      url: `${TEST_URL}/components/header/header-org-white-nav.html`,
    },
    {
      label: 'Hero',
      url: `${TEST_URL}/components/hero/index.html`,
    },
    {
      label: 'Hero with image',
      url: `${TEST_URL}/components/hero/hero-image.html`,
    },
    {
      label: 'Hero with image and content',
      url: `${TEST_URL}/components/hero/hero-image-content.html`,
    },
    {
      label: 'Hint',
      url: `${TEST_URL}/components/hint/index.html`,
    },
    {
      label: 'Images',
      url: `${TEST_URL}/components/images/index.html`,
    },
    {
      label: 'Input',
      url: `${TEST_URL}/components/input/index.html`,
    },
    {
      label: 'Input with hint text',
      url: `${TEST_URL}/components/input/hint.html`,
    },
    {
      label: 'Input with error message',
      url: `${TEST_URL}/components/input/error.html`,
    },
    {
      label: 'Input with width modifier',
      url: `${TEST_URL}/components/input/custom-width.html`,
    },
    {
      label: 'Inset text',
      url: `${TEST_URL}/components/inset-text/index.html`,
    },
    {
      label: 'Label',
      url: `${TEST_URL}/components/label/index.html`,
    },
    {
      label: 'Label with bold text',
      url: `${TEST_URL}/components/label/bold.html`,
    },
    {
      label: 'Label as page heading',
      url: `${TEST_URL}/components/label/page-heading.html`,
    },
    {
      label: 'List panel',
      url: `${TEST_URL}/components/list-panel/index.html`,
    },
    {
      label: 'Pagination',
      url: `${TEST_URL}/components/pagination/index.html`,
    },
    {
      label: 'Radios',
      url: `${TEST_URL}/components/radios/index.html`,
    },
    {
      label: 'Radios inline',
      url: `${TEST_URL}/components/radios/inline.html`,
    },
    {
      label: 'Radios disabled',
      url: `${TEST_URL}/components/radios/disabled.html`,
    },
    {
      label: 'Radios with a divider',
      url: `${TEST_URL}/components/radios/divider.html`,
    },
    {
      label: 'Radios with hint text',
      url: `${TEST_URL}/components/radios/hint.html`,
    },
    {
      label: 'Radios without fieldset',
      url: `${TEST_URL}/components/radios/without-fieldset.html`,
    },
    {
      label: 'Radios with hint text and error message',
      url: `${TEST_URL}/components/radios/hint-error.html`,
    },
    {
      label: 'Radios with conditional content',
      url: `${TEST_URL}/components/radios/conditional.html`,
      clickSelector: '#contact-1',
    },
    {
      label: 'Review date',
      url: `${TEST_URL}/components/review-date/index.html`,
    },
    {
      label: 'Select',
      url: `${TEST_URL}/components/select/index.html`,
    },
    {
      label: 'Select with hint text and error message',
      url: `${TEST_URL}/components/select/hint-error.html`,
    },
    {
      label: 'Summary list',
      url: `${TEST_URL}/components/summary-list/index.html`,
    },
    {
      label: 'Summary list without actions',
      url: `${TEST_URL}/components/summary-list/without-actions.html`,
    },
    {
      label: 'Summary list without border',
      url: `${TEST_URL}/components/summary-list/without-border.html`,
    },
    {
      label: 'Table',
      url: `${TEST_URL}/components/tables/index.html`,
    },
    {
      label: 'Responsive table',
      url: `${TEST_URL}/components/tables/responsive-table.html`,
    },
    {
      label: 'Table as panel',
      url: `${TEST_URL}/components/tables/tables-panel.html`,
    },
    {
      label: 'Tag',
      url: `${TEST_URL}/components/tag/index.html`,
    },
    {
      label: 'Textarea',
      url: `${TEST_URL}/components/textarea/index.html`,
    },
    {
      label: 'Textarea with error message',
      url: `${TEST_URL}/components/textarea/error.html`,
    },
    {
      label: 'Warning callout',
      url: `${TEST_URL}/components/warning-callout/index.html`,
    },
    {
      label: 'Warning callout with custom heading',
      url: `${TEST_URL}/components/warning-callout/custom-heading.html`,
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
