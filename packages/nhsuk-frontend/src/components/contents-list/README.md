# Contents list

## Guidance

Find out more about the contents list component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/contents-list).

## Quick start example

[Preview the contents list component](https://nhsuk.github.io/nhsuk-frontend/components/contents-list/index.html)

### HTML markup

```html
<nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item" aria-current="page">
      <span class="nhsuk-contents-list__current">What is AMD?</span>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">Symptoms</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">Getting diagnosed</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">Treatments</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">Living with AMD</a>
    </li>
  </ol>
</nav>
```

### Nunjucks macro

```
{% from 'components/contents-list/macro.njk' import contentsList %}

{{ contentsList({
  items: [
    {
      href: "#",
      text: "What is AMD?",
      current: "true"
    },
    {
      href: "#",
      text: "Symptoms"
    },
    {
      href: "#",
      text: "Getting diagnosed"
    }
    ,
    {
      href: "#",
      text: "Treatments"
    }
    ,
    {
      href: "#",
      text: "Living with AMD"
    }
  ]
}) }}
```

### Nunjucks arguments

The contents list Nunjucks macro takes the following arguments:

| Name              | Type    | Required | Description                                                                           |
| ----------------- | ------- | -------- | ------------------------------------------------------------------------------------- |
| **items**         | array   | Yes      | Array of items in the contents list.                                                  |
| **items.[].href** | string  | Yes      | Href value of an item in the contents list.                                           |
| **items.[].text** | string  | Yes      | Text value of an item in the contents llst.                                           |
| **current**       | boolean | No       | Current active page in the contents list.                                             |
| **classes**       | string  | No       | Optional additional classes content list container. Separate each class with a space. |
| **attributes**    | object  | No       | Any extra HTML attributes (for example data attributes) to items in the list.         |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
