# Back link

Find out more about the back link component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/202).

## Quick start examples

### Back link

[Preview the back link component](https://nhsuk.github.io/nhsuk-frontend/components/back-link/index.html)

### HTML markup

```html
<a href="#" class="nhsuk-back-link">
  <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
  </svg>
  Back to home
</a>
```

### Nunjucks macro

```
{% from 'components/back-link/macro.njk' import backLink %}

{{ backLink({
  "href": "#"
  "text": "Back to home"
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                | Type     | Required  | Description             |
| --------------------|----------|-----------|-------------------------|
| **text (or) html**  | string   | Yes       | Text or HTML to use within the back link component. If `html` is provided, the `text` argument will be ignored. |
| **href**            | string   | Yes       | The value of the link href attribute. |
| **classes**         | string   | No        | Optional additional classes to add to the button element. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the textarea tag. |

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Back link component](https://github.com/alphagov/govuk-frontend/tree/master/package/components/back-link) with a few minor adaptations.
