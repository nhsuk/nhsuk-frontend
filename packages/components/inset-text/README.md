# Inset text

Find out more about the inset text component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/172).

## Quick start examples

### Inset text

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/inset-text.html)

### HTML markup

```html
<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

### Nunjucks macro

```
{% from 'components/inset-text/macro.njk' import insetText %}

{{ insetText({
  "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla' title='External website'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href='https://www.gov.uk/dizziness-and-driving' title='External website'>driving with vertigo</a></p>"
}) }}
```
