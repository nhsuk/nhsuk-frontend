# Input

## Guidance

Find out more about the input component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/text-input).

## Quick start examples

### Input

[Preview the input component](https://nhsuk.github.io/nhsuk-frontend/components/input/index.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="input-example">
    National Insurance number
  </label>
  <input class="nhsuk-input" id="input-example" name="test-name" type="text">
</div>
```

#### Nunjucks macro

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

---

### Input with autocomplete attribute

[Preview the input with autocomplete attribute component](https://nhsuk.github.io/nhsuk-frontend/components/input/autocomplete.html)

#### Guidance

See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used.

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="input-with-autocomplete-attribute">
  Postcode
  </label>
  <input class="nhsuk-input nhsuk-input nhsuk-input--width-5" id="input-with-autocomplete-attribute" name="postcode" type="text" autocomplete="postal-code">
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "Postcode"
  },
  "id": "input-with-autocomplete-attribute",
  "name": "postcode",
  "autocomplete": "postal-code",
  "classes": "nhsuk-input--width-5"
}) }}
```

---

### Input with hint text

[Preview the input with hint text component](https://nhsuk.github.io/nhsuk-frontend/components/input/hint.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-hint-text">
  National insurance number
  </label>
  <div class="nhsuk-hint" id="input-with-hint-text-hint">
  It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="nhsuk-input nhsuk-input--width-10" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint">
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National insurance number",
    "classes": "nhsuk-label--l"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, 'QQ 12 34 56 C'."
  },
  "id": "input-with-hint-text",
  "name": "test-name-2",
  "classes": "nhsuk-input--width-10"
}) }}
```

---

### Input with error message

[Preview the input with error message component](https://nhsuk.github.io/nhsuk-frontend/components/input/error.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-error-message">
  National Insurance number
  </label>
  <div class="nhsuk-hint" id="input-with-error-message-hint">
  It’s on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'.
  </div>
  <span class="nhsuk-error-message" id="input-with-error-message-error">
    <span class="nhsuk-u-visually-hidden">Error:</span>
    Error message goes here
  </span>
  <input class="nhsuk-input nhsuk-input--width-10 nhsuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-hint input-with-error-message-error">
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National Insurance number",
    "classes": "nhsuk-label--l"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, 'QQ 12 34 56 C'."
  },
  "id": "input-with-error-message",
  "name": "test-name-3",
  "classes": "nhsuk-input--width-10",
  "errorMessage": {
    "text": "Error message goes here"
  }
}) }}
```

---

### Input with width modifier

[Preview the input with width modifier component](https://nhsuk.github.io/nhsuk-frontend/components/input/custom-width.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label nhsuk-label--l" for="input-width-10">
  National insurance number
  </label>
  <div class="nhsuk-hint">
  It’s on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'.
  </div>
  <input class="nhsuk-input nhsuk-input--width-10" id="input-width-10" name="test-width-10" type="text" aria-describedby="input-width-10-hint">
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "National insurance number",
    "classes": "nhsuk-label--l"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60\. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-width-10",
  "name": "test-width-10",
  "classes": "nhsuk-input--width-10"
}) }}
```

---

### Input with prefix

[Preview the input with prefix component](https://nhsuk.github.io/nhsuk-frontend/components/input/prefix.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-prefix">
  What is the cost in pounds?
  </label>
  <div class="nhsuk-input__wrapper">
    <div class="nhsuk-input__prefix" aria-hidden="true">£</div>
    <input class="nhsuk-input nhsuk-input--width-5" id="input-with-prefix" name="test-name-4" type="text">
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "What is the cost in pounds?",
    "classes": "nhsuk-label--l"
  },
  "id": "input-with-prefix",
  "name": "test-name-4",
  "prefix": "£",
  "classes": "nhsuk-input--width-5"
}) }}
```

---

### Input with suffix

