# Navigation

## Introduction

The main navigation of the website used across the NHS website.

## Guidance

Find out when to use the navigation component in the [Digital service manual]().

## Example

[Preview the navigation component]()

#### Markup

    <nav class="c-nav-primary" id="c-nav-primary" role="navigation" aria-label="Primary navigation" aria-labelledby="mainmenulabel">
      <div class="nhsuk-global-nav">
        <div class="nhsuk-o-width-container">
          <p class="c-nav-primary__title"><span id="mainmenulabel">Menu</span>
            <button class="c-nav-primary__close-link">
              <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                <image class="nhsuk-icon__close nhsuk-icon__close--fallback" src="assets/icons/fallbacks/icon-close.png" xlink:href=""></image>
                </svg>
              <span class="visually-hidden">Close menu</span>
            </button>
          </p>
          <ul class="c-nav-primary__list">
            <li class="c-nav-primary__item c-nav-primary__item--mobile">
              <a href="https://www.nhs.uk/" class="c-nav-primary__link">Home
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/conditions" class="c-nav-primary__link">Health A-Z
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/live-well/" class="c-nav-primary__link">Live Well
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/conditions/social-care-and-support/" class="c-nav-primary__link">Care and support
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/news/" class="c-nav-primary__link">Health news
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
            <li class="c-nav-primary__item">
              <a href="https://www.nhs.uk/service-search" class="c-nav-primary__link">Services near you
                <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
                  <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="assets/icons/fallback/icon-chevron-right-grey.png" xlink:href="">
                </image></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

#### Macro

    {% from 'components/navigation/macro.njk' import navigation %}

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

    {{ navigation(primaryLinks) }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
