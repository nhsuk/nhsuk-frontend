# Date input

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/217).

## Quick start examples

### Date input

[Preview the date input component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/index.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-hint" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <span class="nhsuk-hint" id="dob-hint">
    For example, 31 3 1980
    </span>
    <div class="nhsuk-date-input" id="dob">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-day" name="dob-day" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-month" name="dob-month" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="dob-year" name="dob-year" type="number" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### Nunjucks macro

```
{% from 'components/date-input/macro.njk' import dateInput %}

{{ dateInput({
  "id": "dob",
  "namePrefix": "dob",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "items": [
    {
      "name": "day",
      "classes": "nhsuk-input--width-2"
    },
    {
      "name": "month",
      "classes": "nhsuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "nhsuk-input--width-4"
    }
  ]
}) }}
```

### Date input with errors

[Preview the date input with errors component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/multiple-errors.html)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-errors-hint dob-errors-error" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <span class="nhsuk-hint" id="dob-errors-hint">
    For example, 31 3 1980
    </span>
    <span id="dob-errors-error" class="nhsuk-error-message">
    Error message goes here
    </span>
    <div class="nhsuk-date-input" id="dob-errors">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-errors-day" name="day" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-errors-month" name="month" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4 nhsuk-input--error" id="dob-errors-year" name="year" type="number" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### Nunjucks macro

```
{% from 'components/date-input/macro.njk' import dateInput %}

{{ dateInput({
  "id": "dob-errors",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      "name": "month",
      "classes": "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      "name": "year",
      "classes": "nhsuk-input--width-4 nhsuk-input--error"
    }
  ]
}) }}
```

### Date input with error on single input

[Preview the date input with error on single input component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/error.html)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-day-error-hint dob-day-error-error" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <span class="nhsuk-hint" id="dob-day-error-hint">
    For example, 31 3 1980
    </span>
    <span id="dob-day-error-error" class="nhsuk-error-message">
    Error message goes here
    </span>
    <div class="nhsuk-date-input" id="dob-day-error">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-day-error-day" name="dob-day-error-day" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-day-error-month" name="dob-day-error-month" type="number" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="dob-day-error-year" name="dob-day-error-year" type="number" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

### Nunjucks macro

```
{% from 'components/date-input/macro.njk' import dateInput %}

{{ dateInput({
  "id": "dob-day-error",
  "namePrefix": "dob-day-error",
  "fieldset": {
    "legend": {
      "text": "What is your date of birth?"
    }
  },
  "hint": {
    "text": "For example, 31 3 1980"
  },
  "errorMessage": {
    "text": "Error message goes here"
  },
  "items": [
    {
      "name": "day",
      "classes": "nhsuk-input--width-2 nhsuk-input--error"
    },
    {
      "name": "month",
      "classes": "nhsuk-input--width-2"
    },
    {
      "name": "year",
      "classes": "nhsuk-input--width-4"
    }
  ]
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                      | Type     | Required  | Description             |
| --------------------------|----------|-----------|-------------------------|
| **id**                    | string   | No        | Optional id. This is used for the main component and to compose id attribute for each item. |
| **namePrefix**            | string   | No        | Optional prefix. This is used to prefix each `item.name` using `-`. |
| **items**                 | array    | Yes       | An array of input objects with name, value and optional classes. |
| **items.{}.id**           | array    | No        | Optional item-specific id. If provided, it will be used instead of the generated id. |
| **items.{}.name**         | array    | Yes       | Item-specific name attribute. |
| **items.{}.value**        | string   | No        | Optional item-specific value attribute. If provided, it will be used as the initial value of the input. |
| **items.{}.label**        | string   | No        | Optional item-specific label text. If provided, this will be used instead of the items.{}.name. |
| **hint**                  | object   | No        | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component. |
| **errorMessage**          | object   | No        | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **fieldset**              | object   | No        | Arguments for the fieldset component (e.g. legend). See [fieldset](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset) component. |
| **classes**               | string   | No        | Optional additional classes to add to the date-input container. Separate each class with a space. |
| **attributes**            | object   | No        | Any extra HTML attributes (for example data attributes) to add to the date-input container. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Date input component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/date-input) with a few minor adaptations.
