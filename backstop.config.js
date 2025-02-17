const TEST_HOST =
  process.env.HOSTNAME === 'docker-desktop' ? 'host.docker.internal' : '0.0.0.0'
const TEST_URL = `http://${TEST_HOST}:3000/components`

module.exports = {
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  dockerCommandTemplate:
    'docker run --rm --network=host --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  engine: 'playwright',
  engineOptions: {
    args: ['--no-sandbox']
  },
  id: 'nhsuk-frontend',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  paths: {
    bitmaps_reference: 'tests/backstop/bitmaps_reference',
    bitmaps_test: 'tests/backstop/bitmaps_test',
    ci_report: 'tests/backstop/ci_report',
    engine_scripts: 'tests/backstop/engine_scripts',
    html_report: 'tests/backstop/html_report'
  },
  report: ['browser'],
  scenarios: [
    {
      label: 'Action link',
      url: `${TEST_URL}/action-link/index.html`
    },
    {
      label: 'Back link',
      url: `${TEST_URL}/back-link/index.html`
    },
    {
      label: 'Back link as button',
      url: `${TEST_URL}/back-link/button.html`
    },
    {
      label: 'Breadcrumb',
      url: `${TEST_URL}/breadcrumb/index.html`
    },
    {
      label: 'Button',
      url: `${TEST_URL}/button/index.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button click',
      url: `${TEST_URL}/button/index.html`,
      viewports: [
        {
          height: 768,
          label: 'Surface, iPad Pro',
          width: 1366
        }
      ]
    },
    {
      label: 'Button as a link',
      url: `${TEST_URL}/button/link.html`
    },
    {
      label: 'Button disabled',
      url: `${TEST_URL}/button/disabled.html`
    },
    {
      label: 'Button secondary',
      url: `${TEST_URL}/button/secondary.html`
    },
    {
      label: 'Button reverse',
      url: `${TEST_URL}/button/reverse.html`
    },
    {
      label: 'Card - Basic card',
      url: `${TEST_URL}/card/basic-card.html`
    },
    {
      label: 'Card - Clickable card',
      url: `${TEST_URL}/card/clickable-card.html`
    },
    {
      label: 'Card - Card with image',
      url: `${TEST_URL}/card/card-with-image.html`
    },
    {
      label: 'Card - Card group',
      url: `${TEST_URL}/card/card-group.html`
    },
    {
      label: 'Card - Card group',
      url: `${TEST_URL}/card/feature-card.html`
    },
    {
      label: 'Care card - Non urgent',
      url: `${TEST_URL}/card/care-card-non-urgent.html`
    },
    {
      label: 'Care card - Urgent',
      url: `${TEST_URL}/card/care-card-urgent.html`
    },
    {
      label: 'Care card - Emergency',
      url: `${TEST_URL}/card/care-card-emergency.html`
    },
    {
      label: 'Character Count - max characters',
      url: `${TEST_URL}/character-count/index.html`
    },
    {
      label: 'Character Count - with threshold',
      url: `${TEST_URL}/character-count/with-threshold.html`
    },
    {
      label: 'Character Count - max words',
      url: `${TEST_URL}/character-count/with-word-count.html`
    },
    {
      label: 'Checkboxes',
      url: `${TEST_URL}/checkboxes/index.html`
    },
    {
      label: 'Checkboxes with hint text',
      url: `${TEST_URL}/checkboxes/hint.html`
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${TEST_URL}/checkboxes/disabled.html`
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${TEST_URL}/checkboxes/page-heading.html`
    },
    {
      label: 'Checkboxes with error message',
      url: `${TEST_URL}/checkboxes/error.html`
    },
    {
      clickSelector: '#waste-1',
      label: 'Checkboxes with error message - focused',
      url: `${TEST_URL}/checkboxes/error.html`
    },
    {
      clickSelector: '#contact-1',
      label: 'Checkboxes with conditional content',
      url: `${TEST_URL}/checkboxes/conditional.html`
    },
    {
      label: 'Checkboxes with "none of the above" option',
      url: `${TEST_URL}/checkboxes/none-of-the-above.html`
    },
    {
      label: 'Contents list',
      url: `${TEST_URL}/contents-list/index.html`
    },
    {
      label: 'Date input',
      url: `${TEST_URL}/date-input/index.html`
    },
    {
      label: 'Date input with multiple errors',
      url: `${TEST_URL}/date-input/multiple-errors.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Details',
      url: `${TEST_URL}/details/index.html`
    },
    {
      label: "Do & Don't list",
      url: `${TEST_URL}/do-dont-list/index.html`
    },
    {
      label: 'Error message',
      url: `${TEST_URL}/error-message/index.html`
    },
    {
      label: 'Error summary',
      url: `${TEST_URL}/error-summary/index.html`
    },
    {
      label: 'Error summary with link to an input field',
      url: `${TEST_URL}/error-summary/linking-to-input.html`
    },
    {
      label: 'Error summary with link to a radio field',
      url: `${TEST_URL}/error-summary/linking-to-radios.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander',
      url: `${TEST_URL}/details/expander.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander group',
      url: `${TEST_URL}/details/expander-group.html`
    },
    {
      label: 'Footer (default)',
      url: `${TEST_URL}/footer/index.html`
    },
    {
      label: 'Footer (columns)',
      url: `${TEST_URL}/footer/footer-in-columns.html`
    },
    {
      label: 'Footer (custom copyright statement)',
      url: `${TEST_URL}/footer/custom-copyright.html`
    },
    {
      label: 'Fieldset',
      url: `${TEST_URL}/fieldset/index.html`
    },
    {
      label: 'Fieldset as page heading',
      url: `${TEST_URL}/fieldset/page-heading.html`
    },
    {
      label: 'Fieldset with inputs',
      url: `${TEST_URL}/fieldset/with-inputs.html`
    },
    {
      label: 'Header (default)',
      url: `${TEST_URL}/header/index.html`
    },
    {
      label: 'Header with navigation',
      url: `${TEST_URL}/header/header-navigation.html`
    },
    {
      label: 'Header with search',
      url: `${TEST_URL}/header/header-search.html`
    },
    {
      label: 'Header with logo only',
      url: `${TEST_URL}/header/header-logo.html`
    },
    {
      label: 'Header with a service name',
      url: `${TEST_URL}/header/header-service-name.html`
    },
    {
      label: 'Header with a service name, search and navigation',
      url: `${TEST_URL}/header/header-service-name-with-nav.html`
    },
    {
      label: 'Header transactional with service name',
      url: `${TEST_URL}/header/header-transactional-service-name.html`
    },
    {
      label: 'Header organisational',
      url: `${TEST_URL}/header/header-org.html`
    },
    {
      label: 'Header organisational with white header',
      url: `${TEST_URL}/header/header-org-white.html`
    },
    {
      label: 'Header organisational with white header and navigation',
      url: `${TEST_URL}/header/header-org-white-nav.html`
    },
    {
      clickSelector: '#toggle-menu',
      label: 'Header with navigation open',
      url: `${TEST_URL}/header/header-navigation.html`,
      viewports: [
        {
          height: 568,
          label: 'iPhone 5/SE',
          width: 320
        },
        {
          height: 667,
          label: 'iPhone 6-8',
          width: 375
        },
        {
          height: 1024,
          label: 'iPad',
          width: 768
        }
      ]
    },
    {
      label: 'Hero',
      url: `${TEST_URL}/hero/index.html`
    },
    {
      label: 'Hero with image',
      url: `${TEST_URL}/hero/hero-image.html`
    },
    {
      label: 'Hero with image and content',
      url: `${TEST_URL}/hero/hero-image-content.html`
    },
    {
      label: 'Hint',
      url: `${TEST_URL}/hint/index.html`
    },
    {
      label: 'Images',
      url: `${TEST_URL}/images/index.html`
    },
    {
      label: 'Input',
      url: `${TEST_URL}/input/index.html`
    },
    {
      label: 'Input with autocomplete attribute',
      url: `${TEST_URL}/input/autocomplete.html`
    },
    {
      label: 'Input with hint text',
      url: `${TEST_URL}/input/hint.html`
    },
    {
      label: 'Input with error message',
      url: `${TEST_URL}/input/error.html`
    },
    {
      clickSelector: '#input-with-error-message',
      label: 'Input with error message - focused',
      url: `${TEST_URL}/input/error.html`
    },
    {
      label: 'Input with width modifier',
      url: `${TEST_URL}/input/custom-width.html`
    },
    {
      label: 'Input with prefix',
      url: `${TEST_URL}/input/prefix.html`
    },
    {
      label: 'Input with suffix',
      url: `${TEST_URL}/input/suffix.html`
    },
    {
      label: 'Input with prefix and suffix',
      url: `${TEST_URL}/input/prefix-and-suffix.html`
    },
    {
      label: 'Input with error message, prefix and suffix',
      url: `${TEST_URL}/input/error-and-prefix-and-suffix.html`
    },
    {
      clickSelector: '#input-with-error-message-and-prefix-and-suffix',
      label: 'Input with error message, prefix and suffix - focused',
      url: `${TEST_URL}/input/error.html`
    },
    {
      label: 'Inset text',
      url: `${TEST_URL}/inset-text/index.html`
    },
    {
      label: 'Label',
      url: `${TEST_URL}/label/index.html`
    },
    {
      label: 'Label with bold text',
      url: `${TEST_URL}/label/bold.html`
    },
    {
      label: 'Label as page heading',
      url: `${TEST_URL}/label/page-heading.html`
    },
    {
      label: 'Pagination',
      url: `${TEST_URL}/pagination/index.html`
    },
    {
      label: 'Panel',
      url: `${TEST_URL}/panel/index.html`
    },
    {
      label: 'Radios',
      url: `${TEST_URL}/radios/index.html`
    },
    {
      label: 'Radios inline',
      url: `${TEST_URL}/radios/inline.html`
    },
    {
      label: 'Radios disabled',
      url: `${TEST_URL}/radios/disabled.html`
    },
    {
      label: 'Radios with a divider',
      url: `${TEST_URL}/radios/divider.html`
    },
    {
      label: 'Radios with hint text',
      url: `${TEST_URL}/radios/hint.html`
    },
    {
      label: 'Radios without fieldset',
      url: `${TEST_URL}/radios/without-fieldset.html`
    },
    {
      label: 'Radios with hint text and error message',
      url: `${TEST_URL}/radios/hint-error.html`
    },
    {
      clickSelector: '#example-2',
      label: 'Radios with hint text and error message - focused',
      url: `${TEST_URL}/radios/hint-error.html`
    },
    {
      clickSelector: '#contact-1',
      label: 'Radios with conditional content',
      url: `${TEST_URL}/radios/conditional.html`
    },
    {
      label: 'Select',
      url: `${TEST_URL}/select/index.html`
    },
    {
      label: 'Select with hint text and error message',
      url: `${TEST_URL}/select/hint-error.html`
    },
    {
      clickSelector: '[for=select-2]',
      label: 'Select with hint text and error message - focused',
      url: `${TEST_URL}/select/hint-error.html`
    },
    {
      label: 'Summary list',
      url: `${TEST_URL}/summary-list/index.html`
    },
    {
      label: 'Summary list without actions',
      url: `${TEST_URL}/summary-list/without-actions.html`
    },
    {
      label: 'Summary list without border',
      url: `${TEST_URL}/summary-list/without-border.html`
    },
    {
      label: 'Table',
      url: `${TEST_URL}/tables/index.html`
    },
    {
      label: 'Responsive table',
      url: `${TEST_URL}/tables/responsive-table.html`
    },
    {
      label: 'Table as panel',
      url: `${TEST_URL}/tables/tables-panel.html`
    },
    {
      label: 'Tabs',
      url: `${TEST_URL}/tabs/index.html`
    },
    {
      label: 'Tag',
      url: `${TEST_URL}/tag/index.html`
    },
    {
      label: 'Task list',
      url: `${TEST_URL}/task-list/index.html`
    },
    {
      label: 'Task list with multiple sections',
      url: `${TEST_URL}/task-list/multiple-sections.html`
    },
    {
      label: 'Textarea',
      url: `${TEST_URL}/textarea/index.html`
    },
    {
      label: 'Textarea with error message',
      url: `${TEST_URL}/textarea/error.html`
    },
    {
      clickSelector: '#no-ni-reason',
      label: 'Textarea with error message - focused',
      url: `${TEST_URL}/textarea/error.html`
    },
    {
      label: 'Warning callout',
      url: `${TEST_URL}/warning-callout/index.html`
    },
    {
      label: 'Warning callout with custom heading',
      url: `${TEST_URL}/warning-callout/custom-heading.html`
    }
  ],
  viewports: [
    {
      height: 568,
      label: 'iPhone 5/SE',
      width: 320
    },
    {
      height: 667,
      label: 'iPhone 6-8',
      width: 375
    },
    {
      height: 1024,
      label: 'iPad',
      width: 768
    },
    {
      height: 768,
      label: 'Surface, iPad Pro',
      width: 1366
    }
  ]
}
