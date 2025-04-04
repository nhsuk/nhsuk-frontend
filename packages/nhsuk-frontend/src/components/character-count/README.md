# Character Count

## Guidance

Find out more about the character component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/character-count).

## Quick start examples

### Character count - max characters

[Preview the character count component](https://nhsuk.github.io/nhsuk-frontend/components/character-count/index.html)

#### HTML markup

```html
<div class="nhsuk-character-count" data-module="nhsuk-character-count" data-maxlength="200">
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="more-detail">Can you provide more detail?</label>
    <div class="nhsuk-hint" id="more-detail-hint">
      Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
    </div>
    <textarea
      class="nhsuk-textarea nhsuk-js-character-count"
      id="more-detail"
      name="more-detail"
      rows="5"
      aria-describedby="more-detail-hint"></textarea>
  </div>

  <div class="nhsuk-hint nhsuk-character-count__message" id="more-detail-info">You can enter up to 200 characters</div>
</div>
```

#### Nunjucks macro

```
{% from 'components/character-count/macro.njk' import characterCount %}

{{ characterCount({
  "name": "more-detail",
  "id": "more-detail",
  "maxlength": 200,
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

---

### Character count - with threshold

[Preview the character count component with threshold](https://nhsuk.github.io/nhsuk-frontend/components/character-count/threshold.html)

#### HTML markup

```html
<div class="nhsuk-character-count" data-module="nhsuk-character-count" data-maxlength="200" data-threshold="75">
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="more-detail">Can you provide more detail?</label>
    <div class="nhsuk-hint" id="more-detail-hint">
      Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
    </div>
    <textarea
      class="nhsuk-textarea nhsuk-js-character-count"
      id="more-detail"
      name="more-detail"
      rows="5"
      aria-describedby="more-detail-hint"></textarea>
  </div>

  <div class="nhsuk-hint nhsuk-character-count__message" id="more-detail-info">You can enter up to 200 characters</div>
</div>
```

#### Nunjucks macro

```
{% from 'components/character-count/macro.njk' import characterCount %}

{{ characterCount({
  "name": "more-detail",
  "id": "more-detail",
  "maxlength": 200,
  "threshold": 75,
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

---

### Character count - max words

[Preview the character count component](https://nhsuk.github.io/nhsuk-frontend/components/character-count/words.html)

#### HTML markup

```html
<div class="nhsuk-character-count" data-module="nhsuk-character-count" data-maxwords="200">
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="more-detail">Can you provide more detail?</label>
    <div class="nhsuk-hint" id="more-detail-hint">
      Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
    </div>
    <textarea
      class="nhsuk-textarea nhsuk-js-character-count"
      id="more-detail"
      name="more-detail"
      rows="5"
      aria-describedby="more-detail-hint"></textarea>
  </div>

  <div class="nhsuk-hint nhsuk-character-count__message" id="more-detail-info">You can enter up to 200 words</div>
</div>
```

#### Nunjucks macro

```
{% from 'components/character-count/macro.njk' import characterCount %}

{{ characterCount({
  "name": "more-detail",
  "id": "more-detail",
  "maxwords": 200,
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

---

### Nunjucks arguments

The character count Nunjucks macro takes the following arguments:

| Name                     | Type   | Required | Description                                                                                                                                                                  |
| ------------------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**                   | string | Yes      | The id of the textarea.                                                                                                                                                      |
| **describedBy**          | string | No       | Text or element id to add to the `aria-describedby` attribute to provide description for screenreader users.                                                                 |
| **name**                 | string | Yes      | The name of the textarea, which is submitted with the form data.                                                                                                             |
| **rows**                 | string | No       | Optional number of textarea rows (default is 5 rows).                                                                                                                        |
| **value**                | string | No       | Optional initial value of the textarea.                                                                                                                                      |
| **label**                | object | Yes      | Arguments for the label component. See [label](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/label) component.                                     |
| **hint**                 | object | No       | Arguments for the hint component (e.g. text). See [hint](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/hint) component.                            |
| **errorMessage**         | object | No       | Arguments for the error message component (e.g. text). See [error message](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message) component. |
| **classes**              | string | No       | Optional additional classes to add to the textarea tag. Separate each class with a space.                                                                                    |
| **attributes**           | object | No       | Any extra HTML attributes (for example data attributes) to add to the textarea tag.                                                                                          |
| **maxlength**            | string | No.      | If maxwords is set, this is not required. The maximum number of characters. If maxwords is provided, the maxlength argument will be ignored.                                 |
| **maxwords**             | string | No.      | If maxlength is set, this is not required. The maximum number of words. If maxwords is provided, the maxlength argument will be ignored.                                     |
| **threshold**            | string | No       | The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.                      |
| **countMessage.classes** | string | No       | Classes to add to the count message.                                                                                                                                         |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Character Count component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/character-count) with a few minor adaptations.
