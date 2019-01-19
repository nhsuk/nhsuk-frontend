# Panel

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/175).

## Quick start examples

### Panel

[Preview the panel component](https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html)

### HTML markup

```html
<div class="nhsuk-panel">
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "HTML": "<h3>Panel title</h3>
  <p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>""
}) }}
```

### Panel with a label

[Preview the panel with a label component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-with-label.html)

### HTML markup

```html
<div class="nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Panel heading</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "label": "Panel heading",
  "HTML": "<p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

### Grey panel

[Preview the grey panel component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-grey.html)

### HTML markup

```html
<div class="nhsuk-panel nhsuk-panel--grey">
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "colour": "grey",
  "HTML": "
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

### Panel group

[Preview the panel group component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-group.html)

### HTML markup

```html
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel ">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel ">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel ">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel ">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/panel/macro.njk' import panel %}

<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href=\"https://www.gov.uk/contact-the-dvla\" title=\"External website\">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
</div>
```

## Nunjucks arguments

The panel group Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **HTML**            | string   | Yes       | HTML content to be used within the panel component. |
| **label**           | string   | No        | The label of the panel component. |
| **headingLevel**    | integer  | No        | Optional heading level for the label  heading. Default: 3 |
| **classes**         | string   | No        | Optional additional classes to add to the panel. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the panel. |
