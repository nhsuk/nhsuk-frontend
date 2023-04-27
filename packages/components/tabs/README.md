# Tabs

## Guidance

Find out more about the tabs component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/tabs).

## Quick start example

[Preview the tabs component](https://nhsuk.github.io/nhsuk-frontend/components/tabs/index.html)

### HTML markup

```html
<div class="nhsuk-tabs" data-module="nhsuk-tabs">
  <h2 class="nhsuk-tabs__title">Contents</h2>

  <ul class="nhsuk-tabs__list">
    <li class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected">
      <a class="nhsuk-tabs__tab" href="#tab-one">Tab one</a>
    </li>
    <li class="nhsuk-tabs__list-item">
      <a class="nhsuk-tabs__tab" href="#tab-two">Tab two</a>
    </li>
    <li class="nhsuk-tabs__list-item">
      <a class="nhsuk-tabs__tab" href="#tab-three">Tab three</a>
    </li>
  </ul>

  <div class="nhsuk-tabs__panel" id="tab-one">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>

  <div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="tab-two">
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt.
    </p>
  </div>

  <div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="tab-three">
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
      vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
      eum fugiat quo voluptas nulla pariatur?
    </p>
  </div>
</div>
```

### Nunjucks macro

```html
{% from 'components/tabs/macro.njk' import tabs %}

{% set tabOneContent %}
  <h2>Tab one content</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{% endset -%}

{% set tabTwoContent %}
  <h2>Tab two content</h2>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
{% endset -%}

{% set tabThreeContent %}
  <h2>Tab three content</h2>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
{% endset -%}

{{ tabs({
  items: [
    {
      label: "Tab one",
      id: "tab-one",
      panel: {
        html: tabOneContent
      }
    },
    {
      label: "Tab two",
      id: "tab-two",
      panel: {
        html: tabTwoContent
      }
    },
    {
      label: "Tab three",
      id: "tab-three",
      panel: {
        html: tabThreeContent
      }
    }
  ]
}) }}
```

## Nunjucks arguments

The tabs Nunjucks macro takes the following arguments:

| Name           | Type   | Required | Description                                                                    |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------ |
| **id**         | string | No       | This is used for the main component and to compose id attribute for each item. |
| **idPrefix**   | string | No       | String to prefix id for each tab item if no id is specified on each item       |
| **title**      | string | No       | Title for the tabs table of contents                                           |
| **items**      | array  | Yes      | Array of tab items.                                                            |
| **classes**    | string | No       | Classes to add to the tabs component.                                          |
| **attributes** | object | No       | HTML attributes (for example data attributes) to add to the tabs component.    |

### Options for items

| Name           | Type   | Required | Description                                                                                     |
| -------------- | ------ | -------- | ----------------------------------------------------------------------------------------------- |
| **id**         | string | Yes      | Specific id attribute for the tab item. If omitted, then `idPrefix` string is required instead. |
| **label**      | string | Yes      | The text label of a tab item.                                                                   |
| **attributes** | object | No       | HTML attributes (for example data attributes) to add to the tab.                                |
| **panel**      | object | Yes      | Content for the panel                                                                           |

### Options for panel

| Name           | Type   | Required | Description                                                                                                                                |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **text**       | string | Yes      | If `html` is set, this is not required. Text to use within each tab panel. If `html` is provided, the `text` argument will be ignored.     |
| **html**       | string | Yes      | If `text` is set, this is not required. HTML to use within the each tab panel. If `html` is provided, the `text` argument will be ignored. |
| **attributes** | object | No       | HTML attributes (for example data attributes) to add to the tab panel.                                                                     |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
