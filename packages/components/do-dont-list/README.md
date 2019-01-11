# Do and don't list

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/164).

## Guidance 
Find out more about the do and don't list component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/do-and-dont-lists/).

## Quick start examples

### Do and don't list

[Preview the do and don't list component](https://nhsuk.github.io/nhsuk-frontend/components/do-dont-list.html)

### HTML markup

```html
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Do</h3>
  <ul class="nhsuk-list nhsuk-list--tick">
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
      </svg>
      cover blisters that are likely to burst with a soft plaster or dressing
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
      </svg>
      wash your hands before touching a burst blister
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
      </svg>
      allow the fluid in a burst blister to drain before covering it with a plaster or dressing
    </li>
  </ul>
</div>
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Don't</h3>
  <ul class="nhsuk-list nhsuk-list--cross">
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
      </svg>
      do not burst a blister yourself
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
      </svg>
      do not peel the skin off a burst blister
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
      </svg>
      do not pick at the edges of the remaining skin
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
      </svg>
      do not wear the shoes or use the equipment that caused your blister until it heals
    </li>
  </ul>
</div>
```

### Nunjucks macro

```
{% from 'components/do-dont-list/macro.njk' import list %}

{{ list({
  "title": "Do",
  "type": "tick",
  "items": [
    {
      "item": "cover blisters that are likely to burst with a soft plaster or dressing"
    },
    {
      "item": "wash your hands before touching a burst blister"
    },
    {
      "item": "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
    }
  ]
}) }}

{{ list({
  "title": "Don't",
  "type": "cross",
  "items": [
    {
      "item": "burst a blister yourself"
    },
    {
      "item": "peel the skin off a burst blister"
    },
    {
      "item": "pick at the edges of the remaining skin"
    },
    {
      "item": "wear the shoes or use the equipment that caused your blister until it heals"
    }
  ]
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name              | Type     | Required  | Description |
| ------------------|----------|-----------|-------------|
| **title**         | string   | Yes       | Title to be displayed on the do and don't list component. |
| **type**          | string   | Yes       | Type of do and don't list component, "cross", "tick" |
| **items**         | array    | Yes       | Items to be displayed within the do and don't list component |
| **headingLevel**  | integer  | No        | Optional heading level for the title heading. Default: 3 |
| **classes**       | string   | No        | Optional additional classes to add to the do and don't list container. Separate each class with a space. |
| **attributes**    | object   | No        | Any extra HTML attributes (for example data attributes) to add to the do and don't list container. |
