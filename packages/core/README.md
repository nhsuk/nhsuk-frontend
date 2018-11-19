# Core

Core contains all the building blocks (page layout and the responsive grid) and fundamental styles (such as colours and typography) needed for NHS websites and services. These styles are required for all of the components to work.

Core also is the home of powerful `sass` features such as variables, mixins, functions and maps.

Find out more about the core styles and patterns in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Breakpoints

```
mobile: 320px,
tablet: 641px,
desktop: 769px,
large-desktop: 990px
```

## Page layout

```html
<div class="nhsuk-width-container">
  <main id="maincontent" class="nhsuk-main-wrapper">
    <!-- Grid items -->
  </main>
</div>
```

## Grid items

### Full width

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-full">
    <!-- Component -->
  </div>
</div>
```

### Three-quarters

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-three-quarters">
    <!-- Component -->
  </div>
</div>
```

### One-half

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <!-- Component -->
  </div>
</div>
```

### Two-thirds

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <!-- Component -->
  </div>
</div>
```

### One-third

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-third">
    <!-- Component -->
  </div>
</div>
```

### One-quarter

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-quarter">
    <!-- Component -->
  </div>
</div>
```

### Nested grid items

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <!-- Component -->
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-half">
        <!-- Component -->
      </div>
      <div class="nhsuk-grid-column-one-half">
        <!-- Component -->
      </div>
    </div>

  </div>
</div>
```

## Variables

### Colours

You can find the full list of colour variables and their use in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/) or in the [sass-docs]().

#### Primary

```scss
$colour_nhsuk-blue: #005EB8;
$colour_nhsuk-white: #FFFFFF;
$colour_nhsuk-black: #212B32;
$colour_nhsuk-green: #007F3B;
$colour_nhsuk-red: #DA291C;
$colour_nhsuk-yellow: #ffeb3b;
$colour_nhsuk-purple: #330072;
```

#### Secondary

```scss
$colour_nhsuk-pale-yellow: #FFF9C4;
$colour_nhsuk-warm-yellow: #FFB81C;
$colour_nhsuk-aqua-green: #00A499;
```

## Utilities

### Clearfix 

```html
<div class="nhsuk-u-clear"></div>
```

### Bold font weight

```html
<p class="nhsuk-u-font-weight-bold"></p>
```

### Normal font weight

```html
<p class="nhsuk-u-font-weight-normal"></p>
```

### Reading width

```html
<div class="nhsuk-u-reading-width">
  <!-- Component -->
</div
```

### Remove top and bottom margins

```html
<h1 class="nhsuk-u-top-and-bottom"></h1>
```

### Prevent text wrapping 

```html
<a class="nhsuk-u-nowrap"></a>
```

### Visually hidden

```html
<span class="nhsuk-u-visually-hidden"></span>
```
