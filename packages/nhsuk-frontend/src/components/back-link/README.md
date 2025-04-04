# Back link

## Guidance

Find out more about the back link component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/back-link).

## Quick start example

[Preview the back link component](https://nhsuk.github.io/nhsuk-frontend/components/back-link/index.html)

### HTML markup

```html
<div class="nhsuk-back-link">
  <a class="nhsuk-back-link__link" href="#">
    <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>
    Go back
  </a>
</div>
```

### Nunjucks macro

```
{% from 'components/back-link/macro.njk' import backLink %}

{{ backLink({
  "href": "#",
  "text": "Go back"
}) }}
```

## As a button

[Preview the back link component - as a button](https://nhsuk.github.io/nhsuk-frontend/components/back-link/button.html)

### HTML markup

```html
<div class="nhsuk-back-link">
  <button class="nhsuk-back-link__link">
    <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>
    Go back
  </button>
</div>
```

### Nunjucks macro

```
{% from 'components/back-link/macro.njk' import backLink %}

{{ backLink({
  "element": "button",
  "text": "Go back"
}) }}
```

### Nunjucks arguments

The back link Nunjucks macro takes the following arguments:

| Name               | Type   | Required | Description                                                                                                     |
| ------------------ | ------ | -------- | --------------------------------------------------------------------------------------------------------------- |
| **text (or) html** | string | Yes      | Text or HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. |
| **href**           | string | No       | The value of the link href attribute.                                                                           |
| **classes**        | string | No       | Optional additional classes to add to the back link element. Separate each class with a space.                  |
| **element**        | string | No       | Which html element to use to render the back link - `button` or `a`. If not provided, defaults to `a`           |
| **attributes**     | object | No       | Any extra HTML attributes (for example data attributes) to add to the tag.                                      |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Back link component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/back-link) with a few minor adaptations.
