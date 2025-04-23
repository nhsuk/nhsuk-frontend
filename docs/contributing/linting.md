# Linting

## Running the lint task

## Linting rules

We use the following rules when linting files:

### Use soft tabs (2 spaces)

### Write each property on its own line

Bad:

```scss
.selector {border: 0; padding: 0;}
```

Good:

```scss
.selector {
  border: 0;
  padding: 0;
}
```

### Use variables for colours not HEX values in selectors rules, unless in variables.

Bad:

```scss
.selector {
  color: #005eb8;
}
```

Good:

```scss
.selector {
  color: $colour_nhsuk-blue;
}
```

### Colours defined as variables should be in lowercase and in full length

Bad:

```scss
$white: #FFF;
```

Good:

```scss
$white: #ffffff;
```

### Use `border: 0` not `none` to denote no border

Bad:

```scss
.selector {
  border: none;
}
```

Good:

```scss
.selector {
  border: 0;
}
```

### Avoid using ID selectors

Bad:

```scss
#content {
  // ...
}
```

Good:

```scss
.nhsuk-wrapper {
  // ...
}
```

### Separate rule, function, and mixin declarations with empty lines

Bad:

```scss
p {
  margin: 0;
  em {
    // ...
  }
}
a {
  // ...
}
```

Good:

```scss
p {
  margin: 0;

  em {
    // ...
  }
}

a {
  // ...
}
```

### Use no more than 3 levels of nesting

Bad:

```scss
.nhsuk-breadcrumb {
  // ...
  &__item {
    // ...
  }
}
```

Good:

```scss
.nhsuk-breadcrumb {
  // ...
}

.nhsuk-breadcrumb__item {
  // ...
}
```

### Don't use extends, use mixins

Bad:

```scss
@extend %contain-floats;
```

Good:

```scss
@include clearfix;
```

### Allow max 3-rule property shorthand if possible

Bad:

```
margin: 1px 2px 3px 2px;
```

Good:

```
margin: 1px 2px 3px;
```

### Files should always have a final newline

### Commas in lists should be followed by a space

### The basenames of `@import`ed SCSS partials should not begin with an underscore and should not include the filename extension

Bad:

```scss
@import "_foo.scss";
@import "_bar/foo.scss";
```

Good:

```scss
@import "foo";
@import "bar/foo";
```

### Properties should be formatted with a single space separating the colon from the property's value

Bad:

```scss
.foo {
  content:"bar";
}
```

Good:

```scss
.foo {
  content: "bar";
}
```

### Operators should be formatted with a single space on both sides of an infix operator. These include `+, -, *, /, %, ==, !=, >, >=, <,` and `<=`

Bad:

```scss
.selector-1 {
  margin: 5px+15px;
}

$foo: 1;
$bar: 3;

.selector-2 {
  margin: $foo+$bar+'px';
}

$foo: 1+1;
$bar: 2-1;

@if $foo==$bar {
  $baz: 1;
}

@if ($foo!=$bar) {
  $baz: 1;
}
```

Good:

```scss
.selector-1 {
  margin: 5px + 15px;
}

$foo: 1;
$bar: 3;

.selector-2 {
  margin: $foo + $bar + 'px';
}

$foo: 1 + 1;
$bar: 2 - 1;

@if $foo == $bar {
  $baz: 1;
}

@if $foo != $bar {
  $baz: 1;
}
```

### Avoid whitespace between parentheses and the arguments

Bad:

```scss
@function foo( $bar, $baz ) {
  @return $bar + $baz;
}
```

Good:

```scss
@function foo($bar, $baz) {
  @return $bar + $baz;
}
```

### Functions, mixins, variables, and placeholders should be declared with all lowercase letters and hyphens instead of underscores

Bad:

```scss
@mixin FONT_STACK() {
  font-family: $nhsuk-font-stack;
}
```

Good:

```scss
@mixin font-stack() {
  font-family: $nhsuk-font-stack;
}
```

### Omit length units on zero values

Bad:

```scss
.selector {
  margin: 0px;
}
```

Good:

```scss
.selector {
  margin: 0;
}
```

### Property values and variable declarations should always end with a semicolon

Bad:

```scss
.selector {
  margin: 0
}

$my-example-var: value
```

Good:

```scss
.selector {
  margin: 0;
}

$my-example-var: value;
```

### Don't write trailing zeros for numeric values with a decimal point

Bad:

```scss
.selector {
  font-size: 0.50em;
}
```

Good:

```scss
.selector {
  font-size: 0.5em;
}
```

### Remove trailing whitespace

More write up on [supported rules](https://stylelint.io/user-guide/rules/list).

---

Next: [Testing](testing.md)
