# Header

## Guidance

Find out more about the header component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/header).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `header.js`.

## Quick start examples

### Header (default)

[Preview the header (default) component](https://nhsuk.github.io/nhsuk-frontend/components/header/index.html)

#### HTML markup

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
        <div class="nhsuk-header__search-wrap" id="wrap-search">
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off">
            <button class="nhsuk-search__submit" type="submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="nhsuk-navigation-container">
    <div class="nhsuk-width-container">
      <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions">
              Health A-Z
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-mobile-menu-container js-show">
            <button class="nhsuk-header__navigation-link nhsuk-header__menu-toggle nhsuk-header__menu-toggle--visible" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse</span>
              More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </button>
            <ul class="nhsuk-header__drop-down nhsuk-header__drop-down--hidden">
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/nhs-services/">
                  NHS services
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/live-well/">
                  Live Well
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/mental-health/">
                  Mental health
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/conditions/social-care-and-support/">
                  Care and support
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
              <li class="nhsuk-header__navigation-item">
                <a class="nhsuk-header__navigation-link" href="https://www.nhs.uk/pregnancy/">
                  Pregnancy
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
              <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--home">
                <a class="nhsuk-header__navigation-link" href="/">
                  Home
                  <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
        'url' : 'https://www.nhs.uk/mental-health/',
        'label' : 'Mental health'
      },
      {
        'url'  : 'https://www.nhs.uk/conditions/social-care-and-support/',
        'label' : 'Care and support'
      },
      {
        'url'  : 'https://www.nhs.uk/pregnancy/',
        'label' : 'Pregnancy'
      },
      {
        'url' : 'https://www.nhs.uk/nhs-services/',
        'label' : 'NHS services'
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
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
      </a>
    </div>
  </div>
  <div class="nhsuk-navigation-container">
    <div class="nhsuk-width-container">
      <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/conditions">
              Health A-Z
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/nhs-services/">
              NHS services
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/live-well/">
              Live Well
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/mental-health/">
              Mental health
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/conditions/social-care-and-support/">
              Care and support
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="https://www.nhs.uk/pregnancy/">
              Pregnancy
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--home">
            <a class="nhsuk-header__navigation-link"  href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-mobile-menu-container">
            <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse</span>
              More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
          'url' : 'https://www.nhs.uk/mental-health/',
          'label' : 'Mental health'
        },
        {
          'url'  : 'https://www.nhs.uk/conditions/social-care-and-support/',
          'label' : 'Care and support'
        },
        {
          'url'  : 'https://www.nhs.uk/pregnancy/',
          'label' : 'Pregnancy'
        },
        {
          'url' : 'https://www.nhs.uk/nhs-services/',
          'label' : 'NHS services'
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
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
        <div class="nhsuk-header__search-wrap" id="wrap-search">
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off" >
            <button class="nhsuk-search__submit" type="submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
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
          'url' : 'https://www.nhs.uk/mental-health/',
          'label' : 'Mental health'
        },
        {
          'url'  : 'https://www.nhs.uk/conditions/social-care-and-support/',
          'label' : 'Care and support'
        },
        {
          'url'  : 'https://www.nhs.uk/pregnancy/',
          'label' : 'Pregnancy'
        },
        {
          'url' : 'https://www.nhs.uk/nhs-services/',
          'label' : 'NHS services'
        }
      ]
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
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
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

### Header transactional with service name

[Preview the header transactional with service name component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-transactional-service-name.html)

#### HTML markup

