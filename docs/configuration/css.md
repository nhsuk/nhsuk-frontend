# Import CSS

To import the CSS from NHS.UK frontend, you can either:

- add NHS.UK frontend's CSS file to your HTML
- import the CSS into your own Sass file

## Add the CSS file to your HTML

If you decide to add the CSS to your HTML, you can do one of the following:

- set up your routing so requests for the CSS file are served from `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css`
- copy the `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css` file into your application

Then link the CSS file inside the `<head>` tag of your HTML page or page template.

```html
<head>
  <!-- // ... -->
  <link rel="stylesheet" href="/stylesheets/nhsuk-frontend.min.css">
  <!-- // ... -->
</head>
```

If you're using [express.js](https://expressjs.com/), request routing could be set up as follows:

```js
router.use(
  '/stylesheets',
  express.static('node_modules/nhsuk-frontend/dist/nhsuk')
)
```

## Load using your own Sass file

To load all the Sass rules from NHS.UK frontend, add the following to your Sass file:

```scss
@use "nhsuk-frontend/dist/nhsuk" as *;
@forward "nhsuk-frontend/dist/nhsuk";
```

Alternatively you can use NHS.UK frontend styles with a custom configuration:

```scss
@use "nhsuk-frontend/dist/nhsuk" as * with (
  $nhsuk-include-font-face: false
);

@forward "nhsuk-frontend/dist/nhsuk";
```

You must add `node_modules` to Sass load paths, by either:

- calling the Sass compiler from the command line with the `--load-path node_modules` flag
- using the JavaScript API with `loadPaths: ['node_modules']` in the `options` object

For more details, view guidance on [simplifying Sass load paths](#simplify-sass-load-paths).

## Import specific parts using Sass

If you want to improve how quickly your service's pages load in browsers, you can import only the Sass rules you need.

```scss
// Core (required)
@use "nhsuk-frontend/dist/nhsuk/core" as *;
@forward "nhsuk-frontend/dist/nhsuk/core";

// Individual component (optional)
@forward "nhsuk-frontend/dist/nhsuk/components/action-link";
```

## Simplify Sass load paths

If you want to make Sass load paths shorter, add `node_modules/nhsuk-frontend/dist` to your [Sass load paths](https://sass-lang.com/documentation/at-rules/import#finding-the-file).

You can then load stylesheets without using `node_modules/nhsuk-frontend/dist/` in your paths:

```scss
@use "nhsuk" as *;
@forward "nhsuk";
```

For example, using the Sass compiler:

```js
compile('src/stylesheets/application.scss', {
  loadPaths: [
    'node_modules/nhsuk-frontend/dist',
    'node_modules'
  ],
  quietDeps: true
})
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Import CSS](https://frontend.design-system.service.gov.uk/import-css/) with a few minor adaptations.
