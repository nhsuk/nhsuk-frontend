# Emergency alert

## Introduction

## Guidance

Find out when to use the emergency alert component in the [Digital service manual]().

## Example

[Preview the emergency alert component]()

#### Markup

    <div id="nhsuk-global-alert" class="nhsuk-c-global-alert">
      <div class="nhsuk-o-width-container">
        <div class="nhsuk-o-grid">
          <div class="nhsuk-o-grid__item nhsuk-o-grid__item--full">
            <div class="nhsuk-c-global-alert__content">
              <h2 class="nhsuk-c-global-alert__header"><span role="text"><span class="visually-hidden">Alert: </span>National flu outbreak</span></h2>
              <p class="nhsuk-c-global-alert__message">There has been a national flu outbreak. <a href="#" class="nhsuk-c-banner__link wrap">How does it affect me</a>.</p>
              <p class="nhsuk-c-global-alert__updated">Updated 23 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>

#### Macro

    {% from 'components/emergency-alert/macro.njk' import emergencyAlert %}

    {{ emergencyAlert('National flu outbreak', 'There has been a national flu outbreak.', '#', 'How does it affect me', 'Updated 23 mins ago') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
