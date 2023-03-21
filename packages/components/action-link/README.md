# Action link

## Guidance

Find out more about the action link component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/action-link).

## Quick start example

[Preview the action link component](https://nhsuk.github.io/nhsuk-frontend/components/action-link/index.html)

### HTML markup

```html
<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Find a minor injuries unit</span>
  </a>
</div>
```

### Nunjucks macro

```
{% from 'components/action-link/macro.njk' import actionLink %}

{{ actionLink({
  "text": "Find a minor injuries unit",
  "href": "https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551"
}) }}
```

### Nunjucks arguments

The action link Nunjucks macro takes the following arguments:

| Name            | Type    | Required | Description                                                                             |
| --------------- | ------- | -------- | --------------------------------------------------------------------------------------- |
| text            | string  | Yes      | Text to be displayed within the action link component.                                  |
| href            | string  | Yes      | The value of the link href attribute                                                    |
| openInNewWindow | boolean | No       | If set to true, then the link will open in a new window                                 |
| classes         | string  | No       | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes      | object  | No       | Any extra HTML attributes (for example data attributes) to add to the anchor tag.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
