# Inset text

Find out more about the inset text component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the inset text component]()

## HTML markup

```html
<div class="nhsuk-c-inset-text">
  <span class="visually-hidden">Information: </span>
  <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla/" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
</div>
```

## Nunjucks macro

```html
{% from 'components/inset-text/macro.njk' import insetText %}

{{ insetText({
  "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla/' title='External website'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href='https://www.gov.uk/dizziness-and-driving' title='External website'>driving with vertigo</a></p>"
}) }}
```
