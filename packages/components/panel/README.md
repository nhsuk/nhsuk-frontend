# Panel

## Guidance

Find out more about the panel component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/panel).

## Quick start example

[Preview the panel component](https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html)

### HTML markup

```html
<div class="nhsuk-panel">
  <h1 class="nhsuk-panel__title">
    Application complete
  </h1>
  <div class="nhsuk-panel__body">
    Your reference number<br><strong>HDJ2123F</strong>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  titleText: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}
```

### Nunjucks arguments

The panel Nunjucks macro takes the following arguments:

| Name             | Type           | Required | Description                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **titleText**    | string         | Yes      | If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.                                                                                                                                                                                                         |
| **titleHtml**    | string         | Yes      | If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, the `titleText` option will be ignored.                                                                                                                                                                                                         |
| **headingLevel** | integer        | No       | Heading level, from `1` to `6`. Default is `1`.                                                                                                                                                                                                                                                                                                        |
| **text**         | string         | No       | If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, the `text` option will be ignored.                                                                                                                                                                                                                |
| **html**         | string         | No       | If `text` is set, this is not required. Text to use within the panel content. If `text` is provided, the `html` option will be ignored.                                                                                                                                                                                                                |
| **caller**       | nunjucks-block | No       | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire panel component in a `call` block. |
| **classes**      | string         | No       | Optional additional classes to add to the hint div tag. Separate each class with a space.                                                                                                                                                                                                                                                              |
| **attributes**   | object         | No       | Any extra HTML attributes (for example data attributes) to add to the input component.                                                                                                                                                                                                                                                                 |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Panel component](https://github.com/alphagov/govuk-frontend/tree/main/packages/govuk-frontend/src/govuk/components/panel) with a few minor adaptations.
