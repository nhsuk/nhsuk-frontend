# Checkboxes

## Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/checkboxes).

## Quick start examples

### Checkboxes

[Preview the checkboxes component](https://nhsuk.github.io/nhsuk-frontend/components/checkboxes/index.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="nationality-hint">
    <legend class="nhsuk-fieldset__legend">
      What is your nationality?
    </legend>
    <span class="nhsuk-hint" id="nationality-hint">
    If you have more than 1 nationality, select all options that are relevant to you.
    </span>
    <div class="nhsuk-checkboxes">
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="nationality-1" name="nationality" type="checkbox" value="british">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="nationality-1">
        British
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="nationality-2">
        Irish
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="nationality-3">
        citizen of another country
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/checkboxes/macro.njk' import checkboxes %}

{{ checkboxes({
  "idPrefix": "nationality",
  "name": "nationality",
  "fieldset": {
    "legend": {
      "text": "What is your nationality?"
    }
  },
  "hint": {
    "text": "If you have more than 1 nationality, select all options that are relevant to you."
  },
  "items": [
    {
      "value": "british",
      "text": "British"
    },
    {
      "value": "irish",
      "text": "Irish"
    },
    {
      "value": "other",
      "text": "citizen of another country"
    }
  ]
}) }}
```

---

### Checkboxes with hint text

[Preview the checkboxes with hint text component](https://nhsuk.github.io/nhsuk-frontend/components/checkboxes/hint.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend">
      <h1 class="nhsuk-fieldset__heading">
        How do you want to sign in?
      </h1>
    </legend>
    <div class="nhsuk-checkboxes">
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
        </label>
        <span class="nhsuk-hint nhsuk-checkboxes__hint" id="government-gateway-item-hint">
        You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
        </span>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="nhsuk-login" name="verify" type="checkbox" value="nhsuk-verify" aria-describedby="nhsuk-login-item-hint">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="nhsuk-login">
        Sign in with NHS.UK login
        </label>
        <span class="nhsuk-hint nhsuk-checkboxes__hint" id="nhsuk-login-item-hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
        </span>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/checkboxes/macro.njk' import checkboxes %}

{{ checkboxes({
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?",
      "isPageHeading": true
    }
  },
  "items": [
    {
      "name": "gateway",
      "id": "government-gateway",
      "value": "gov-gateway",
      "text": "Sign in with Government Gateway",
      "hint": {
        "text": "You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      "name": "verify",
      "id": "nhsuk-login",
      "value": "nhsuk-verify",
      "text": "Sign in with NHS.UK login",
      "hint": {
        "text": "You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}) }}
```

---

### Checkboxes with disabled item

[Preview the checkboxes with disabled item component](https://nhsuk.github.io/nhsuk-frontend/components/checkboxes/disabled.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <div class="nhsuk-checkboxes">
    <div class="nhsuk-checkboxes__item">
      <input class="nhsuk-checkboxes__input" id="colours-1" name="colours" type="checkbox" value="red">
      <label class="nhsuk-label nhsuk-checkboxes__label" for="colours-1">
      Red
      </label>
    </div>
    <div class="nhsuk-checkboxes__item">
      <input class="nhsuk-checkboxes__input" id="colours-2" name="colours" type="checkbox" value="green">
      <label class="nhsuk-label nhsuk-checkboxes__label" for="colours-2">
      Green
      </label>
    </div>
    <div class="nhsuk-checkboxes__item">
      <input class="nhsuk-checkboxes__input" id="colours-3" name="colours" type="checkbox" value="blue" disabled>
      <label class="nhsuk-label nhsuk-checkboxes__label" for="colours-3">
      Blue
      </label>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/checkboxes/macro.njk' import checkboxes %}

{{ checkboxes({
  "name": "colours",
  "items": [
    {
      "value": "red",
      "text": "Red"
    },
    {
      "value": "green",
      "text": "Green"
    },
    {
      "value": "blue",
      "text": "Blue",
      "disabled": true
    }
  ]
}) }}
```

---

### Checkboxes with legend as page heading

[Preview the checkboxes with legend as page heading component](https://nhsuk.github.io/nhsuk-frontend/components/checkboxes/page-heading.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="waste-hint">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">
        Which types of waste do you transport regularly?
      </h1>
    </legend>
    <span class="nhsuk-hint" id="waste-hint">
    Select all that apply
    </span>
    <div class="nhsuk-checkboxes">
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-1" name="waste" type="checkbox" value="animal">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-1">
        Waste from animal carcasses
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/checkboxes/macro.njk' import checkboxes %}

{{ checkboxes({
  "name": "waste",
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?",
      "classes": "nhsuk-fieldset__legend--l",
      "isPageHeading": true
    }
  },
  "hint": {
    "text": "Select all that apply"
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses"
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries"
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste"
    }
  ]
}) }}
```

---

### Checkboxes with error message

[Preview the checkboxes with error message component](https://nhsuk.github.io/nhsuk-frontend/components/checkboxes/error.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset" aria-describedby="waste-error">
    <legend class="nhsuk-fieldset__legend">
      Which types of waste do you transport regularly?
    </legend>
    <span id="waste-error" class="nhsuk-error-message">
    Please select an option
    </span>
    <div class="nhsuk-checkboxes">
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-1" name="waste" type="checkbox" value="animal">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-1">
        Waste from animal carcasses
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
        </label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/checkboxes/macro.njk' import checkboxes %}

{{ checkboxes({
  "name": "waste",
  "errorMessage": {
    "text": "Please select an option"
  },
  "fieldset": {
    "legend": {
      "text": "Which types of waste do you transport regularly?"
    }
  },
  "items": [
    {
      "value": "animal",
      "text": "Waste from animal carcasses"
    },
    {
      "value": "mines",
      "text": "Waste from mines or quarries"
    },
    {
      "value": "farm",
      "text": "Farm or agricultural waste"
    }
  ]
}) }}
```

---

### Nunjucks arguments

The checkboxes Nunjucks macro takes the following arguments:

| Name                      | Type     | Required  | Description             |
| --------------------------|----------|-----------|-------------------------|
| **fieldset**              | object   | No        | Arguments for the fieldset component (e.g. legend). See [fieldset](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset) component. |
| **hint**                  | object   | No        | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component. |
| **errorMessage**          | object   | No        | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **idPrefix**        | string   | No        | String to prefix id for each checkbox item if no id is specified on each item. If`idPrefix` is not passed, fallback to using the name attribute instead. |
| **name**            | string	 | Yes       | Name attribute for each checkbox item. |
| **items**           | array    | Yes       | Array of checkbox items objects. |
| **items.{}.text (or) items.{}.html**       | string   | Yes        | Text or HTML to use within each radio item label. If `html` is provided, the `text` argument will be ignored. |
| **items.{}.id**     | string  | No        | Specific id attribute for the checkbox item. If omitted, then `idPrefix` string will be applied.|
| **items.{}.name**   | string  | Yes        | Specific name for the checkbox item. If omitted, then component global `name` string will be applied. |
| **items.{}.value**  | string   | Yes        | Value for the checkbox input. |
| **items.{}.hint**   | object   | No        | Provide optional hint to each checkbox item. See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component. |
| **items.{}.divider** | string   | No        | Optional divider text to separate checkbox items, for example the text "or". |
| **items.{}.checked** | boolean   | No        | If true, checkbox will be checked. |
| **items.{}.conditional** | boolean   | No        | If true, content provided will be revealed when the item is checked. |
| **items.{}.conditional.html** | boolean   | No        | Provide content for the conditional reveal. |
| **items.{}.disabled** | boolean   | No        | If true, checkbox will be disabled. |
| **items.{}.attributes** | object   | No        | Any extra HTML attributes (for example data attributes) to add to the checkbox input tag. |
| **classes**               | string   | No        | Optional additional classes to add to the checkboxes container. Separate each class with a space. |
| **attributes**            | object   | No        | Any extra HTML attributes (for example data attributes) to add to the checkboxes container. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Checkboxes component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/checkboxes) with a few minor adaptations.
