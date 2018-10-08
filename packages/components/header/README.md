# Header

## Introduction

The main header and navigation of the website used across the NHS website.

## Guidance

Find out when to use the header component in the [Digital service manual]().

## Example

[Preview the header component]()

#### Markup
    <div class="nhsuk-c-skiplink">
      <a href="#maincontent" class="nhsuk-c-skiplink__link">Skip to main content</a>
    </div>
    <header role="banner">
      <div class="nhsuk-global-header">
        <div class="nhsuk-o-width-container nhsuk-o-width-container--global-header">
          <div class="nhsuk-global-header__logo">
            <a href="/" class="global-header__link">
              <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <g fill-rule="nonzero" fill="none">
                <path fill="#FFF" d="M0 39.842h98.203V0H0z"/>
                <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"/>
              </g>
              <image class="nhsuk-logo nhsuk-logo__fallback" src="/assets/logos/fallback/nhs-logo.png" xlink:href=""></image>
            </svg>
              <span class="visually-hidden">NHS homepage</span>
            </a>
          </div>
          <div class="nhsuk-global-header__menusearch ui-front">
            <div class="nhsuk-global-header__menu"><button class="menu-toggle__button" aria-controls="c-nav-primary" aria-label="Open menu">Menu</button></div>
            <div class="nhsuk-global-header__search">
              <div class="search-toggle">
                <button class="search-toggle__button" aria-controls="search-container" aria-label="Open search">
                  <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/>
                    <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href="">
                  </svg>
                  <span class="visually-hidden">Search</span>
                </button>
              </div>
              <div class="search-container" id="search-container">
                <form class="c-search" action="/search/" method="get" role="search">
                  <div class="c-search__container">
                    <label class="c-search__label visually-hidden" for="search-field">Search the NHS website</label>
                    <input class="c-search__input" id="search-field" placeholder="Search" autocomplete="off" name="search-field" type="search">
                    <button type="submit" class="c-search__submit">
                      <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/>
                        <image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/assets/icons/fallback/icon-search-blue.png" xlink:href="">
                      </svg>
                      <span class="visually-hidden">Search</span>
                    </button>
                  </div>
                </form>

                <div class="search-close">
                  <button class="search-close__link">
                    <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                      <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href="">
                    </svg>
                    <span class="visually-hidden">Close search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav class="c-nav-primary" id="c-nav-primary" role="navigation" aria-label="Primary navigation" aria-labelledby="mainmenulabel">
      <div class="nhsuk-global-nav">
        <div class="nhsuk-o-width-container">
          <p class="c-nav-primary__title"><span id="mainmenulabel">Menu</span>
            <button class="c-nav-primary__close-link">
              <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="/assets/icons/fallback/icon-close.png" xlink:href=""></image>
                </svg>
              <span class="visually-hidden">Close menu</span>
            </button>
          </p>
          <ul class="c-nav-primary__list">
            <li class="c-nav-primary__item c-nav-primary__item--mobile">
              <a href="https://www.nhs.uk/" class="c-nav-primary__link">Home
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/conditions" class="c-nav-primary__link">Health A-Z
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/live-well/" class="c-nav-primary__link">Live Well
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/conditions/social-care-and-support/" class="c-nav-primary__link">Care and support
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/news/" class="c-nav-primary__link">Health news
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/service-search" class="c-nav-primary__link">Services near you
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

#### Macro

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

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
