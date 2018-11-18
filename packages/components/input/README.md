# Input

Find out more about the input component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/222).

## Quick start examples

### Input

[Preview the input component](https://nhsuk.github.io/nhsuk-frontend/components/input/index.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="input-example">
    National Insurance number
  </label>

  <input class="nhsuk-input" id="input-example" name="test-name" type="text">
</div>
```

### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National Insurance number"
  },
  "id": "input-example",
  "name": "test-name"
}) }}
```

### Input with hint text

[Preview the input with hint text component](https://nhsuk.github.io/nhsuk-frontend/components/input/hint.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="input-with-hint-text">
    National insurance number
  </label>

  <span id="input-with-hint-text-hint" class="nhsuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
  </span>

  <input class="nhsuk-input" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint">
</div>
```

### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-with-hint-text",
  "name": "test-name-2"
}) }}
```

### Input with error message

[Preview the input with error message component](https://nhsuk.github.io/nhsuk-frontend/components/input/error.html)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="input-with-error-message">
    National Insurance number
  </label>

  <span id="input-with-error-message-hint" class="nhsuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
  </span>

  <span id="input-with-error-message-error" class="nhsuk-error-message">
    Error message goes here
  </span>

  <input class="nhsuk-input nhsuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-hint input-with-error-message-error">
</div>
```

### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National Insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-with-error-message",
  "name": "test-name-3",
  "errorMessage": {
    "text": "Error message goes here"
  }
}) }}
```

### Input with width modifier

[Preview the input with width modifier component](https://nhsuk.github.io/nhsuk-frontend/components/input/custom-width.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="input-width-10">
    National insurance number
  </label>

  <span id="input-width-10-hint" class="nhsuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’.
  </span>

  <input class="nhsuk-input nhsuk-input--width-10" id="input-width-10" name="test-width-10" type="text" aria-describedby="input-width-10-hint">
</div>
```

### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-10",
  "name": "test-width-10",
  "classes": "nhsuk-input--width-10"
}) }}
```

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Input component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/input) with a few minor adaptations.
