# Date input

Find out more about the date input component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](TODO).

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

    <span id="dob-hint" class="nhsuk-hint">
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

[Preview the date input with errors component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-errors-hint dob-errors-error" role="group">

    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>

    <span id="dob-errors-hint" class="nhsuk-hint">
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

[Preview the date input with error on single input component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-day-error-hint dob-day-error-error" role="group">

    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>

    <span id="dob-day-error-hint" class="nhsuk-hint">
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

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Date input component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/date-input) with a few minor adaptations.
