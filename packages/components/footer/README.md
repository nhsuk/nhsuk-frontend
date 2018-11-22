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
        <a href="/" class="global-footer__link">
          <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
            <g fill="none">
              <path fill="#fff" d="M0 39.842h98.203V0H0z"></path>
              <path fill="#0058ad" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84m32.852.001h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816m49.53 7.209c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
            </g>
            <image xlink:href="" src="/assets/logos/fallback/logo-nhs.png"></image>
          </svg>
          <span class="nhsuk-u-visually-hidden">NHS homepage</span>
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
      "URL": "https://www.nhs.uk/Personalisation/Login.aspx",
      "label": "Profile editor login"
    }
  ],
  "secondaryLinks": [
    {
      "URL": "https://www.nhs.uk/about-us/sitemap/",
      "label": "Sitemap"
    },
    {
      'URL': 'https://www.nhs.uk/accessibility/',
      'label': 'Accessibility'
    },
    {
      "URL": "https://www.nhs.uk/our-policies/",
      "label": "Our policies"
    }
  ]
})}}
```
