# Installing using npm

## Requirements

To use NHS.UK frontend in your projects with npm you must:

1. Have [Node.js](https://nodejs.org/en/) installed. We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, which also includes [npm](https://www.npmjs.com/).

2. Have a [package.json file](https://docs.npmjs.com/files/package.json) within your project. You can create a default `package.json` file by running `npm init -y` from the root of your project.

3. Have a pipeline set up to compile [Sass](https://sass-lang.com/) files to CSS.

4. (Optional) If you want to use our [Nunjucks](https://mozilla.github.io/nunjucks/) macros, you will need to install Nunjucks. [Nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro) allows you to define reusable chunks of content. It is similar to a function in a programming language.

   ```sh
   npm install nunjucks --save
   ```

## Installation

Install the NHS.UK frontend package into your project:

```sh
npm install nhsuk-frontend --save
```

## Configuration

You will need to import a couple of things into your project before you can start using NHS.UK frontend:

- [Importing styles](#importing-styles)
- [Importing JavaScript](#importing-javascript)
- [Importing assets (optional)](#importing-assets-optional)

## Importing styles

To build the stylesheet you will need a pipeline set up to compile [Sass](https://sass-lang.com/) files to CSS. We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass) however you can use any tools that you are familiar with.

You must add the root of your application to Sass load paths, by either:

- calling the Sass compiler from the command line with the `--load-path .` flag
- using the JavaScript API with `loadPaths: ['.']` in the `options` object

Then load the NHS.UK frontend styles by adding the following to your Sass file. You should place the below code before your own Sass rules (or Sass `@forward`).

```scss
@forward "node_modules/nhsuk-frontend/packages/nhsuk";
```

Alternatively you can use NHS.UK frontend styles with a custom configuration:

```scss
@forward "node_modules/nhsuk-frontend/packages/nhsuk" with (
  $nhsuk-include-font-face: false
);
```

Or to use only the minimum components necessary:

```scss
// Core (required)
@forward "node_modules/nhsuk-frontend/packages/core";

// Individual component (optional)
@forward "node_modules/nhsuk-frontend/packages/components/action-link/action-link";
```

## Importing JavaScript

Some of our components require JavaScript to function properly, others need JavaScript to improve the usability and accessibility.

You should include NHS.UK frontend JavaScript in your project to ensure that all users can use it successfully.

Add the following JavaScript to the top of the `<body>` section of your page template:

```js
document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
```

### Option 1: Include compiled JavaScript

Include the `node_modules/nhsuk-frontend/dist/nhsuk.min.js` script in the `<head>` of your page using the `defer` attribute.

> The defer attribute is used for performance benefits as the browser loads the JavaScript file as soon as possible, due to it being in the `<head>`, but will not run until after the page has loaded.

You might wish to copy the file into your project or reference it straight from node_modules.

```html
    <script src="path-to-assets/nhsuk.min.js" defer></script>
  </head>
```

```html
    <script src="node_modules/nhsuk-frontend/dist/nhsuk.min.js" defer></script>
  </head>
```

### Option 2: Import JavaScript using a bundler

We encourage the use of ECMAScript (ES) modules, but you should check your bundler does not unnecessarily downgrade modern JavaScript for unsupported browsers.

If you decide to import using a bundler like [Rollup](https://rollupjs.org/) or [webpack](https://webpack.js.org/), import and run the `initAll` function to initialise NHS.UK frontend:

```js
import { initAll } from 'nhsuk-frontend'
initAll()
```

#### Initialise individual components

Rather than using `initAll`, you can initialise individual components used by your service. For example:

```js
import initRadios from 'nhsuk-frontend/packages/components/radios/radios.js';
import initSkipLink from 'nhsuk-frontend/packages/components/skip-link/skip-link.js';

// Polyfills
import 'nhsuk-frontend/packages/polyfills.js';

// Initialise components
document.addEventListener('DOMContentLoaded', () => {
  initRadios();
  initSkipLink();
});
```

## Importing assets (optional)

If you want to import assets such as the NHS logo, favicons and SVG icons, you might wish to copy the files into your project folders from the `node_modules/nhsuk-frontend/assets/` directory or you can reference them straight from the `node_modules` folder.

```html
<link rel="shortcut icon" href="path-to-assets/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="path-to-assets/apple-touch-icon-180x180.png">
<link rel="mask-icon" href="path-to-assets/favicon.svg" color="#005eb8">
<link rel="icon" sizes="192x192" href="path-to-assets/favicon-192x192.png">
<meta name="msapplication-TileImage" content="path-to-assets/mediumtile-144x144.png">
<meta name="msapplication-TileColor" content="#005eb8">
<meta name="msapplication-square70x70logo" content="path-to-assets/smalltile-70x70.png">
<meta name="msapplication-square150x150logo" content="path-to-assets/mediumtile-150x150.png">
<meta name="msapplication-wide310x150logo" content="path-to-assets/widetile-310x150.png">
<meta name="msapplication-square310x310logo" content="path-to-assets/largetile-310x310.png">
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Installing GOV.UK Frontend with node package manager (NPM)](https://github.com/alphagov/govuk-frontend/blob/v2.13.0/docs/installation/installing-with-npm.md) with a few minor adaptations.
