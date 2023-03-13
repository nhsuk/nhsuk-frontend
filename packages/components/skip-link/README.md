# Skip link

## Guidance

Find out more about the skip link component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/skip-link).

## Dependencies

There is an [in-page link bug in VoiceOver on iOS](https://bugs.webkit.org/show_bug.cgi?id=179011) whereby focus remains on the skip link anchor rather than
the next focusable element of the jumped to content.

This can be fixed by either including the compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `skip-link.js`.

The fix focuses on the first `H1` on the page if one exists. If one does not exist, then the default action for in-page links will take place.

Ensure the correct `id` value has been added to your main content for the skip link to work.

## Quick start example

[Preview the skip link component](https://nhsuk.github.io/nhsuk-frontend/components/skip-link/index.html)

### HTML markup

```html
<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
```

### Nunjucks macro

```html
{% from 'components/skip-link/macro.njk' import skipLink %}

{{ skipLink({
  "href": "#maincontent",
  "text": "Skip to main content"
}) }}
```

### Nunjucks arguments

The skip link Nunjucks macro takes the following arguments:

| Name           | Type   | Required | Description                                                                            |
| -------------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| **href**       | string | No       | The value of the skip link href attribute. Default: "#maincontent".                    |
| **text**       | string | No       | The text of the skip link. Default: "Skip to main content".                            |
| **classes**    | string | No       | Optional additional classes to add to the skip link. Separate each class with a space. |
| **attributes** | object | No       | Any extra HTML attributes (for example data attributes) to add to the skip link.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
