# Header

## Guidance

Find out more about the header component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/header).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `header.js`.

## Quick start examples

### Header

[Preview the header component](https://nhsuk.github.io/nhsuk-frontend/components/header/index.html)

#### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
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
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <div class="autocomplete-container" id="autocomplete-container"></div>
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
    <div class="nhsuk-width-container">
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
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions">
            Health A-Z
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/live-well/">
            Live Well
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions/social-care-and-support/">
            Care and support
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/news/">
            Health news
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/service-search">
            Services near you
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "true",
    "showSearch": "true",
    "primaryLinks": [
      {
        "url"  : "https://www.nhs.uk/conditions",
        "label" : "Health A-Z"
      },
      {
        'url' : 'https://www.nhs.uk/live-well/',
        'label' : 'Live Well'
      },
      {
        'url'  : 'https://www.nhs.uk/conditions/social-care-and-support/',
        'label' : 'Care and support'
      },
      {
        'url'  : 'https://www.nhs.uk/news/',
        'label' : 'Health news'
      },
      {
        'url' : 'https://www.nhs.uk/service-search',
        'label' : 'Services near you'
      }
    ]
  })
}}
```

### Header with navigation

[Preview the header with navigation component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-navigation.html)

#### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__menu nhsuk-header__menu--only">
        <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-label="Open menu">Menu</button>
      </div>
    </div>
  </div>
  <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
    <div class="nhsuk-width-container">
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
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions">
            Health A-Z
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/live-well/">
            Live Well
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions/social-care-and-support/">
            Care and support
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/news/">
            Health news
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/service-search">
            Services near you
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "true",
    "showSearch": "false",
    "primaryLinks": [
      {
        "url"  : "https://www.nhs.uk/conditions",
        "label" : "Health A-Z"
      },
      {
        'url' : 'https://www.nhs.uk/live-well/',
        'label' : 'Live Well'
      },
      {
        'url'  : 'https://www.nhs.uk/conditions/social-care-and-support/',
        'label' : 'Care and support'
      },
      {
        'url'  : 'https://www.nhs.uk/news/',
        'label' : 'Health news'
      },
      {
        'url' : 'https://www.nhs.uk/service-search',
        'label' : 'Services near you'
      }
    ]
  })
}}
```

### Header with search

[Preview the header with search component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-search.html)

#### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
        <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
          <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
          </svg>
          <span class="nhsuk-u-visually-hidden">Search</span>
        </button>
        <div class="nhsuk-header__search-wrap" id="wrap-search">
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <div class="autocomplete-container" id="autocomplete-container"></div>
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
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "false",
    "showSearch": "true"
  })
}}
```

### Header with logo

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-logo.html)

#### HTML markup

```HTML
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo nhsuk-header__logo--only">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "showNav": "false",
  "showSearch": "false"
  })
}}
```

---

### Header transactional

[Preview the header transactional component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-transactional.html)

#### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo nhsuk-header__logo--only">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "transactional": "true",
  "showNav": "false",
  "showSearch": "false"
  })
}}
```

---

### Header transactional with service name

[Preview the header transactional with service name component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-transactional-service-name.html)

#### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo nhsuk-header__logo--only">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
    <div class="nhsuk-header__transactional-service-name">
      <a class="nhsuk-header__transactional-service-name--link" href="/">Register with a GP</a>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "transactionalService": {
      "name": "Register with a GP",
      "href": "https://beta.nhs.uk/book-a-gp-appointment/"
    },
    "showNav": "false",
    "showSearch": "false"
  })
}}
```

### Header transactional with a long service name

[Preview the header transactional with a long service name component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-transactional-long-service-name.html)

#### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo nhsuk-header__logo--only">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
    <div class="nhsuk-header__transactional-service-name nhsuk-header__transactional-service-name--long">
      <a class="nhsuk-header__transactional-service-name--link" href="/">Find out why your NHS data matters</a>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{{ header({
    "transactionalService": {
      "name": "Find out why your NHS data matters",
      "longName": "true"
    },
    "showNav": "false",
    "showSearch": "false"
  })
}}
```

### Header organisational

[Preview the header organisational component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org.html)

#### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--organisation" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="Anytown Anyplace Hospital Anywhere NHS Foundation Trust homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace <span class="nhsuk-organisation-name-split">Anywhere</span></span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
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
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <div class="autocomplete-container" id="autocomplete-container"></div>
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
    <div class="nhsuk-width-container">
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
          <a class="nhsuk-header__navigation-link" href="#">
            Your hospital visit
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Wards and departments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Conditions and treatments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our people
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our research
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### Nunjucks macro

```
{{ header({
    "showNav": "true",
    "showSearch": "true",
    "organisation": {
      "name": "Anytown Anyplace",
      "split": "Anywhere",
      "descriptor": "NHS Foundation Trust"
    },
    "primaryLinks": [
      {
        "url"  : "#",
        "label" : "Your hospital visit"
      },
      {
        'url' : '#',
        'label' : 'Wards and departments'
      },
      {
        'url'  : '#',
        'label' : 'Conditions and treatments'
      },
      {
        'url'  : '#',
        'label' : 'Our people'
      },
      {
        'url' : '#',
        'label' : 'Our research'
      }
    ]
  })
}}
```