```HTML
<header class="nhsuk-header nhsuk-header__transactional" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo nhsuk-header__transactional--logo">
      <a class="nhsuk-header__link" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
      </a>
    </div>
    <div class="nhsuk-header__transactional-service-name">
      <a class="nhsuk-header__transactional-service-name--link" href="https://www.nhs.uk/nhs-services/online-services/find-nhs-number/">Find your NHS number</a>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
  "transactionalService": {
      "name": "Find your NHS number",
      "href": "https://www.nhs.uk/nhs-services/online-services/find-nhs-number/"
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
      <a class="nhsuk-header__link" href="/" aria-label="Anytown Anyplace Anywhere NHS Foundation Trust homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace <span class="nhsuk-organisation-name-split">Anywhere</span></span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
        <div class="nhsuk-header__search-wrap" id="wrap-search">
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off" >
            <button class="nhsuk-search__submit" type="submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="nhsuk-navigation-container">
    <div class="nhsuk-width-container">
      <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Your hospital visit
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Wards and departments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Conditions and treatments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our people
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our research
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--home">
            <a class="nhsuk-header__navigation-link"  href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-mobile-menu-container">
            <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse</span>
              More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

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
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace <span class="nhsuk-organisation-name-split">Anywhere</span></span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
          <div class="nhsuk-header__search-wrap" id="wrap-search">
            <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
              <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
              <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off" >
              <button class="nhsuk-search__submit" type="submit">
                <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
                <span class="nhsuk-u-visually-hidden">Search</span>
              </button>
            </form>
          </div>
        </div>
    </div>
  </div>
  <div class="nhsuk-navigation-container">
    <div class="nhsuk-width-container">
      <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Your hospital visit
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Wards and departments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Conditions and treatments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our people
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our research
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--home">
            <a class="nhsuk-header__navigation-link"  href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-mobile-menu-container">
            <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse</span>
              More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

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
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100"><path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path><path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path></svg>
        <span class="nhsuk-organisation-name">Anytown Anyplace <span class="nhsuk-organisation-name-split">Anywhere</span></span>
        <span class="nhsuk-organisation-descriptor">NHS Foundation Trust</span>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__search">
        <div class="nhsuk-header__search-wrap" id="wrap-search">
          <form class="nhsuk-header__search-form" id="search" action="https://www.nhs.uk/search/" method="get" role="search">
            <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off" >
            <button class="nhsuk-search__submit" type="submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
              <span class="nhsuk-u-visually-hidden">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="nhsuk-navigation-container">
    <div class="nhsuk-width-container">
      <nav class="nhsuk-navigation" id="header-navigation" role="navigation" aria-label="Primary navigation">
        <ul class="nhsuk-header__navigation-list">
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Your hospital visit
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Wards and departments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Conditions and treatments
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our people
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item">
            <a class="nhsuk-header__navigation-link"  href="#">
              Our research
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--home">
            <a class="nhsuk-header__navigation-link"  href="/">
              Home
              <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </a>
          </li>
          <li class="nhsuk-mobile-menu-container">
            <button class="nhsuk-header__menu-toggle nhsuk-header__navigation-link" aria-expanded="false">
              <span class="nhsuk-u-visually-hidden">Browse</span>
              More
              <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

#### Nunjucks macro

```
{% from 'components/header/macro.njk' import header %}

{{ header({
    "showNav": "true",
    "showSearch": "true",
    "classes": "nhsuk-header--white nhsuk-header--white-nav",
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

### Nunjucks arguments

The header Nunjucks macro takes the following arguments:

| Name                          | Type    | Required | Description                                                                                                                                       |
| ----------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **showNav**                   | boolean | Yes      | Set to "true" to show the navigation links in the header.                                                                                         |
| **showSearch**                | boolean | Yes      | Set to "true" to show the site search input form.                                                                                                 |
| **homeHref**                  | string  | No       | The href of the link for the logo and mobile home link in the navigation links. Defaults to "/".                                                  |
| **ariaLabel**                 | string  | No       | Aria label for the logo href. Defaults to "NHS homepage".                                                                                         |
| **organisation**              | object  | No       | Settings for header with organisational logo.                                                                                                     |
| **organisation.name**         | string  | No       | Organisation name value.                                                                                                                          |
| **organisation.split**        | string  | No       | Longer organisation names can be split onto multiple lines.                                                                                       |
| **organisation.descriptor**   | string  | No       | Organisation descriptor.                                                                                                                          |
| **organisation.logoURL**      | string  | No       | Organisation logo if using a static asset, such as PNG, is preferred.                                                                             |
| **primaryLinks**              | array   | No       | Array of navigation links for use in the header.                                                                                                  |
| **primaryLinks[].url**        | string  | No       | The href of a navigation item in the header.                                                                                                      |
| **primaryLinks[].label**      | string  | No       | The label of a navigation item in the header.                                                                                                     |
| **primaryLinks[].classes**    | string  | No       | Optional additional classes to add to the list item.                                                                                              |
| **primaryLinks[].attributes** | string  | No       | Any extra HTML attributes (for example data attributes) to add to the list item.                                                                  |
| **transactional**             | string  | No       | Set to "true" if this is a transactional header (with smaller logo).                                                                              |
| **transactionalService**      | object  | No       | Object containing the _name_ and _href_ of the transactional service.                                                                             |
| **service**                   | object  | No       | Object containing the _name_ and optional boolean _longName_ of the service. Set this to "true" if the service name is longer than 22 characters. |
| **classes**                   | string  | No       | Optional additional classes to add to the header container. Separate each class with a space.                                                     |
| **attributes**                | object  | No       | Any extra HTML attributes (for example data attributes) to add to the header container.                                                           |
| **searchAction**              | string  | No       | The search action endpoint. Defaults to "https://www.nhs.uk/search/"                                                                              |
| **searchInputName**           | string  | No       | The name for the search field. Defaults to "q"                                                                                                    |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
