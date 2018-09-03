# Action link

## Introduction

A link to start an important or transactional journey.

## Guidance

Find out when to use the action link component in the [Digital service manual]().

## Example

[Preview the action link component]()

#### Markup

    <a href="/find-injuries-unit" class="nhsuk-c-action-link">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"/>
        <image class="nhsuk-icon__arrow-right-circle nhsuk-icon__arrow-right-circle--fallback" src="core/assets/icons/fallback/icon-arrow-right.png" xlink:href=""></image>
      </svg>
      <span>Find a minor injuries unit</span>
    </a>

#### Macro

    {% from 'components/action-link/macro.njk' import actionLink %}

    {{ actionLink('/find-injuries-unit', 'Find a minor injuries unit') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
