# List panel

Find out more about the list panel component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the List panel component]()

## HTML markup

```html
<div class="nhsuk-c-list-panel nhsuk-c-list-panel--mobile">
  <h2 id="A" class="nhsuk-c-list-panel__label">A</h2>
  <ul class="nhsuk-c-list-panel__list  nhsuk-c-list-panel__list--with-label ">
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">AAA</a>
    </li>
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Abdominal aortic aneurysm</a>
    </li>
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Abscess</a>
    </li>
  </ul>
  <div class="nhsuk-c-back-to-top">
    <a class="nhsuk-c-back-to-top__link" href="#nhsuk-c-a-z-nav">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
      </svg>
      Back to top
    </a>
  </div>
</div>

<div class="nhsuk-c-list-panel nhsuk-c-list-panel--mobile">
  <h2 id="B" class="nhsuk-c-list-panel__label">B</h2>
  <div class="nhsuk-c-list-panel__box  nhsuk-c-list-panel__box--with-label ">
    <p class="nhsuk-c-list-panel--results-items__no-results">There are currently no medicines listed</p>
  </div>
  <div class="nhsuk-c-back-to-top">
    <a class="nhsuk-c-back-to-top__link" href="#nhsuk-c-a-z-nav">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
      </svg>
      Back to top
    </a>
  </div>

</div>

<div class="nhsuk-c-list-panel nhsuk-c-list-panel--mobile">
  <h2 id="C" class="nhsuk-c-list-panel__label">C</h2>
  <ul class="nhsuk-c-list-panel__list  nhsuk-c-list-panel__list--with-label ">
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Chest pain</a>
    </li>
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Cold sore</a>
    </li>
  </ul>
  <div class="nhsuk-c-back-to-top">
    <a class="nhsuk-c-back-to-top__link" href="#nhsuk-c-a-z-nav">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
      </svg>
      Back to top
    </a>
  </div>
</div>

<div class="nhsuk-c-list-panel nhsuk-c-list-panel--mobile">
  <h2 id="D" class="nhsuk-c-list-panel__label">D</h2>
  <ul class="nhsuk-c-list-panel__list  nhsuk-c-list-panel__list--with-label ">
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Dandruff</a>
    </li>
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Dementia</a>
    </li>
    <li class="nhsuk-c-list-panel__list-item">
      <a href="/index" class="nhsuk-c-list-panel__list-item-link">Dental pain</a>
    </li>
  </ul>
  <div class="nhsuk-c-back-to-top">
    <a class="nhsuk-c-back-to-top__link" href="#nhsuk-c-a-z-nav">
      <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
      </svg>
      Back to top
    </a>
  </div>
</div>
```

## Nunjucks macro

```html
{% from 'components/list-panel/macro.njk' import listPanel %}

{{ listPanel({
  label: "A",
  id: "A",
  items: [
    {
      URL: "/index",
      link: "AAA"
    },
    {
      URL: "/index",
      link: "Abdominal aortic aneurysm"
    },
    {
      URL: "/index",
      link: "Abscess"
    }
  ]
}) }}

{{ listPanel({
  label: "B",
  id: "B",
  disable: "true",
  message: "There are currently no medicines listed"
}) }}

{{ listPanel({
  label: "C",
  id: "C",
  items: [
    {
      URL: "/index",
      link: "Chest pain"
    },
    {
      URL: "/index",
      link: "Cold sore"
    }
  ]
}) }}

{{ listPanel({
  label: "D",
  id: "D",
  items: [
    {
      URL: "/index",
      link: "Dandruff"
    },
    {
      URL: "/index",
      link: "Dementia"
    },
    {
      URL: "/index",
      link: "Dental pain"
    }
  ]
}) }}
```
