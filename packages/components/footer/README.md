# Footer

## Guidance

Find out more about the footer component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/footer).

## Quick start examples

### Footer

[Preview the footer component](https://nhsuk.github.io/nhsuk-frontend/components/footer/index.html)

#### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer" id="nhsuk-footer">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <ul class="nhsuk-footer__list">
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/nhs-sites/">NHS sites</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/">About us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/contact-us/">Contact us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/sitemap/">Sitemap</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/">Our policies</a></li>
      </ul>
      <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
    </div>
  </div>
</footer>
```

#### Nunjucks macro

```
{% from 'components/footer/macro.njk' import footer %}

{{ footer({
  "links": [
    {
      "URL": "https://www.nhs.uk/nhs-sites/",
      "label": "NHS sites"
    },
    {
      "URL": "https://www.nhs.uk/about-us/",
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

### Footer with list columns

[Preview the footer with list columns component](https://nhsuk.github.io/nhsuk-frontend/components/footer/columns.html)

#### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer" id="nhsuk-footer">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <ul class="nhsuk-footer__list nhsuk-footer__list--three-columns">
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/nhs-sites/">NHS sites</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/">About us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/contact-us/">Contact us</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/personalisation/login.aspx">Profile editor login</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/about-us/sitemap/">Sitemap</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/accessibility/">Accessibility</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/">Our policies</a></li>
        <li class="nhsuk-footer__list-item"><a class="nhsuk-footer__list-item-link" href="https://www.nhs.uk/our-policies/cookies-policy/">Cookies</a></li>
      </ul>
      <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
    </div>
  </div>
</footer>
```

#### Nunjucks macro

```
{{ footer({
  "list": "nhsuk-footer__list--three-columns",
  "links": [
    {
      "URL": "https://www.nhs.uk/nhs-sites/",
      "label": "NHS sites"
    },
    {
      "URL": "https://www.nhs.uk/about-us/",
      "label": "About us"
    },
    {
      "URL": "https://www.nhs.uk/contact-us/",
      "label": "Contact us"
    },
    {
      "URL": "https://www.nhs.uk/personalisation/login.aspx",
      "label": "Profile editor login"
    },
    {
      "URL": "https://www.nhs.uk/about-us/sitemap/",
      "label": "Sitemap"
    },
    {
      "URL": "https://www.nhs.uk/accessibility/",
      "label": "Accessibility"
    },
    {
      "URL": "https://www.nhs.uk/our-policies/",
      "label": "Our policies"
    },
    {
      "URL": "https://www.nhs.uk/our-policies/cookies-policy/",
      "label": "Cookies"
    }
  ]
})}}
```

### Nunjucks arguments

The footer Nunjucks macro takes the following arguments:

| Name                         | Type     | Required  | Description  |
| -----------------------------|----------|-----------|--------------|
| **links**             | array    | No        | Array of primary navigation items for use in the footer. |
| **links.[].url**      | string   | No        | The href of a primary navigation item in the footer. |
| **links.[].label**    | string   | No        | The label of a primary navigation item in the footer. |
| **list**              | string   | No        | Option for the links list to be in columns to support more links. |
| **classes**           | string   | No        | Optional additional classes to add to the footer container. Separate each class with a space. |
| **attributes**        | object   | No        | Any extra HTML attributes (for example data attributes) to add to the footer container. |
| **copyright**        | string   | No        | The label for the copyright notice in the footer. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
