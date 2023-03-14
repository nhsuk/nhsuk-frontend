# Textarea

## Guidance

Find out more about the textarea component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/textarea).

## Quick start examples

### Textarea

[Preview the textarea component](https://nhsuk.github.io/nhsuk-frontend/components/textarea/index.html)

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="more-detail">
  Can you provide more detail?
  </label>
  <div class="nhsuk-hint" id="more-detail-hint">
  Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <textarea class="nhsuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

#### Nunjucks macro

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

---

### Textarea with autocomplete attribute

[Preview the textarea with autocomplete attribute component](https://nhsuk.github.io/nhsuk-frontend/components/textarea/autocomplete.html)

#### Guidance

See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used.

#### HTML markup

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="textarea-with-autocomplete-attribute">
  Full address
  </label>
  <textarea class="nhsuk-textarea" id="textarea-with-autocomplete-attribute" name="address" rows="5" autocomplete="street-address"></textarea>
</div>
```

#### Nunjucks macro

```
{% from 'components/textarea/macro.njk' import textarea %}

{{ textarea({
  "name": "address",
  "id": "textarea-with-autocomplete-attribute",
  "label": {
    "text": "Full address"
  },
  "autocomplete": "street-address"
}) }}
```

---

### Textarea with error message

[Preview the textarea with error message component](https://nhsuk.github.io/nhsuk-frontend/components/textarea/error.html)

#### HTML markup

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

#### Nunjucks macro

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

---

### Nunjucks arguments

The textarea Nunjucks macro takes the following arguments:

| Name             | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**           | string | Yes      | The id of the textarea.                                                                                                                                                                                                                                                                                                                                   |
| **describedBy**  | string | No       | Text or element id to add to the `aria-describedby` attribute to provide description for screenreader users.                                                                                                                                                                                                                                              |
| **name**         | string | Yes      | The name of the textarea, which is submitted with the form data.                                                                                                                                                                                                                                                                                          |
| **rows**         | string | No       | Optional number of textarea rows (default is 5 rows).                                                                                                                                                                                                                                                                                                     |
| **value**        | string | No       | Optional initial value of the textarea.                                                                                                                                                                                                                                                                                                                   |
| **label**        | object | Yes      | Arguments for the label component. See [label](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/label) component.                                                                                                                                                                                                                  |
| **hint**         | object | No       | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                                                                                                                                                                                                         |
| **errorMessage** | object | No       | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component.                                                                                                                                                                              |
| **classes**      | string | No       | Optional additional classes to add to the textarea tag. Separate each class with a space.                                                                                                                                                                                                                                                                 |
| **autocomplete** | string | No       | Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for instance "postal-code" or "username". See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used. |
| **attributes**   | object | No       | Any extra HTML attributes (for example data attributes) to add to the textarea tag.                                                                                                                                                                                                                                                                       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Textarea component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/textarea) with a few minor adaptations.
