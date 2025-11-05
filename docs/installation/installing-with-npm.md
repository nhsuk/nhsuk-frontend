# Install with Node.js package manager (npm)

## Requirements

1. [Install Node.js](https://nodejs.org/en/).

   NHS.UK frontend requires Node.js version 20.9.0 or later. Where possible, we recommend you install the latest [Long Term Support (LTS) version](https://nodejs.org/en/download/).

2. `cd` to the root of your project and check if you have a [`package.json` file](https://docs.npmjs.com/files/package.json). If you do not have the file, create it by running:

   ```sh
   npm init
   ```

3. Install [Dart Sass](https://www.npmjs.com/package/sass-embedded) - version 1.77.6 or higher.

You can also [install Nunjucks v3.0.0 or later](https://www.npmjs.com/package/nunjucks) if you want to [use NHS.UK frontend's Nunjucks macros](../configuration/nunjucks.md).

## Install NHS.UK frontend

Run:

```sh
npm install nhsuk-frontend --save
```

When the installation finishes, the `nhsuk-frontend` package and other dependencies will be in your `node_modules` folder.

## Get the CSS, Assets and JavaScript working

Add the HTML for a component to your application. We recommend the character count component as this makes it easier to spot if JavaScript is not working.

Go to the [character count component](https://service-manual.nhs.uk/design-system/components/character-count) on the design system and copy the HTML from the first example.

Paste the HTML into a page or template in your application.

### Get the CSS working

1. Copy the `/node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css` file into your application.

2. Add your CSS file to your page layout if you need to. For example:

   ```html
   <head>
     <!-- // ... -->
     <link rel="stylesheet" href="/stylesheets/nhsuk-frontend.min.css">
     <!-- // ... -->
   </head>
   ```

3. Run your application and check that the character count displays correctly.

The character count message will not update when typing into the textarea until you get the JavaScript working.

There are also different ways you can [load NHS.UK frontend's CSS](../configuration/css.md), including into your project's main Sass file:

```scss
@forward "nhsuk-frontend/dist/nhsuk";
```

### Get the assets working

Copy the favicons, app icons and manifest file into your application from the `node_modules/nhsuk-frontend/dist/nhsuk/assets/` directory:

```html
<link rel="icon" href="/assets/images/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/images/favicon.svg" sizes="any" type="image/svg+xml">
<link rel="mask-icon" href="/assets/images/nhsuk-icon-mask.svg" color="#005eb8">
<link rel="apple-touch-icon" href="/assets/images/nhsuk-icon-180.png">
<link rel="manifest" href="/assets/manifest.json">
```

In your live application, we recommend [using an automated task or your build pipeline](../configuration/assets.md) instead of copying the files manually.

### Get the JavaScript working

1. Add the following to the top of the `<body>` section of your page template:

   ```html
   <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>
   ```

2. Copy the `/node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.js` file into your application.

3. Import the file before the closing `</body>` tag of your page template, then run the `initAll` function to initialise all the components. For example:

```html
    <script type="module" src="/javascripts/nhsuk-frontend.min.js"></script>
    <script type="module">
      import { initAll } from '/javascripts/nhsuk-frontend.min.js'
      initAll()
    </script>
  </body>
```

4. Run your application and check it works the same way as the [character count component example](https://service-manual.nhs.uk/design-example/components/character-count/default) by typing into the textarea.

In your live application, we recommend:

- [using an automated task or your build pipeline](../configuration/assets.md) instead of copying the files manually
- importing only the components your application uses and [using `createAll` to initialise](../configuration/javascript.md#import-individual-components) all their instances on the page

Make sure you import all the components used throughout your application or some components will not work correctly for disabled users who use assistive technologies.

Once your testing is complete you can use the full code for page layouts and other components from the [design system in the NHS digital service manual](https://service-manual.nhs.uk/).

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Install with Node.js package manager (npm)](https://frontend.design-system.service.gov.uk/installing-with-npm/) with a few minor adaptations.
