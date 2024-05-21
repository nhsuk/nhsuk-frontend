# Inset text

## Guidance

Find out more about the inset text component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/inset-text).

## Quick start example

[Preview the inset text component](https://nhsuk.github.io/nhsuk-frontend/components/inset-text/index.html)

### HTML markup

```html
<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>You can report any suspected side effect to the <a href="https://yellowcard.mhra.gov.uk/" title="External website">UK safety scheme</a>.</p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/inset-text/macro.njk' import insetText %}

{{ insetText({
  "html": "<p>You can report any suspected side effect to the <a href=\"https://yellowcard.mhra.gov.uk/\" title=\"External website\">UK safety scheme</a>.</p>"
}) }}
```

### Nunjucks arguments

The inset text Nunjucks macro takes the following arguments:

| Name           | Type   | Required | Description                                                                                       |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| **html**       | string | Yes      | HTML content to be used within the inset text component.                                          |
| **classes**    | string | No       | Optional additional classes to add to the inset text container. Separate each class with a space. |
| **attributes** | object | No       | Any extra HTML attributes (for example data attributes) to add to the inset text container.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
