# Review date

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/177).

## Quick start examples

### Example

[Preview the review date component](https://nhsuk.github.io/nhsuk-frontend/components/review-date/index.html)

### HTML markup

```html
<div class="nhsuk-review-date">
  <p class="nhsuk-body-s">
    Page last reviewed: <time>12 February 2016</time><br>
    Next review due: <time>1 February 2019</time>
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

#### Nunjucks arguments

The review date Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **lastReview**      | string   | No        | The value of the last review date |
| **nextReview**      | string   | No        | The value of the next review date |
| **classes**         | string   | No        | Optional additional classes to add to the review date. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the review date. |
