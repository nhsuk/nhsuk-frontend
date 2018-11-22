# Feedback banner

Find out more about the feedback banner component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/167).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the 
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `feedback-banner.js`.

## Quick start examples

### Feedback banner

[Preview the feedback banner component](https://nhsuk.github.io/nhsuk-frontend/components/feedback-banner.html)

### HTML markup

```html
<div id="nhsuk-feedback-banner" class="nhsuk-feedback-banner">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-feedback-banner__content">
          <h2 class="nhsuk-feedback-banner__heading">Help us make the NHS website better</h2>
          <p class="nhsuk-feedback-banner__message">Your feedback helps us improve the NHS website. <a href="https://nhs.uk" class="nhsuk-u-nowrap">Take our short survey</a>.</p>
          <button id="nhsuk-feedback-banner-close" class="nhsuk-feedback-banner__close" type="button">Close<span class="nhsuk-u-visually-hidden"> feedback invite</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/feedback-banner/macro.njk' import feedbackBanner %}

{{ feedbackBanner({
  "title": "Help us make the NHS website better",
  "content": "Your feedback helps us improve the NHS website.",
  "href": "https://www.nhs.uk",
  "label": "Take our short survey"
}) }}
```
