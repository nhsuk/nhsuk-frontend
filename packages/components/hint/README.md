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

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Hint component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/hint) with a few minor adaptations.
