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
    ],
    browser: 'chromium',
    executablePath: executablePath(),
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
      url: `${BASE_URL}/components/action-link/default/`
    },
    {
      label: 'Back link',
      url: `${BASE_URL}/components/back-link/default/`
    },
    {
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link click',
      url: `${BASE_URL}/components/back-link/default/`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link hover',
      url: `${BASE_URL}/components/back-link/default/`
    },
    {
      label: 'Back link reverse',
      url: `${BASE_URL}/components/back-link/reverse/`
    },
    {
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link reverse click',
      url: `${BASE_URL}/components/back-link/reverse/`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link reverse hover',
      url: `${BASE_URL}/components/back-link/reverse/`
    },
    {
      label: 'Back link as a button',
      url: `${BASE_URL}/components/back-link/as-a-button/`
    },
    {
      clickSelector: '.nhsuk-back-link__link',
      label: 'Back link as a button click',
      url: `${BASE_URL}/components/back-link/as-a-button/`
    },
    {
      hoverSelector: '.nhsuk-back-link__link',
      label: 'Back link as a button hover',
      url: `${BASE_URL}/components/back-link/as-a-button/`
    },
    {
      label: 'Breadcrumb',
      url: `${BASE_URL}/components/breadcrumb/default/`
    },
    {
      clickSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb click',
      url: `${BASE_URL}/components/breadcrumb/default/`
    },
    {
      hoverSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb hover',
      url: `${BASE_URL}/components/breadcrumb/default/`
    },
    {
      label: 'Breadcrumb reverse',
      url: `${BASE_URL}/components/breadcrumb/reverse/`
    },
    {
      clickSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb reverse click',
      url: `${BASE_URL}/components/breadcrumb/reverse/`
    },
    {
      hoverSelector: '.nhsuk-breadcrumb a',
      label: 'Breadcrumb reverse hover',
      url: `${BASE_URL}/components/breadcrumb/reverse/`
    },
    {
      label: 'Button',
      url: `${BASE_URL}/components/button/default/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button click',
      url: `${BASE_URL}/components/button/default/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button hover',
      url: `${BASE_URL}/components/button/default/`
    },
    {
      label: 'Button disabled',
      url: `${BASE_URL}/components/button/disabled/`
    },
    {
      label: 'Button as a link',
      url: `${BASE_URL}/components/button/as-a-link/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button as a link click',
      url: `${BASE_URL}/components/button/as-a-link/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button as a link hover',
      url: `${BASE_URL}/components/button/as-a-link/`
    },
    {
      label: 'Button secondary',
      url: `${BASE_URL}/components/button/secondary/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary click',
      url: `${BASE_URL}/components/button/secondary/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary hover',
      url: `${BASE_URL}/components/button/secondary/`
    },
    {
      label: 'Button secondary disabled',
      url: `${BASE_URL}/components/button/secondary-disabled/`
    },
    {
      label: 'Button secondary as a link',
      url: `${BASE_URL}/components/button/secondary-as-a-link/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click',
      url: `${BASE_URL}/components/button/secondary-as-a-link/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover',
      url: `${BASE_URL}/components/button/secondary-as-a-link/`
    },
    {
      label: 'Button secondary, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary click, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary hover, solid background',
      url: `${BASE_URL}/components/button/secondary-solid-background/`
    },
    {
      label: 'Button secondary disabled, solid background',
      url: `${BASE_URL}/components/button/secondary-disabled-solid-background/`
    },
    {
      label: 'Button secondary as a link, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button secondary as a link click, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button secondary as a link hover, solid background',
      url: `${BASE_URL}/components/button/secondary-as-a-link-solid-background/`
    },
    {
      label: 'Button reverse',
      url: `${BASE_URL}/components/button/reverse/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button reverse click',
      url: `${BASE_URL}/components/button/reverse/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button reverse hover',
      url: `${BASE_URL}/components/button/reverse/`
    },
    {
      label: 'Button reverse disabled',
      url: `${BASE_URL}/components/button/reverse-disabled/`
    },
    {
      label: 'Button reverse as a link',
      url: `${BASE_URL}/components/button/reverse-as-a-link/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button reverse as a link click',
      url: `${BASE_URL}/components/button/reverse-as-a-link/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button reverse as a link hover',
      url: `${BASE_URL}/components/button/reverse-as-a-link/`
    },
    {
      label: 'Button warning',
      url: `${BASE_URL}/components/button/warning/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button warning click',
      url: `${BASE_URL}/components/button/warning/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button warning hover',
      url: `${BASE_URL}/components/button/warning/`
    },
    {
      label: 'Button warning disabled',
      url: `${BASE_URL}/components/button/warning-disabled/`
    },
    {
      label: 'Button warning as a link',
      url: `${BASE_URL}/components/button/warning-as-a-link/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button warning as a link click',
      url: `${BASE_URL}/components/button/warning-as-a-link/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button warning as a link hover',
      url: `${BASE_URL}/components/button/warning-as-a-link/`
    },
    {
      label: 'Button login',
      url: `${BASE_URL}/components/button/login/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button login click',
      url: `${BASE_URL}/components/button/login/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button login hover',
      url: `${BASE_URL}/components/button/login/`
    },
    {
      label: 'Button login disabled',
      url: `${BASE_URL}/components/button/login-disabled/`
    },
    {
      label: 'Button login as a link',
      url: `${BASE_URL}/components/button/login-as-a-link/`
    },
    {
      clickSelector: '.nhsuk-button',
      label: 'Button login as a link click',
      url: `${BASE_URL}/components/button/login-as-a-link/`
    },
    {
      hoverSelector: '.nhsuk-button',
      label: 'Button login as a link hover',
      url: `${BASE_URL}/components/button/login-as-a-link/`
    },
    {
      label: 'Card, basic',
      url: `${BASE_URL}/components/card/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card, basic with HTML',
      url: `${BASE_URL}/components/card/basic-with-custom-html/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card, clickable',
      url: `${BASE_URL}/components/card/clickable/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Card with image',
      url: `${BASE_URL}/components/card/with-image/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Feature card',
      url: `${BASE_URL}/components/card/feature/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Primary card (with chevron)',
      url: `${BASE_URL}/components/card/primary-with-chevron/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Primary card (with chevron and description)',
      url: `${BASE_URL}/components/card/primary-with-chevron-and-description/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Secondary card',
      url: `${BASE_URL}/components/card/secondary/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Top task card',
      url: `${BASE_URL}/components/card/top-task/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Non urgent)',
      url: `${BASE_URL}/components/card/non-urgent-blue/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Urgent)',
      url: `${BASE_URL}/components/card/urgent-red/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Care card (Emergency)',
      url: `${BASE_URL}/components/card/emergency-red-and-black/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Character count with max characters',
      url: `${BASE_URL}/components/character-count/default/`
    },
    {
      label: 'Character count with threshold',
      url: `${BASE_URL}/components/character-count/with-threshold/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Character count with max words',
      url: `${BASE_URL}/components/character-count/with-max-words/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Checkboxes',
      url: `${BASE_URL}/components/checkboxes/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with hint text',
      url: `${BASE_URL}/components/checkboxes/with-hint-text/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with disabled item',
      url: `${BASE_URL}/components/checkboxes/with-disabled-item/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Checkboxes with legend as page heading',
      url: `${BASE_URL}/components/checkboxes/with-legend-as-page-heading/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with error message',
      url: `${BASE_URL}/components/checkboxes/with-error-message/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#waste',
      label: 'Checkboxes with error message (focused)',
      url: `${BASE_URL}/components/checkboxes/with-error-message/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact',
      label: 'Checkboxes with conditional content',
      url: `${BASE_URL}/components/checkboxes/with-conditional-content/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Checkboxes with "none of the above" option',
      url: `${BASE_URL}/components/checkboxes/with-none-of-the-above-option/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Contents list',
      url: `${BASE_URL}/components/contents-list/default/`
    },
    {
      label: 'Date input',
      url: `${BASE_URL}/components/date-input/default/`
    },
    {
      label: 'Date input with multiple errors',
      url: `${BASE_URL}/components/date-input/with-multiple-errors/`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Details',
      url: `${BASE_URL}/components/details/default/`
    },
    {
      label: "Do & Don't list",
      url: `${BASE_URL}/components/do-dont-list/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: "Do & Don't list (don't)",
      url: `${BASE_URL}/components/do-dont-list/dont/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Error message',
      url: `${BASE_URL}/components/error-message/default/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Error summary',
      url: `${BASE_URL}/components/error-summary/with-description/`
    },
    {
      clickSelector: '.nhsuk-details__summary',
      label: 'Expander',
      url: `${BASE_URL}/components/details/expander/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Footer (default)',
      url: `${BASE_URL}/components/footer/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Footer (columns)',
      url: `${BASE_URL}/components/footer/columns/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Footer (custom copyright statement)',
      url: `${BASE_URL}/components/footer/with-custom-copyright-statement/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Fieldset',
      url: `${BASE_URL}/components/fieldset/default/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Fieldset as page heading',
      url: `${BASE_URL}/components/fieldset/as-page-heading/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Fieldset with inputs',
      url: `${BASE_URL}/components/fieldset/with-inputs/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Header (default)',
      url: `${BASE_URL}/components/header/default/`,
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
      url: `${BASE_URL}/components/header/default/`,
      viewports: [viewports.get('desktop')]
    },
    {
      label: 'Header with navigation',
      url: `${BASE_URL}/components/header/with-navigation/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with navigation (white)',
      url: `${BASE_URL}/components/header/with-navigation-white/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with navigation (justified)',
      url: `${BASE_URL}/components/header/with-navigation-justified/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with search',
      url: `${BASE_URL}/components/header/with-search/`,
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
      url: `${BASE_URL}/components/header/with-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged in)',
      url: `${BASE_URL}/components/header/with-account-logged-in/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged out)',
      url: `${BASE_URL}/components/header/with-account-logged-out/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with account (logged in, complex)',
      url: `${BASE_URL}/components/header/with-account-search-navigation-logged-in-complex/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with logo',
      url: `${BASE_URL}/components/header/with-logo/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with logo unlinked',
      url: `${BASE_URL}/components/header/with-logo-unlinked/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name',
      url: `${BASE_URL}/components/header/with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-name',
      label: 'Header with service name (hovered)',
      url: `${BASE_URL}/components/header/with-service-name-logo-separate-search/`,
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
      url: `${BASE_URL}/components/header/with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__service-name',
      label: 'Header with service name (focused)',
      url: `${BASE_URL}/components/header/with-service-name-logo-separate-search/`,
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
      url: `${BASE_URL}/components/header/with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name unlinked',
      url: `${BASE_URL}/components/header/with-service-name-unlinked-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name as a combined link',
      url: `${BASE_URL}/components/header/with-service-name-logo-combo-search/`,
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
      url: `${BASE_URL}/components/header/with-service-name-logo-combo-search/`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header with service name as a combined link (focused logo)',
      url: `${BASE_URL}/components/header/with-service-name-logo-combo-search/`,
      viewports: [viewports.get('desktop')]
    },
    {
      label: 'Header with service name, search, navigation',
      url: `${BASE_URL}/components/header/with-service-name-search-and-navigation/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name, account, search and navigation',
      url: `${BASE_URL}/components/header/with-service-name-account-search-and-navigation/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header with service name, account, search and navigation (white)',
      url: `${BASE_URL}/components/header/with-service-name-account-search-and-navigation-white/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational',
      url: `${BASE_URL}/components/header/organisational-with-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header',
      url: `${BASE_URL}/components/header/organisational-white-with-search/`,
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
      url: `${BASE_URL}/components/header/organisational-white-with-search/`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header organisational with white header (focused logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search/`,
      viewports: [viewports.get('desktop')]
    },
    {
      clickSelector: '.nhsuk-header__search-input',
      label: 'Header organisational with white header (focused search input)',
      url: `${BASE_URL}/components/header/organisational-white-with-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational white with service name',
      url: `${BASE_URL}/components/header/organisational-white-with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-name',
      label: 'Header organisational white with service name (hovered)',
      url: `${BASE_URL}/components/header/organisational-white-with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      hoverSelector: '.nhsuk-header__service-logo',
      label: 'Header organisational white with service name (hovered logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__service-name',
      label: 'Header organisational white with service name (focused)',
      url: `${BASE_URL}/components/header/organisational-white-with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label: 'Header organisational white with service name (focused logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-service-name-logo-separate-search/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and custom logo',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo/`,
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
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo/`
    },
    {
      clickSelector: '.nhsuk-header__service-logo',
      label:
        'Header organisational with white header and custom logo (focused logo)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo/`
    },
    {
      clickSelector: '#toggle-menu',
      label:
        'Header organisational with white header and custom logo (menu open)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-custom-logo/`,
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
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and navigation (white)',
      url: `${BASE_URL}/components/header/organisational-white-with-search-navigation-white/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Header organisational with white header and account',
      url: `${BASE_URL}/components/header/organisational-white-with-account-logged-in/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero',
      url: `${BASE_URL}/components/hero/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero with image',
      url: `${BASE_URL}/components/hero/with-image/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hero with image, content',
      url: `${BASE_URL}/components/hero/with-image-content/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Hint',
      url: `${BASE_URL}/components/hint/default/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Images',
      url: `${BASE_URL}/components/images/with-caption/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Input',
      url: `${BASE_URL}/components/input/default/`
    },
    {
      label: 'Input with autocomplete attribute',
      url: `${BASE_URL}/components/input/with-autocomplete-attribute/`
    },
    {
      label: 'Input with hint text',
      url: `${BASE_URL}/components/input/with-hint-text/`
    },
    {
      label: 'Input with error message',
      url: `${BASE_URL}/components/input/with-error-message/`
    },
    {
      clickSelector: '#input-with-error-message',
      label: 'Input with error message (focused)',
      url: `${BASE_URL}/components/input/with-error-message/`
    },
    {
      label: 'Input with width modifier',
      url: `${BASE_URL}/components/input/with-width-modifier/`
    },
    {
      label: 'Input with prefix',
      url: `${BASE_URL}/components/input/with-prefix/`
    },
    {
      label: 'Input with suffix',
      url: `${BASE_URL}/components/input/with-suffix/`
    },
    {
      label: 'Input with prefix, suffix',
      url: `${BASE_URL}/components/input/with-prefix-and-suffix/`
    },
    {
      label: 'Input with error message, prefix, suffix',
      url: `${BASE_URL}/components/input/with-error-message-prefix-and-suffix/`
    },
    {
      clickSelector: '#input-with-error-message-and-prefix-and-suffix',
      label: 'Input with error message, prefix, suffix (focused)',
      url: `${BASE_URL}/components/input/with-error-message-prefix-and-suffix/`
    },
    {
      label: 'Inset text',
      url: `${BASE_URL}/components/inset-text/default/`
    },
    {
      label: 'Label',
      url: `${BASE_URL}/components/label/default/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Label with bold text',
      url: `${BASE_URL}/components/label/with-bold-text/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Label as page heading',
      url: `${BASE_URL}/components/label/as-page-heading/`,
      viewports: [viewports.get('tablet')]
    },
    {
      label: 'Pagination',
      url: `${BASE_URL}/components/pagination/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop'),
        viewports.get('large-desktop')
      ]
    },
    {
      label: 'Panel',
      url: `${BASE_URL}/components/panel/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios',
      url: `${BASE_URL}/components/radios/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios inline',
      url: `${BASE_URL}/components/radios/inline/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios disabled',
      url: `${BASE_URL}/components/radios/with-disabled-item/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with divider',
      url: `${BASE_URL}/components/radios/with-divider/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with hint text',
      url: `${BASE_URL}/components/radios/with-hint-text/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios without fieldset',
      url: `${BASE_URL}/components/radios/without-fieldset/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Radios with hint text, error message',
      url: `${BASE_URL}/components/radios/with-hint-text-error-message/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#example-2',
      label: 'Radios with hint text, error message (focused)',
      url: `${BASE_URL}/components/radios/with-hint-text-error-message/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      clickSelector: '#contact',
      label: 'Radios with conditional content',
      url: `${BASE_URL}/components/radios/with-conditional-content/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Select',
      url: `${BASE_URL}/components/select/default/`
    },
    {
      label: 'Select with hint text',
      url: `${BASE_URL}/components/select/with-hint-text/`
    },
    {
      label: 'Select with hint text, error message',
      url: `${BASE_URL}/components/select/with-hint-text-error-message/`
    },
    {
      clickSelector: '[for=location]',
      label: 'Select with hint text, error message (focused)',
      url: `${BASE_URL}/components/select/with-hint-text-error-message/`
    },
    {
      label: 'Summary list',
      url: `${BASE_URL}/components/summary-list/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Summary list without actions',
      url: `${BASE_URL}/components/summary-list/without-actions/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Summary list without border',
      url: `${BASE_URL}/components/summary-list/without-border/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Summary list without row border',
      url: `${BASE_URL}/components/summary-list/without-row-border/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Table',
      url: `${BASE_URL}/components/tables/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Responsive table',
      url: `${BASE_URL}/components/tables/with-responsive-layout/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Table as panel',
      url: `${BASE_URL}/components/tables/as-a-panel/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Tabs',
      url: `${BASE_URL}/components/tabs/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Tag',
      url: `${BASE_URL}/components/tag/default/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag white',
      url: `${BASE_URL}/components/tag/white/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag grey',
      url: `${BASE_URL}/components/tag/grey/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag green',
      url: `${BASE_URL}/components/tag/green/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag aqua-green',
      url: `${BASE_URL}/components/tag/aqua-green/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag blue',
      url: `${BASE_URL}/components/tag/blue/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag purple',
      url: `${BASE_URL}/components/tag/purple/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag pink',
      url: `${BASE_URL}/components/tag/pink/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag red',
      url: `${BASE_URL}/components/tag/red/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag orange',
      url: `${BASE_URL}/components/tag/orange/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Tag yellow',
      url: `${BASE_URL}/components/tag/yellow/`,
      viewports: [viewports.get('mobile')]
    },
    {
      label: 'Task list',
      url: `${BASE_URL}/components/task-list/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Textarea',
      url: `${BASE_URL}/components/textarea/default/`
    },
    {
      label: 'Textarea with error message',
      url: `${BASE_URL}/components/textarea/with-error-message/`
    },
    {
      clickSelector: '#no-ni-reason',
      label: 'Textarea with error message (focused)',
      url: `${BASE_URL}/components/textarea/with-error-message/`
    },
    {
      label: 'Warning callout',
      url: `${BASE_URL}/components/warning-callout/default/`,
      viewports: [
        viewports.get('mobile'),
        viewports.get('tablet'),
        viewports.get('desktop')
      ]
    },
    {
      label: 'Warning callout with custom heading',
      url: `${BASE_URL}/components/warning-callout/with-custom-heading/`,
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
