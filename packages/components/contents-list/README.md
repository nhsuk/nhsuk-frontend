# Contents list

Find out more about the care card component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/161).

## Quick start examples

### Contents list

[Preview the contents list component](https://nhsuk.github.io/nhsuk-frontend/components/contents-list.html)

### HTML markup

```html
<nav class="nhsuk-contents-list" aria-label="Pages in this guide">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item">
      <span class="nhsuk-contents-list__current" aria-current="page">What is AMD?</span>
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

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/contents-list/macro.njk' import contentsList %}

{{ contentsList({
  items: [
    {
      href: "https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/",
      text: "What is AMD?",
      current: "true"
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

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments: 

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| text                | string   | Yes       | text value of the items in the contents list. |
| href                | string   | Yes       | href value of the items in contents list. |
| current             | boolean  | No        | Current active page in the contents list. |
| classes             | string   | No        | Optional additional classes content list container. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to items in the list. |
