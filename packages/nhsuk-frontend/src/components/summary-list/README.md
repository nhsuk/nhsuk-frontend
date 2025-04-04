# Summary list

## Quick start examples

### Summary list

[Preview the summary list component](https://nhsuk.github.io/nhsuk-frontend/components/summary-list/index.html)

#### HTML markup

```html
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
    <dd class="nhsuk-summary-list__actions">
      <a href="#">
        Change
        <span class="nhsuk-u-visually-hidden"> name</span>
      </a>
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="nhsuk-summary-list__actions">
      <a href="#">
        Change
        <span class="nhsuk-u-visually-hidden"> date of birth</span>
      </a>
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact information
    </dt>
    <dd class="nhsuk-summary-list__value">
      72 Guild Street
      <br>London
      <br>SE23 6FH
    </dd>
    <dd class="nhsuk-summary-list__actions">
      <a href="#">
        Change
        <span class="nhsuk-u-visually-hidden"> contact information</span>
      </a>
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact details
    </dt>
    <dd class="nhsuk-summary-list__value">
      <p class="nhsuk-body">07700 900457</p>
      <p class="nhsuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="nhsuk-summary-list__actions">
      <a href="#">
        Change
        <span class="nhsuk-u-visually-hidden"> contact details</span>
      </a>
    </dd>
  </div>
</dl>
```

#### Nunjucks macro

```
{% from "components/summary-list/macro.njk" import summaryList %}

{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact information"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p>07700 900457</p><p>sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

---

### Summary list without actions

[Preview the summary list without actions component](https://nhsuk.github.io/nhsuk-frontend/components/summary-list/without-actions.html)

#### HTML markup

```html
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact information
    </dt>
    <dd class="nhsuk-summary-list__value">
      72 Guild Street
      <br>London
      <br>SE23 6FH
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact details
    </dt>
    <dd class="nhsuk-summary-list__value">
      <p class="nhsuk-body">07700 900457</p>
      <p class="nhsuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

#### Nunjucks macro

```
{% from "components/summary-list/macro.njk" import summaryList %}

{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p>07700 900457</p><p>sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

---

### Summary list without border

[Preview the summary list without border component](https://nhsuk.github.io/nhsuk-frontend/components/summary-list/without-border.html)

#### HTML markup

```html
<dl class="nhsuk-summary-list nhsuk-summary-list--no-border">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Name
    </dt>
    <dd class="nhsuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="nhsuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact information
    </dt>
    <dd class="nhsuk-summary-list__value">
      72 Guild Street
      <br>London
      <br>SE23 6FH
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Contact details
    </dt>
    <dd class="nhsuk-summary-list__value">
      <p class="nhsuk-body">07700 900457</p>
      <p class="nhsuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

#### Nunjucks macro

```
{% from "components/summary-list/macro.njk" import summaryList %}

{{ summaryList({
  classes: 'nhsuk-summary-list--no-border',
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p>07700 900457</p><p>sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

---

### Nunjucks arguments

The summary list Nunjucks macro takes the following arguments:

| Name                            | Type   | Required | Description                                                                                                                                                                                   |
| ------------------------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| classes                         | string | No       | Classes to add to the container.                                                                                                                                                              |
| attributes                      | object | No       | HTML attributes (for example data attributes) to add to the container.                                                                                                                        |
| rows                            | array  | Yes      | Array of row item objects.                                                                                                                                                                    |
| rows.classes                    | string | No       | Classes to add to the row wrapper.                                                                                                                                                            |
| rows.key.text                   | string | Yes      | If html is set, this is not required. Text to use within the each key. If html is provided, the text argument will be ignored.                                                                |
| rows.key.html                   | string | Yes      |                                                                                                                                                                                               |
| rows.key.classes                | string | No       | Classes to add to the key wrapper.                                                                                                                                                            |
| rows.value.text                 | string | Yes      | If html is set, this is not required. Text to use within the each value. If html is provided, the text argument will be ignored.                                                              |
| rows.value.html                 | string | Yes      | If text is set, this is not required. HTML to use within the each value. If html is provided, the text argument will be ignored.                                                              |
| rows.key.classes                | string | No       | Classes to add to the value wrapper.                                                                                                                                                          |
| rows.actions.items              | array  | No       | Array of action item objects.                                                                                                                                                                 |
| action.items.classes            | string | No       | Classes to add to the actions wrapper.                                                                                                                                                        |
| action.items.href               | string | Yes      | The value of the link href attribute for an action item.                                                                                                                                      |
| action.items.text               | string | Yes      | If html is set, this is not required. Text to use within each action item. If html is provided, the text argument will be ignored.                                                            |
| action.items.html               | string | Yes      | If text is set, this is not required. HTML to use within the each action item. If html is provided, the text argument will be ignored.                                                        |
| action.items.visuallyHiddenText | string | Yes      | Actions rely on context from the surrounding content so may require additional accessible text, text supplied to this option is appended to the end, use html for more complicated scenarios. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Summary list component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/summary-list) with a few minor adaptations.
