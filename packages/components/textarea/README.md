# Textarea

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/226).

## Quick start examples

### Textarea

[Preview the textarea component](https://nhsuk.github.io/nhsuk-frontend/components/textarea/index.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="more-detail">
  Can you provide more detail?
  </label>
  <span class="nhsuk-hint" id="more-detail-hint">
  Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </span>
  <textarea class="nhsuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

### Nunjucks macro

```
{% from 'components/textarea/macro.njk' import textarea %}

{{ textarea({
  "name": "more-detail",
  "id": "more-detail",
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

### Textarea with error message

[Preview the textarea with error message component](https://nhsuk.github.io/nhsuk-frontend/components/textarea/error.html)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="no-ni-reason">
    Why can&#39;t you provide a National Insurance number?
  </label>

  <span id="no-ni-reason-error" class="nhsuk-error-message">
    You must provide an explanation
  </span>

  <textarea class="nhsuk-textarea nhsuk-textarea--error" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>
```

### Nunjucks macro

```
{% from 'components/textarea/macro.njk' import textarea %}

{{ textarea({
  "name": "no-ni-reason",
  "id": "no-ni-reason",
  "label": {
    "text": "Why can't you provide a National Insurance number?"
  },
  "errorMessage": {
    "text": "You must provide an explanation"
  }
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                | Type     | Required  | Description             |
| --------------------|----------|-----------|-------------------------|
| **id**              | string   | Yes       | The id of the textarea. |
| **describedBy**     | string   | No        | Text or element id to add to the `aria-describedby` attribute to provide description for screenreader users.|
| **name**            | string   | Yes       | The name of the textarea, which is submitted with the form data. |
| **rows**            | string   | No        | Optional number of textarea rows (default is 5 rows). |
| **value**           | string   | No        | Optional initial value of the textarea. |
| **label**           | object   | Yes       | Arguments for the label component. See [label](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/label) component. |
| **hint**            | object   | No        | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component. |
| **errorMessage**    | object   | No        | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **classes**         | string   | No        | Optional additional classes to add to the textarea tag. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the textarea tag. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Textarea component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/textarea) with a few minor adaptations.
