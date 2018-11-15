# Button

Find out more about the button component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/203).

## Quick start examples

### Button

[Preview the button component](https://nhsuk.github.io/nhsuk-frontend/components/button/index.html)

### HTML markup

```html
<button type="submit" class="nhsuk-button">
  Save and continue
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Save and continue"
}) }}
```

### Button disabled

[Preview the button disabled component](https://nhsuk.github.io/nhsuk-frontend/components/button/disabled.html)

### HTML markup

```html
<button type="submit" disabled="disabled" aria-disabled="true" class="nhsuk-button nhsuk-button--disabled">
  Disabled button
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Disabled button",
  "disabled": true
}) }}
```

### Button secondary

[Preview the button secondary component](https://nhsuk.github.io/nhsuk-frontend/components/button/secondary.html)

### HTML markup

```html
<button type="submit" class="nhsuk-button nhsuk-button--secondary">
  Save and continue
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Find my location",
  "classes": "nhsuk-button--secondary"
}) }}
```

### Button secondary disabled

[Preview the button secondary disabled component](https://nhsuk.github.io/nhsuk-frontend/components/button/secondary-disabled.html)

### HTML markup

```html
<button type="submit" class="nhsuk-button nhsuk-button--secondary nhsuk-button--disabled">
  Find my location
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Find my location",
  "classes": "nhsuk-button--secondary",
  "disabled": true
}) }}
```

### Button reverse

[Preview the button reverse component](https://nhsuk.github.io/nhsuk-frontend/components/button/reverse.html)

### HTML markup

```html
<button type="submit" class="nhsuk-button nhsuk-button--reverse">
  Save and continue
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Save and continue",
  "classes": "nhsuk-button--reverse"
}) }}
```

### Button reverse disabled

[Preview the button reverse disabled component](https://nhsuk.github.io/nhsuk-frontend/components/button/reverse-disabled.html)

### HTML markup

```html
<button type="submit" class="nhsuk-button nhsuk-button--reverse nhsuk-button--disabled">
  Save and continue
</button>
```

### Nunjucks macro

```
{% from 'components/button/macro.njk' import button %}

{{ button({
  "text": "Save and continue",
  "classes": "nhsuk-button--reverse",
  "disabled": true
}) }}
```

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Button component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/button) with a few minor adaptations.

