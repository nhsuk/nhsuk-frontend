# List panel

## Quick start example

[Preview the list panel component](https://nhsuk.github.io/nhsuk-frontend/components/list-panel/index.html)

### HTML markup

```html
<ol class="nhsuk-list">
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="A">A</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abdominal-aortic-aneurysm/">AAA</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abscess/">Abscess</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="B">B</h2>
      <div class="nhsuk-list-panel__box nhsuk-list-panel__box--with-label">
        <p class="nhsuk-list-panel--results-items__no-results">There are currently no conditions listed</p>
      </div>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="C">C</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/chest-pain/">Chest pain</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/cold-sores/">Cold sore</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="D">D</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/dandruff/">Dandruff</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/dementia/">Dementia</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/toothache/">Dental pain</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
</ol>
```

### Nunjucks macro

```
{% from 'components/list-panel/macro.njk' import listPanel %}

{{ listPanel({
  "label": "A",
  "id": "A",
  "backToTop": "true",
  "backToTopLink": "#nhsuk-nav-a-z",
  "items": [
    {
      "URL": "/conditions/abdominal-aortic-aneurysm/",
      "link": "AAA"
    },
    {
      "URL": "/conditions/abdominal-aortic-aneurysm/",
      "link": "Abdominal aortic aneurysm"
    },
    {
      "URL": "/conditions/abscess/",
      "link": "Abscess"
    }
  ]
}) }}

{{ listPanel({
  "label": "B",
  "id": "B",
  "disable": "true",
  "backToTop": "true",
  "backToTopLink": "#nhsuk-nav-a-z",
  "message": "There are currently no conditions listed"
}) }}

{{ listPanel({
  "label": "C",
  "id": "C",
  "backToTop": "true",
  "backToTopLink": "#nhsuk-nav-a-z",
  "items": [
    {
      "URL": "/conditions/chest-pain/",
      "link": "Chest pain"
    },
    {
      "URL": "/conditions/cold-sores/",
      "link": "Cold sore"
    }
  ]
}) }}

{{ listPanel({
  "label": "D",
  "id": "D",
  "backToTop": "true",
  "backToTopLink": "#nhsuk-nav-a-z",
  "items": [
    {
      "URL": "/conditions/dandruff/",
      "link": "Dandruff"
    },
    {
      "URL": "/conditions/dementia/",
      "link": "Dementia"
    },
    {
      "URL": "/conditions/toothache/",
      "link": "Dental pain"
    }
  ]
}) }}
```

### Nunjucks arguments

The list panel Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **label**           | string   | No        | The text label of the list panel. |
| **id**              | string   | No        | The ID of the label heading. |
| **headingLevel**    | integer  | No        | Optional heading level for the label heading. Default: 2 |
| **backToTop**       | boolean  | No        | If set to true, a back to top link will be displayed. |
| **backToTopLink**   | string   | No        | The href value of the back to top link. |
| **disable**         | boolean  | No        | If set to true, this indicates there are no items in the list panel. |
| **message**         | string   | No        | The text value to display if there are no items in the list panel (and disable has been set to true). |
| **items**           | array    | No        | Array of list panel items. |
| **items[].URL**     | string   | No        | The href value of an item in the list panel. |
| **items[].link**    | string   | No        | The text value of an item in the list panel. |
| **classes**         | string   | No        | Optional additional classes to add to the list panel. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the list panel. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
