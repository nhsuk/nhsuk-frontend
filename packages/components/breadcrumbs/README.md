# Breadcrumbs

## Introduction

The Breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

## Guidance

Find out when to use the breadcrumbs component in the [Digital service manual]().

## Example

[Preview the breadcrumb component]()

#### Markup

    <nav class="nhsuk-c-breadcrumb" aria-label="Breadcrumb">
      <div class="nhsuk-o-width-container">
        <ol class="nhsuk-c-breadcrumb__list">
          <li class="nhsuk-c-breadcrumb__item"><a href="/" class="nhsuk-c-breadcrumb__link">Home</a> 
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/>
              <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="core/assets/icons/fallback/" xlink:href=""></image>
            </svg>
          </li>
          <li class="nhsuk-c-breadcrumb__item"><a href="/section" class="nhsuk-c-breadcrumb__link">Section</a></li>
        </ol>
        <p class="nhsuk-c-breadcrumb__back">
          <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/>
            <image class="nhsuk-icon__chevron-right nhsuk-icon__chevron-right--fallback" src="core/assets/icons/fallback/icon-chevron-right-grey.png" xlink:href=""></image>
          </svg>
          <a href="/section" class="nhsuk-c-breadcrumb__backlink">Back to Section</a>
        </p>
      </div>
    </nav>

#### Macro

    {% from 'components/breadcrumbs/macro.njk' import breadcrumbs %}

    {{ breadcrumbs('/', 'Home', '/section', 'Section') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
