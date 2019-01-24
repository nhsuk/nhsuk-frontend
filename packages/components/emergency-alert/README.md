# Emergency alert

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/166).

## Quick start examples

### Emergency alert

[Preview the emergency alert component](https://nhsuk.github.io/nhsuk-frontend/components/emergency-alert/index.html)

### HTML markup

```html
<div class="nhsuk-global-alert" id="nhsuk-global-alert">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-global-alert__content">
          <h2 class="nhsuk-global-alert__heading"><span class="nhsuk-u-visually-hidden">Alert: </span>National flu outbreak</h2>
          <p class="nhsuk-global-alert__message">There has been a national flu outbreak. <a class="nhsuk-u-nowrap" href="https://www.nhs.uk" >How does it affect me</a></p>
          <p class="nhsuk-global-alert__updated">Updated 23 mins ago</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Nunjucks macro

```
{% from 'components/emergency-alert/macro.njk' import emergencyAlert %}

{{ emergencyAlert({
  "title": "National flu outbreak",
  "content": "There has been a national flu outbreak.",
  "label": "How does it affect me",
  "href": "https://www.nhs.uk",
  "lastUpdated": "Updated 23 mins ago"
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name              | Type     | Required  | Description |
| ------------------|----------|-----------|-------------|
| **title**         | string   | Yes       | Title to be displayed in the emergency alert component. |
| **content**       | string   | Yes       | Content of the emergency alert component |
| **label**         | string   | No        | Optional text to be displayed within the link at the end of the content |
| **href**          | string   | No        | Optional value of the link href attribute at the end of the content |
| **lastUpdated**   | string   | No        | Optional text displayed below the main content to show last updated message |
| **classes**       | string   | No        | Optional additional classes to add to the emergency alert container. Separate each class with a space. |
| **attributes**    | object   | No        | Any extra HTML attributes (for example data attributes) to add to the emergency alert container. |
