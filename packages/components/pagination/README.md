# Pagination

Find out more about the pagination component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the pagination component]()

## HTML markup

```html
<nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
  <a href="/section/treatments" class="nhsuk-c-pagination-prev">
    <span class="nhsuk-c-pagination-link">Previous</span>
    <span class="nhsuk-c-pagination-title">Treatments</span>
    <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
    </svg>
  </a>
  <a href="/section/symptoms" class="nhsuk-c-pagination-next">
    <span class="nhsuk-c-pagination-link">Next</span>
    <span class="nhsuk-c-pagination-title">Symptoms</span>
    <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
    </svg>
  </a>
</nav>
```

## Nunjucks macro

```html
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "previousUrl": "/section/treatments",
  "previousTitle": "Treatments",
  "nextUrl": "/section/symptoms",
  "nextTitle": "Symptoms"
}) }}
```

### Next navigation

## HTML markup

```html
<nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
  <a href="/section/symptoms" class="nhsuk-c-pagination-next">
    <span class="nhsuk-c-pagination-link">Next</span>
    <span class="nhsuk-c-pagination-title">Symptoms</span>
    <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
    </svg>
  </a>
</nav>
```

## Nunjucks macro

```html
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "nextUrl": "/section/symptoms",
  "nextTitle": "Symptoms"
}) }}
```

### Previous navigation

## HTML markup

```html
<nav class="nhsuk-c-pagination" role="navigation" aria-label="Pagination">
  <a href="/section/treatments" class="nhsuk-c-pagination-prev">
    <span class="nhsuk-c-pagination-link">Previous</span>
    <span class="nhsuk-c-pagination-title">Treatments</span>
    <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
    </svg>
  </a>
</nav>
```

## Nunjucks macro

```
{% from 'components/pagination/macro.njk' import pagination %}

{{ pagination({
  "nextUrl": "/section/symptoms",
  "nextTitle": "Symptoms"
}) }}
```
