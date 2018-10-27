# Panel

Find out more about the panel component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the panel component]()

## HTML markup

```html
<div class="nhsuk-c-panel">
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

## Nunjucks macro

```html
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "HTML": "
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

## Panel with a label

## Example

[Preview the panel with a label component]()

## HTML markup

```html
<div class="nhsuk-c-panel-with-label">
  <h3 class="nhsuk-c-panel-with-label__label">Panel heading</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

## Nunjucks macro

```html
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "label": "Panel heading",
  "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```
           
## Grey panel

## Example

[Preview the grey panel component]()

## HTML markup

```html
<div class="nhsuk-c-panel nhsuk-c-panel--grey">
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

## Nunjucks macro

```html
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "colour": "grey",
  "HTML": "
  <h3>Panel title</h3>
  <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
}) }}
```

## Panel group

## Example

[Preview the panel group component]()

## HTML markup

```html
<div class="nhsuk-grid-row nhsuk-c-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
    <div class="nhsuk-c-panel">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
    <div class="nhsuk-c-panel">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>
  </div>
</div>
```

## Nunjucks macro

```html
{% from 'components/panel/macro.njk' import panel %}

<div class="nhsuk-grid-row nhsuk-c-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
    {{ panel({
      "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
  </div>
</div>
```
