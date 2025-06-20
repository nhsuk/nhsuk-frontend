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
  ],
  [
    'xlarge-desktop',
    {
      width: 1281,
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
  readySelector: 'body.nhsuk-frontend-supported',
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
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link click',
      url: `${BASE_URL}/components/back-link/index.html`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link hover',
      url: `${BASE_URL}/components/back-link/index.html`
    },
    {
      label: 'Back link reverse',
      url: `${BASE_URL}/components/back-link/reverse.html`
    },
    {
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link reverse click',
      url: `${BASE_URL}/components/back-link/reverse.html`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link reverse hover',
      url: `${BASE_URL}/components/back-link/reverse.html`
    },
    {
      label: 'Back link as a button',
      url: `${BASE_URL}/components/back-link/as-a-button.html`
    },
    {
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link as a button click',
      url: `${BASE_URL}/components/back-link/as-a-button.html`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link as a button hover',
      url: `${BASE_URL}/components/back-link/as-a-button.html`
    },
    {
      label: 'Breadcrumb',
      url: `${BASE_URL}/components/breadcrumb/index.html`
    },
    {
      clickSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb click',
      url: `${BASE_URL}/components/breadcrumb/index.html`
    },
    {
      hoverSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb hover',
      url: `${BASE_URL}/components/breadcrumb/index.html`
    },
    {
      label: 'Breadcrumb reverse',
      url: `${BASE_URL}/components/breadcrumb/reverse.html`
    },
    {
      clickSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb reverse click',
      url: `${BASE_URL}/components/breadcrumb/reverse.html`
    },
    {
      hoverSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb reverse hover',
      url: `${BASE_URL}/components/breadcrumb/reverse.html`
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
      url: `${BASE_URL}/components/button/as-a-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button as a link click',
      url: `${BASE_URL}/components/button/as-a-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button as a link hover',
      url: `${BASE_URL}/components/button/as-a-link.html`
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
      url: `${BASE_URL}/components/button/secondary-as-a-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click',
      url: `${BASE_URL}/components/button/secondary-as-a-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover',
      url: `${BASE_URL}/components/button/secondary-as-a-link.html`
    },
    {
      label: 'Button secondary, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary click, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary hover, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background.html`
    },
    {
      label: 'Button secondary disabled, solid background',
      url: `${BASE_URL}/components/button/secondary-disabled-solid-background.html`
    },
    {
      label: 'Button secondary as a link, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background.html`
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
      url: `${BASE_URL}/components/button/reverse-as-a-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button reverse as a link click',
      url: `${BASE_URL}/components/button/reverse-as-a-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button reverse as a link hover',
      url: `${BASE_URL}/components/button/reverse-as-a-link.html`
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
      url: `${BASE_URL}/components/button/warning-as-a-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button warning as a link click',
      url: `${BASE_URL}/components/button/warning-as-a-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button warning as a link hover',
      url: `${BASE_URL}/components/button/warning-as-a-link.html`
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
      url: `${BASE_URL}/components/button/login-as-a-link.html`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button login as a link click',
      url: `${BASE_URL}/components/button/login-as-a-link.html`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button login as a link hover',
      url: `${BASE_URL}/components/button/login-as-a-link.html`
    },
    {
      label: 'Card, basic',
      url: `${BASE_URL}/components/card/index.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card, basic with HTML',
      url: `${BASE_URL}/components/card/basic-with-custom-html.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card, clickable',
      url: `${BASE_URL}/components/card/clickable.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card with image',
      url: `${BASE_URL}/components/card/with-image.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Feature card',
      url: `${BASE_URL}/components/card/feature.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Primary card (with chevron)',
      url: `${BASE_URL}/components/card/primary-with-chevron.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Primary card (with chevron and description)',
      url: `${BASE_URL}/components/card/primary-with-chevron-and-description.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Secondary card',
      url: `${BASE_URL}/components/card/secondary.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Top task card',
      url: `${BASE_URL}/components/card/top-task.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Non urgent)',
      url: `${BASE_URL}/components/card/non-urgent-blue.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Urgent)',
      url: `${BASE_URL}/components/card/urgent-red.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Emergency)',
      url: `${BASE_URL}/components/card/emergency-red-and-black.html`,
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
      url: `${BASE_URL}/components/character-count/with-max-words.html`,
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
      url: `${BASE_URL}/components/checkboxes/with-hint-text.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${BASE_URL}/components/checkboxes/with-disabled-item.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${BASE_URL}/components/checkboxes/with-legend-as-page-heading.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with error message',
      url: `${BASE_URL}/components/checkboxes/with-error-message.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#waste',
      label: 'Checkboxes with error message (focused)',
      url: `${BASE_URL}/components/checkboxes/with-error-message.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact',
      label: 'Checkboxes with conditional content',
      url: `${BASE_URL}/components/checkboxes/with-conditional-content.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with "none of the above" option',
      url: `${BASE_URL}/components/checkboxes/with-none-of-the-above-option.html`,
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
      url: `${BASE_URL}/components/date-input/with-multiple-errors.html`
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
      label: "Do & Don't list (don't)",
      url: `${BASE_URL}/components/do-dont-list/dont.html`,
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
      url: `${BASE_URL}/components/error-summary/with-description.html`
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
      url: `${BASE_URL}/components/footer/columns.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Footer (custom copyright statement)',
      url: `${BASE_URL}/components/footer/with-custom-copyright-statement.html`,
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
      url: `${BASE_URL}/components/fieldset/as-page-heading.html`,
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
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header (default, focused logo)',
      url: `${BASE_URL}/components/header/index.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      label: 'Header with navigation (left aligned)',
      url: `${BASE_URL}/components/header/with-navigation.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with navigation (justified)',
      url: `${BASE_URL}/components/header/with-navigation-justified.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with search',
      url: `${BASE_URL}/components/header/with-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__search-input',
      label: 'Header with search (focused search input)',
      url: `${BASE_URL}/components/header/with-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged in)',
      url: `${BASE_URL}/components/header/with-account-logged-in.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged out)',
      url: `${BASE_URL}/components/header/with-account-logged-out.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged in, complex)',
      url: `${BASE_URL}/components/header/with-account-search-navigation-logged-in-complex.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with logo',
      url: `${BASE_URL}/components/header/with-logo.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with logo unlinked',
      url: `${BASE_URL}/components/header/with-logo-unlinked.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name',
      url: `${BASE_URL}/components/header/with-service-name.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-logo',
      label: 'Header with service name (hovered logo)',
      url: `${BASE_URL}/components/header/with-service-name.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header with service name (focused logo)',
      url: `${BASE_URL}/components/header/with-service-name.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name unlinked',
      url: `${BASE_URL}/components/header/with-service-name-unlinked.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name as a combined link',
      url: `${BASE_URL}/components/header/with-service-name-combined-with-logo.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-logo',
      label: 'Header with service name as a combined link (hovered logo)',
      url: `${BASE_URL}/components/header/with-service-name-combined-with-logo.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header with service name as a combined link (focused logo)',
      url: `${BASE_URL}/components/header/with-service-name-combined-with-logo.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      label: 'Header with service name, search, navigation',
      url: `${BASE_URL}/components/header/with-service-name-search-and-navigation.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account, navigation and search',
      url: `${BASE_URL}/components/header/with-service-name-account-search-and-navigation.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational',
      url: `${BASE_URL}/components/header/organisational-with-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header',
      url: `${BASE_URL}/components/header/organisational-white-with-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-logo',
      label: 'Header organisational with white header (hovered logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header organisational with white header (focused logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search.html`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__search-input',
      label: 'Header organisational with white header (focused search input)',
      url: `${BASE_URL}/components/header/organisational-white-with-search.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and custom logo',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-logo',
      label:
        'Header organisational with white header and custom logo (hovered logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo.html`
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label:
        'Header organisational with white header and custom logo (focused logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo.html`
    },
    {
      clickSelector: '#toggle-menu',
      label:
        'Header organisational with white header and custom logo (menu open)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop'),
        viewports.get('xlarge-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and navigation',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and navigation (white)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-white.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and account',
      url: `${BASE_URL}/components/header/organisational-white-with-account-logged-in.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
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
      url: `${BASE_URL}/components/hero/with-image.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero with image, content',
      url: `${BASE_URL}/components/hero/with-image-content.html`,
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
      url: `${BASE_URL}/components/images/with-caption.html`,
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
      url: `${BASE_URL}/components/input/with-autocomplete-attribute.html`
    },
    {
      label: 'Input with hint text',
      url: `${BASE_URL}/components/input/with-hint-text.html`
    },
    {
      label: 'Input with error message',
      url: `${BASE_URL}/components/input/with-error-message.html`
    },
    {
      clickSelector: '#input-with-error-message',
      label: 'Input with error message (focused)',
      url: `${BASE_URL}/components/input/with-error-message.html`
    },
    {
      label: 'Input with width modifier',
      url: `${BASE_URL}/components/input/with-width-modifier.html`
    },
    {
      label: 'Input with prefix',
      url: `${BASE_URL}/components/input/with-prefix.html`
    },
    {
      label: 'Input with suffix',
      url: `${BASE_URL}/components/input/with-suffix.html`
    },
    {
      label: 'Input with prefix, suffix',
      url: `${BASE_URL}/components/input/with-prefix-and-suffix.html`
    },
    {
      label: 'Input with error message, prefix, suffix',
      url: `${BASE_URL}/components/input/with-error-message-prefix-and-suffix.html`
    },
    {
      clickSelector: '#input-with-error-message-and-prefix-and-suffix',
      label: 'Input with error message, prefix, suffix (focused)',
      url: `${BASE_URL}/components/input/with-error-message-prefix-and-suffix.html`
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
      url: `${BASE_URL}/components/label/with-bold-text.html`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Label as page heading',
      url: `${BASE_URL}/components/label/as-page-heading.html`,
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
      url: `${BASE_URL}/components/radios/with-disabled-item.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with divider',
      url: `${BASE_URL}/components/radios/with-divider.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with hint text',
      url: `${BASE_URL}/components/radios/with-hint-text.html`,
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
      url: `${BASE_URL}/components/radios/with-hint-text-error-message.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#example-2',
      label: 'Radios with hint text, error message (focused)',
      url: `${BASE_URL}/components/radios/with-hint-text-error-message.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact',
      label: 'Radios with conditional content',
      url: `${BASE_URL}/components/radios/with-conditional-content.html`,
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
      label: 'Select with hint text',
      url: `${BASE_URL}/components/select/with-hint-text.html`
    },
    {
      label: 'Select with hint text, error message',
      url: `${BASE_URL}/components/select/with-hint-text-error-message.html`
    },
    {
      clickSelector: '[for=location]',
      label: 'Select with hint text, error message (focused)',
      url: `${BASE_URL}/components/select/with-hint-text-error-message.html`
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
      label: 'Summary list without row border',
      url: `${BASE_URL}/components/summary-list/without-row-border.html`,
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
      url: `${BASE_URL}/components/tables/with-responsive-layout.html`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Table as panel',
      url: `${BASE_URL}/components/tables/as-a-panel.html`,
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
      url: `${BASE_URL}/components/tag/index.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag white',
      url: `${BASE_URL}/components/tag/white.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag grey',
      url: `${BASE_URL}/components/tag/grey.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag green',
      url: `${BASE_URL}/components/tag/green.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag aqua-green',
      url: `${BASE_URL}/components/tag/aqua-green.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag blue',
      url: `${BASE_URL}/components/tag/blue.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag purple',
      url: `${BASE_URL}/components/tag/purple.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag pink',
      url: `${BASE_URL}/components/tag/pink.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag red',
      url: `${BASE_URL}/components/tag/red.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag orange',
      url: `${BASE_URL}/components/tag/orange.html`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag yellow',
      url: `${BASE_URL}/components/tag/yellow.html`,
      viewports: [viewports.get('mobile')]
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
      label: 'Textarea',
      url: `${BASE_URL}/components/textarea/index.html`
    },
    {
      label: 'Textarea with error message',
      url: `${BASE_URL}/components/textarea/with-error-message.html`
    },
    {
      clickSelector: '#no-ni-reason',
      label: 'Textarea with error message (focused)',
      url: `${BASE_URL}/components/textarea/with-error-message.html`
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
      url: `${BASE_URL}/components/warning-callout/with-custom-heading.html`,
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
