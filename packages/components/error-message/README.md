# Error message

Find out more about the error message component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/218).

## Quick start examples

### Error message

[Preview the error message component](https://nhsuk.github.io/nhsuk-frontend/components/error-message/index.html)

### HTML markup

```html
<span class="nhsuk-error-message">
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

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                      | Type     | Required  | Description             |
| --------------------------|----------|-----------|-------------------------|
| **text (or) html**        | string   | No        | Text to use within the error message. If `html` is provided, the `text` argument will be ignored. |
| **id**                    | string   | No        | Optional id attribute to add to the error message span tag. |
| **classes**               | string   | No        | Optional additional classes to add to the error message span tag. Separate each class with a space. |
| **attributes**            | object   | No        | Any extra HTML attributes (for example data attributes) to add to the error message span tag. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Error message component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/error-message) with a few minor adaptations.
