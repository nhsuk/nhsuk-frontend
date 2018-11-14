# Installing using compiled files

When installing NHS.UK Frontend using compiled files, you are using compiled and minified versions of the stylesheet and JavaScript. 

This means that you will not be able to:

- selectively include CSS for individual components.
- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.

## Installation

1. Download the compiled files

    [Download the latest CSS, JavaScript and assets from GitHub](https://github.com/nhsuk/nhsuk-frontend/releases)

2. Include resources  

    Copy the files into folders, such as `css` and `js`, within your project. 
    You must copy the entire `assets` folder to the root of your project.
    Then import the files into the `<head>` of your layout file using the `<link>` and `<script>` tags. 

    Make sure you change the version numbers of the `.css` and `.js` files, in the example below, to the version you are using.

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-0.0.0.min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-0.0.0.min.js" defer></script>
    <script src="js/jquery-3.3.1.min.js"></script>

    <!-- Favicons -->
    <!--[if IE]><link rel="shortcut icon" href="assets/favicons/favicon.ico"><![endif]-->
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png">
    <link rel="icon" href="assets/favicons/favicon.png">
    ```
