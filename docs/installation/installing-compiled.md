# Try NHS.UK frontend using precompiled files

You can install NHS.UK frontend by copying our CSS, JavaScript and asset files into your project. If you install this way, you can try NHS.UK frontend in your application without having to make many changes.

In your live application, you should [Install with Node.js package manager (npm)](./installing-with-npm.md) instead.

## What you cannot do with the precompiled files

You'll not be able to:

- change [Sass settings](https://nhsuk.github.io/nhsuk-frontend/docs/sassdoc/), for example override colours or set your own page width
- use the Nunjucks code from the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system) to add components
- import an individual component's CSS or JavaScript
- use NHS.UK frontend's colours or mixins in your custom code

## Copy and install the precompiled files

1. Download the `nhsuk-frontend-<VERSION-NUMBER>.zip` file at the bottom of the [latest NHS.UK frontend release note](https://github.com/nhsuk/nhsuk-frontend/releases/latest).
2. Unzip the zip file.
3. Copy the `assets` folder to the root of your project's public folder. This is so, for example, `<YOUR-SITE-URL>/assets/images/favicon.ico` shows the `favicon.ico` icon in your users' browsers.
4. Copy the `.css` and `.css.map` files to a stylesheets folder in the root of your project's public folder. This is so, for example, `<YOUR-SITE-URL>/stylesheets/nhsuk-frontend-<VERSION-NUMBER>.min.css` shows the CSS file in your users' browsers.
5. Copy the `.js` and `.js.map` files to a JavaScripts folder in the root of your project's public folder. This is so, for example, `<YOUR-SITE-URL>/javascripts/nhsuk-frontend-<VERSION-NUMBER>.min.js` shows the JavaScript file in your users' browsers.

## Create an example page to check for errors

1. Create a page in your project using the following HTML (in your live application, you should use the [design system page template](https://service-manual.nhs.uk/design-system/styles/page-template) instead):

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Example - NHS.UK</title>
       <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
       <link rel="stylesheet" href="/stylesheets/nhsuk-frontend-<VERSION-NUMBER>.min.css">
     </head>
     <body>
       <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>

       <!-- component HTML -->

       <script type="module" src="/javascripts/nhsuk-frontend-<VERSION-NUMBER>.min.js"></script>
       <script type="module">
         import { initAll } from '/javascripts/nhsuk-frontend-<VERSION-NUMBER>.min.js'
         initAll()
       </script>
     </body>
   </html>
   ```

2. Replace `<VERSION-NUMBER>` so the 2 filenames match the files you copied from [NHS.UK frontend's GitHub repo](#copy-and-install-the-precompiled-files).

3. Go to the [character count component](https://service-manual.nhs.uk/design-system/components/character-count) on the design system and copy the HTML from the first example.

4. Replace `<!-- component HTML -->` with the character count HTML you copied.

5. Run your application and check for errors in the browser console - it should work the same way as the [character count component example](https://service-manual.nhs.uk/design-example/components/character-count/default) by typing into the textarea.

You can now get the full code for page layouts and other components from the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system).

If the character count does not work, you can find out more about how to import NHS.UK frontend's CSS and JavaScript in:

- [Import CSS](../configuration/css.md)
- [Import JavaScript](../configuration/javascript.md)

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Try GOV.UK Frontend using precompiled files](https://frontend.design-system.service.gov.uk/install-using-precompiled-files/) with a few minor adaptations.
