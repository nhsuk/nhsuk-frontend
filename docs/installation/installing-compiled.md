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

    Copy the files into folders, such as `styles` and `scripts`, within your project. 
    You must copy the entire `assets` folder to the root of your project.
    Then import the files into the `<head>` of your layout file using the `<link>` and `<script>` tags. 

    Make sure you change the version numbers of the `.css` and `.js` files, in the example below, to the version you are using.

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="styles/nhsuk-0.0.0.min.css">

    <!-- Scripts -->
    <script src="scripts/nhsuk-0.0.0.min.js" defer></script>
    <script src="scripts/jquery-3.3.1.min.js"></script>

    <!-- Favicons -->
    <!--[if IE]><link rel="shortcut icon" href="assets/favicons/favicon.ico"><![endif]-->
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon.png">
    <link rel="icon" href="assets/favicons/favicon.png">
    ```

### Hotlinking to https://assets.nhs.uk

**This is still in development and will be available soon.**

For prototyping we deploy the compiled CSS, JavaScript and assets to https://assets.nhs.uk so that they can be hotlinked to. 
This is useful if you don't have a development environment set up or you want to use a Cloud IDE such as Codepen to quickly put something together.

> Please do not hotlink to https://assets.nhs.uk or use jQuery CDN in production, as we can not guarantee the performance or uptime of these services.

### Example

```html
<!-- Styles -->
<link rel="stylesheet" href="https://assets.nhs.uk/nhsuk-frontend/nhsuk-0.0.0.min.css">

<!-- Scripts -->
<script src="https://assets.nhs.uk/nhsuk-frontend/nhsuk-0.0.0.min.js" defer></script>
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>

<!-- Favicons -->
<!--[if IE]><link rel="shortcut icon" href="https://assets.nhs.uk/nhsuk-frontend/assets/favicons/favicon.ico"><![endif]-->
<link rel="apple-touch-icon" href="https://assets.nhs.uk/nhsuk-frontend/assets/favicons/apple-touch-icon.png">
<link rel="icon" href="https://assets.nhs.uk/nhsuk-frontend/assets/favicons/favicon.png">
```

### Codepen

[View NHS.UK Frontend templates on Codepen]()
