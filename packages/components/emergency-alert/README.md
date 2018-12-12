# Emergency alert

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/166).

## Quick start examples

### Emergency alert

[Preview the emergency alert component](https://nhsuk.github.io/nhsuk-frontend/components/emergency-alert.html)

### HTML markup

```html
<div id="nhsuk-global-alert" class="nhsuk-global-alert">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <div class="nhsuk-global-alert__content">
          <h2 class="nhsuk-global-alert__heading"><span class="nhsuk-u-visually-hidden">Alert: </span>National flu outbreak</h2>
          <p class="nhsuk-global-alert__message">There has been a national flu outbreak. <a href="https://www.nhs.uk" class="nhsuk-u-nowrap">How does it affect me</a></p>
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
  "href": "https://www.nhs.uk",
  "label": "How does it affect me",
  "lastUpdated": "Updated 23 mins ago"
}) }}
```
