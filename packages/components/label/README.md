# Label

## Quick start examples

### Label

[Preview the label component](https://nhsuk.github.io/nhsuk-frontend/components/label/index.html)

#### HTML markup

```html
<label class="nhsuk-label">
  National Insurance number
</label>
```

#### Nunjucks macro

```
{% from 'components/label/macro.njk' import label %}

{{ label({
  "text": "National Insurance number"
}) }}
```

---

### Label with bold text

[Preview the label with bold text component](https://nhsuk.github.io/nhsuk-frontend/components/label/bold.html)

#### HTML markup

```html
<label class="nhsuk-label nhsuk-label--s">
  National Insurance number
</label>
```

#### Nunjucks macro

```
{% from 'components/label/macro.njk' import label %}

{{ label({
  "classes": "nhsuk-label--s",
  "text": "National Insurance number"
}) }}
```

---

### Label as page heading

[Preview the label as page heading component](https://nhsuk.github.io/nhsuk-frontend/components/label/page-heading.html)

#### HTML markup

```html
<h1 class="nhsuk-label-wrapper">
  <label class="nhsuk-label nhsuk-label--xl">
    National Insurance number
  </label>
</h1>
```

#### Nunjucks macro

```
{% from 'components/label/macro.njk' import label %}

{{ label({
  "text": "National Insurance number",
  "classes": "nhsuk-label--xl",
  "isPageHeading": true
}) }}
```

---

### Nunjucks arguments

The label Nunjucks macro takes the following arguments:

| Name               | Type    | Required | Description                                                                                       |
| ------------------ | ------- | -------- | ------------------------------------------------------------------------------------------------- |
| **text (or) html** | string  | Yes      | Text or HTML to use within the label. If `html` is provided, the `text` argument will be ignored. |
| **for**            | string  | Yes      | The value of the for attribute, the id of the input the label is associated with.                 |
| **isPageHeading**  | boolean | No       | Whether the label also acts as the heading for the page.                                          |
| **classes**        | string  | No       | Optional additional classes to add to the label tag. Separate each class with a space.            |
| **attributes**     | object  | No       | Any extra HTML attributes (for example data attributes) to add to the label tag.                  |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Label component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/label) with a few minor adaptations.
