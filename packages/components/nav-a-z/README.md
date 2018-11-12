# Nav A-Z

Find out more about the nav A-Z component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/186).

## Quick start examples

### Nav A-Z

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/nav-a-z.html)

### HTML markup

```html
<nav id="nhsuk-nav-a-z" class="nhsuk-nav-a-z " role="navigation" aria-label="A-Z Navigation">
  <ul class="nhsuk-nav-a-z__list">
    <li class="nhsuk-nav-a-z__item">
      <a href="#A" class="nhsuk-nav-a-z__link">A</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <p class="nhsuk-nav-a-z__link--disabled">B</p>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#C" class="nhsuk-nav-a-z__link">C</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#D" class="nhsuk-nav-a-z__link">D</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#E" class="nhsuk-nav-a-z__link">E</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#F" class="nhsuk-nav-a-z__link">F</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#G" class="nhsuk-nav-a-z__link">G</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#H" class="nhsuk-nav-a-z__link">H</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#I" class="nhsuk-nav-a-z__link">I</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#J" class="nhsuk-nav-a-z__link">J</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#K" class="nhsuk-nav-a-z__link">K</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#L" class="nhsuk-nav-a-z__link">L</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#M" class="nhsuk-nav-a-z__link">M</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#N" class="nhsuk-nav-a-z__link">N</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#O" class="nhsuk-nav-a-z__link">O</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#P" class="nhsuk-nav-a-z__link">P</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#Q" class="nhsuk-nav-a-z__link">Q</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#R" class="nhsuk-nav-a-z__link">R</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#S" class="nhsuk-nav-a-z__link">S</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#T" class="nhsuk-nav-a-z__link">T</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#U" class="nhsuk-nav-a-z__link">U</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#V" class="nhsuk-nav-a-z__link">V</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#W" class="nhsuk-nav-a-z__link">W</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#X" class="nhsuk-nav-a-z__link">X</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#Y" class="nhsuk-nav-a-z__link">Y</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a href="#Z" class="nhsuk-nav-a-z__link">Z</a>
    </li>
  </ul>
</nav>
```

### Nunjucks macro

```html
{% from 'components/nav-a-z/macro.njk' import azNav %}

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
