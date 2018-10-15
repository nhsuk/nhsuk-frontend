# Feedback banner

Find out more about the feedback banner component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the feedback banner component]()

### HTML markup

    <div id="nhsuk-feedback-banner" class="nhsuk-c-feedback-banner" style="display: block;">
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full">
            <div class="nhsuk-c-feedback-banner__content">
              <h2 class="nhsuk-c-feedback-banner__header">Help us make the NHS website better</h2>
              <p class="nhsuk-c-feedback-banner__message">Your feedback helps us improve the NHS website. <a href="#" class="nhsuk-u-nowrap">Take our short survey</a>.</p>
              <button class="nhsuk-c-feedback-banner__close" type="button" onclick="hideBanner()"><span role="text">Close<span class="visually-hidden"> feedback invite</span></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

### Nunjucks macro

    {% from 'components/feedback-banner/macro.njk' import feedbackBanner %}

    {{ feedbackBanner({
      "title": "Help us make the NHS website better",
      "content": "Your feedback helps us improve the NHS website.",
      "feedbackURL": "#",
      "feedbackLabel": "Take our short survey"
    }) }}
