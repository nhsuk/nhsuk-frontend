# Installing using compiled files

When installing NHS.UK frontend using compiled files, you are using compiled and minified versions of the stylesheet and JavaScript.

This means that you will not be able to:

- selectively include CSS for individual components.
- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.

If you require any of this functionality, you should [install using npm](/docs/installation/installing-with-npm.md) instead.

## Installation

1. Download the compiled files

    [Download the latest CSS, JavaScript and assets from GitHub (zip file)](https://github.com/nhsuk/nhsuk-frontend/releases)

2. Include resources

    Copy all 3 folders, `css`, `js` and `assets`, into the root of your project. If you already have a folder structure
    in place, you will need to copy the individual files into the relevant folders.

    Make sure you change the version numbers of the `[latest version].min.css` and `[latest version].min.js` files,
    in the example below, to the version you are using.

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-[latest version].min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-[latest version].min.js" defer></script>

    <!-- Favicons -->
    <link rel="shortcut icon" href="assets/favicons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon-180x180.png">
    <link rel="mask-icon" href="assets/favicons/favicon.svg" color="#005eb8">
    <link rel="icon" sizes="192x192" href="assets/favicons/favicon-192x192.png">
    <meta name="msapplication-TileImage" content="assets/favicons/mediumtile-144x144.png">
    <meta name="msapplication-TileColor" content="#005eb8">
    <meta name="msapplication-square70x70logo" content="assets/favicons/smalltile-70x70.png">
    <meta name="msapplication-square150x150logo" content="assets/favicons/mediumtile-150x150.png">
    <meta name="msapplication-wide310x150logo" content="assets/favicons/widetile-310x150.png">
    <meta name="msapplication-square310x310logo" content="assets/favicons/largetile-310x310.png">
    ```

  3. Get the JavaScript working

      Add the following JavaScript to the top of the `<body>` section of your page template:

      ```
      document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
      ```

  4. Create pages using NHS.UK frontend

      You can now create pages using the NHS.UK frontend [grid](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core/README.md#page-layout) and [components](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components).

### HTML template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">

    <title>NHS.UK page template</title>

    <link href="https://www.nhs.uk/" rel="preconnect">
    <link href="https://assets.nhs.uk/" rel="preconnect" crossorigin>

    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-[latest version].min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-[latest version].min.js" defer></script>

    <!-- Favicons -->
    <link rel="shortcut icon" href="assets/favicons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon-180x180.png">
    <link rel="mask-icon" href="assets/favicons/favicon.svg" color="#005eb8">
    <link rel="icon" sizes="192x192" href="assets/favicons/favicon-192x192.png">
    <meta name="msapplication-TileImage" content="assets/favicons/mediumtile-144x144.png">
    <meta name="msapplication-TileColor" content="#005eb8">
    <meta name="msapplication-square70x70logo" content="assets/favicons/smalltile-70x70.png">
    <meta name="msapplication-square150x150logo" content="assets/favicons/mediumtile-150x150.png">
    <meta name="msapplication-wide310x150logo" content="assets/favicons/widetile-310x150.png">
    <meta name="msapplication-square310x310logo" content="assets/favicons/largetile-310x310.png">

    <!-- Open Graph -->
    <meta property="og:url" content="https://www.nhs.uk">
    <meta property="og:title" content="NHS.UK">
    <meta property="og:description" content="Helping you take control of your health and wellbeing.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="[absolute url]/assets/logos/open-graph.png">
    <meta property="og:image:alt" content="nhs.uk">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@nhsuk">
    <meta name="twitter:creator" content="@nhsuk">
    <meta name="twitter:image:alt" content="nhs.uk">
  </head>

  <body>
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>

    <header class="nhsuk-header" role="banner">
      <div class="nhsuk-width-container nhsuk-header__container">
        <div class="nhsuk-header__logo">
          <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
            <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="presentation" focusable="false" viewBox="0 0 40 16">
              <path fill="#fff" d="M0 0h40v16H0z"></path>
              <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
              <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
            </svg>
          </a>
        </div>
        <div class="nhsuk-header__content" id="content-header">
          <div class="nhsuk-header__menu">
            <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
          </div>
          <div class="nhsuk-header__search">
            <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
              </svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
            </button>
            <div class="nhsuk-header__search-wrap" id="wrap-search">
              <form class="nhsuk-header__search-form" id="search"  action="https://www.nhs.uk/search/" method="get" role="search">
                <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
                <input class="nhsuk-search__input" id="search-field" name="q" type="search" placeholder="Search" autocomplete="off">
                <button class="nhsuk-search__submit" type="submit">
                  <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                  </svg>
                  <span class="nhsuk-u-visually-hidden">Search</span>
                </button>
                <button class="nhsuk-search__close" id="close-search">
                  <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                  </svg>
                  <span class="nhsuk-u-visually-hidden">Close search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
        <p class="nhsuk-header__navigation-title">
          <span id="label-navigation">Menu</span>
          <button class="nhsuk-header__navigation-close" id="close-menu">
            <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
            </svg>
            <span class="nhsuk-u-visually-hidden">Close menu</span>
          </button>
        </p>
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
            <a class="nhsuk-header__navigation-link" href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions" >
              Health A-Z
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/live-well/" >
              Live Well
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions/social-care-and-support/" >
              Care and support
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/news/" >
              Health news
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/service-search" >
              Services near you
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
      <div class="nhsuk-width-container">
        <ol class="nhsuk-breadcrumb__list">
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one">Level one</a></li>
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two">Level two</a></li>
          <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two/level-three">Level three</a></li>
        </ol>
        <p class="nhsuk-breadcrumb__back"><a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two/level-three">Back to Level three</a></p>
      </div>
    </nav>

    <div class="nhsuk-width-container">
      <main class="nhsuk-main-wrapper" id="maincontent">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-three-quarters">

            <h1>Page template</h1>

          </div>
        </div>
      </main>
    </div>

    <footer role="contentinfo">
      <div class="nhsuk-footer" id="nhsuk-footer">
        <div class="nhsuk-width-container">
          <h2 class="nhsuk-u-visually-hidden">Support links</h2>
          <ul class="nhsuk-footer__list">
            <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/nhs-sites/">NHS sites</a></li>
            <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/">About us</a></li>
            <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/contact-us/">Contact us</a></li>
            <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/sitemap/">Sitemap</a></li>
            <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/">Our policies</a></li>
          </ul>
          <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
        </div>
      </div>
    </footer>

  </body>
</html>
```
