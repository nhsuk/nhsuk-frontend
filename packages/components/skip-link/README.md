# Skip link

Find out more about the skip link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/178).


## Dependencies

For this component be fully accessible, you need to make sure you include the required JavaScript. This fixes a VoiceOver issue with the skip link not focussing down to the content, include the skip link JavaScript file.

Include the compiled JavaScript for all components `nhsuk.min.js` in your project.

## Quick start examples

### Example

[Preview the skip link component](https://nhsuk.github.io/nhsuk-frontend/components/skip-link.html)

### HTML markup

```html
<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```html
{% from 'components/skip-link/macro.njk' import skipLink %}

{{ skipLink({
  "URL": "#maincontent",
  "heading": "Skip to main content"
}) }}
```
