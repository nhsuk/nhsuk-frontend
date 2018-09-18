# Feedback banner

## Introduction

## Guidance

Find out when to use the feedback banner component in the [Digital service manual]().

## Example

[Preview the feedback banner component]()

#### Markup

    <div id="nhsuk-feedback-banner" class="nhsuk-c-feedback-banner" style="display: block;">
      <div class="nhsuk-o-width-container">
        <div class="nhsuk-o-grid">
          <div class="nhsuk-o-grid__item nhsuk-o-grid__item--full">
            <div class="nhsuk-c-feedback-banner__content">
              <h2 class="nhsuk-c-feedback-banner__header">Help us make the NHS website better</h2>
              <p class="nhsuk-c-feedback-banner__message">Your feedback helps us improve the NHS website. <a href="#">Take our short survey</a>.</p>
              <button class="nhsuk-c-feedback-banner__close" type="button" onclick="hideBanner()"><span role="text">Close<span class="visually-hidden"> feedback invite</span></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

#### Macro

    {% from 'components/feedback-banner/macro.njk' import feedbackBanner %}

    {{ feedbackBanner('Help us make the NHS website better', 'Your feedback helps us improve the NHS website.', '#', 'Take our short survey') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
