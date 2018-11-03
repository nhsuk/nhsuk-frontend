# Skip link

Find out more about the skip link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Dependencies

For this component be fully accessible, you need to make sure you include the required JavaScript. This fixes a VoiceOver issue with the skip link not focussing down to the content, include the skip link JavaScript file.

Include the compiled JavaScript for all components `nhsuk.min.js` in your project.

## Example

[Preview the skip link component]()

## HTML markup

```html
<a href="#maincontent" class="nhsuk-skip-link">Skip to main content</a>
```

## Nunjucks macro

```
{% from 'components/skip-link/macro.njk' import skipLink %}

{{ skipLink({
  "URL": "#maincontent",
  "heading": "Skip to main content"
}) }}
```