### Header organisational with white header

[Preview the header organisational with white header component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org-white.html)

#### HTML markup

```html
<header class="nhsuk-header nhsuk-header--organisation nhsuk-header--white" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="Anytown Anyplace Anywhere NHS Foundation Trust homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace <span class="nhsuk-organisation-name-split">Anywhere</span></span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
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
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <div class="autocomplete-container" id="autocomplete-container"></div>
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
    <div class="nhsuk-width-container">
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
          <a class="nhsuk-header__navigation-link" href="#">
            Your hospital visit
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Wards and departments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Conditions and treatments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our people
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our research
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### Nunjucks macro

```
{{ header({
    "showNav": "true",
    "showSearch": "true",
    "classes": "nhsuk-header--white",
    "organisation": {
      "name": "Anytown Anyplace",
      "split": "Anywhere",
      "descriptor": "NHS Foundation Trust"
    },
    "primaryLinks": [
      {
        "url"  : "#",
        "label" : "Your hospital visit"
      },
      {
        'url' : '#',
        'label' : 'Wards and departments'
      },
      {
        'url'  : '#',
        'label' : 'Conditions and treatments'
      },
      {
        'url'  : '#',
        'label' : 'Our people'
      },
      {
        'url' : '#',
        'label' : 'Our research'
      }
    ]
  })
}}
```

### Header organisational with white header and navigation

[Preview the header organisational with white header and navigation component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org-white-nav.html)

#### HTML markup 

```html
<header class="nhsuk-header nhsuk-header--organisation nhsuk-header--white nhsuk-header--white-nav" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="Anytown Anyplace Anywhere NHS Foundation Trust homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace Anywhere</span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
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
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <div class="autocomplete-container" id="autocomplete-container"></div>
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
    <div class="nhsuk-width-container">
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
          <a class="nhsuk-header__navigation-link" href="#">
            Your hospital visit
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Wards and departments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Conditions and treatments
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our people
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
        <li class="nhsuk-header__navigation-item">
          <a class="nhsuk-header__navigation-link" href="#">
            Our research
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### Nunjucks macro

```
{{ header({
    "showNav": "true",
    "showSearch": "true",
    "classes": "nhsuk-header--white nhsuk-header--white-nav",
    "organisation": {
      "name": "Anytown Anyplace Anywhere",
      "descriptor": "NHS Foundation Trust"
    },
    "primaryLinks": [
      {
        "url"  : "#",
        "label" : "Your hospital visit"
      },
      {
        'url' : '#',
        'label' : 'Wards and departments'
      },
      {
        'url'  : '#',
        'label' : 'Conditions and treatments'
      },
      {
        'url'  : '#',
        'label' : 'Our people'
      },
      {
        'url' : '#',
        'label' : 'Our research'
      }
    ]
  })
}}
```

### Nunjucks arguments

The header Nunjucks macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **showNav**                | boolean  | Yes       | Set to "true" to show the navigation links in the header. |
| **showSearch**             | boolean  | Yes       | Set to "true" to show the site search input form. |
| **homeHref**               | string   | No        | The href of the link for the logo and mobile home link in the navigation links. Defaults to "/". |
| **ariaLabel**              | string   | No        | Aria label for the logo href. Defaults to "NHS homepage". |
| **organisation**           | object   | No        | Settings for header with organisational logo. |
| **organisation.name**      | string   | No        | Organisation name value. |
| **organisation.split**     | string   | No        | Longer organisation names can be split onto multiple lines. |
| **organisation.descriptor**      | string   | No  | Organisation descriptor. |
| **organisation.logoURL**   | string   | No        | Organisation logo if using a static asset, such as PNG, is preferred. |
| **primaryLinks**           | array    | No        | Array of navigation links for use in the header. |
| **primaryLinks[].url**     | string   | No        | The href of a navigation item in the header. |
| **primaryLinks[].label**   | string   | No        | The label of a navigation item in the header. |
| **transactional**          | string   | No        | Set to "true" if this is a transactional header (with smaller logo). |
| **transactionalService**   | object   | No        | Object containing the *name* and *href* and optional boolean *longName* of the transactional service. Set this to "true" if the transactional service name is longer than 22 characters. |
| **service**                | object   | No        | Object containing the *name* and optional boolean *longName* of the service. Set this to "true" if the service name is longer than 22 characters. |
| **classes**                | string   | No        | Optional additional classes to add to the header container. Separate each class with a space. |
| **attributes**             | object   | No        | Any extra HTML attributes (for example data attributes) to add to the header container. |
| **searchAction**             | string   | No        | The search action endpoint. Defaults to "https://www.nhs.uk/search/" |
| **searchInputName**             | string   | No        | The name for the search field. Defaults to "q" |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
