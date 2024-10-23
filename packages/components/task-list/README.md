# Task list

## Guidance

Find out more about the task-list component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/tabs).

## Quick start example

[Preview the task list component](https://nhsuk.github.io/nhsuk-frontend/components/task-list/index.html)

### HTML markup

```html
<ul class="nhsuk-task-list">

  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="#" aria-describedby="your-health-1-status">Exercise</a>
    </div>
    <div class="nhsuk-task-list__status nhsuk-task-list__status--completed" id="your-health-1-status">Completed</div>
  </li>

  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="#" aria-describedby="your-health-2-status">Personal health</a>
    </div>
    <div class="nhsuk-task-list__status nhsuk-task-list__status--completed" id="your-health-2-status">Completed</div>
  </li>

  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="#" aria-describedby="your-health-3-hint your-health-3-status">Family health history</a>
      <div id="your-health-3-hint" class="nhsuk-task-list__hint">Details of your parents and siblings</div>
    </div>
    <div class="nhsuk-task-list__status" id="your-health-3-status">
      <strong class="nhsuk-tag nhsuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>

  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="#" aria-describedby="your-health-4-status">Smoking history</a>
    </div>
    <div class="nhsuk-task-list__status" id="your-health-4-status">
      <strong class="nhsuk-tag nhsuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>

  <li class="nhsuk-task-list__item">
    <div class="nhsuk-task-list__name-and-hint">
      <div>Blood test</div>
    </div>
    <div class="nhsuk-task-list__status nhsuk-task-list__status--cannot-start-yet" id="your-health-5-status">Cannot start yet</div>
  </li>

</ul>
```

### Nunjucks macro

```html
{% from 'components/task-list/macro.njk' import taskList %}

{{ taskList({
  idPrefix: "your-health",
  items: [
    {
      title: {
        text: "Exercise"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Personal health"
      },
      href: "#",
      status: {
        text: "Completed",
        classes: "nhsuk-task-list__status--completed"
      }
    },
    {
      title: {
        text: "Family health history"
      },
      hint: {
        text: "Details of your parents and siblings"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "nhsuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Smoking history"
      },
      href: "#",
      status: {
        tag: {
          text: "Incomplete",
          classes: "nhsuk-tag--blue"
        }
      }
    },
    {
      title: {
        text: "Blood test"
      },
      status: {
        text: "Cannot start yet",
        classes: "nhsuk-task-list__status--cannot-start-yet"
      }
    }
  ]
}) }}
```

## Nunjucks arguments

The task list Nunjucks macro takes the following arguments:

| Name           | Type   | Required | Description                                                                                                                                  |
| -------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **items**      | array  | Yes      | The items for each task within the task list component. See items.                                                                           |
| **classes**    | string | No       | Classes to add to the `ul` container for the task list.                                                                                      |
| **attributes** | object | No       | HTML attributes (for example data attributes) to add to the `ul` container for the task list.                                                |
| **idPrefix**   | string | No       | Optional prefix. This is used to prefix the `id` attribute for the task list item tag and hint, separated by `-`. Defaults to `"task-list"`. |

### Options for `items` array

| Name        | Type   | Required | Description                                                                            |
| ----------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| **title**   | object | Yes      | The main title for the task within the task list component. See title.                 |
| **hint**    | object | No       | Can be used to add a hint to each task within the task list component. See items hint. |
| **status**  | object | Yes      | The status for each task within the task list component. See items status.             |
| **href**    | string | No       | The value of the link’s `href` attribute for the task list item.                       |
| **classes** | object | No       | Classes to add to the item `div`.                                                      |

### Options for `title` object

| Name        | Type   | Required | Description                                                                               |
| ----------- | ------ | -------- | ----------------------------------------------------------------------------------------- |
| **text**    | string | Yes      | Text to use within the title. If `html` is provided, the `text` argument will be ignored. |
| **html**    | string | Yes      | HTML to use within the title. If `html` is provided, the `text` argument will be ignored. |
| **classes** | object | No       | Classes to add to the title wrapper.                                                      |

### Options for `hint` object

| Name     | Type   | Required | Description                                                                              |
| -------- | ------ | -------- | ---------------------------------------------------------------------------------------- |
| **text** | string | Yes      | Text to use within the hint. If `html` is provided, the `text` argument will be ignored. |
| **html** | string | Yes      | HTML to use within the hint. If `html` is provided, the `text` argument will be ignored. |

### Options for `status` object

| Name        | Type   | Required | Description                                                                                                                        |
| ----------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **tag**     | object | No       | Can be used to add a tag to the status of the task within the task list component. See tag.                                        |
| **text**    | string | No       | Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| **html**    | string | No       | HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored. |
| **classes** | string | No       | Classes to add to the status container.                                                                                            |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
