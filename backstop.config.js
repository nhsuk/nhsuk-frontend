const { executablePath } = require('puppeteer')

const {
  HEADLESS,
  PORT = '3000',
  BASE_HOST = `localhost:${PORT}`, // Default via `npm start`
  BASE_URL = `http://${BASE_HOST}/nhsuk-frontend`
} = process.env

/**
 * Default viewport sizes
 *
 * @type {Map<string, Viewport>}
 */
const viewports = new Map([
  [
    'mobile',
    {
      width: 320,
      height: 100
    }
  ],
  [
    'tablet',
    {
      width: 641,
      height: 100
    }
  ],
  [
    'desktop',
    {
      width: 769,
      height: 100
    }
  ],
  [
    'large-desktop',
    {
      width: 990,
      height: 100
    }
  ]
])

// Set viewport labels
for (const [label, viewport] of viewports.entries()) {
  viewport.label = label
}

/**
 * @type {PlaywrightEngineConfig}
 */
module.exports = {
  asyncCaptureLimit: HEADLESS ? 1 : 4,
  engine: 'playwright',
  engineOptions: {
    args: [
      '--deterministic-mode',
      '--disable-skia-runtime-opts',
      '--font-render-hinting=medium',
      '--force-device-scale-factor=1',
      '--hide-scrollbars'
    ],
    browser: 'chromium',
    chromePath: executablePath(),
    gotoParameters: { waitUntil: 'load' },

    // Allow headless mode switching using `HEADLESS=false`
    headless: HEADLESS !== 'false'
  },
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  misMatchThreshold: 0.8,
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
      label: 'Back link as a button',
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
      url: `${BASE_URL}/components/button/index.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button hover',
      url: `${BASE_URL}/components/button/index.html`
    },
    {
      label: 'Button disabled',
      url: `${BASE_URL}/components/button/disabled.html`
    },
    {
      label: 'Button as a link',
      url: `${BASE_URL}/components/button/link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button as a link click',
      url: `${BASE_URL}/components/button/link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button as a link hover',
      url: `${BASE_URL}/components/button/link.html`
    },
    {
      label: 'Button secondary',
      url: `${BASE_URL}/components/button/secondary.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary click',
      url: `${BASE_URL}/components/button/secondary.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary hover',
      url: `${BASE_URL}/components/button/secondary.html`
    },
    {
      label: 'Button secondary disabled',
      url: `${BASE_URL}/components/button/secondary-disabled.html`
    },
    {
      label: 'Button secondary as a link',
      url: `${BASE_URL}/components/button/secondary-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click',
      url: `${BASE_URL}/components/button/secondary-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover',
      url: `${BASE_URL}/components/button/secondary-link.html`
    },
    {
      label: 'Button secondary, solid background',
      url: `${BASE_URL}/components/button/secondary-solid.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary click, solid background',
      url: `${BASE_URL}/components/button/secondary-solid.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary hover, solid background',
      url: `${BASE_URL}/components/button/secondary-solid.html`
    },
    {
      label: 'Button secondary disabled, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-disabled.html`
    },
    {
      label: 'Button secondary as a link, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-link.html`
    },
    {
      label: 'Button reverse',
      url: `${BASE_URL}/components/button/reverse.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button reverse click',
      url: `${BASE_URL}/components/button/reverse.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button reverse hover',
      url: `${BASE_URL}/components/button/reverse.html`
    },
    {
      label: 'Button reverse disabled',
      url: `${BASE_URL}/components/button/reverse-disabled.html`
    },
    {
      label: 'Button reverse as a link',
      url: `${BASE_URL}/components/button/reverse-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button reverse as a link click',
      url: `${BASE_URL}/components/button/reverse-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button reverse as a link hover',
      url: `${BASE_URL}/components/button/reverse-link.html`
    },
    {
      label: 'Button warning',
      url: `${BASE_URL}/components/button/warning.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button warning click',
      url: `${BASE_URL}/components/button/warning.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button warning hover',
      url: `${BASE_URL}/components/button/warning.html`
    },
    {
      label: 'Button warning disabled',
      url: `${BASE_URL}/components/button/warning-disabled.html`
    },
    {
      label: 'Button warning as a link',
      url: `${BASE_URL}/components/button/warning-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button warning as a link click',
      url: `${BASE_URL}/components/button/warning-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button warning as a link hover',
      url: `${BASE_URL}/components/button/warning-link.html`
    },
    {
      label: 'Button login',
      url: `${BASE_URL}/components/button/login.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button login click',
      url: `${BASE_URL}/components/button/login.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button login hover',
      url: `${BASE_URL}/components/button/login.html`
    },
    {
      label: 'Button login disabled',
      url: `${BASE_URL}/components/button/login-disabled.html`
    },
    {
      label: 'Button login as a link',
      url: `${BASE_URL}/components/button/login-link.html`
    },
    {
      label: 'Button login with icon',
      url: `${BASE_URL}/components/button/login-with-icon.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button login as a link click',
      url: `${BASE_URL}/components/button/login-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button login as a link hover',
      url: `${BASE_URL}/components/button/login-link.html`
    },
    {
      label: 'Card, basic',
      url: `${BASE_URL}/components/card/basic-card.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card, clickable',
      url: `${BASE_URL}/components/card/clickable-card.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card with image',
      url: `${BASE_URL}/components/card/card-with-image.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card group',
      url: `${BASE_URL}/components/card/card-group.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Feature card',
      url: `${BASE_URL}/components/card/feature-card.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Non urgent)',
      url: `${BASE_URL}/components/card/care-card-non-urgent.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Urgent)',
      url: `${BASE_URL}/components/card/care-card-urgent.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Emergency)',
      url: `${BASE_URL}/components/card/care-card-emergency.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Character count with max characters',
      url: `${BASE_URL}/components/character-count/index.html`
    },
    {
      label: 'Character count with threshold',
      url: `${BASE_URL}/components/character-count/with-threshold.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Character count with max words',
      url: `${BASE_URL}/components/character-count/with-word-count.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Checkboxes',
      url: `${BASE_URL}/components/checkboxes/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with hint text',
      url: `${BASE_URL}/components/checkboxes/hint.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${BASE_URL}/components/checkboxes/disabled.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${BASE_URL}/components/checkboxes/page-heading.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with error message',
      url: `${BASE_URL}/components/checkboxes/error.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#waste-1',
      label: 'Checkboxes with error message (focused)',
      url: `${BASE_URL}/components/checkboxes/error.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact-1',
      label: 'Checkboxes with conditional content',
      url: `${BASE_URL}/components/checkboxes/conditional.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with "none of the above" option',
      url: `${BASE_URL}/components/checkboxes/none-of-the-above.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
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
      url: `${BASE_URL}/components/do-dont-list/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Error message',
      url: `${BASE_URL}/components/error-message/index.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Error summary',
      url: `${BASE_URL}/components/error-summary/index.html`
    },
    {
      label: 'Error summary with link to an input field',
      url: `${BASE_URL}/components/error-summary/linking-to-input.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      label: 'Error summary with link to a radio field',
      url: `${BASE_URL}/components/error-summary/linking-to-radios.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander',
      url: `${BASE_URL}/components/details/expander.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander group',
      url: `${BASE_URL}/components/details/expander-group.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Footer (default)',
      url: `${BASE_URL}/components/footer/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Footer (columns)',
      url: `${BASE_URL}/components/footer/footer-in-columns.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Footer (custom copyright statement)',
      url: `${BASE_URL}/components/footer/custom-copyright.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Fieldset',
      url: `${BASE_URL}/components/fieldset/index.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Fieldset as page heading',
      url: `${BASE_URL}/components/fieldset/page-heading.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Fieldset with inputs',
      url: `${BASE_URL}/components/fieldset/with-inputs.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Header (default)',
      url: `${BASE_URL}/components/header/index.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with navigation',
      url: `${BASE_URL}/components/header/header-navigation.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with search',
      url: `${BASE_URL}/components/header/header-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with logo only',
      url: `${BASE_URL}/components/header/header-logo.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name',
      url: `${BASE_URL}/components/header/header-service-name.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name, search, navigation',
      url: `${BASE_URL}/components/header/header-service-name-with-nav.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header transactional with service name',
      url: `${BASE_URL}/components/header/header-transactional-service-name.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational',
      url: `${BASE_URL}/components/header/header-org.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header',
      url: `${BASE_URL}/components/header/header-org-white.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header, navigation',
      url: `${BASE_URL}/components/header/header-org-white-nav.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '#toggle-menu',
      label: 'Header with navigation open',
      url: `${BASE_URL}/components/header/header-navigation.html`,
      onReadyScript: 'playwright/onReadyResize.js',
      viewports: [viewports.get('mobile'), viewports.get('tablet')]
    },
    {
      label: 'Hero',
      url: `${BASE_URL}/components/hero/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero with image',
      url: `${BASE_URL}/components/hero/hero-image.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero with image, content',
      url: `${BASE_URL}/components/hero/hero-image-content.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hint',
      url: `${BASE_URL}/components/hint/index.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Images',
      url: `${BASE_URL}/components/images/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
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
      label: 'Input with error message (focused)',
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
      label: 'Input with prefix, suffix',
      url: `${BASE_URL}/components/input/prefix-and-suffix.html`
    },
    {
      label: 'Input with error message, prefix, suffix',
      url: `${BASE_URL}/components/input/error-and-prefix-and-suffix.html`
    },
    {
      clickSelector: '#input-with-error-message-and-prefix-and-suffix',
      label: 'Input with error message, prefix, suffix (focused)',
      url: `${BASE_URL}/components/input/error-and-prefix-and-suffix.html`
    },
    {
      label: 'Inset text',
      url: `${BASE_URL}/components/inset-text/index.html`
    },
    {
      label: 'Label',
      url: `${BASE_URL}/components/label/index.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Label with bold text',
      url: `${BASE_URL}/components/label/bold.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Label as page heading',
      url: `${BASE_URL}/components/label/page-heading.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Pagination',
      url: `${BASE_URL}/components/pagination/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Panel',
      url: `${BASE_URL}/components/panel/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios',
      url: `${BASE_URL}/components/radios/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios inline',
      url: `${BASE_URL}/components/radios/inline.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios disabled',
      url: `${BASE_URL}/components/radios/disabled.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with divider',
      url: `${BASE_URL}/components/radios/divider.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with hint text',
      url: `${BASE_URL}/components/radios/hint.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios without fieldset',
      url: `${BASE_URL}/components/radios/without-fieldset.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with hint text, error message',
      url: `${BASE_URL}/components/radios/hint-error.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#example-2',
      label: 'Radios with hint text, error message (focused)',
      url: `${BASE_URL}/components/radios/hint-error.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact-1',
      label: 'Radios with conditional content',
      url: `${BASE_URL}/components/radios/conditional.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Select',
      url: `${BASE_URL}/components/select/index.html`
    },
    {
      label: 'Select with hint text, error message',
      url: `${BASE_URL}/components/select/hint-error.html`
    },
    {
      clickSelector: '[for=select-2]',
      label: 'Select with hint text, error message (focused)',
      url: `${BASE_URL}/components/select/hint-error.html`
    },
    {
      label: 'Summary list',
      url: `${BASE_URL}/components/summary-list/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Summary list without actions',
      url: `${BASE_URL}/components/summary-list/without-actions.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Summary list without border',
      url: `${BASE_URL}/components/summary-list/without-border.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Table',
      url: `${BASE_URL}/components/tables/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Responsive table',
      url: `${BASE_URL}/components/tables/responsive-table.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Table as panel',
      url: `${BASE_URL}/components/tables/tables-panel.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Tabs',
      url: `${BASE_URL}/components/tabs/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Tag',
      url: `${BASE_URL}/components/tag/index.html`
    },
    {
      label: 'Task list',
      url: `${BASE_URL}/components/task-list/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Task list with multiple sections',
      url: `${BASE_URL}/components/task-list/multiple-sections.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
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
      label: 'Textarea with error message (focused)',
      url: `${BASE_URL}/components/textarea/error.html`
    },
    {
      label: 'Warning callout',
      url: `${BASE_URL}/components/warning-callout/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Warning callout with custom heading',
      url: `${BASE_URL}/components/warning-callout/custom-heading.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    }
  ],
  viewports: [viewports.get('mobile'), viewports.get('desktop')]
}

/**
 * @import { PlaywrightEngineConfig, Viewport } from 'backstopjs'
 */
