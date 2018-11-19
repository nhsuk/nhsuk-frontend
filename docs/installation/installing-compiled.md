# Installing using compiled files

When installing NHS.UK Frontend using compiled files, you are using compiled and minified versions of the stylesheet and JavaScript. 

This means that you will not be able to:

- selectively include CSS for individual components.
- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.

If you require any of this functionality, you should [install using npm](/docs/installation/installing-with-npm.md) instead.

## Installation

1. Download the compiled files

    [Download the latest CSS, JavaScript and assets from GitHub (zip file)](https://github.com/nhsuk/nhsuk-frontend/releases)

2. Include resources  

    Copy the files into folders, such as `css` and `js`, within your project. 
    You must copy the entire `assets` folder to the root of your project.
    Then import the files into the `<head>` of your layout file using the `<link>` and `<script>` tags. 

    Make sure you change the version numbers of the `[latest version].min.css` and `[latest version].min.js` files, 
    in the example below, to the version you are using.

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
      <main id="maincontent" class="nhsuk-main-wrapper">
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
