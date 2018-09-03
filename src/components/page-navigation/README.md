# Page navigation

## Introduction

The page navigation component allows users to navigation between pages in a section.

## Guidance

Find out when to use the page navigation component in the [Digital service manual]().

## Example

[Preview the page navigation component]()

#### Markup

    <nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
      <a href="/section/symptoms" class="nhsuk-c-pagination-next">
        <span class="nhsuk-c-pagination-link">Next</span>
        <span class="nhsuk-c-pagination-title">Symptoms</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-right" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          <image class="nhsuk-icon__arrow-right nhsuk-icon__arrow-right--fallback" src="core/icons/fallbacks/icon-arrow-right.png" xlink:href=""></image>
        </svg>
      </a>
      <a href="/section/treatments" class="nhsuk-c-pagination-prev">
        <span class="nhsuk-c-pagination-link">Previous</span>
        <span class="nhsuk-c-pagination-title">Treatments</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
          <image class="nhsuk-icon__arrow-left nhsuk-icon__arrow-left--fallback" src="core/assets/icons/fallbacks/icon-arrow-left.png" xlink:href=""></image>
        </svg>
      </a>
      <div class="clear"></div>
    </nav>

#### Macro

    {% from 'components/page-navigation/macro.njk' import pageNavigation %}

    {{ pageNavigation('/section/treatments', 'Treatments', '/section/symptoms', 'Symptoms', ) }}

### Next navigation

#### Markup

    <nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
      <a href="/section/symptoms" class="nhsuk-c-pagination-next">
        <span class="nhsuk-c-pagination-link">Next</span>
        <span class="nhsuk-c-pagination-title">Symptoms</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-right" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          <image class="nhsuk-icon__arrow-right nhsuk-icon__arrow-right--fallback" src="core/assets/icons/fallbacks/icon-arrow-right.png" xlink:href="">
          </image>
        </svg>
      </a>
      <div class="clear"></div>
    </nav>

#### Macro

    {% from 'components/page-navigation/macro.njk' import pageNavigationNext %}

    {{ pageNavigationNext('/section/symptoms', 'Symptoms') }}

### Previous navigation

#### Markup

    <nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
      <a href="/section/treatments" class="nhsuk-c-pagination-prev">
        <span class="nhsuk-c-pagination-link">Previous</span>
        <span class="nhsuk-c-pagination-title">Treatments</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
          <image class="nhsuk-icon__arrow-left nhsuk-icon__arrow-left--fallback" src="core/assets/icons/fallbacks/icon-arrow-left.png" xlink:href=""></image>
        </svg>
      </a>
      <div class="clear"></div>
    </nav>

#### Macro

    {% from 'components/page-navigation/macro.njk' import pageNavigationPrevious %}

    {{ pageNavigationPrevious('/section/treatments', 'Treatments') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
