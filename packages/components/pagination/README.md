# Pagination

## Guidance

Find out more about the pagination component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/pagination).

## Quick start examples

### Pagination

[Preview the pagination component](https://nhsuk.github.io/nhsuk-frontend/components/pagination/index.html)

#### HTML markup

```html
<nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
  <ul class="nhsuk-list nhsuk-pagination__list">
    <li class="nhsuk-pagination-item--previous">
      <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="/section/treatments">
        <span class="nhsuk-pagination__title">Previous</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">Treatments</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
          <path d="M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z"></path>
        </svg>
      </a>
    </li>
    <li class="nhsuk-pagination-item--next">
      <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/section/symptoms">
        <span class="nhsuk-pagination__title">Next</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">Symptoms</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
          <path d="m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z"></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>
```

#### Nunjucks macro

```
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "previousUrl": "/section/treatments",
  "previousPage": "Treatments",
  "nextUrl": "/section/symptoms",
  "nextPage": "Symptoms"
}) }}
```

---

### Next pagination

#### HTML markup

```html
<nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
  <ul class="nhsuk-list nhsuk-pagination__list">
    <li class="nhsuk-pagination-item--next">
      <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/section/symptoms">
        <span class="nhsuk-pagination__title">Next</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">Symptoms</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
          <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>

```

#### Nunjucks macro

```
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "nextUrl": "/section/symptoms",
  "nextPage": "Symptoms"
}) }}
```

---

### Previous pagination

#### HTML markup

```html
<nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
  <ul class="nhsuk-list nhsuk-pagination__list">
    <li class="nhsuk-pagination-item--previous">
      <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="/section/treatments">
        <span class="nhsuk-pagination__title">Previous</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">Treatments</span>
        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
          <path d="M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z"></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>

```

#### Nunjucks macro

```
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "previousUrl": "/section/treatments",
  "previousPage": "Treatments"
}) }}
```

---

### Nunjucks arguments

The pagination Nunjucks macro takes the following arguments:

| Name             | Type   | Required | Description                                                                             |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------------------- |
| **previousUrl**  | string | Yes      | The value of the previous link href attribute.                                          |
| **previousPage** | string | Yes      | The text of the previous link.                                                          |
| **nextUrl**      | string | Yes      | The value of the next link href attribute.                                              |
| **nextPage**     | string | Yes      | The text of the next link.                                                              |
| **classes**      | string | No       | Optional additional classes to add to the pagination. Separate each class with a space. |
| **attributes**   | object | No       | Any extra HTML attributes (for example data attributes) to add to the pagination.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
