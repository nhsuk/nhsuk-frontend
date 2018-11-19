# Back link

Find out more about the back link component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/202).

## Quick start examples

### Back link

[Preview the back link component](https://nhsuk.github.io/nhsuk-frontend/components/back-link/index.html)

### HTML markup

```html
<a href="#" class="nhsuk-back-link">Back</a>
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
