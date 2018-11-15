# Radios

Find out more about the radios component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](TODO).

## Quick start examples

### Radios

[Preview the radios component](https://nhsuk.github.io/nhsuk-frontend/components/radios.html)

### HTML markup

```html
<div class="nhsuk-form-group">

  <fieldset class="nhsuk-fieldset" aria-describedby="example-hint">

  <legend class="nhsuk-fieldset__legend">
    Have you changed your name?
  </legend>

  <span id="example-hint" class="nhsuk-hint">
    This includes changing your last name or spelling your name differently.
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

### Nunjucks macro

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

### Radios inline

[Preview the radios inline component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group">

  <fieldset class="nhsuk-fieldset" aria-describedby="example&#39;-hint">

  <legend class="nhsuk-fieldset__legend">
    Have you changed your name?
  </legend>

  <span id="example&#39;-hint" class="nhsuk-hint">
    This includes changing your last name or spelling your name differently.
  </span>

  <div class="nhsuk-radios nhsuk-radios--inline">

    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example&#39;-1" name="example" type="radio" value="yes">
      <label class="nhsuk-label nhsuk-radios__label" for="example&#39;-1">
        Yes
      </label>
    </div>

    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example&#39;-2" name="example" type="radio" value="no" checked>
      <label class="nhsuk-label nhsuk-radios__label" for="example&#39;-2">
        No
      </label>
    </div>

  </div>
  </fieldset>

</div>
```

### Nunjucks macro

```
{% from 'components/radios/macro.njk' import radios %}

{{ radios({
  "idPrefix": "example'",
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

### Radios disabled

[Preview the radios disabled component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group">

  <fieldset class="nhsuk-fieldset" aria-describedby="example-disabled-hint">

  <legend class="nhsuk-fieldset__legend">
    Have you changed your name?
  </legend>

  <span id="example-disabled-hint" class="nhsuk-hint">
    This includes changing your last name or spelling your name differently.
  </span>

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

### Nunjucks macro

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

### Radios with a divider

[Preview the radios with a divider component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group">

  <fieldset class="nhsuk-fieldset">

  <legend class="nhsuk-fieldset__legend">
    How do you want to sign in?
  </legend>

  <div class="nhsuk-radios">

    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example-divider-1" name="example" type="radio" value="governement-gateway">
      <label class="nhsuk-label nhsuk-radios__label" for="example-divider-1">
        Use Government Gateway
      </label>
    </div>

    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="example-divider-2" name="example" type="radio" value="nhsuk-verify">
      <label class="nhsuk-label nhsuk-radios__label" for="example-divider-2">
        Use GOV.UK Verify
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

### Nunjucks macro

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
      "text": "Use NHS.UK Login"
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

### Radios with hint text on items

[Preview the radios with hint text on items component](TODO)

### HTML markup

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
      <span id="gov-1-item-hint" class="nhsuk-hint nhsuk-radios__hint">
        You&#39;ll have a user ID if you&#39;ve registered for Self Assessment or filed a tax return online before.
      </span>
    </div>

    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="gov-2" name="gov" type="radio" value="verify" aria-describedby="gov-2-item-hint">
      <label class="nhsuk-label nhsuk-radios__label" for="gov-2">
        Sign in with GOV.UK Verify
      </label>
      <span id="gov-2-item-hint" class="nhsuk-hint nhsuk-radios__hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </span>
    </div>

  </div>
  </fieldset>

</div>
```

### Nunjucks macro

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
        "text": "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      "value": "verify",
      "text": "Sign in with NHS.UK Login",
      "hint": {
        "text": "You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      }
    }
  ]
}) }}
```

### Radios without fieldset

[Preview the radios without fieldset component](TODO)

### HTML markup

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

### Nunjucks macro

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

### Radios with hint text and error message

[Preview the radios with hint text and error message component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">

  <fieldset class="nhsuk-fieldset app-fieldset--custom-modifier" aria-describedby="example-hint example-error" data-attribute="value" data-second-attribute="second-value">

  <legend class="nhsuk-fieldset__legend">
    Have you changed your name?
  </legend>

  <span id="example-hint" class="nhsuk-hint">
    This includes changing your last name or spelling your name differently.
  </span>

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

### Nunjucks macro

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

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Radios component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/radios) with a few minor adaptations.
