# Warning callout

Find out more about the warning callout component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/warning_callout/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/180).

## Quick start examples

### Example

[Preview the warning callout component](https://nhsuk.github.io/nhsuk-frontend/components/warning-callout.html)

### HTML markup

```html
<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__heading-tab">Important</h3>
  <p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```html
{% from 'components/warning-callout/macro.njk' import warningCallout %}

{{ warningCallout({
  "heading": "Important",
  "HTML": "<p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>"
}) }}
```
