# Textarea

Find out more about the textarea component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](TODO).

## Quick start examples

### Textarea

[Preview the textarea component](https://nhsuk.github.io/nhsuk-frontend/components/textarea.html)

### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="more-detail">
    Can you provide more detail?
  </label>

  <span id="more-detail-hint" class="nhsuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </span>

  <textarea class="nhsuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

### Nunjucks macro

```
{% from 'components/textarea/macro.njk' import textarea %}

{{ textarea({
  "name": "more-detail",
  "id": "more-detail",
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

### Textarea with error message

[Preview the textarea with error message component](TODO)

### HTML markup

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="no-ni-reason">
    Why can&#39;t you provide a National Insurance number?
  </label>

  <span id="no-ni-reason-error" class="nhsuk-error-message">
    You must provide an explanation
  </span>

  <textarea class="nhsuk-textarea nhsuk-textarea--error" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>
```

### Nunjucks macro

```
{% from 'components/textarea/macro.njk' import textarea %}

{{ textarea({
  "name": "no-ni-reason",
  "id": "no-ni-reason",
  "label": {
    "text": "Why can't you provide a National Insurance number?"
  },
  "errorMessage": {
    "text": "You must provide an explanation"
  }
}) }}
```

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Textarea component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/textarea) with a few minor adaptations.
