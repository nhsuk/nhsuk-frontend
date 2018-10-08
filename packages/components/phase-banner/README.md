# Phase banner

## Introduction

## Guidance

Find out when to use the phase banner component in the [Digital service manual]().

## Example

[Preview the phase banner component]()

#### Markup

    <div class="nhsuk-c-phase-banner">
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full">            
            <p><strong class="nhsuk-c-phase-banner__tag">New</strong> <span>We are testing a new page layout — your <a href="#">feedback</a> will help us to improve it.</span></p>
          </div>
        </div>
      </div>
    </div>

#### Macro

    {% from 'components/phase-banner/macro.njk' import phaseBanner %}

    {{ phaseBanner('New', 'We are testing a new page layout — your <a href="#">feedback</a> will help us to improve it.') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
