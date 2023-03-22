# Error summary

## Guidance

Find out more about the error summary component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/error-summary).

## Quick start example

[Preview the error summary component](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/index.html)

### HTML markup

```html
<div
  class="nhsuk-error-summary"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
>
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <p>Describe the errors and how to correct them</p>
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#example-error-1">Date of birth must be in the past</a>
      </li>
    </ul>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/error-summary/macro.njk' import errorSummary %}

{{ errorSummary({
  "titleText": "There is a problem",
  "descriptionText": "Describe the errors and how to correct them",
  "errorList": [
    {
      "text": "Date of birth must be in the past",
      "href": "#example-error-1"
    }
  ]
}) }}
```

## With link to an input field

[Preview the error summary component with link to an input field](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/linking-to-input.html)

### HTML markup

```html
<div
  class="nhsuk-error-summary"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
>
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <p>
      Optional description of the errors and how to correct them.<br />Note that
      the error summary should receive focus on page load using the JavaScript
      that comes with this component.
    </p>
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#input-with-error-message"
          >Link to input error with explanation</a
        >
      </li>
    </ul>
  </div>
</div>

<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="input-with-error-message">
    National Insurance number
  </label>
  <div class="nhsuk-hint" id="input-with-error-message-hint">
    Clicking an error summary link should scroll the top of this input&#39;s
    label into view.
  </div>
  <span class="nhsuk-error-message" id="input-with-error-message-error">
    <span class="nhsuk-u-visually-hidden">Error:</span> Error message goes here
  </span>
  <input
    class="nhsuk-input nhsuk-input--error"
    id="input-with-error-message"
    name="test-name-3"
    type="text"
    aria-describedby="input-with-error-message-hint input-with-error-message-error"
  />
</div>
```

### Nunjucks macro

```
{% from 'components/error-summary/macro.njk' import errorSummary %}
{% from 'components/input/macro.njk' import input %}

{{ errorSummary({
  "titleText": "There is a problem",
  "descriptionHtml": "Optional description of the errors and how to correct them.<br>Note that the error summary should receive focus on page load using the JavaScript that comes with this component.",
  "errorList": [
    {
      "text": "Link to input error with explanation",
      "href": "#input-with-error-message"
    }
  ]
}) }}

{{ input({
  "label": {
    "text": "National Insurance number"
  },
  "hint": {
    "text": "Clicking an error summary link should scroll the top of this input's label into view."
  },
  "id": "input-with-error-message",
  "name": "test-name-3",
  "errorMessage": {
    "text": "Error message goes here"
  }
}) }}
```

## With link to a radio field

[Preview the error summary component with link to a radio field](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/linking-to-radios.html)

### HTML markup

```html
<div
  class="nhsuk-error-summary"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
>
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <p>
      Optional description of the errors and how to correct them.<br />Note that
      the error summary should receive focus on page load using the JavaScript
      that comes with this component.
    </p>
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#example-1"
          >Link to radio error with explanation (Note how it links to the first
          radio)</a
        >
      </li>
    </ul>
  </div>
</div>

<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset
    class="nhsuk-fieldset"
    aria-describedby="example-hint example-error"
  >
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--m">
      Have you changed your name?
    </legend>

    <div class="nhsuk-hint" id="example-hint">
      Clicking an error summary link should scroll the top of this radio
      fieldset into view.
    </div>

    <span class="nhsuk-error-message" id="example-error">
      <span class="nhsuk-u-visually-hidden">Error:</span> Please select an
      option
    </span>

    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input
          class="nhsuk-radios__input"
          id="example-1"
          name="radios-example"
          type="radio"
          value="yes"
        />
        <label class="nhsuk-label nhsuk-radios__label" for="example-1">
          Yes
        </label>
      </div>

      <div class="nhsuk-radios__item">
        <input
          class="nhsuk-radios__input"
          id="example-2"
          name="radios-example"
          type="radio"
          value="no"
        />
        <label class="nhsuk-label nhsuk-radios__label" for="example-2">
          No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

### Nunjucks macro

```
{% from 'components/error-summary/macro.njk' import errorSummary %}
{% from 'components/radios/macro.njk' import radios %}

{{ errorSummary({
  "titleText": "There is a problem",
  "descriptionHtml": "Optional description of the errors and how to correct them.<br>Note that the error summary should receive focus on page load using the JavaScript that comes with this component.",
  "errorList": [
    {
      "text": "Link to radio error with explanation (Note how it links to the first radio)",
      "href": "#example-1"
    }
  ]
}) }}

{{ radios({
  "idPrefix": "example",
  "name": "radios-example",
  "errorMessage": {
    "text": "Please select an option"
  },
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?",
      "classes": "nhsuk-fieldset__legend--m"
    }
  },
  "hint": {
    "text": "Clicking an error summary link should scroll the top of this radio fieldset into view."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No"
    }
  ]
}) }}
```

### Nunjucks arguments

The error summary Nunjucks macro takes the following arguments:

| Name                                         | Type   | Required | Description                                                                                                                           |
| -------------------------------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **titleText (or) titleHtml**                 | string | Yes      | Text or HTML to use for the heading of the error summary block. If `titleHtml` is provided, the `titleText` argument will be ignored. |
| **descriptionText (or) descriptionHtml**     | string | No       | Optional text or HTML description of the errors. If `descriptionhtml` is provided, the `descriptionText` argument will be ignored.    |
| **errorList**                                | object | Yes      | Contains an array of error link items and all their available arguments.                                                              |
| **errorList.{}.href**                        | string | No       | Href attribute for the error link item. If provided item will be an anchor.                                                           |
| **errorList.{}.text (or) errorList.{}.html** | string | No       | Text or HTML for the error link item. If `html` is provided, the `text` argument will be ignored.                                     |
| **errorList.{}.attributes**                  | object | No       | Any extra HTML attributes (for example data attributes) to add to the error link anchor.                                              |
| **classes**                                  | string | No       | Optional additional classes to add to the error-summary container. Separate each class with a space.                                  |
| **attributes**                               | object | No       | Any extra HTML attributes (for example data attributes) to add to the error-summary container.                                        |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Error summary component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/error-summary) with a few minor adaptations.
