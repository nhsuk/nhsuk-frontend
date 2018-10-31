# Contents list

Find out more about the contents list component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Contents list example

[Preview the contents list component]()

## Contents list HTML markup

    <nav class="nhsuk-c-contents-list" aria-label="Pages in this guide">
      <h2 class="visually-hidden">Contents</h2>
      <ol class="nhsuk-c-contents-list__list">
        <li class="nhsuk-c-contents-list__item">
          <span class="nhsuk-c-contents-list__current" aria-current="page">What is AMD?</span>
        </li>
        <li class="nhsuk-c-contents-list__item">
          <a class="nhsuk-c-contents-list__link" href="https://www.nhs.uk">Symptoms</a>
        </li>
        <li class="nhsuk-c-contents-list__item">
          <a class="nhsuk-c-contents-list__link" href="https://www.nhs.uk">Getting diagnosed</a>
        </li>
        <li class="nhsuk-c-contents-list__item">
          <a class="nhsuk-c-contents-list__link" href="https://www.nhs.uk">Treatments</a>
        </li>
        <li class="nhsuk-c-contents-list__item">
          <a class="nhsuk-c-contents-list__link" href="https://www.nhs.uk">Living with AMD</a>
        </li>
      </ol>
    </nav>


## Contents list nunjucks macro

    {% from 'components/contents-list/macro.njk' import contentsList %}

    {{ contentsList({
      items: [
        {
          URL: "https://www.nhs.uk/",
          label: "What is AMD?",
          current: "true"
        },
        {
          URL: "https://www.nhs.uk",
          label: "Symptoms"
        },
        {
          URL: "https://www.nhs.uk",
          label: "Getting diagnosed"
        }
        ,
        {
          URL: "https://www.nhs.uk",
          label: "Treatments"
        }
        ,
        {
          URL: "https://www.nhs.uk",
          label: "Living with AMD"
        }
      ]
    }) }}
