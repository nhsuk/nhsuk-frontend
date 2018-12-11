# Footer

Find out more about the footer component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/footer/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/168).

## Quick start examples

### Footer

[Preview the footer component](https://nhsuk.github.io/nhsuk-frontend/components/footer.html)

### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer">
    <div class="nhsuk-width-container">
      <div class="nhsuk-footer__logo">
        <a href="/" class="global-footer__link" aria-label="NHS homepage">
          <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" viewBox="0 0 40 16">
            <path fill="#005eb8" d="M0 0h40v16H0z"></path>
            <path fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
            <image xlink:href="" src="https://assets.nhs.uk/images/nhs-logo.png"></image>
          </svg>
        </a>
      </div>
      <ul class="nhsuk-footer__list">
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/sitemap/">Sitemap</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/accessibility/">Accessibility</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/">Our policies</a></li>
      </ul>
      <p class="nhsuk-footer__copyright">&copy; Crown Copyright</li>
    </div>
  </div>
</footer>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/footer/macro.njk' import footer %}

{{ footer({
  "primaryLinks": [
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

#### Nunjucks arguments

The footer Nunjucks macro takes the following arguments:

| Name                         | Type     | Required  | Description  |
| -----------------------------|----------|-----------|--------------|
| **primaryLinks**             | array    | No        | Array of primary navigation items for use in the footer. |
| **primaryLinks.[].url**      | string   | No        | The href of a primary navigation item in the footer. |
| **primaryLinks.[].label**    | string   | No        | The label of a primary navigation item in the footer. |
| **homeHref**                 | string   | No        | The href of the home link for the logo. Defaults to "/". |
| **showLogo**                 | boolean  | No        | Show or hide the NHS logo in the footer. Logo shows by default. |