[Preview the input with suffix component](https://nhsuk.github.io/nhsuk-frontend/components/input/suffix.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-suffix">
  What is the weight in kilograms?
  </label>
  <div class="nhsuk-input__wrapper">
    <input class="nhsuk-input nhsuk-input--width-5" id="input-with-suffix" name="test-name-5" type="text">
    <div class="nhsuk-suffix" aria-hidden="true">kg</div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "What is the weight in kilograms?",
    "classes": "nhsuk-label--l"
  },
  "id": "input-with-suffix",
  "name": "test-name-4",
  "suffix": "kg",
  "classes": "nhsuk-input--width-5"
}) }}
```

---

### Input with prefix and suffix

[Preview the input with prefix and suffix component](https://nhsuk.github.io/nhsuk-frontend/components/input/prefix-and-suffix.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-prefix-and-suffix">
  What is the cost per item, in pounds?
  </label>
  <div class="nhsuk-input__wrapper">
    <div class="nhsuk-prefix" aria-hidden="true">£</div>
    <input class="nhsuk-input nhsuk-input--width-5" id="input-with-prefix-and-suffix" name="test-name-6" type="text">
    <div class="nhsuk-suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "What is the cost per item, in pounds?",
    "classes": "nhsuk-label--l"
  },
  "id": "input-with-prefix-and-suffix",
  "name": "test-name-6",
  "prefix": "£",
  "suffix": "per item",
  "classes": "nhsuk-input--width-5"
}) }}
```

---

### Input with error message, prefix and suffix

[Preview the input with error message, prefix and suffix component](https://nhsuk.github.io/nhsuk-frontend/components/input/error-and-prefix-and-suffix.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label nhsuk-label--l" for="input-with-error-message-and-prefix-and-suffix">
  What is the cost per item, in pounds?
  </label>
  <span class="nhsuk-error-message" id="input-with-error-message-and-prefix-and-suffix-error">
    <span class="nhsuk-u-visually-hidden">Error:</span> Enter a cost per item, in pounds
  </span>
  <div class="nhsuk-input__wrapper">
    <div class="nhsuk-prefix" aria-hidden="true">£</div>
    <input class="nhsuk-input nhsuk-input--width-5 nhsuk-input--error" id="input-with-error-message-and-prefix-and-suffix" name="test-name-7" type="text">
    <div class="nhsuk-suffix" aria-hidden="true">per item</div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/input/macro.njk' import input %}

{{ input({
  "label": {
    "text": "What is the cost per item, in pounds?",
    "classes": "nhsuk-label--l"
  },
  "id": "input-with-error-message-and-prefix-and-suffix",
  "name": "test-name-7",
  "prefix": "£",
  "suffix": "per item",
  "classes": "nhsuk-input--width-5",
  "errorMessage": {
    "text": "Enter a cost per item, in pounds"
  }
}) }}
```

---

### Nunjucks arguments

The input macro takes the following arguments:

| Name             | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**           | string  | Yes      | The id of the input.                                                                                                                                                                                                                                                                                                                                      |
| **name**         | string  | Yes      | The name of the input, which is submitted with the form data.                                                                                                                                                                                                                                                                                             |
| **type**         | string  | No       | Type of input control to render. Defaults to "text".                                                                                                                                                                                                                                                                                                      |
| **inputmode**    | string  | No       | Optional value for [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).                                                                                                                                                                                                                                            |
| **value**        | string  | No       | Optional initial value of the input.                                                                                                                                                                                                                                                                                                                      |
| **label**        | object  | No       | Arguments for the label component. See label component.                                                                                                                                                                                                                                                                                                   |
| **hint**         | object  | No       | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                                                                                                                                                                                                         |
| **errorMessage** | object  | No       | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component.                                                                                                                                                                              |
| **classes**      | string  | No       | Optional additional classes add to the input component. Separate each class with a space.                                                                                                                                                                                                                                                                 |
| **autocomplete** | string  | No       | Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance "postal-code" or "username". See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used. |
| **pattern**      | string  | No       | Attribute to [provide a regular expression pattern](https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.                                                                                                                                                                 |
| **spellcheck**   | boolean | No       | Optional field to enable or disable the spellcheck attribute on the input.                                                                                                                                                                                                                                                                                |
| **attributes**   | object  | No       | Any extra HTML attributes (for example data attributes) to add to the input component.                                                                                                                                                                                                                                                                    |
| **prefix**       | string  | No       | Optional value for the prefix.                                                                                                                                                                                                                                                                                                                            |
| **suffix**       | string  | No       | Optional value for the suffix.                                                                                                                                                                                                                                                                                                                            |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Input component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/input) with a few minor adaptations.
