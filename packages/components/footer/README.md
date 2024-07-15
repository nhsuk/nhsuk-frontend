# Footer

## Guidance

Find out more about the footer component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/footer).

Your copyright statement must reflect the ownership of your website or service. The NHS website is (c) Crown copyright but the NHS generally does not have Crown status.

## Quick start examples

### Footer (default)

[Preview the footer (default) component](https://nhsuk.github.io/nhsuk-frontend/components/footer/index.html)

#### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer-container">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <div class="nhsuk-footer">
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Accessibility statement</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Give us feedback</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Cookies</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Privacy policy</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Terms and conditions</a>
          </li>
        </ul>
        <div>
          <p class="nhsuk-footer__copyright">&copy; NHS England</p>
        </div>
      </div>
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
      "URL": "#",
      "label": "Accessibility statement"
    },
    {
      "URL": "#",
      "label": "Give us feedback"
    },
    {
      "URL": "#",
      "label": "Cookies"
    },
    {
      "URL": "#",
      "label": "Privacy policy"
    },
    {
      "URL": "#",
      "label": "Terms and conditions"
    }
  ]
})}}
```

### Footer (columns)

[Preview the Footer (columns) component](https://nhsuk.github.io/nhsuk-frontend/components/footer/footer-in-columns.html)

#### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer-container">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <div class="nhsuk-footer">
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/">Home</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/conditions/">Health A to Z</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/live-well/">Live Well</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/mental-health/">Mental health</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/conditions/social-care-and-support-guide/">Care and support</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/pregnancy/">Pregnancy</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/nhs-services/">NHS services</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/conditions/coronavirus-covid-19/">Coronavirus (COVID-19)</a>
          </li>
        </ul>
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/nhs-app/">NHS App</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/nhs-services/online-services/find-nhs-number/">Find my NHS number</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/using-the-nhs/about-the-nhs/your-health-records/">Your health records</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/using-the-nhs/about-the-nhs/">About the NHS</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/using-the-nhs/healthcare-abroad/apply-for-a-free-uk-global-health-insurance-card-ghic/">Healthcare abroad</a>
          </li>
        </ul>
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/nhs-sites/">Other NHS websites</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/our-policies/profile-editor-login/">Profile editor login</a>
          </li>
        </ul>
        <ul class="nhsuk-footer__list nhsuk-footer__meta">
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/about-us/">About us</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/contact-us/">Give us feedback</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/accessibility-statement/">Accessibility statement</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/our-policies/">Our policies</a>
          </li>
          <li class="nhsuk-footer__list-item">
            <a class="nhsuk-footer__list-item-link" href="/our-policies/cookies-policy/">Cookies</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
      </div>
    </div>
  </div>
</footer>
```

#### Nunjucks macro

```
{% from 'components/footer/macro.njk' import footer %}

{{ footer({
  "copyright": "© Crown copyright",
  "links": [
    {
      "URL": "#",
      "label": "Home"
    },
    {
      "URL": "#",
      "label": "Health A to Z"
    },
    {
      "URL": "#",
      "label": "Live Well"
    },
    {
      "URL": "#",
      "label": "Mental health"
    },
    {
      "URL": "#",
      "label": "Care and support"
    },
    {
      "URL": "#",
      "label": "Accessibility statement"
    },
    {
      "URL": "#",
      "label": "Pregnancy"
    },
    {
      "URL": "#",
      "label": "NHS services"
    },
    {
      "URL": "#",
      "label": "Coronavirus (COVID-19)"
    }
  ],
  "linksColumn2": [
    {
      "URL": "#",
      "label": "NHS App"
    },
    {
      "URL": "#",
      "label": "Find my NHS number"
    },
    {
      "URL": "#",
      "label": "Your health records"
    },
    {
      "URL": "#",
      "label": "About the NHS"
    },
    {
      "URL": "#",
      "label": "Healthcare abroad"
    }
  ],
  "linksColumn3": [
    {
      "URL": "#",
      "label": "Other NHS websites"
    },
    {
      "URL": "#",
      "label": "Profile editor login"
    }
  ],
  "metaLinks": [
    {
      "URL": "#",
      "label": "About us"
    },
    {
      "URL": "#",
      "label": "Give us feedback"
    },
    {
      "URL": "#",
      "label": "Accessibility statement"
    },
    {
      "URL": "#",
      "label": "Our policies"
    },
    {
      "URL": "#",
      "label": "Cookies"
    }
  ]
})}}
```

### Footer (custom copyright statement)

[Preview the footer (custom copyright statement) component](https://nhsuk.github.io/nhsuk-frontend/components/footer/custom-copyright.html)

#### HTML markup

```html
<footer role="contentinfo">
  <div class="nhsuk-footer-container">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <div class="nhsuk-footer">
        <ul class="nhsuk-footer__list">
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Accessibility statement</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Give us feedback</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Cookies</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Privacy policy</a>
          </li>
          <li class="nhsuk-footer__list-item nhsuk-footer-default__list-item">
            <a class="nhsuk-footer__list-item-link" href="#">Terms and conditions</a>
          </li>
        </ul>
        <div>
          <p class="nhsuk-footer__copyright">&copy; East London NHS Foundation Trust</p>
        </div>
      </div>
    </div>
  </div>
</footer>
```

#### Nunjucks macro

```
{% from 'components/footer/macro.njk' import footer %}

{{ footer({
  "copyright": "© East London NHS Foundation Trust",
  "links": [
    {
      "URL": "#",
      "label": "Accessibility statement"
    },
    {
      "URL": "#",
      "label": "Give us feedback"
    },
    {
      "URL": "#",
      "label": "Cookies"
    },
    {
      "URL": "#",
      "label": "Privacy policy"
    },
    {
      "URL": "#",
      "label": "Terms and conditions"
    }
  ]
})}}
```

### Nunjucks arguments

The footer Nunjucks macro takes the following arguments:

| Name                      | Type   | Required | Description                                                                                   |
| ------------------------- | ------ | -------- | --------------------------------------------------------------------------------------------- |
| **links**                 | array  | No       | Array of first column of navigation items for use in the footer.                              |
| **links.[].url**          | string | No       | The href of a navigation item in the first column of the footer.                              |
| **links.[].label**        | string | No       | The label of a navigation item in the first column of the footer.                             |
| **linksColumn2**          | array  | No       | Array of second column of navigation items for use in the footer.                             |
| **linksColumn2.[].url**   | string | No       | The href of a navigation item in the second column of the footer.                             |
| **linksColumn2.[].label** | string | No       | The label of a navigation item in the second column of the footer.                            |
| **linksColumn3**          | array  | No       | Array of third column of navigation items for use in the footer.                              |
| **linksColumn3.[].url**   | string | No       | The href of a navigation item in the third column of the footer.                              |
| **linksColumn3.[].label** | string | No       | The label of a navigation item in the third column of the footer.                             |
| **copyright**             | string | No       | Optional text for the copyright notice in the footer. Defaults to '© NHS England'            |
| **classes**               | string | No       | Optional additional classes to add to the footer container. Separate each class with a space. |
| **attributes**            | object | No       | Any extra HTML attributes (for example data attributes) to add to the footer container.       |
| **copyright**             | string | No       | The label for the copyright notice in the footer.                                             |
| **metaLinks**             | array  | No       | Array of policy navigation items for use in the footer.                                       |
| **metaLinks.[].url**      | string | No       | The href of a policy navigation item in the footer.                                           |
| **metaLinks.[].label**    | string | No       | The label of a policy navigation item in the footer.                                          |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
