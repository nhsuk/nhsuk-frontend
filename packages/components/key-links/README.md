# Key links

## Guidance

Find out more about the key links component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/key-links).

## Quick start example

[Preview the key links component](https://nhsuk.github.io/nhsuk-frontend/components/key-links/index.html)

### HTML markup

```html
<nav class="nhsuk-key-links" role="navigation" aria-label="Pages in this section">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ul class="nhsuk-key-links__list">
      <li class="nhsuk-key-links__item">
        <a class="nhsuk-key-links__link" href="https://www.nhs.uk/conditions/coronavirus-covid-19/symptoms/main-symptoms/">Main symptoms of COVID-19 </a>
      </li>
      <li class="nhsuk-key-links__item">
        <a class="nhsuk-key-links__link" href="https://www.nhs.uk/conditions/coronavirus-covid-19/symptoms/coronavirus-in-children/">COVID-19 symptoms in children </a>
      </li>
      <li class="nhsuk-key-links__item">
        <a class="nhsuk-key-links__link" href="https://www.nhs.uk/conditions/coronavirus-covid-19/symptoms/what-to-do-if-you-get-symptoms-again/">What to do if you get symptoms again </a>
      </li>
  </ul>
</nav>
```

### Nunjucks macro

```
{% from 'components/key-links/macro.njk' import keyLinks %}

{{ keyLinks({
  items: [
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/",
      text: "What is AMD?",
    },
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/",
      text: "Symptoms"
    },
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/",
      text: "Getting diagnosed"
    }
    ,
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/",
      text: "Treatments"
    }
    ,
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/",
      text: "Living with AMD"
    }
  ]
}) }}
```

### Nunjucks arguments

The key links Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description  |
| ------------------------|----------|-----------|--------------|
| **items**               | array    | Yes       | Array of items in the key links. |
| **items.[].href**       | string   | Yes       | Href value of an item in the key links. |
| **items.[].text**       | string   | Yes       | Text value of an item in the key links. |
| **classes**             | string   | No        | Optional additional classes content list container. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to items in the list. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
