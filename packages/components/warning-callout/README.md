# Warning callout

## Guidance

Find out more about the warning callout component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/warning-callout).

## Quick start example

[Preview the warning callout component](https://nhsuk.github.io/nhsuk-frontend/components/warning-callout/index.html)

### HTML markup

```html
<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">School, nursery or work</h3>
  <p>Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```html
{% from 'components/warning-callout/macro.njk' import warningCallout %}

{{ warningCallout({
  "heading": "School, nursery or work",
  "HTML": "<p>Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>"
}) }}
```

### Nunjucks arguments

The warning callout Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **heading**             | string   | Yes       | Heading to be used within the warning callout component. |
| **HTML**                | string   | Yes       | Content to be used within the warning callout component. |
| **headingLevel**        | integer  | No        | Optional heading level for the  heading. Default: 3 |
| **classes**             | string   | No        | Optional additional classes to add to the warning callout. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the warning callout. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
