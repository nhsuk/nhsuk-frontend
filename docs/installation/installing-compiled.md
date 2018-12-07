# Install NHS Frontend using our compiled files

This means that you're using compiled and minified versions of the stylesheet and JavaScript.

So you'll not be able to:

- include CSS selectively for individual components
- build your own styles or components, based on colour variables, typography and spacing mixins
- use the component Nunjucks templates

If you need any of this functionality, you should [install using npm](/docs/installation/installing-with-npm.md).

## Installation

1. Download the compiled files

    [Download the latest CSS, JavaScript and assets from GitHub (zip file)](https://github.com/nhsuk/nhsuk-frontend/releases)

2. Include resources  

    Copy all 3 folders, `css`, `js` and `assets`, into the root of your project. If you already have a folder structure
    in place, you'll need to copy the individual files into the relevant folders.

    Make sure you change the version numbers of the `[latest version].min.css` and `[latest version].min.js` files,
    in the example below, to the version you're using.

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-[latest version].min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-[latest version].min.js" defer></script>
    <script src="js/jquery-3.3.1.min.js"></script>

    <!-- Favicons -->
    <!--[if IE]><link rel="shortcut icon" href="assets/favicons/favicon.ico"><![endif]-->
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png">
    <link rel="icon" href="assets/favicons/favicon.png">
    ```

  3. Create pages using NHS.UK Frontend

     You can now create pages using the NHS.UK Frontend [grid](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core/README.md#page-layout) and [components](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components).

### HTML template

```html
<!DOCTYPE html>
<!--[if lt IE 9]><html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9" lang="en"><![endif]-->
<!--[if gt IE 9]><!--><html lang="en"><!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">

    <title>NHS.UK example</title>

    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-[latest version].min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-[latest version].min.js" defer></script>
    <script src="js/jquery-3.3.1.min.js"></script>

    <!-- Favicons -->
    <!--[if IE]><link rel="shortcut icon" href="assets/favicons/favicon.ico"><![endif]-->
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png">
    <link rel="icon" href="assets/favicons/favicon.png">
  </head>

  <body>
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
  </body>
</html>
```
