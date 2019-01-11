# Select

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
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2" selected>NHS.UK frontend option 2</option>
    <option value="3" disabled>NHS.UK frontend option 3</option>
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
      "text": "NHS.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "NHS.UK frontend option 2",
      "selected": true
    },
    {
      "value": 3,
      "text": "NHS.UK frontend option 3",
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
  <span class="nhsuk-hint" id="select-2-hint">
  Hint text goes here
  </span>
  <span id="select-2-error" class="nhsuk-error-message">
  Error message goes here
  </span>
  <select class="nhsuk-select nhsuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2">NHS.UK frontend option 2</option>
    <option value="3">NHS.UK frontend option 3</option>
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
      "text": "NHS.UK frontend option 1"
    },
    {
      "value": 2,
      "text": "NHS.UK frontend option 2"
    },
    {
      "value": 3,
      "text": "NHS.UK frontend option 3"
    }
  ]
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                | Type     | Required  | Description                 |
| --------------------|----------|-----------|-----------------------------|
| **id**              | string   | Yes       | The id for each select box. |
| **name**            | string   | Yes       | The name of the select, which is submitted with the form data. |
| **items**           | array	   | Yes       | Array of option items for the select. |
| **item.value**      | string   | No        | Value for the option item. |
| **item.text**       | string   | No        | Text for the option item. |
| **item.selected**   | boolean  | No        | Sets the option as the selected. |
| **item.disabled**   | boolean  | No        | Sets the option item as disabled. |
| **item.attributes** | object   | No        | Any extra HTML attributes (for example data attributes) to the select option tag. |
| **label**           | object   | Yes       | Optional label text or HTML by specifying value for either text or html keys. See [label](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/label) component. |
| **hint**            | object   | No        | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component. |
| **errorMessage**    | object   | No        | Arguments for the errorMessage component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **classes**         | string   | No        | Optional additional classes to add to the select component. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the select component. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Select component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/select) with a few minor adaptations.
