# Feedback banner

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `feedback-banner.js`.

The Feedback banner should be used below the footer component in templates for the sticky scroll JavaScript to work.

## Quick start example

[Preview the feedback banner component](https://nhsuk.github.io/nhsuk-frontend/components/feedback-banner/index.html)

### HTML markup

```html
<div class="nhsuk-feedback-banner" id="nhsuk-feedback-banner">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-feedback-banner__content">
          <h2 class="nhsuk-feedback-banner__heading">Help us make the NHS website better</h2>
          <p class="nhsuk-feedback-banner__message">Your feedback helps us improve the NHS website. <a href="https://www.nhs.uk" class="nhsuk-u-nowrap">Take our short survey</a>.</p>
          <button class="nhsuk-feedback-banner__close" id="nhsuk-feedback-banner-close" type="button">Close<span class="nhsuk-u-visually-hidden"> feedback invite</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/feedback-banner/macro.njk' import feedbackBanner %}

{{ feedbackBanner({
  "title": "Help us make the NHS website better",
  "content": "Your feedback helps us improve the NHS website.",
  "label": "Take our short survey",
  "href": "https://www.nhs.uk"
}) }}
```

### Nunjucks arguments

The feedback banner Nunjucks macro takes the following arguments:

| Name              | Type     | Required  | Description |
| ------------------|----------|-----------|-------------|
| **title**         | string   | Yes       | Title to be displayed in the feedback banner component. |
| **content**       | string   | Yes       | Content of the feedback banner component |
| **label**         | string   | No        | Optional text to be displayed within the link at the end of the content |
| **href**          | string   | No        | Optional value of the link href attribute at the end of the content |
| **classes**       | string   | No        | Optional additional classes to add to the feedback banner container. Separate each class with a space. |
| **attributes**    | object   | No        | Any extra HTML attributes (for example data attributes) to add to the feedback banner container. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
