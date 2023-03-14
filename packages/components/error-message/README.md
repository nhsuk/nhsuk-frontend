# Error message

## Guidance

Find out more about the error message component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/error-message).

## Quick start example

[Preview the error message component](https://nhsuk.github.io/nhsuk-frontend/components/error-message/index.html)

### HTML markup

```html
<span class="nhsuk-error-message">
  <span class="nhsuk-u-visually-hidden">Error:</span>
  Error message about full name goes here
</span>
```

### Nunjucks macro

```
{% from 'components/error-message/macro.njk' import errorMessage %}

{{ errorMessage({
  "text": "Error message about full name goes here"
}) }}
```

### Nunjucks arguments

The error message Nunjucks macro takes the following arguments:

| Name                   | Type   | Required | Description                                                                                         |
| ---------------------- | ------ | -------- | --------------------------------------------------------------------------------------------------- |
| **text (or) html**     | string | Yes      | Text to use within the error message. If `html` is provided, the `text` argument will be ignored.   |
| **id**                 | string | No       | Optional id attribute to add to the error message span tag.                                         |
| **classes**            | string | No       | Optional additional classes to add to the error message span tag. Separate each class with a space. |
| **attributes**         | object | No       | Any extra HTML attributes (for example data attributes) to add to the error message span tag.       |
| **visuallyHiddenText** | string | No       | A visually hidden prefix used before the error message. Defaults to "Error"                         |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Error message component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/error-message) with a few minor adaptations.
