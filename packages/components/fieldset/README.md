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

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                    | Type     | Required  | Description             |
| ------------------------|----------|-----------|-------------------------|
| **describedBy**         | string   | No        | Text or element id to add to the `aria-describedby` attribute to provide description of the group of fields for screenreader users. |
| **legend**              | object   | No        | Arguments for the legend. |
| **legend.{}.text (or) legend.{}.html**  | string   | No        | Legend text or HTML. If `html` is provided, the `text` argument will be ignored. |
| **legend.{}.classes**   | string   | No        | Optional additional classes to add to the legend container. |
| **legend.{}.isPageHeading**  | boolean   | No  | Whether the legend also acts as the heading for the page. |
| **classes**             | string   | No        | Optional additional classes to add to the fieldset container. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the fieldset container. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Fieldset component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/fieldset) with a few minor adaptations.
