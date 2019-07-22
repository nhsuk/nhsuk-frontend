# Review date

## Guidance

Find out more about the review date component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/review-date).

## Quick start example

[Preview the review date component](https://nhsuk.github.io/nhsuk-frontend/components/review-date/index.html)

### HTML markup

```html
<div class="nhsuk-review-date">
  <p class="nhsuk-body-s">
    Page last reviewed: 12 February 2016<br>
    Next review due: 1 February 2019
  </p>
</div>
```

### Nunjucks macro

```html
{% from 'components/review-date/macro.njk' import reviewDate %}

{{ reviewDate({
  "lastReview": "12 February 2016",
  "nextReview": "1 February 2019"
}) }}
```

### Nunjucks arguments

The review date Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **lastReview**      | string   | No        | The value of the last review date |
| **nextReview**      | string   | No        | The value of the next review date |
| **classes**         | string   | No        | Optional additional classes to add to the review date. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the review date. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
