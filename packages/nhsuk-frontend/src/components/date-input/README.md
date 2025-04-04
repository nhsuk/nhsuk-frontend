# Date input

## Guidance

Find out more about the date input component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).

Note: The `pattern` attribute is not valid HTML for inputs where the type attribute is number. It is added deliberately to [force numeric keypads on iOS devices](http://bradfrost.com/blog/post/better-numerical-inputs-for-mobile-forms/). See also [presenting iOS keyboards](https://stackoverflow.com/questions/25425181/iphone-ios-presenting-html-5-keyboard-for-postal-codes) for visual examples of iOS keyboards and attributes.

## Quick start examples

### Date input

[Preview the date input component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/index.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-hint" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="nhsuk-hint" id="dob-hint">
    For example, 31 3 1980
    </div>
    <div class="nhsuk-date-input" id="dob">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-day" name="dob-day" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-month" name="dob-month" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="dob-year" name="dob-year" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

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

---

### Date input with autocomplete attribute

[Preview the date input with autocomplete attribute component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/autocomplete.html)

#### Guidance

See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used.

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-with-autocomplete-attribute-hint" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="nhsuk-hint" id="dob-with-autocomplete-attribute-hint">
    For example, 31 3 1980
    </div>
    <div class="nhsuk-date-input" id="dob-with-autocomplete-attribute">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-with-autocomplete-attribute-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-with-autocomplete-attribute-day" name="dob-with-autocomplete-day" inputmode="numeric" type="text" autocomplete="bday-day" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-with-autocomplete-attribute-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-with-autocomplete-attribute-month" name="dob-with-autocomplete-month" inputmode="numeric" type="text" autocomplete="bday-month" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-with-autocomplete-attribute-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="dob-with-autocomplete-attribute-year" name="dob-with-autocomplete-year" inputmode="numeric" type="text" autocomplete="bday-year" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/date-input/macro.njk' import dateInput %}

{{ dateInput({
  "id": "dob-with-autocomplete-attribute",
  "namePrefix": "dob-with-autocomplete",
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
      "classes": "nhsuk-input--width-2",
      "autocomplete": "bday-day"
    },
    {
      "name": "month",
      "classes": "nhsuk-input--width-2",
      "autocomplete": "bday-month"
    },
    {
      "name": "year",
      "classes": "nhsuk-input--width-4",
      "autocomplete": "bday-year"
    }
  ]
}) }}
```

---

### Date input with errors

[Preview the date input with errors component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/multiple-errors.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-errors-hint dob-errors-error" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="nhsuk-hint" id="dob-errors-hint">
    For example, 31 3 1980
    </div>
    <span id="dob-errors-error" class="nhsuk-error-message">
    Error message goes here
    </span>
    <div class="nhsuk-date-input" id="dob-errors">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-errors-day" name="day" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-errors-month" name="month" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-errors-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4 nhsuk-input--error" id="dob-errors-year" name="year" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

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

---

### Date input with error on single input

[Preview the date input with error on single input component](https://nhsuk.github.io/nhsuk-frontend/components/date-input/error.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="dob-day-error-hint dob-day-error-error" role="group">
    <legend class="nhsuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div class="nhsuk-hint" id="dob-day-error-hint">
    For example, 31 3 1980
    </div>
    <span id="dob-day-error-error" class="nhsuk-error-message">
    Error message goes here
    </span>
    <div class="nhsuk-date-input" id="dob-day-error">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-day">
          Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error" id="dob-day-error-day" name="dob-day-error-day" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-month">
          Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="dob-day-error-month" name="dob-day-error-month" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day-error-year">
          Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="dob-day-error-year" name="dob-day-error-year" inputmode="numeric" type="text" pattern="[0-9]*">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

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

---

### Nunjucks arguments

The date input Nunjucks macro takes the following arguments:

| Name              | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**            | string | No       | Optional id. This is used for the main component and to compose id attribute for each item.                                                                                                                                                                                                                                                               |
| **namePrefix**    | string | No       | Optional prefix. This is used to prefix each `item.name` using `-`.                                                                                                                                                                                                                                                                                       |
| **items**         | array  | Yes      | An array of input objects with name, value and optional classes.                                                                                                                                                                                                                                                                                          |
| **items[].id**    | array  | No       | Optional item-specific id. If provided, it will be used instead of the generated id.                                                                                                                                                                                                                                                                      |
| **items[].name**  | array  | Yes      | Item-specific name attribute.                                                                                                                                                                                                                                                                                                                             |
| **items[].value** | string | No       | Optional item-specific value attribute. If provided, it will be used as the initial value of the input.                                                                                                                                                                                                                                                   |
| **items[].label** | string | No       | Optional item-specific label text. If provided, this will be used instead of the items[].name.                                                                                                                                                                                                                                                            |
| **hint**          | object | No       | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                                                                                                                                                                                                         |
| **errorMessage**  | object | No       | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component.                                                                                                                                                                              |
| **fieldset**      | object | No       | Arguments for the fieldset component (e.g. legend). See [fieldset](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset) component.                                                                                                                                                                                           |
| **autocomplete**  | string | No       | Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance "postal-code" or "username". See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used. |
| **pattern**       | string | No       | Attribute to [provide a regular expression pattern](https://www.w3.org/TR/html51/sec-forms.html#the-pattern-attribute), used to match allowed character combinations for the input value.                                                                                                                                                                 |
| **classes**       | string | No       | Optional additional classes to add to the date-input container. Separate each class with a space.                                                                                                                                                                                                                                                         |
| **attributes**    | object | No       | Any extra HTML attributes (for example data attributes) to add to the date-input component.                                                                                                                                                                                                                                                               |
| **values**        | object | No       | An optional object use to specify value attributes for the date parts without setting rows.                                                                                                                                                                                                                                                               |
| **values.day**    | string | No       | Value attribute for the day input.                                                                                                                                                                                                                                                                                                                        |
| **values.month**  | string | No       | Value attribute for the month input.                                                                                                                                                                                                                                                                                                                      |
| **values.year**   | string | No       | Value attribute for the year input.                                                                                                                                                                                                                                                                                                                       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Date input component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/date-input) with a few minor adaptations.
