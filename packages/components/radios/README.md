# Radios

## Guidance

Find out more about the radios component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/radios).

## Quick start examples

### Radios

[Preview the radios component](https://nhsuk.github.io/nhsuk-frontend/components/radios/index.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="example-hint">
    <legend class="nhsuk-fieldset__legend">
      Have you changed your name?
    </legend>
    <div class="nhsuk-hint" id="example-hint">
    This includes changing your last name or spelling your name differently.
    </div>
    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-1" name="example" type="radio" value="yes">
        <label class="nhsuk-label nhsuk-radios__label" for="example-1">
        Yes
        </label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
        <label class="nhsuk-label nhsuk-radios__label" for="example-2">
        No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No",
      "checked": true
    }
  ]
}) }}
```

---

### Radios inline

[Preview the radios inline component](https://nhsuk.github.io/nhsuk-frontend/components/radios/inline.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="example-hint">
    <legend class="nhsuk-fieldset__legend">
      Have you changed your name?
    </legend>
    <div class="nhsuk-hint" id="example-hint">
    This includes changing your last name or spelling your name differently.
    </div>
    <div class="nhsuk-radios nhsuk-radios--inline">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-1" name="example" type="radio" value="yes">
        <label class="nhsuk-label nhsuk-radios__label" for="example-1">
        Yes
        </label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
        <label class="nhsuk-label nhsuk-radios__label" for="example-2">
        No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example",
  "classes": "nhsuk-radios--inline",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No",
      "checked": true
    }
  ]
}) }}
```

---

### Radios disabled

[Preview the radios disabled component](https://nhsuk.github.io/nhsuk-frontend/components/radios/disabled.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="example-disabled-hint">
    <legend class="nhsuk-fieldset__legend">
      Have you changed your name?
    </legend>
    <div class="nhsuk-hint" id="example-disabled-hint">
    This includes changing your last name or spelling your name differently.
    </div>
    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-disabled-1" name="example-disabled" type="radio" value="yes" disabled>
        <label class="nhsuk-label nhsuk-radios__label" for="example-disabled-1">
        Yes
        </label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-disabled-2" name="example-disabled" type="radio" value="no" disabled>
        <label class="nhsuk-label nhsuk-radios__label" for="example-disabled-2">
        No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example-disabled",
  "name": "example-disabled",
  "fieldset": {
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes",
      "disabled": true
    },
    {
      "value": "no",
      "text": "No",
      "disabled": true
    }
  ]
}) }}
```

---

### Radios with a divider

[Preview the radios with a divider component](https://nhsuk.github.io/nhsuk-frontend/components/radios/divider.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend">
      How do you want to sign in?
    </legend>
    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-divider-1" name="example" type="radio" value="government-gateway">
        <label class="nhsuk-label nhsuk-radios__label" for="example-divider-1">
        Use Government Gateway
        </label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-divider-2" name="example" type="radio" value="nhsuk-login">
        <label class="nhsuk-label nhsuk-radios__label" for="example-divider-2">
        Use NHS.UK login
        </label>
      </div>
      <div class="nhsuk-radios__divider">or</div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-divider-4" name="example" type="radio" value="create-account">
        <label class="nhsuk-label nhsuk-radios__label" for="example-divider-4">
        Create an account
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example-divider",
  "name": "example",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?"
    }
  },
  "items": [
    {
      "value": "government-gateway",
      "text": "Use Government Gateway"
    },
    {
      "value": "nhsuk-login",
      "text": "Use NHS.UK login"
    },
    {
      "divider": "or"
    },
    {
      "value": "create-account",
      "text": "Create an account"
    }
  ]
}) }}
```

---

### Radios with hint text on items

