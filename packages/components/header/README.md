# Header

## Introduction

The NHS.UK header shows users that they are on an NHS website.
There are 4 possible versions of the NHS.UK header, depending on what is required:

- Header with navigation links and search form
- Header with navigation links
- Header with search form
- Header with logo only

## Guidance

Find out when to use the header component in the [Digital service manual](http://beta.nhs.uk/service-manual/).

## Examples

### Header with navigation links and search form

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">

    <div class="nhsuk-header__logo">
      <a href="/" class="nhsuk-header__link" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
          <g fill-rule="nonzero" fill="none">
            <path fill="#FFF" d="M0 39.842h98.203V0H0z"></path>
            <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
          </g>
          <image class="nhsuk-logo nhsuk-logo__fallback" src="/assets/logos/fallback/nhs-logo.png" xlink:href="" role="presentation"></image>
        </svg>
      </a>
    </div>

    <div class="nhsuk-header__content">
      <div class="nhsuk-header__menu">
        <button class="nhsuk-header__menu-toggle" aria-controls="c-nav-primary" aria-label="Open menu">Menu</button>
      </div>

      <div class="nhsuk-header__search">
        <button class="nhsuk-header__search-toggle" aria-controls="search" aria-label="Open search">
          <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
            <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href=""></image>
          </svg>
          <span class="visually-hidden">Search</span>
        </button>
        <div class="nhsuk-header__search-wrap">
          <form id="search" class="nhsuk-header__search-form" action="" method="get" role="search">
            <label class="visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" placeholder="Enter a search term" autocomplete="off" name="search-field" type="search">
            <button type="submit" class="nhsuk-search__submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href=""></image>
              </svg>
              <span class="visually-hidden">Search</span>
            </button>
            <button class="nhsuk-search__close">
              <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href=""></image>
              </svg>
              <span class="visually-hidden">Close search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <nav class="nhsuk-header__navigation" id="nhsuk-header__navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="navigation-label">
    <p class="nhsuk-header__navigation-title"><span id="navigation-label">Menu</span>
      <button class="nhsuk-header__navigation-close">
        <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
          <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href=""></image>
        </svg>
        <span class="visually-hidden">Close menu</span>
      </button>
    </p>
    <ul class="nhsuk-header__navigation-list">
      <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
        <a href="/" class="nhsuk-header__navigation-link">Home <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/conditions" class="nhsuk-header__navigation-link">Health A-Z <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/live-well/" class="nhsuk-header__navigation-link">Live Well <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/conditions/social-care-and-support/" class="nhsuk-header__navigation-link">Care and support <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/news/" class="nhsuk-header__navigation-link">Health news <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/service-search" class="nhsuk-header__navigation-link">Services near you <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
    </ul>
  </nav>
</header>
```

[Preview the header with navigation links and search form]()


### Header with navigation links

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">

    <div class="nhsuk-header__logo">
      <a href="/" class="nhsuk-header__link" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
          <g fill-rule="nonzero" fill="none">
            <path fill="#FFF" d="M0 39.842h98.203V0H0z"></path>
            <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
          </g>
          <image class="nhsuk-logo nhsuk-logo__fallback" src="/assets/logos/fallback/nhs-logo.png" xlink:href="" role="presentation"></image>
        </svg>
      </a>
    </div>

    <div class="nhsuk-header__content">
      <div class="nhsuk-header__menu nhsuk-header__menu--only">
        <button class="nhsuk-header__menu-toggle" aria-controls="c-nav-primary" aria-label="Open menu">Menu</button>
      </div>
    </div>
  </div>

  <nav class="nhsuk-header__navigation" id="nhsuk-header__navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="navigation-label">
    <p class="nhsuk-header__navigation-title"><span id="navigation-label">Menu</span>
      <button class="nhsuk-header__navigation-close">
        <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
          <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href=""></image>
        </svg>
        <span class="visually-hidden">Close menu</span>
      </button>
    </p>
    <ul class="nhsuk-header__navigation-list">
      <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
        <a href="/" class="nhsuk-header__navigation-link">Home <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/conditions" class="nhsuk-header__navigation-link">Health A-Z <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/live-well/" class="nhsuk-header__navigation-link">Live Well <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/conditions/social-care-and-support/" class="nhsuk-header__navigation-link">Care and support <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/news/" class="nhsuk-header__navigation-link">Health news <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a href="https://www.nhs.uk/service-search" class="nhsuk-header__navigation-link">Services near you <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right.png" xlink:href=""></image></svg>
        </a>
      </li>
    </ul>
  </nav>
</header>
```

[Preview the header with navigation links]()


### Header with search form

```HTML
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">

    <div class="nhsuk-header__logo">
      <a href="/" class="nhsuk-header__link" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
          <g fill-rule="nonzero" fill="none">
            <path fill="#FFF" d="M0 39.842h98.203V0H0z"></path>
            <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
          </g>
          <image class="nhsuk-logo nhsuk-logo__fallback" src="/assets/logos/fallback/nhs-logo.png" xlink:href="" role="presentation"></image>
        </svg>
      </a>
    </div>

    <div class="nhsuk-header__content">
      <div class="nhsuk-header__menu">
        <button class="nhsuk-header__menu-toggle" aria-controls="c-nav-primary" aria-label="Open menu">Menu</button>
      </div>

      <div class="nhsuk-header__search">
        <button class="nhsuk-header__search-toggle" aria-controls="search" aria-label="Open search">
          <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
            <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href=""></image>
          </svg>
          <span class="visually-hidden">Search</span>
        </button>
        <div class="nhsuk-header__search-wrap">
          <form id="search" class="nhsuk-header__search-form" action="" method="get" role="search">
            <label class="visually-hidden" for="search-field">Search the NHS website</label>
            <input class="nhsuk-search__input" id="search-field" placeholder="Enter a search term" autocomplete="off" name="search-field" type="search">
            <button type="submit" class="nhsuk-search__submit">
              <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
                <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href=""></image>
              </svg>
              <span class="visually-hidden">Search</span>
            </button>
            <button class="nhsuk-search__close">
              <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href=""></image>
              </svg>
              <span class="visually-hidden">Close search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</header>
```

[Preview the header with search form]()


### Header with logo only

```HTML
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a href="/" class="nhsuk-header__link" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
          <g fill-rule="nonzero" fill="none">
            <path fill="#FFF" d="M0 39.842h98.203V0H0z"></path>
            <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
          </g>
          <image class="nhsuk-logo nhsuk-logo__fallback" src="/assets/logos/fallback/nhs-logo.png" xlink:href="" role="presentation"></image>
        </svg>
      </a>
    </div>
  </div>
</header>
```

[Preview the header with logo only]()


### Macro

```
{% from 'components/header/macro.njk' import header %}

{% set primaryLinks = [
    {
      'url'  : 'https://www.nhs.uk/conditions',
      'label' : 'Health A-Z'
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
%}

{{ header(primaryLinks) }}
```


#### Macro usage example

```
<ul>
  {% for item in primaryLinks %}
    <li><a href="{{item.url}}">{{item.label}}</a></li>
  {% endfor %}
</ul>
```


## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
