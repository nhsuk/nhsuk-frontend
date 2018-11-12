# Panel

Find out more about the panel component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/175).

## Quick start examples

### Panel

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/panel.html)

### HTML markup

```html
<div class="nhsuk-panel">
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "HTML": "
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

### Panel with a label

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/panel-with-label.html)

### HTML markup

```html
<div class="nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Panel heading</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "label": "Panel heading",
  "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```
           
### Grey panel

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/panel-grey.html)

### HTML markup

```html
<div class="nhsuk-panel nhsuk-panel--grey">
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "colour": "grey",
  "HTML": "
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

### Panel group

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/panel-group.html)

### HTML markup

```html
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
</div>
```
