# Do & don't list

## Introduction

The do & don't list component helps users see what they should and shouldn't do in certain situations.

## Guidance

Find out when to use the do & don't list component in the [Digital service manual](https://beta.nhs.uk/service-manual/patterns/do-and-dont-lists/).

## Example

[Preview the important do & don't list component]()

#### Markup

    <div class="nhsuk-c-do-dont-list">
      <h3 class="nhsuk-c-do-dont-list__tab-heading">Do</h3>
      <ul class="nhsuk-list nhsuk-list--check">
        <li>
        <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
        </svg>
        cover blisters that are likely to burst with a soft plaster or dressing
        </li>
        <li>
        <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
        </svg>
        wash your hands before touching a burst blister
        </li>
        <li>
        <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
        </svg>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
        </li>
      </ul>
    </div>

    <div class="nhsuk-c-do-dont-list">
      <h3 class="nhsuk-c-do-dont-list__tab-heading">Don't</h3>
      <ul class="nhsuk-list nhsuk-list--cross">
        <li>
        <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="st0" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
          <path class="st0" d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
        </svg>
        don't burst a blister yourself
        </li>
        <li>
        <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="st0" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
          <path class="st0" d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
        </svg>
        don't peel the skin off a burst blister
        </li>
        <li>
        <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="st0" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
          <path class="st0" d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
        </svg>
        don't pick at the edges of the remaining skin
        </li>
        <li>
        <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="st0" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
          <path class="st0" d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
        </svg>
        don't wear the shoes or use the equipment that caused your blister until it heals
        </li>
      </ul>
    </div>


#### Macro

    {% from 'components/do-dont-list/macro.njk' import list %}

    {% set doItems = [
        {
          "item"  : "cover blisters that are likely to burst with a soft plaster or dressing"
        },
        {
          "item"  : "wash your hands before touching a burst blister"
        },
        {
          "item"  : "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
        }
      ]
    %}

    {{ list("Do", "tick", doItems) }}

    {% set dontItems = [
        {
          "item"  : "burst a blister yourself"
        },
        {
          "item"  : "peel the skin off a burst blister"
        },
        {
          "item"  : "pick at the edges of the remaining skin"
        },
        {
          "item"  : "wear the shoes or use the equipment that caused your blister until it heals"
        }
      ]
    %}

    {{ list("Don't", "cross", dontItems) }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
