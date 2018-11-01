# Breadcrumb

Find out more about the breadcrumb component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the breadcrumb component]()

## HTML markup

    <nav class="nhsuk-c-breadcrumb" aria-label="Breadcrumb">
      <div class="nhsuk-width-container">
        <ol class="nhsuk-c-breadcrumb__list">
          <li class="nhsuk-c-breadcrumb__item">
            <a href="https://www.nhs.uk/" class="nhsuk-c-breadcrumb__link">Home</a> 
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></path>
            </svg>
          </li>
          <li class="nhsuk-c-breadcrumb__item">
            <a href="https://www.nhs.uk/conditions" class="nhsuk-c-breadcrumb__link">Health A-Z</a> 
            <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></path>
            </svg>
          </li>
          <li class="nhsuk-c-breadcrumb__item">
            <a href="https://www.nhs.uk/conditions/abscess/" class="nhsuk-c-breadcrumb__link">Abscess</a>
          </li>
        </ol>
        <p class="nhsuk-c-breadcrumb__back">
        <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"/></path>
          </svg>
          <a href="https://www.nhs.uk/conditions/abscess/" class="nhsuk-c-breadcrumb__backlink">Back to Abscess</a>
        </p>
      </div>
    </nav>

## Nunjucks macro

    {% from 'components/breadcrumb/macro.njk' import breadcrumb %}

  {{ breadcrumb({
    items: [
      {
        URL: "https://www.nhs.uk/",
        label: "Home"
      },
      {
        URL: "https://www.nhs.uk/conditions",
        label: "Health A-Z"
      }
    ],
    parentURL: "https://www.nhs.uk/conditions/abscess/",
    parentLabel: "Abscess"
  }) }}
