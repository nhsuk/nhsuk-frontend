# Review date

Find out more about the review date component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/177).


## Quick start examples

### Example

[Preview the review date component](https://nhsuk.github.io/nhsuk-frontend/components/review-date.html)

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

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```html
{% from 'components/review-date/macro.njk' import reviewDate %}

{{ reviewDate({
  "lastReview": "12 February 2016",
  "nextReview": "1 February 2019"
}) }}
```
