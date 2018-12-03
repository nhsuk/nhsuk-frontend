# Hint

Find out more about the hint component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/221).

## Quick start examples

### Hint

[Preview the hint component](https://nhsuk.github.io/nhsuk-frontend/components/hint/index.html)

### HTML markup

```html
<span class="nhsuk-hint">
  It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
</span>
```

### Nunjucks macro

```
{% from 'components/hint/macro.njk' import hint %}

{{ hint({
  "text": "It’s on your National Insurance card, benefit letter, payslip or P60.\nFor example, ‘QQ 12 34 56 C’.\n"
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                    | Type     | Required  | Description             |
| ------------------------|----------|-----------|-------------------------|
| **text or (html) html** | string   | Yes       | Text or HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| **id**                  | string   | Yes       | Optional id attribute o add to the hint span tag. |
| **classes**             | string   | No        | Optional additional classes to add to the hint span tag. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the input component. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Hint component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/hint) with a few minor adaptations.
