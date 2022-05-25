# Sideways navigation

## Quick start example

[Preview the sideways navigation component](https://nhsuk.github.io/nhsuk-frontend/components/navigation-sideways/index.html)

### HTML markup

```html
<nav role="navigation" class="nhsuk-navigation-sideways" data-attribute="value" data-second-attribute="second-value" aria-label="Pages in this section">
  <h2 class="nhsuk-u-font-size-24">
    More in
    <a href="https://www.nhs.uk/">
      Symptoms of coronavirus (COVID-19)
    </a>
  </h2>
  <ul class="beta-nhsuk-navigation-sideways__list">
        <li class="beta-nhsuk-navigation-sideways__item is-active" aria-current="page">
          Main symptoms of COVID-19
        </li>
        <li class="beta-nhsuk-navigation-sideways__item">
          <a class="nhsuk-navigation-sideways__link" href="#">
            COVID-19 symptoms in children
          </a>
        </li>
        <li class="beta-nhsuk-navigation-sideways__item">
          <a class="nhsuk-navigation-sideways__link" href="#">
            What to do if you get symptoms again
          </a>
        </li>
  </ul>
</nav>
```

### Nunjucks macro

```
{% from 'components/navigation-sideways/macro.njk' import navSidways %}

{{ navSidways({
  "heading": "Symptoms of coronavirus (COVID-19)",
  "href": "https://www.nhs.uk/",
  "classes": "example",
  "attributes": {
    "data-attribute": "value",
    "data-second-attribute": "second-value",
    "aria-label": "Pages in this section"
  },
  "items": [
    {
      "active": "true",
      "text": "Main symptoms of COVID-19",
      "href": "#"
    },
    {
      "text": "COVID-19 symptoms in children",
      "href": "#"
    },
    {
      "text": "What to do if you get symptoms again",
      "href": "#"
    }
  ]
}) }}
```

### Nunjucks arguments

The sideways navigation Nunjucks macro takes the following arguments:

| Name                  | Type     | Required  | Description  |
| ----------------------|----------|-----------|--------------|
| **heading**           | string   | Yes       | Heading for the sideways navigation. |
| **href**              | string   | Yes       | Href for the heading. |
| **items**             | array    | Yes       | Array of navigation items. |
| **items.[].text**     | string   | Yes       | Href value of an item in the sideways navigation. |
| **items.[].href**     | string   | Yes       | Href of the link in the  sideways navigation. |
| **items.[].active**   | boolean  | No        | If set to true, then the navigation item will not be within an anchor element. |
| **classes**           | string   | No        | Optional additional classes to add to the sideways navigation. Separate each class with a space. |
| **attributes**        | object   | No        | Any extra HTML attributes (for example data attributes) to add to the sideways navigation. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).