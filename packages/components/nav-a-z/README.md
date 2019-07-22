# Nav A-Z

## Quick start example

[Preview the nav a-z component](https://nhsuk.github.io/nhsuk-frontend/components/nav-a-z/index.html)

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
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#E">E</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#F">F</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#G">G</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#H">H</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#I">I</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#J">J</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#K">K</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#L">L</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#M">M</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#N">N</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#O">O</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#P">P</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Q">Q</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#R">R</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#S">S</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#T">T</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#U">U</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#V">V</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#W">W</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#X">X</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Y">Y</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Z">Z</a>
    </li>
  </ol>
</nav>
```

### Nunjucks macro

```
{% from 'components/nav-a-z/macro.njk' import azNav %}

{{ azNav({
  "items": [
    {
      "label": "A"
    },
    {
      "disable": "true",
      "label": "B"
    },
    {
      "label": "C"
    },
    {
      "label": "D"
    },
    {
      "label": "E"
    },
    {
      "label": "F"
    },
    {
      "label": "G"
    },
    {
      "label": "H"
    },
    {
      "label": "I"
    },
    {
      "label": "J"
    },
    {
      "label": "K"
    },
    {
      "label": "L"
    },
    {
      "label": "M"
    },
    {
      "label": "N"
    },
    {
      "label": "O"
    },
    {
      "label": "P"
    },
    {
      "label": "Q"
    },
    {
      "label": "R"
    },
    {
      "label": "S"
    },
    {
      "label": "T"
    },
    {
      "label": "U"
    },
    {
      "label": "V"
    },
    {
      "label": "W"
    },
    {
      "label": "X"
    },
    {
      "label": "Y"
    },
    {
      "label": "Z"
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
