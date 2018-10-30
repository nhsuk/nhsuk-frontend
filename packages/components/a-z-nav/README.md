# A-Z nav

Find out more about the A-Z nav component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the A-Z nav component]()

## HTML markup

```html
<nav id="nhsuk-c-a-z-nav" class="nhsuk-c-a-z-nav " role="navigation" aria-label="A-Z Navigation">
  <ul class="nhsuk-c-a-z-nav__list">
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#A" class="nhsuk-c-a-z-nav__list-item-link">A</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <p class="nhsuk-c-a-z-nav__list-item-link--disabled">B</p>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#C" class="nhsuk-c-a-z-nav__list-item-link">C</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#D" class="nhsuk-c-a-z-nav__list-item-link">D</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#E" class="nhsuk-c-a-z-nav__list-item-link">E</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#F" class="nhsuk-c-a-z-nav__list-item-link">F</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#G" class="nhsuk-c-a-z-nav__list-item-link">G</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#H" class="nhsuk-c-a-z-nav__list-item-link">H</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#I" class="nhsuk-c-a-z-nav__list-item-link">I</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#J" class="nhsuk-c-a-z-nav__list-item-link">J</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#K" class="nhsuk-c-a-z-nav__list-item-link">K</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#L" class="nhsuk-c-a-z-nav__list-item-link">L</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#M" class="nhsuk-c-a-z-nav__list-item-link">M</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#N" class="nhsuk-c-a-z-nav__list-item-link">N</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#O" class="nhsuk-c-a-z-nav__list-item-link">O</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#P" class="nhsuk-c-a-z-nav__list-item-link">P</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#Q" class="nhsuk-c-a-z-nav__list-item-link">Q</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#R" class="nhsuk-c-a-z-nav__list-item-link">R</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#S" class="nhsuk-c-a-z-nav__list-item-link">S</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#T" class="nhsuk-c-a-z-nav__list-item-link">T</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#U" class="nhsuk-c-a-z-nav__list-item-link">U</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#V" class="nhsuk-c-a-z-nav__list-item-link">V</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#W" class="nhsuk-c-a-z-nav__list-item-link">W</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#X" class="nhsuk-c-a-z-nav__list-item-link">X</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#Y" class="nhsuk-c-a-z-nav__list-item-link">Y</a>
    </li>
    <li class="nhsuk-c-a-z-nav__list-item">
      <a href="#Z" class="nhsuk-c-a-z-nav__list-item-link">Z</a>
    </li>
  </ul>
</nav>
```

## Nunjucks macro

```html
{% from 'components/a-z-nav/macro.njk' import azNav %}

{{ azNav({
  items: [
    {
      label: "A"
    },
    {
      label: "B"
    },
    {
      label: "C"
    },
    {
      label: "D"
    },
    {
      label: "E"
    },
    {
      label: "F"
    },
    {
      label: "G"
    },
    {
      label: "H"
    },
    {
      label: "I"
    },
    {
      label: "J"
    },
    {
      label: "K"
    },
    {
      label: "L"
    },
    {
      label: "M"
    },
    {
      label: "N"
    },
    {
      label: "O"
    },
    {
      label: "P"
    },
    {
      label: "Q"
    },
    {
      label: "R"
    },
    {
      label: "S"
    },
    {
      label: "T"
    },
    {
      label: "U"
    },
    {
      label: "V"
    },
    {
      label: "W"
    },
    {
      label: "X"
    },
    {
      label: "Y"
    },
    {
      label: "Z"
    }
  ]
}) }}
```
