# Footer

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/168).

## Guidance
Find out more about the footer component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/footer/).

## Quick start examples

### Footer

[Preview the footer component](https://nhsuk.github.io/nhsuk-frontend/components/footer/index.html)

### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer" id="nhsuk-footer">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <ul class="nhsuk-footer__list">
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/Pages/nhs-sites.aspx">NHS sites</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us">About us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/contact-us/">Contact us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/sitemap/">Sitemap</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/">Our policies</a></li>
      </ul>
      <p class="nhsuk-footer__copyright">&copy; Crown Copyright</p>
    </div>
  </div>
</footer>
```

### Nunjucks macro

```
{% from 'components/footer/macro.njk' import footer %}

  {{ footer({
    "links": [
      {
        "URL": "https://www.nhs.uk/Pages/nhs-sites.aspx",
        "label": "NHS sites"
      },
      {
        "URL": "https://www.nhs.uk/about-us",
        "label": "About us"
      },
      {
        "URL": "https://www.nhs.uk/contact-us/",
        "label": "Contact us"
      },
      {
        "URL": "https://www.nhs.uk/about-us/sitemap/",
        "label": "Sitemap"
      },
      {
        "URL": "https://www.nhs.uk/our-policies/",
        "label": "Our policies"
      }
    ]
  })}}
```
## Nunjucks arguments

The footer Nunjucks macro takes the following arguments:

| Name                         | Type     | Required  | Description  |
| -----------------------------|----------|-----------|--------------|
| **links**             | array    | No        | Array of primary navigation items for use in the footer. |
| **links.[].url**      | string   | No        | The href of a primary navigation item in the footer. |
| **links.[].label**    | string   | No        | The label of a primary navigation item in the footer. |
