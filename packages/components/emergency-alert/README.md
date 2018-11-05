# Emergency alert

Find out more about the emergency alert component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the emergency alert component]()

### HTML markup

    <div id="nhsuk-global-alert" class="nhsuk-global-alert">
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full">
            <div class="nhsuk-c-global-alert__content">
              <h2 class="nhsuk-c-global-alert__heading"><span class="nhsuk-visually-hidden">Alert: </span>National flu outbreak</h2>
              <p class="nhsuk-c-global-alert__message">There has been a national flu outbreak. <a href="http://www.nhs.uk" class="nhsuk-u-nowrap">How does it affect me</a></p>
              <p class="nhsuk-c-global-alert__updated">Updated 23 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>

### Nunjucks macro

    {% from 'components/emergency-alert/macro.njk' import emergencyAlert %}

    {{ emergencyAlert({
      "title": "National flu outbreak",
      "content": "There has been a national flu outbreak.",
      "emergencyURL": "http://www.nhs.uk",
      "emergencyLabel": "How does it affect me",
      "lastUpdated": "Updated 23 mins ago"
    }) }}
