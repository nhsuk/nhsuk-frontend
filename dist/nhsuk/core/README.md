# Core

Core contains all the building blocks (page layout and the responsive grid) and fundamental styles (such as colours and typography) needed for NHS websites and services. These styles are required for all of the components to work.

Core also is the home of powerful `sass` features such as variables, mixins, functions and maps.

## Page layout

### Fixed-width container

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <!-- Grid items -->
  </main>
</div>
```

### Fluid-width container

```html
<div class="nhsuk-width-container-fluid">
  <main class="nhsuk-main-wrapper" id="maincontent">
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

### Example page layout

```html
<!-- Header -->
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-three-quarters">
        <!-- Components -->
      </div>
    </div>
  </main>
</div>
<!-- Footer -->
```

## Utilities

### Clearfix

Automatically clear an elements child elements.

```html
<div class="nhsuk-u-clear"></div>
```

### Bold font weight

```html
<p class="nhsuk-u-font-weight-bold"></p>
```

### Grid overrides

By default all grid elements will go to 100% width on screen sizes below tablet. These utilities can force
custom widths on all screen sizes.

```
nhsuk-u-[grid-size]
```

```html
<div class="nhsuk-grid-column-one-half nhsuk-u-one-half"></div>
```

### Normal font weight

```html
<p class="nhsuk-u-font-weight-normal"></p>
```

### Secondary text colour

```html
<p class="nhsuk-u-secondary-text-colour"></p>
```

### Reading width

Add a maximum width to large pieces of content, to improve readability.

```html
<div class="nhsuk-u-reading-width">
  <!-- Component -->
</div
```

### Spacing overrides

```html
class="nhsuk-u-margin-[direction]-[spacing]"
```

#### Remove bottom margin

```html
<h1 class="nhsuk-u-margin-bottom-0"></h1>
```

#### Remove all margins

```html
<h1 class="nhsuk-u-margin-0"></h1>
```

#### Custom margins

```html
<h1 class="nhsuk-u-margin-top-1"></h1>
```

### Prevent text wrapping

Prevent long anchor links from line breaking on smaller screens.

```html
<a class="nhsuk-u-nowrap"></a>
```

### Visually hidden

Hide elements visually but keep it in the DOM, useful for screen readers.

```html
<span class="nhsuk-u-visually-hidden"></span>
```

## Typography

### Lede text

```html
<h1>Live Well</h1>
<p class="nhsuk-lede-text">Advice, tips and tools to help you make the best choices about your health and wellbeing.</p>
```

### Font

The default `@font-face`, "Frutiger", is loaded from `https://assets.nhs.uk`. The host for the fonts can be
overridden or disabled entirely.

To use the font you must have a licence. NHS England has a licence for the Frutiger webfont which all NHS organisations in England can use. [NHS organisations can register here](https://service-manual.nhs.uk/design-system/styles/use-frutiger-font/)

- `$nhsuk-fonts-path`: base URL to load fonts from (e.g. `/fonts/`; trailing slash required)
- `$nhsuk-include-font-face`: set to false to disable the inclusion of the `@font-face` definition entirely

## Colours

Use the `nhsuk-colour()` function to reference a colour in your application:

```scss
.nhsuk-example {
  color: nhsuk-colour("blue");
}
```

See the full list in [\_colours-palette.scss](./settings/_colours-palette.scss).

## Breakpoints

```
mobile: 320px
tablet: 641px
desktop: 769px
large-desktop: 990px
```

### Media queries (using [sass-mq](https://github.com/sass-mq/sass-mq))

`mq()` is a Sass mixin that helps you compose media queries in an elegant way.

`mq()` takes up to three optional parameters:

- `$from`: inclusive `min-width` boundary
- `$until`: exclusive `max-width` boundary
- `$and`: additional custom directives

```scss
.nhsuk-example {
  // Apply styling to mobile and upwards
  @include nhsuk-media-query($from: mobile) {
    color: nhsuk-colour("red");
  }
  // Apply styling up to devices smaller than tablets (exclude tablets)
  @include nhsuk-media-query($until: tablet) {
    color: nhsuk-colour("blue");
  }
  // Same thing, in landscape orientation
  @include nhsuk-media-query($until: tablet, $and: '(orientation: landscape)') {
    color: nhsuk-colour("green");
  }
  // Apply styling to print media
  @include nhsuk-media-query($media-type: print) {
    color: nhsuk-colour("orange");
  }
}
```
