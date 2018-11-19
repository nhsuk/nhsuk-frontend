# Error summary

Find out more about the error summary component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/219).

## Quick start examples

### Error summary

[Preview the error summary component](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/index.html)

### HTML markup

```html
<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="error-summary">
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    Message to alert the user to a problem goes here
  </h2>
  <div class="govuk-error-summary__body">
    <p>Optional description of the errors and how to correct them</p>

    <ul class="govuk-list govuk-error-summary__list"> 
      <li><a href="#example-error-1">Descriptive link to the question with an error</a></li>
      <li><a href="#example-error-1">Descriptive link to the question with an error</a></li>
    </ul>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/error-summary/macro.njk' import errorSummary %}

{{ errorSummary({
  "titleText": "Message to alert the user to a problem goes here",
  "descriptionText": "Optional description of the errors and how to correct them",
  "errorList": [
    {
      "text": "Descriptive link to the question with an error",
      "href": "#example-error-1"
    },
    {
      "text": "Descriptive link to the question with an error",
      "href": "#example-error-1"
    }
  ]
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                           | Type     | Required  | Description             |
| ------------------------------|----------|-----------|-------------------------|
| **titleText (or) titleHtml**  | string   | Yes       | Text or HTML to use for the heading of the error summary block. If `titleHtml` is provided, the `titleText` argument will be ignored. |
| **descriptionText (or) descriptionHtml**                       | string   | No       | Optional text or HTML description of the errors. If `descriptionhtml` is provided, the `descriptionText` argument will be ignored. |
| **errorList**             | object  | Yes        | Contains an array of error link items and all their available arguments. |
| **errorList.{}.href**             | string  | No        | Href attribute for the error link item. If provided item will be an anchor. |
| **errorList.{}.text (or) errorList.{}.html**             | string  | No        | Text or HTML for the error link item. If `html` is provided, the `text` argument will be ignored. |
| **errorList.{}.attributes**             | object  | No        | Any extra HTML attributes (for example data attributes) to add to the error link anchor. |
| **classes**                   | string   | No        | Optional additional classes to add to the error-summary container. Separate each class with a space. |
| **attributes**                | object   | No        | Any extra HTML attributes (for example data attributes) to add to the error-summary container. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Error summary component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/error-summary) with a few minor adaptations.
