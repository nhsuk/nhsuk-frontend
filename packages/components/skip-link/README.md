# Skip link

## Introduction

The skip link component is used help users skip to the main content on a page.

## Guidance

Find out more about the skip link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the review skip link component]()

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
