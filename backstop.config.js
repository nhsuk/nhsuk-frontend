function amInContainer() {
  const fs = require('fs')
  return fs.existsSync('/.dockerenv') || fs.existsSync('/run/.containerenv')
}

const {
  HOSTNAME = '0.0.0.0', // Default via `npm start`
  BASE_HOST = amInContainer() ? 'host.docker.internal' : HOSTNAME,
  BASE_URL = `http://${BASE_HOST}:3000/nhsuk-frontend`
} = process.env

/**
 * @type {PlaywrightEngineConfig}
 */
module.exports = {
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  dockerCommandTemplate:
    'docker run --rm --network=host --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  engine: 'playwright',
  engineOptions: {
    browser: 'chromium',
    gotoParameters: { waitUntil: 'load' }
  },
  id: 'nhsuk-frontend',
  onBeforeScript: 'playwright/onBefore.js',
  onReadyScript: 'playwright/onReady.js',
  paths: {
    bitmaps_reference: 'tests/backstop/bitmaps_reference',
    bitmaps_test: 'tests/backstop/bitmaps_test',
    ci_report: 'tests/backstop/ci_report',
    engine_scripts: 'tests/backstop/engine_scripts',
    html_report: 'tests/backstop/html_report'
  },
  readySelector: 'body.js-enabled',
  report: ['browser'],
  scenarios: [
    {
      label: 'Action link',
      url: `${BASE_URL}/components/action-link/index.html`
    },
    {
      label: 'Back link',
      url: `${BASE_URL}/components/back-link/index.html`
    },
    {
      label: 'Back link as button',
      url: `${BASE_URL}/components/back-link/button.html`
    },
    {
      label: 'Breadcrumb',
      url: `${BASE_URL}/components/breadcrumb/index.html`
    },
    {
      label: 'Button',
      url: `${BASE_URL}/components/button/index.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button click',
      url: `${BASE_URL}/components/button/index.html`,
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
      url: `${BASE_URL}/components/button/link.html`
    },
    {
      label: 'Button disabled',
      url: `${BASE_URL}/components/button/disabled.html`
    },
    {
      label: 'Button secondary',
      url: `${BASE_URL}/components/button/secondary.html`
    },
    {
      label: 'Button reverse',
      url: `${BASE_URL}/components/button/reverse.html`
    },
    {
      label: 'Card - Basic card',
      url: `${BASE_URL}/components/card/basic-card.html`
    },
    {
      label: 'Card - Clickable card',
      url: `${BASE_URL}/components/card/clickable-card.html`
    },
    {
      label: 'Card - Card with image',
      url: `${BASE_URL}/components/card/card-with-image.html`
    },
    {
      label: 'Card - Card group',
      url: `${BASE_URL}/components/card/card-group.html`
    },
    {
      label: 'Card - Feature card',
      url: `${BASE_URL}/components/card/feature-card.html`
    },
    {
      label: 'Care card - Non urgent',
      url: `${BASE_URL}/components/card/care-card-non-urgent.html`
    },
    {
      label: 'Care card - Urgent',
      url: `${BASE_URL}/components/card/care-card-urgent.html`
    },
    {
      label: 'Care card - Emergency',
      url: `${BASE_URL}/components/card/care-card-emergency.html`
    },
    {
      label: 'Character Count - max characters',
      url: `${BASE_URL}/components/character-count/index.html`
    },
    {
      label: 'Character Count - with threshold',
      url: `${BASE_URL}/components/character-count/with-threshold.html`
    },
    {
      label: 'Character Count - max words',
      url: `${BASE_URL}/components/character-count/with-word-count.html`
    },
    {
      label: 'Checkboxes',
      url: `${BASE_URL}/components/checkboxes/index.html`
    },
    {
      label: 'Checkboxes with hint text',
      url: `${BASE_URL}/components/checkboxes/hint.html`
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${BASE_URL}/components/checkboxes/disabled.html`
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${BASE_URL}/components/checkboxes/page-heading.html`
    },
    {
      label: 'Checkboxes with error message',
      url: `${BASE_URL}/components/checkboxes/error.html`
    },
    {
      clickSelector: '#waste-1',
      label: 'Checkboxes with error message - focused',
      url: `${BASE_URL}/components/checkboxes/error.html`
    },
    {
      clickSelector: '#contact-1',
      label: 'Checkboxes with conditional content',
      url: `${BASE_URL}/components/checkboxes/conditional.html`
    },
    {
      label: 'Checkboxes with "none of the above" option',
      url: `${BASE_URL}/components/checkboxes/none-of-the-above.html`
    },
    {
      label: 'Contents list',
      url: `${BASE_URL}/components/contents-list/index.html`
    },
    {
      label: 'Date input',
      url: `${BASE_URL}/components/date-input/index.html`
    },
    {
      label: 'Date input with multiple errors',
      url: `${BASE_URL}/components/date-input/multiple-errors.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Details',
      url: `${BASE_URL}/components/details/index.html`
    },
    {
      label: "Do & Don't list",
      url: `${BASE_URL}/components/do-dont-list/index.html`
    },
    {
      label: 'Error message',
      url: `${BASE_URL}/components/error-message/index.html`
    },
    {
      label: 'Error summary',
      url: `${BASE_URL}/components/error-summary/index.html`
    },
    {
      label: 'Error summary with link to an input field',
      url: `${BASE_URL}/components/error-summary/linking-to-input.html`
    },
    {
      label: 'Error summary with link to a radio field',
      url: `${BASE_URL}/components/error-summary/linking-to-radios.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander',
      url: `${BASE_URL}/components/details/expander.html`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander group',
      url: `${BASE_URL}/components/details/expander-group.html`
    },
    {
      label: 'Footer (default)',
      url: `${BASE_URL}/components/footer/index.html`
    },
    {
      label: 'Footer (columns)',
      url: `${BASE_URL}/components/footer/footer-in-columns.html`
    },
    {
      label: 'Footer (custom copyright statement)',
      url: `${BASE_URL}/components/footer/custom-copyright.html`
    },
    {
      label: 'Fieldset',
      url: `${BASE_URL}/components/fieldset/index.html`
    },
    {
      label: 'Fieldset as page heading',
      url: `${BASE_URL}/components/fieldset/page-heading.html`
    },
    {
      label: 'Fieldset with inputs',
      url: `${BASE_URL}/components/fieldset/with-inputs.html`
    },
    {
      label: 'Header (default)',
      url: `${BASE_URL}/components/header/index.html`
    },
    {
      label: 'Header with navigation',
      url: `${BASE_URL}/components/header/header-navigation.html`
    },
    {
      label: 'Header with search',
      url: `${BASE_URL}/components/header/header-search.html`
    },
    {
      label: 'Header with logo only',
      url: `${BASE_URL}/components/header/header-logo.html`
    },
    {
      label: 'Header with a service name',
      url: `${BASE_URL}/components/header/header-service-name.html`
    },
    {
      label: 'Header with a service name, search and navigation',
      url: `${BASE_URL}/components/header/header-service-name-with-nav.html`
    },
    {
      label: 'Header transactional with service name',
      url: `${BASE_URL}/components/header/header-transactional-service-name.html`
    },
    {
      label: 'Header organisational',
      url: `${BASE_URL}/components/header/header-org.html`
    },
    {
      label: 'Header organisational with white header',
      url: `${BASE_URL}/components/header/header-org-white.html`
    },
    {
      label: 'Header organisational with white header and navigation',
      url: `${BASE_URL}/components/header/header-org-white-nav.html`
    },
    {
      clickSelector: '#toggle-menu',
      label: 'Header with navigation open',
      url: `${BASE_URL}/components/header/header-navigation.html`,
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
      url: `${BASE_URL}/components/hero/index.html`
    },
    {
      label: 'Hero with image',
      url: `${BASE_URL}/components/hero/hero-image.html`
    },
    {
      label: 'Hero with image and content',
      url: `${BASE_URL}/components/hero/hero-image-content.html`
    },
    {
      label: 'Hint',
      url: `${BASE_URL}/components/hint/index.html`
    },
    {
      label: 'Images',
      url: `${BASE_URL}/components/images/index.html`
    },
    {
      label: 'Input',
      url: `${BASE_URL}/components/input/index.html`
    },
    {
      label: 'Input with autocomplete attribute',
      url: `${BASE_URL}/components/input/autocomplete.html`
    },
    {
      label: 'Input with hint text',
      url: `${BASE_URL}/components/input/hint.html`
    },
    {
      label: 'Input with error message',
      url: `${BASE_URL}/components/input/error.html`
    },
    {
      clickSelector: '#input-with-error-message',
      label: 'Input with error message - focused',
      url: `${BASE_URL}/components/input/error.html`
    },
    {
      label: 'Input with width modifier',
      url: `${BASE_URL}/components/input/custom-width.html`
    },
    {
      label: 'Input with prefix',
      url: `${BASE_URL}/components/input/prefix.html`
    },
    {
      label: 'Input with suffix',
      url: `${BASE_URL}/components/input/suffix.html`
    },
    {
      label: 'Input with prefix and suffix',
      url: `${BASE_URL}/components/input/prefix-and-suffix.html`
    },
    {
      label: 'Input with error message, prefix and suffix',
      url: `${BASE_URL}/components/input/error-and-prefix-and-suffix.html`
    },
    {
      clickSelector: '#input-with-error-message-and-prefix-and-suffix',
      label: 'Input with error message, prefix and suffix - focused',
      url: `${BASE_URL}/components/input/error-and-prefix-and-suffix.html`
    },
    {
      label: 'Inset text',
      url: `${BASE_URL}/components/inset-text/index.html`
    },
    {
      label: 'Label',
      url: `${BASE_URL}/components/label/index.html`
    },
    {
      label: 'Label with bold text',
      url: `${BASE_URL}/components/label/bold.html`
    },
    {
      label: 'Label as page heading',
      url: `${BASE_URL}/components/label/page-heading.html`
    },
    {
      label: 'Pagination',
      url: `${BASE_URL}/components/pagination/index.html`
    },
    {
      label: 'Panel',
      url: `${BASE_URL}/components/panel/index.html`
    },
    {
      label: 'Radios',
      url: `${BASE_URL}/components/radios/index.html`
    },
    {
      label: 'Radios inline',
      url: `${BASE_URL}/components/radios/inline.html`
    },
    {
      label: 'Radios disabled',
      url: `${BASE_URL}/components/radios/disabled.html`
    },
    {
      label: 'Radios with a divider',
      url: `${BASE_URL}/components/radios/divider.html`
    },
    {
      label: 'Radios with hint text',
      url: `${BASE_URL}/components/radios/hint.html`
    },
    {
      label: 'Radios without fieldset',
      url: `${BASE_URL}/components/radios/without-fieldset.html`
    },
    {
      label: 'Radios with hint text and error message',
      url: `${BASE_URL}/components/radios/hint-error.html`
    },
    {
      clickSelector: '#example-2',
      label: 'Radios with hint text and error message - focused',
      url: `${BASE_URL}/components/radios/hint-error.html`
    },
    {
      clickSelector: '#contact-1',
      label: 'Radios with conditional content',
      url: `${BASE_URL}/components/radios/conditional.html`
    },
    {
      label: 'Select',
      url: `${BASE_URL}/components/select/index.html`
    },
    {
      label: 'Select with hint text and error message',
      url: `${BASE_URL}/components/select/hint-error.html`
    },
    {
      clickSelector: '[for=select-2]',
      label: 'Select with hint text and error message - focused',
      url: `${BASE_URL}/components/select/hint-error.html`
    },
    {
      label: 'Summary list',
      url: `${BASE_URL}/components/summary-list/index.html`
    },
    {
      label: 'Summary list without actions',
      url: `${BASE_URL}/components/summary-list/without-actions.html`
    },
    {
      label: 'Summary list without border',
      url: `${BASE_URL}/components/summary-list/without-border.html`
    },
    {
      label: 'Table',
      url: `${BASE_URL}/components/tables/index.html`
    },
    {
      label: 'Responsive table',
      url: `${BASE_URL}/components/tables/responsive-table.html`
    },
    {
      label: 'Table as panel',
      url: `${BASE_URL}/components/tables/tables-panel.html`
    },
    {
      label: 'Tabs',
      url: `${BASE_URL}/components/tabs/index.html`
    },
    {
      label: 'Tag',
      url: `${BASE_URL}/components/tag/index.html`
    },
    {
      label: 'Task list',
      url: `${BASE_URL}/components/task-list/index.html`
    },
    {
      label: 'Task list with multiple sections',
      url: `${BASE_URL}/components/task-list/multiple-sections.html`
    },
    {
      label: 'Textarea',
      url: `${BASE_URL}/components/textarea/index.html`
    },
    {
      label: 'Textarea with error message',
      url: `${BASE_URL}/components/textarea/error.html`
    },
    {
      clickSelector: '#no-ni-reason',
      label: 'Textarea with error message - focused',
      url: `${BASE_URL}/components/textarea/error.html`
    },
    {
      label: 'Warning callout',
      url: `${BASE_URL}/components/warning-callout/index.html`
    },
    {
      label: 'Warning callout with custom heading',
      url: `${BASE_URL}/components/warning-callout/custom-heading.html`
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

/**
 * @import { PlaywrightEngineConfig } from 'backstopjs'
 */
