# Select

Find out more about the select component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/225).

## Quick start examples

### Select

[Preview the select component](https://nhsuk.github.io/nhsuk-frontend/components/select/index.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="select-1">
    Label text goes here
  </label>

  <select class="nhsuk-select" id="select-1" name="select-1">
    <option value="1">NHS.UK Frontend option 1</option>
    <option value="2" selected>NHS.UK Frontend option 2</option>
    <option value="3" disabled>NHS.UK Frontend option 3</option>
  </select>
</div>
```

### Nunjucks macro

```
{% from 'components/select/macro.njk' import select %}

{{ select({
  "id": "select-1",
  "name": "select-1",
  "label": {
    "text": "Label text goes here"
  },
  "items": [
    {
      "value": 1,
      "text": "NHS.UK Frontend option 1"
    },
    {
      "value": 2,
      "text": "NHS.UK Frontend option 2",
      "selected": true
    },
    {
      "value": 3,
      "text": "NHS.UK Frontend option 3",
      "disabled": true
    }
  ]
}) }}
```

### Select with hint text and error message

[Preview the select with hint text and error message component](https://nhsuk.github.io/nhsuk-frontend/components/select/hint-error.html)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="select-2">
    Label text goes here
  </label>

  <span id="select-2-hint" class="nhsuk-hint">
    Hint text goes here
  </span>

  <span id="select-2-error" class="nhsuk-error-message">
    Error message goes here
  </span>

  <select class="nhsuk-select nhsuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
    <option value="1">NHS.UK Frontend option 1</option>
    <option value="2">NHS.UK Frontend option 2</option>
    <option value="3">NHS.UK Frontend option 3</option>
  </select>
</div>
```

### Nunjucks macro

```
{% from 'components/select/macro.njk' import select %}

{{ select({
  "id": "select-2",
  "name": "select-2",
  "label": {
    "text": "Label text goes here"
  },
  "hint": {
    "text": "Hint text goes here"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "value": 1,
      "text": "NHS.UK Frontend option 1"
    },
    {
      "value": 2,
      "text": "NHS.UK Frontend option 2"
    },
    {
      "value": 3,
      "text": "NHS.UK Frontend option 3"
    }
  ]
}) }}
```

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Select component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/select) with a few minor adaptations.
