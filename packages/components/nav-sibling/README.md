# Nav A-Z

## Quick start example

[Preview the nav a-z component](https://nhsuk.github.io/nhsuk-frontend/components/nav-sibling/index.html)

### HTML markup

```html
<nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" aria-label="A to Z Navigation">
  <ol class="nhsuk-nav-a-z__list" role="list">
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#A">A</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <span class="nhsuk-nav-a-z__link--disabled">B</span>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#C">C</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#D">D</a>
    </li>
  </ol>
</nav>
```

### Nunjucks macro

```
{% from 'components/nav-sibling/macro.njk' import siblingNav %}

{{ azNav({
  "items": [
    {
      "isActive": "true",
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

The nav a-z Nunjucks macro takes the following arguments:

| Name                  | Type     | Required  | Description  |
| ----------------------|----------|-----------|--------------|
| **items**             | array    | Yes       | Array of navigation items. |
| **items.[].label**    | string   | Yes       | The label of the item in the navigation. |
| **items.[].disable**  | boolean  | No        | If set to true, then the navigation item will not be within an anchor element. |
| **classes**           | string   | No        | Optional additional classes to add to the nav a-z. Separate each class with a space. |
| **attributes**        | object   | No        | Any extra HTML attributes (for example data attributes) to add to the nav a-z. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
