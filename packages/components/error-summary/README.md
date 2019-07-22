# Error summary

## Guidance
Find out more about the error summary component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/error-summary).

## Quick start example

[Preview the error summary component](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/index.html)

### HTML markup

```html
<div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="error-summary">
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <p>
      Optional description of the errors and how to correct them
    </p>
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#example-error-1">Link to error with explanation</a>
      </li>
      <li>
        <a href="#example-error-1">Link to error with explanation</a>
      </li>
    </ul>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/error-summary/macro.njk' import errorSummary %}

{{ errorSummary({
  "titleText": "This is a problem",
  "descriptionText": "Optional description of the errors and how to correct them",
  "errorList": [
    {
      "text": "Link to error with explanation",
      "href": "#example-error-1"
    },
    {
      "text": "Link to error with explanation",
      "href": "#example-error-1"
    }
  ]
}) }}
```

### Nunjucks arguments

The error summary Nunjucks macro takes the following arguments:

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

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Error summary component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/error-summary) with a few minor adaptations.
