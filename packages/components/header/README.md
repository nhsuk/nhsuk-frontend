# Header

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/169).

## Guidance

Find out more about the header component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/header/).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `header.js`.

The search component autocomplete requires jQuery, please ensure you have jQuery included within you project for this to work. In the future we are looking to remove the jQuery dependency. You must also include the typeahead scripts for the autocomplete `typeahead.bundle.min.js` and `nhs.typeahead.js`.

> For performance and security reasons, we do not recommend using a jQuery CDN, instead have the jQuery dependency hosted local to your project.

## Quick start examples

### Header

[Preview the header component](https://nhsuk.github.io/nhsuk-frontend/components/header.html)

### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
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
          <form class="nhsuk-header__search-form" id="search"  action="/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off">
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
        <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/news/" >
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
  </nav>
</header>
```

### Nunjucks macro

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

[Preview the header with navigation component](https://nhsuk.github.io/nhsuk-frontend/components/header-navigation.html)

### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
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
  </nav>
</header>
```

### Nunjucks macro

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

[Preview the header with search component](https://nhsuk.github.io/nhsuk-frontend/components/header-search.html)

### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
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
          <form class="nhsuk-header__search-form" id="search" action="/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off" >
            <button type="submit" class="nhsuk-search__submit">
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

### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "false",
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

### Header with logo

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header-logo.html)

### HTML markup

```HTML
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
  </div>
</header>
```

### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "showNav": "false",
  "showSearch": "false"
  })
}}
```

### Header with logo (transactional header)

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header-transactional.html)

### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
      </a>
    </div>
  </div>
</header>
```

### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "transactional": "true",
  "showNav": "false",
  "showSearch": "false"
  })
}}
```

### Header transactional with service name

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header-transactional-service-name.html)

### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
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

### Nunjucks macro

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

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header-transactional-long-service-name.html)

### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header--transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
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

### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "transactionalService": {
      "name": "Find out why your NHS data matters",
      "longName": "true",
      "href": "https://www.nhs.uk/your-nhs-data-matters/"
    },
    "showNav": "false",
    "showSearch": "false"
  })
}}
```

### Header with a service name and search

[Preview the header with logo component](https://nhsuk.github.io/nhsuk-frontend/components/header-service-name.html)

### HTML markup

```HTML
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link nhsuk-header__link--service " href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
          <path fill="#fff" d="M0 0h40v16H0z"></path>
          <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
        </svg>
        <span class="nhsuk-header__service-name">
        Digital service manual
        </span>
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
          <form class="nhsuk-header__search-form" id="search" action="/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off">
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

### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "service": {
    "name": "Digital service manual",
    "longName": "true"
  },
  "showNav": "false",
  "showSearch": "true"
  })
}}
```

## Nunjucks arguments

The transactional header with a long service name macro takes the following arguments:

| Name                       | Type     | Required  | Description  |
| ---------------------------|----------|-----------|--------------|
| **showNav**                | boolean  | Yes       | Set to "false" to not show the navigation links in the header. |
| **showSearch**             | boolean  | Yes       | Set to "true" to show the site search input form. |
| **service**                | object   | Yes       | Object containing the name and link of the service. |
| **name**                   | string   | Yes       | The name of the service. |
| **longName**               | boolean  | Yes       | Set to "true" if the service name is longer than 22 characters. |
| **homeHref**               | string   | No        | The href of the home link for the logo and mobile home link in the navigation links. Defaults to "/". |
| **ariaLabel**              | string   | No        | Aria label for the logo href. Defaults to "NHS homepage". |
