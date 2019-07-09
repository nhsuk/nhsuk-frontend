# Breadcrumb

## Guidance

Find out more about the breadcrumb component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/breadcrumbs).

## Quick start example

[Preview the breadcrumb component](https://nhsuk.github.io/nhsuk-frontend/components/breadcrumb/index.html)

### HTML markup

```html
<nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
  <div class="nhsuk-width-container">
    <ol class="nhsuk-breadcrumb__list">
      <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one">Level one</a></li>
      <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two">Level two</a></li>
      <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="/level-one/level-two/level-three">Level three</a></li>
    </ol>
    <p class="nhsuk-breadcrumb__back"><a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two/level-three">Back to Level three</a></p>
  </div>
</nav>
```

### Nunjucks macro

```
{% from 'components/breadcrumb/macro.njk' import breadcrumb %}

{{ breadcrumb({
  items: [
    {
      href: "/level-one",
      text: "Level one"
    },
    {
      href: "/level-one/level-two",
      text: "Level two"
    }
  ],
  href: "/level-one/level-two/level-three",
  text: "Level three"
}) }}
```

### Nunjucks arguments

The breadcrumb Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| items               | array    | Yes       | Array of breadcrumbs item objects. |
| items.{}.text       | string   | Yes       | Text to use within the breadcrumbs item. |
| items.{}.href	      | string   | Yes       | Link for the breadcrumbs item. |
| items.{}.attributes	| object   | No        | Any extra HTML attributes (for example data attributes) to add to the breadcrumb anchor item. |
| href                | string   | Yes       | Link of the current page  |
| text                | string   | Yes       | Text for the current page |
| classes             | string   | No        | Optional additional classes to add to the breadcrumbs container. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the breadcrumbs container. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
