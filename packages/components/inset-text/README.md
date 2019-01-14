# Inset text

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/172).

## Guidance

Find out more about the inset text component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/inset_text/).

## Quick start examples

### Inset text

[Preview the inset text component](https://nhsuk.github.io/nhsuk-frontend/components/inset-text.html)

### HTML markup

```html
<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/inset-text/macro.njk' import insetText %}

{{ insetText({
  "HTML": "<p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

#### Nunjucks arguments

The inset text Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description  |
| ------------------------|----------|-----------|--------------|
| **HTML**                | string   | Yes       | HTML content to be used within the inset text component. |
| **classes**             | string   | No        | Optional additional classes to add to the inset text container. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the inset text container. |
