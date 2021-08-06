# Nav Sibling

## Quick start example

[Preview the nav sibling component](https://nhsuk.github.io/nhsuk-frontend/components/nav-sibling/index.html)

### HTML markup

```html
<nav role="navigation" class="nhsuk-nav-sibling">
  <ul class="nhsuk-nav-sibling__list">
    <li class="nhsuk-nav-sibling__item is-active" >
      Main symptoms of COVID-19
    </li>
    <li class="nhsuk-nav-sibling__item">
      <a class="nhsuk-nav-sibling__link" href="/coronavirus-in-children">
        COVID-19 symptoms in children
      </a>
    </li>
    <li class="nhsuk-nav-sibling__item">
      <a class="nhsuk-nav-sibling__link" href="/what-to-do-if-you-get-symptoms-again">
        What to do if you get symptoms again
      </a>
    </li>
  </ul>
</nav>
```

### Nunjucks macro

```
{% from 'components/nav-sibling/macro.njk' import siblingNav %}

{{ siblingNav({
  "items": [
    {
      "active": "true",
      "text": "Main symptoms of COVID-19",
      "href": "/main-symptoms"
    },
    {
      "text": "COVID-19 symptoms in children",
      "href": "/coronavirus-in-children"
    },
    {
      "text": "What to do if you get symptoms again",
      "href": "/what-to-do-if-you-get-symptoms-again"
    }
  ]
}) }}
```

### Nunjucks arguments

The nav sibling Nunjucks macro takes the following arguments:

| Name                  | Type     | Required  | Description  |
| ----------------------|----------|-----------|--------------|
| **items**             | array    | Yes       | Array of navigation items. |
| **items.[].label**    | string   | Yes       | The label of the item in the navigation. |
| **items.[].active**  | boolean  | No        | If set to true, then the navigation item will not be within an anchor element. |
| **classes**           | string   | No        | Optional additional classes to add to the nav sibling. Separate each class with a space. |
| **attributes**        | object   | No        | Any extra HTML attributes (for example data attributes) to add to the nav sibling. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
