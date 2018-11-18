# Fieldset

Find out more about the fieldset component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/220).

## Quick start examples

### Fieldset

[Preview the fieldset component](https://nhsuk.github.io/nhsuk-frontend/components/fieldset/index.html)

### HTML markup

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend">
    What is your address?
  </legend>
</fieldset>
```

### Nunjucks macro

```
{% from 'components/fieldset/macro.njk' import fieldset %}

{{ fieldset({
  "legend": {
    "text": "What is your address?"
  }
}) }}
```

### Fieldset as page heading

[Preview the fieldset as page heading component](https://nhsuk.github.io/nhsuk-frontend/components/fieldset/page-heading.html)

### HTML markup

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--xl">
    <h1 class="nhsuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

### Nunjucks macro

```
{% from 'components/fieldset/macro.njk' import fieldset %}

{{ fieldset({
  "legend": {
    "text": "What is your address?",
    "classes": "nhsuk-fieldset__legend--xl",
    "isPageHeading": true
  }
}) }}
```

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Fieldset component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/fieldset) with a few minor adaptations.