[Preview the radios with hint text on items component](https://nhsuk.github.io/nhsuk-frontend/components/radios/hint.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend">
      <h1 class="nhsuk-fieldset__heading">
        How do you want to sign in?
      </h1>
    </legend>
    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="gov-1" name="gov" type="radio" value="gateway" aria-describedby="gov-1-item-hint">
        <label class="nhsuk-label nhsuk-radios__label" for="gov-1">
        Sign in with Government Gateway
        </label>
        <div class="nhsuk-hint nhsuk-radios__hint" id="gov-1-item-hint">
        You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before.
        </div>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="gov-2" name="gov" type="radio" value="verify" aria-describedby="gov-2-item-hint">
        <label class="nhsuk-label nhsuk-radios__label" for="gov-2">
        Sign in with NHS.UK login
        </label>
        <div class="nhsuk-hint nhsuk-radios__hint" id="gov-2-item-hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "gov",
  "name": "gov",
  "fieldset": {
    "legend": {
      "text": "How do you want to sign in?",
      "isPageHeading": true
    }
  },
  "items": [
    {
      "value": "gateway",
      "text": "Sign in with Government Gateway",
      "hint": {
        "text": "You'll have a user ID if you've registered for self-assessment or filed a tax return online before."
      }
    },
    {
      "value": "verify",
      "text": "Sign in with NHS.UK login",
      "hint": {
        "text": "You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}) }}
```

---

### Radios without fieldset

[Preview the radios without fieldset component](https://nhsuk.github.io/nhsuk-frontend/components/radios/without-fieldset.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <div class="nhsuk-radios">
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="colours-1" name="colours" type="radio" value="red">
      <label class="nhsuk-label nhsuk-radios__label" for="colours-1">
      Red
      </label>
    </div>
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="colours-2" name="colours" type="radio" value="green">
      <label class="nhsuk-label nhsuk-radios__label" for="colours-2">
      Green
      </label>
    </div>
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="colours-3" name="colours" type="radio" value="blue">
      <label class="nhsuk-label nhsuk-radios__label" for="colours-3">
      Blue
      </label>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
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
      "text": "Blue"
    }
  ]
}) }}
```

---

### Radios with hint text and error message

[Preview the radios with hint text and error message component](https://nhsuk.github.io/nhsuk-frontend/components/radios/hint-error.html)

#### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <fieldset class="nhsuk-fieldset app-fieldset--custom-modifier" aria-describedby="example-hint example-error" data-attribute="value" data-second-attribute="second-value">
    <legend class="nhsuk-fieldset__legend">
      Have you changed your name?
    </legend>
    <div class="nhsuk-hint" id="example-hint">
    This includes changing your last name or spelling your name differently.
    </div>
    <span id="example-error" class="nhsuk-error-message">
    Please select an option
    </span>
    <div class="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-1" name="example" type="radio" value="yes">
        <label class="nhsuk-label nhsuk-radios__label" for="example-1">
        Yes
        </label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
        <label class="nhsuk-label nhsuk-radios__label" for="example-2">
        No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example",
  "name": "example",
  "errorMessage": {
    "text": "Please select an option"
  },
  "fieldset": {
    "classes": "app-fieldset--custom-modifier",
    "attributes": {
      "data-attribute": "value",
      "data-second-attribute": "second-value"
    },
    "legend": {
      "text": "Have you changed your name?"
    }
  },
  "hint": {
    "text": "This includes changing your last name or spelling your name differently."
  },
  "items": [
    {
      "value": "yes",
      "text": "Yes"
    },
    {
      "value": "no",
      "text": "No",
      "checked": true
    }
  ]
}) }}
```

---

### Radios with conditional content

[Preview the radios with conditonal content](https://nhsuk.github.io/nhsuk-frontend/components/radios/conditional.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="contact-hint">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">
        How would you prefer to be contacted?
      </h1>
    </legend>
    <div class="nhsuk-hint" id="contact-hint">
      Select one option.
    </div>
    <div class="nhsuk-radios nhsuk-radios--conditional">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact-1" name="contact" type="radio" value="email" aria-controls="conditional-contact-1" aria-expanded="false">
        <label class="nhsuk-label nhsuk-radios__label" for="contact-1">
          Email
        </label>
      </div>
      <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-1">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="email">
            Email address
          </label>
          <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="text">
        </div>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" aria-controls="conditional-contact-2" aria-expanded="false">
        <label class="nhsuk-label nhsuk-radios__label" for="contact-2">
          Phone
        </label>
      </div>
      <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-2">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="phone">
            Phone number
          </label>
          <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="text">
        </div>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact-3" name="contact" type="radio" value="text" aria-controls="conditional-contact-3" aria-expanded="false">
        <label class="nhsuk-label nhsuk-radios__label" for="contact-3">
          Text message
        </label>
      </div>
      <div class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden" id="conditional-contact-3">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="mobile">
            Mobile phone number
          </label>
          <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="text">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}
{% from 'components/input/macro.njk' import input %}

{% set emailHtml %}
  {{ input({
    id: "email",
    name: "email",
    classes: "nhsuk-u-width-two-thirds",
    label: {
      text: "Email address"
    }
  }) }}
{% endset -%}

{% set phoneHtml %}
  {{ input({
    id: "phone",
    name: "phone",
    classes: "nhsuk-u-width-two-thirds",
    label: {
      text: "Phone number"
    }
  }) }}
{% endset -%}

{% set mobileHtml %}
  {{ input({
    id: "mobile",
    name: "mobile",
    classes: "nhsuk-u-width-two-thirds",
    label: {
      text: "Mobile phone number"
    }
  }) }}
{% endset -%}

{{ radios({
  "idPrefix": "contact",
  "name": "contact",
  "fieldset": {
    "legend": {
      "text": "How would you prefer to be contacted?",
      "classes": "nhsuk-fieldset__legend--l",
      "isPageHeading": "true"
    }
  },
  "hint": {
    "text": "Select one option."
  },
  "items": [
    {
      "value": "email",
      "text": "Email",
      "conditional": {
        "html": emailHtml
      }
    },
    {
      "value": "phone",
      "text": "Phone",
      "conditional": {
        "html": phoneHtml
      }
    },
    {
      "value": "text",
      "text": "Text message",
      "conditional": {
        "html": mobileHtml
      }
    }
  ]
}) }}
```

---

### Nunjucks arguments

The radios Nunjucks macro takes the following arguments:

| Name                               | Type    | Required | Description                                                                                                                                                                 |
| ---------------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fieldset**                       | object  | No       | Arguments for the fieldset component (e.g. legend). See See [fieldset](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset) component.         |
| **hint**                           | object  | No       | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                           |
| **errorMessage**                   | object  | No       | Arguments for the errorMessage component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **idPrefix**                       | string  | No       | String to prefix id for each radio item if no id is specified on each item. If`idPrefix` is not passed, fallback to using the name attribute instead.                       |
| **name**                           | string  | Yes      | Name attribute for each radio item.                                                                                                                                         |
| **items**                          | array   | Yes      | Array of radio item objects.                                                                                                                                                |
| **items[].text (or) items[].html** | string  | Yes      | Text or HTML to use within each radio item label. If `html` is provided, the `text` argument will be ignored.                                                               |
| **items[].id**                     | string  | No       | Specific id attribute for the radio item. If omitted, then `idPrefix` string will be applied.                                                                               |
| **items[].name**                   | string  | Yes      | Specific name for the radio item. If omitted, then component global `name` string will be applied.                                                                          |
| **items[].value**                  | string  | Yes      | Value for the radio input.                                                                                                                                                  |
| **items[].hint**                   | object  | No       | Provide optional hint to each radio item. See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                               |
| **items[].divider**                | string  | No       | Optional divider text to separate radio items, for example the text "or".                                                                                                   |
| **items[].checked**                | boolean | No       | If true, radio will be checked.                                                                                                                                             |
| **items[].disabled**               | boolean | No       | If true, radio will be disabled.                                                                                                                                            |
| **items[].attributes**             | object  | No       | Any extra HTML attributes (for example data attributes) to add to the radio input tag.                                                                                      |
| **items[].conditional.html**       | string  | No       | HTML to be displayed when the radio is checked                                                                                                                              |
| **classes**                        | string  | No       | Optional additional classes to add to the radios container. Separate each class with a space.                                                                               |
| **attributes**                     | object  | No       | Any extra HTML attributes (for example data attributes) to add to the radios container.                                                                                     |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Radios component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/radios) with a few minor adaptations.
