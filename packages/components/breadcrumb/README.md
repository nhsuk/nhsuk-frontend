# Breadcrumb

Find out more about the breadcrumb component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/158).

## Quick start examples

### Breadcrumb

[Preview the breadcrumb component](https://nhsuk.github.io/nhsuk-frontend/components/breadcrumb.html)

### HTML markup

```html
<nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
  <div class="nhsuk-width-container">
    <ol class="nhsuk-breadcrumb__list">
      <li class="nhsuk-breadcrumb__item">
        <a href="https://www.nhs.uk/" class="nhsuk-breadcrumb__link" >Home</a> 
        <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/>
        </svg>
      </li>
      <li class="nhsuk-breadcrumb__item">
        <a href="https://www.nhs.uk/conditions" class="nhsuk-breadcrumb__link" >Health A-Z</a> 
        <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/>
        </svg>
      </li>
      <li class="nhsuk-breadcrumb__item"><a href="https://www.nhs.uk/conditions/abscess/" class="nhsuk-breadcrumb__link">Abscess</a></li>
    </ol>
    <p class="nhsuk-breadcrumb__back">
      <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"/>
      </svg>
      <a href="https://www.nhs.uk/conditions/abscess/" class="nhsuk-breadcrumb__backlink">Back to Abscess</a>
    </p>
  </div>
</nav>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

``` 
{% from 'components/breadcrumb/macro.njk' import breadcrumb %}

{{ breadcrumb({
  items: [
    {
      text: "Home",
      href: "https://www.nhs.uk/"
    },
    {
      text: "Health A-Z",
      href: "https://www.nhs.uk/conditions"
    }
  ],
  href: "https://www.nhs.uk/conditions/abscess/",
  text: "Abscess"
}) }}
```

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments: 

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| items               | array    | Yes       | Array of breadcrumbs item objects. |
| items.{}.text       | string   | Yes       | Text to use within the breadcrumbs item. |
| items.{}.href	      | string   | Yes       | Link for the breadcrumbs item. |
| items.{}.attributes	| object   | No        | Any extra HTML attributes (for example data attributes) to add to the breadcrumb anchor item. |
| href                | string   | Yes       | Link of the current page  |
| text                | string   | Yes       | Text for the current page |
| classes             | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the breadcrumbs container. |
